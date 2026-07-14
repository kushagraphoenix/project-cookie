"use client";
import { StoryParagraph } from "../types/story";
import { createContext, useContext, ReactNode } from "react";
import { useStoryEngine } from "./StoryEngine";

interface LetterStoryContextType {
  step: number;
  next: () => void;

  title: string;
paragraphs: StoryParagraph[];

  hasNext: boolean;
}

const LetterStoryContext =
  createContext<LetterStoryContextType | null>(null);

export function LetterStoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    currentPageIndex,
    currentPage,
    nextPage,
    hasNext,
  } = useStoryEngine();

  return (
    <LetterStoryContext.Provider
      value={{
        step: currentPageIndex,

        next: nextPage,

        title: currentPage.title,
        
paragraphs: currentPage.paragraphs,

        hasNext,
      }}
    >
      {children}
    </LetterStoryContext.Provider>
  );
}

export function useLetterStory() {
  const context =
    useContext(LetterStoryContext);

  if (!context) {
    throw new Error(
      "Missing LetterStoryProvider"
    );
  }

  return context;
}