"use client";

import styles from "./Reading.module.css";
import ParagraphWriter from "./ParagraphWriter";
import { useMemo } from "react";
import { useLetterStory } from "../../context/LetterStoryContext";

interface ReadingContentProps {
  onComplete: () => void;
  onParagraphComplete: (index: number) => void;
}

export default function ReadingContent({
  onComplete,
  onParagraphComplete,
}: ReadingContentProps) {
  const { title, paragraphs } = useLetterStory();

  const paragraphTexts = useMemo(
    () => paragraphs.map((paragraph) => paragraph.text),
    [paragraphs]
  );

  return (
    <div className={styles.content}>
      <div className={styles.letterLayout}>
        <h1 className={styles.heading}>
          {title}
        </h1>

        <div className={styles.body}>
          <ParagraphWriter
            paragraphs={paragraphTexts}
            onComplete={onComplete}
            onParagraphComplete={onParagraphComplete}
          />
        </div>
      </div>
    </div>
  );
}