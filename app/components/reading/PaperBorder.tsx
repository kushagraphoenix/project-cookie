"use client";

export default function PaperBorder() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 820 1050"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <rect
        x="22"
        y="22"
        width="776"
        height="1006"
        rx="18"
        fill="none"
        stroke="#D9CDBA"
        strokeWidth="2"
      />

      <rect
        x="38"
        y="38"
        width="744"
        height="974"
        rx="14"
        fill="none"
        stroke="#EEE2CF"
        strokeWidth="1"
      />
    </svg>
  );
}