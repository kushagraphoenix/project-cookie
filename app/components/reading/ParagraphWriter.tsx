"use client";

import { useEffect, useState } from "react";
import InkWriter from "./InkWriter";

interface ParagraphWriterProps {
  paragraphs: string[];
  onComplete?: () => void;
  onParagraphComplete?: (index: number) => void;
}

export default function ParagraphWriter({
  paragraphs,
  onComplete,
  onParagraphComplete,
}: ParagraphWriterProps) {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    setVisibleCount(1);
  }, [JSON.stringify(paragraphs)]);

  function handleParagraphComplete() {
    onParagraphComplete?.(visibleCount - 1);

    if (visibleCount >= paragraphs.length) {
      onComplete?.();
      return;
    }

    setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 800);
  }

  return (
    <>
      {paragraphs
        .slice(0, visibleCount)
        .map((paragraph, index) => (
          <div
            key={index}
            style={{
              marginBottom: "36px",
              color: "#4B382F",
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "22px",
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
        <InkWriter
  text={paragraph}
  onComplete={
    index === visibleCount - 1
      ? handleParagraphComplete
      : undefined
  }
/>
          </div>
        ))}
    </>
  );
}