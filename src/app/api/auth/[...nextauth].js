import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import { compare } from 'bcryptjs'; // For password hashing, you can also use any other hashing library.
import { pool } from '../../../path/to/your/postgres-config'; // Import your PostgreSQL connection pool.

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {

        const { email, password } = credentials;

        try {
          // Retrieve the user from the database based on their email.
          const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

          if (result.rowCount === 1) {
            const user = result.rows[0];

            // Compare the provided password with the hashed password stored in the database.
            const passwordsMatch = await compare(password, user.password);

            if (passwordsMatch) {
              // If the passwords match, return the user object.
              return Promise.resolve(user);
            } else {
              // If the passwords do not match, throw an error or return null.
              throw new Error('Invalid password');
            }
          } else {
            // If no user with the provided email is found, throw an error or return null.
            throw new Error('No user found');
          }
        } catch (error) {
          // Handle any other errors that might occur during the authentication process.
          // You might want to throw an error or return null, depending on your use case.
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
});
