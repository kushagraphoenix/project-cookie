"use client";

export default function PaperBackground() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 820 1050"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <defs>
        <linearGradient
          id="paperGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="45%" stopColor="#FBF6EE" />
          <stop offset="100%" stopColor="#F6EFE3" />
        </linearGradient>

        <radialGradient
          id="moonGlow"
          cx="0%"
          cy="10%"
          r="80%"
        >
          <stop
            offset="0%"
            stopColor="rgba(255,255,255,.30)"
          />
          <stop
            offset="100%"
            stopColor="transparent"
          />
        </radialGradient>
      </defs>

      <rect
        x="0"
        y="0"
        width="820"
        height="1050"
        rx="28"
        fill="url(#paperGradient)"
      />

      <rect
        x="0"
        y="0"
        width="820"
        height="1050"
        rx="28"
        fill="url(#moonGlow)"
      />
    </svg>
  );
}