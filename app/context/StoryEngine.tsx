"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { STORY } from "../constants/story";

interface StoryEngineContextType {
  currentPageIndex: number;
  currentPage: typeof STORY[number];
  nextPage: () => void;
  hasNext: boolean;
}

const StoryEngineContext =
  createContext<StoryEngineContextType | null>(null);

export function StoryEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    setCurrentPageIndex((prev) =>
      Math.min(prev + 1, STORY.length - 1)
    );
  };

  const value = useMemo(
    () => ({
      currentPageIndex,
      currentPage: STORY[currentPageIndex],
      nextPage,
      hasNext: currentPageIndex < STORY.length - 1,
    }),
    [currentPageIndex]
  );

  return (
    <StoryEngineContext.Provider value={value}>
      {children}
    </StoryEngineContext.Provider>
  );
}

export function useStoryEngine() {
  const context = useContext(StoryEngineContext);

  if (!context) {
    throw new Error(
      "useStoryEngine must be used inside StoryEngineProvider"
    );
  }

  return context;
}