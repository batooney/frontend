import NextAuth from "next-auth";
import RedditProvider from "next-auth/providers/reddit";

console.log(process.env.REDDIT_CLIENT_ID);
export default NextAuth({
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
  ],
});
