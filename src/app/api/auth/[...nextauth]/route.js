import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "78818704358-a7h30jlbgl4p62usca027sot8kccfbdn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
