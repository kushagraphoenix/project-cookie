"use client";

export default function PaperEdge() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 820 1050"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <defs>
        <radialGradient
          id="edge"
          cx="50%"
          cy="50%"
          r="70%"
        >
          <stop
            offset="60%"
            stopColor="transparent"
          />
          <stop
            offset="100%"
            stopColor="#E9DDCB"
          />
        </radialGradient>
      </defs>

      <rect
        width="820"
        height="1050"
        fill="url(#edge)"
        opacity=".45"
      />
    </svg>
  );
}