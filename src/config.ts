export const config = {
    stripe: {
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      plans: {
        free: {
          priceId: 'price_1PxvHtCPYsywnu3XixtrjraM',
          quota: {
            TASKS: 5,
          },
        },
        pro: {
          priceId: 'price_1PxvIBCPYsywnu3XRwEKvVpe',
          quota: {
            TASKS: 100,
          },
        },
      },
    },
  }