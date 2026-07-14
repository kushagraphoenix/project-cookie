"use client";

import Image from "next/image";

export default function LetterPaper() {
  return (
    <Image
      src="/assets/letter/paper.svg"
      alt="Letter Paper"
      fill
      priority
      draggable={false}
      style={{
        objectFit: "contain",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
}