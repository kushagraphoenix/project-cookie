"use client";

import Image from "next/image";

export default function HeroScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/hero/hero-scene.png"
        alt="Hero Scene"
        fill
        priority
        style={{
          objectFit: "cover",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}