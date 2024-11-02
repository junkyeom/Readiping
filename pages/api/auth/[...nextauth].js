import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liYGG6YIG5ZJNR6t',
      clientSecret: '3ecd059900206bb40d5eb3d4e9b1c3c9cd26bf6b',
    }),
  ],
  secret : 'junkyeom0203'
};
export default NextAuth(authOptions);