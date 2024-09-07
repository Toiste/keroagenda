import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/db"

import authConfig from "@/services/auth/auth.config"

export const { handlers: { GET, POST },
 auth,
} = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {strategy: 'jwt'},
  ...authConfig,
})