"use client";

import styles from "./Reading.module.css";
import { useLetterStory } from "../../context/LetterStoryContext";
import { useStory } from "../../context/StoryContext";

interface ContinueButtonProps {
  visible: boolean;
}

export default function ContinueButton({
  visible,
}: ContinueButtonProps) {
  const { next, hasNext } = useLetterStory();
  const { setScene } = useStory();

  function handleClick() {
    if (hasNext) {
      next();
    } else {
      setScene("birthday");
    }
  }

  return (
    <button
      className={styles.continueButton}
      onClick={handleClick}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(15px)",
        pointerEvents: visible ? "auto" : "none",
        transition:
          "opacity .7s ease, transform .7s ease",
      }}
    >
      {hasNext ? "Continue →" : "✨ One Last Thing..."}
    </button>
  );
}