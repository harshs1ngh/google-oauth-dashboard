"use client";

import { createContext, useState } from "react";

//
export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
