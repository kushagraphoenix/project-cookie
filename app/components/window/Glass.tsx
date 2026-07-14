"use client";

export default function Glass() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(rgba(255,255,255,0.03),rgba(255,255,255,0.06))",
        backdropFilter: "blur(1.5px)",
        pointerEvents: "none",
      }}
    />
  );
}