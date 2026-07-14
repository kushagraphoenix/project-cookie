"use client";

import Image from "next/image";

export default function HeroScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        pointerEvents: "none",
      }}
    >
      <Image
        src="/assets/hero/desk-scene.png"
        alt="Hero Desk"
        width={1600}
        height={900}
        priority
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          userSelect: "none",
        }}
      />
    </div>
  );
}