import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import clientPromise from '../../../lib/mongo';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  //adapter: MongoDBAdapter(clientPromise),
})