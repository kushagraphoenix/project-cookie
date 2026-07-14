"use client";

import Image from "next/image";

export default function EnvelopeBody() {
  return (
    <Image
      src="/assets/envelope/body.png"
      alt="Envelope Body"
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