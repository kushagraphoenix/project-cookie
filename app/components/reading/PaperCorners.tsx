"use client";

export default function PaperCorners() {
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
      <g opacity="0.12">
        {/* Top Left */}
        <circle cx="55" cy="55" r="10" fill="#E9C9CF" />
        <circle cx="43" cy="67" r="7" fill="#F4D8DE" />
        <circle cx="67" cy="67" r="7" fill="#F4D8DE" />
        <circle cx="55" cy="79" r="7" fill="#F8E6EA" />

        {/* Top Right */}
        <circle cx="765" cy="55" r="10" fill="#E9C9CF" />
        <circle cx="753" cy="67" r="7" fill="#F4D8DE" />
        <circle cx="777" cy="67" r="7" fill="#F4D8DE" />
        <circle cx="765" cy="79" r="7" fill="#F8E6EA" />

        {/* Bottom Left */}
        <circle cx="55" cy="995" r="10" fill="#E9C9CF" />
        <circle cx="43" cy="983" r="7" fill="#F4D8DE" />
        <circle cx="67" cy="983" r="7" fill="#F4D8DE" />
        <circle cx="55" cy="971" r="7" fill="#F8E6EA" />

        {/* Bottom Right */}
        <circle cx="765" cy="995" r="10" fill="#E9C9CF" />
        <circle cx="753" cy="983" r="7" fill="#F4D8DE" />
        <circle cx="777" cy="983" r="7" fill="#F4D8DE" />
        <circle cx="765" cy="971" r="7" fill="#F8E6EA" />
      </g>
    </svg>
  );
}