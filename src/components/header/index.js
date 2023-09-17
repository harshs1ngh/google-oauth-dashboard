"use client";

import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status]);

  console.log(status);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex flex-grow item-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
        <div className="flex item-center gap-2 sm:gap-4 lg:hidden">
          <button className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase">
            {sideBarOpen ? "Hide Sidebar" : "Show Sideabar"}
          </button>
        </div>
        <button
          onClick={() =>
            status === "authenticated" ? signOut() : signIn("google")
          }
          className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
        >
          {status === "authenticated" ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}
