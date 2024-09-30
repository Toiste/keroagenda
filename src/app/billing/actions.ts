"use server"

import { auth } from '@/services/auth/auth'
import { createCheckoutSession } from '@/services/stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutSessionAction() {
  const session = await auth()
  if (!session?.user?.name) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const checkoutSession = await createCheckoutSession(
    session.user.name as string,
    session.user.email as string,
    session.user.email as string
  )


  if (!checkoutSession.url) return
  redirect(checkoutSession.url)
}