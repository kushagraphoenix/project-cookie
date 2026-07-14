"use client";

import { useStory } from "@/app/context/StoryContext";

export function useCamera() {
  const { scene } = useStory();

  const zoom =
    scene === "reading"
      ? 1.08
      : 1;

  const blur =
    scene === "reading"
      ? 4
      : 0;

  return {
    zoom,
    blur,
  };
}