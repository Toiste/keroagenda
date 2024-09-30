import Stripe from 'stripe'

import { config } from '@/config'
import SchedulingUserStripe from '@/models/userStripe'

export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2024-06-20',
  httpClient: Stripe.createFetchHttpClient(),
})

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({ email })
  return customers.data[0]
}

export const createStripeCustomer = async (input: {
  name?: string
  email: string
}) => {
  const customer = await getStripeCustomerByEmail(input.email)
  if (customer) return customer

  const createdCustomer = await stripe.customers.create({
    email: input.email,
    name: input.name,
  })

  const createdCustomerSubscription = await stripe.subscriptions.create({
    customer: createdCustomer.id,
    items: [{ price: config.stripe.plans.free.priceId }],
  })

  const userStripe = await SchedulingUserStripe.findOne({email: input.email})

  if (!userStripe) {
    throw new Error('Usuário não encontrado');
  }

  userStripe.stripeCustomerId = createdCustomer.id;
  userStripe.stripeSubscriptionId = createdCustomerSubscription.id;
  userStripe.stripeSubscriptionStatus = createdCustomerSubscription.status;
  userStripe.stripePriceId = config.stripe.plans.free.priceId;

  await userStripe.save();

  return createdCustomer
}

export const createCheckoutSession = async (
  userId: string,
  userEmail: string,
  userStripeSubscriptionId: string,
) => {
  try {
    const customer = await createStripeCustomer({
      email: userEmail,
    })

    const subscription = await stripe.subscriptionItems.list({
      subscription: userStripeSubscriptionId,
      limit: 1,
    })

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: 'http://localhost:3000/app/settings/billing',
      flow_data: {
        type: 'subscription_update_confirm',
        after_completion: {
          type: 'redirect',
          redirect: {
            return_url:
              'http://localhost:3000/app/settings/billing?success=true',
          },
        },
        subscription_update_confirm: {
          subscription: userStripeSubscriptionId,
          items: [
            {
              id: subscription.data[0].id,
              price: config.stripe.plans.pro.priceId,
              quantity: 1,
            },
          ],
        },
      },
    })

    return {
      url: session.url,
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error to create checkout session')
  }
}

export const handleProcessWebhookUpdatedSubscription = async (event: {
  object: Stripe.Subscription
}) => {
  const stripeCustomerId = event.object.customer as string
  const stripeSubscriptionId = event.object.id as string
  const stripeSubscriptionStatus = event.object.status
  const stripePriceId = event.object.items.data[0].price.id

  const userExists = await SchedulingUserStripe.findOne({stripeCustomerId: stripeCustomerId})
  if (!userExists) {
    throw new Error('Usuário não encontrado');
  }

  if (!userExists) {
    throw new Error('user of stripeCustomerId not found')
  }

  userExists.stripeCustomerId = stripeCustomerId;
  userExists.stripeSubscriptionId = stripeSubscriptionId;
  userExists.stripeSubscriptionStatus = stripeSubscriptionStatus;
  userExists.stripePriceId = stripePriceId;

  await userExists.save();
}

type Plan = {
  priceId: string
  quota: {
    TASKS: number
  }
}

type Plans = {
  [key: string]: Plan
}

export const getPlanByPrice = (priceId: string) => {
  const plans: Plans = config.stripe.plans

  const planKey = Object.keys(plans).find(
    (key) => plans[key].priceId === priceId,
  ) as keyof Plans | undefined

  const plan = planKey ? plans[planKey] : null

  if (!plan) {
    throw new Error(`Plan not found for priceId: ${priceId}`)
  }

  return {
    name: planKey,
    quota: plan.quota,
  }
}