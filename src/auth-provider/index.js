"use client";

import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;

// this will be used in our root component