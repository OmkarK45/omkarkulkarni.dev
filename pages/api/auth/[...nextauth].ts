import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET
    })
  ]
};

export default NextAuth(authOptions);
