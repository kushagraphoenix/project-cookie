"use client";

import { motion } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";

export default function Clouds() {
  const { celebrate } = useStory();

  return (
    <motion.div
      animate={{
        opacity: celebrate ? 0 : 1,
        x: celebrate ? 220 : 0,
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Cloud 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "10%",
          left: "-15%",
          width: 420,
          height: 120,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(255,255,255,.12), transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* Cloud 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "35%",
          right: "-15%",
          width: 500,
          height: 150,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(255,255,255,.10), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Cloud 3 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "12%",
          left: "15%",
          width: 460,
          height: 130,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)",
          filter: "blur(42px)",
        }}
      />
    </motion.div>
  );
}