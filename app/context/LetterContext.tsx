"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type LetterState =
  | "hidden"
  | "emerging"
  | "waiting"
  | "expanding"
  | "reading";

interface LetterContextType {
  state: LetterState;
  setState: (state: LetterState) => void;
}

const LetterContext = createContext<LetterContextType | null>(null);

export function LetterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] =
    useState<LetterState>("hidden");

  return (
    <LetterContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </LetterContext.Provider>
  );
}

export function useLetter() {
  const context = useContext(LetterContext);

  if (!context) {
    throw new Error(
      "useLetter must be used inside LetterProvider"
    );
  }

  return context;
}