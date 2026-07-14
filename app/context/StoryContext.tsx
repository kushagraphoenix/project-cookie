"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type StoryScene =
  | "intro"
  | "envelope"
  | "password"
  | "unlocking"
  | "opening"
  | "letter"
  | "memories"
  | "reading"
  | "birthday";

interface StoryContextType {
  scene: StoryScene;
  setScene: (scene: StoryScene) => void;

  celebrate: boolean;
  setCelebrate: (value: boolean) => void;
}

const StoryContext = createContext<StoryContextType | null>(null);

export function StoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [scene, setScene] = useState<StoryScene>("intro");

  const [celebrate, setCelebrate] = useState(false);

  return (
    <StoryContext.Provider
      value={{
        scene,
        setScene,
        celebrate,
        setCelebrate,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  const context = useContext(StoryContext);

  if (!context) {
    throw new Error("useStory must be used inside StoryProvider");
  }

  return context;
}