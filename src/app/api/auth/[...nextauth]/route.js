import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "78818704358-a7h30jlbgl4p62usca027sot8kccfbdn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectToDb();
          const isUserExists = await User.findOne({ email });

          if (!isUserExists) {
            const res = await fetch("/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
            if (res.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
