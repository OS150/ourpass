import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../models/dbmodel';
import {compare} from 'bcrypt';

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
        email: {label: "Email", type: 'email'},
        password: {label: "Password", type: 'password'}
      },
      async authorize(credentials) {
        try {
          //query database for user 
          const query = "SELECT * FROM users WHERE (email = $1)"
          const result = await db.query(query, [credentials?.email])
          if (result.rowCount === 1 && credentials?.password) {
            const user = result.rows[0];
            const passwordsMatch = await compare(credentials.password, user.password);

            if (passwordsMatch) {
              return user;
            }
            else {
              throw new Error("INVALID PASSWORD");
            }
          } else {
            throw new Error('No user found');
          }
        }
        catch (error) {
          throw new Error('Authentication failed');
        }
      }
      }),
  ],
};