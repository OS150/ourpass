import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email"},
        password: {label: "Password"}
      },
      async authorize(credentials) {
        //Perform database operations
        if (credentials?.email === "admin@example.com" && credentials.password === "admin") {
          return {
            id: "1",
            email: "admin@example.com"
          };
        }
        return null;
      },
    }),
  ],
};