import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";
import GoogleProviders from "next-auth/providers/google";
import FacebookProviders from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../../../../utility/prismaClient";
import { Adapter } from "next-auth/adapters";


const handler =  NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ]
});

export {handler as GET, handler as POST}