import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/db"

import authConfig from "@/services/auth/auth.config"
import { createStripeCustomer } from "../stripe"

export const { handlers: { GET, POST },
 auth,
} = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {strategy: 'jwt'},
  ...authConfig,
  events: {
    createUser: async (message) => {
      await createStripeCustomer({
        name: message.user.name as string,
        email: message.user.email as string,
      })
    },
  },
})