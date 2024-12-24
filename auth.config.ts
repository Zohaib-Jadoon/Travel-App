import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  id: string; // Added id property
  email?: string;
  name?: string;
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here you would add your logic to validate the user credentials
        // For example, check against a database
        const user: User | null = credentials ? { id: '1', email: credentials.email, name: 'User' } : null; // Mock user with id
        return user;
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User; // Cast token.user to User
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl; // Redirect to base URL after sign in
    },
  },
}
