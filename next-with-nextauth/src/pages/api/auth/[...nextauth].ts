import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("https://www.mecallapi.com/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })
        const user = await res.json()
        if (user.status === "ok") {
          return user.user
        }
        return null
      },
    }),
  ],
  secret: "OGVYQ+DD70jsSkKFTJ3tebYcu22UolQB5v0/oio5d6g=",
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.user = user
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      //@ts-ignore
      session.user = token.user
      return session
    },
  },
})
