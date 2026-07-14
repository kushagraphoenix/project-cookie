"use client";

import { motion } from "framer-motion";

export default function Fog() {
  return (
    <>
      {/* Fog Layer 1 */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-20%",
          width: "140%",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Fog Layer 2 */}
      <motion.div
        animate={{
          x: [60, -60, 60],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-10%",
          width: "130%",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(220,230,255,0.06), transparent 70%)",
          filter: "blur(100px)",
        }}
      />
    </>
  );
}
