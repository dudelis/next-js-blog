import NextAuth, { User } from "next-auth";
import GitHubProviders from "next-auth/providers/github";
import GoogleProviders from "next-auth/providers/google";
import FacebookProviders from "next-auth/providers/facebook";
import { JWT } from "next-auth/jwt";

export default NextAuth({
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
  ],
  //   // pages: {
  //   //   signIn: "/auth/signin",
  //   // },
  //   // callbacks: {
  //   //   async jwt(token: JWT, user: User) {
  //   //     if (user) {
  //   //       token.id = user.id;
  //   //     }
  //   //     return token;
  //   //   },
  //   //   async session(session, token) {
  //   //     session.id = token.id;
  //   //     return session;
  //   //   },
  //   // },
});

