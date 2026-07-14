"use client";

export default function PaperTexture() {
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
        opacity: 0.08,
      }}
    >
      <defs>
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="8"
            result="noise"
          />

          <feColorMatrix
            type="saturate"
            values="0"
          />

          <feComponentTransfer>
            <feFuncA
              type="table"
              tableValues="0 0.12"
            />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect
        width="820"
        height="1050"
        filter="url(#paperNoise)"
      />
    </svg>
  );
}