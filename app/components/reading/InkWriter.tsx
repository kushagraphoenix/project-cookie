"use client";

import { useEffect, useState } from "react";

interface InkWriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function InkWriter({
  text,
  speed = 55,
  onComplete,
}: InkWriterProps) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    setVisible("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setVisible(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);

        // fire only once
        onComplete?.();
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };

    // DO NOT add onComplete here
    // otherwise React complains that the dependency array changes
  }, [text, speed]);

  return (
    <span
      style={{
        display: "inline-block",
        whiteSpace: "pre-wrap",
      }}
    >
      {visible}

      {visible.length < text.length && (
        <span className="inkCursor">|</span>
      )}
    </span>
  );
}