"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EnvelopeFlap() {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        transformOrigin: "top center",
        zIndex: 5,
      }}
    >
      <Image
        src="/assets/envelope/flap.png"
        alt="Envelope Flap"
        fill
        draggable={false}
        style={{
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}