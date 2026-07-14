"use client";

import { motion } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";

export default function Moon() {
  const { celebrate } = useStory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: celebrate ? [1, 1.08, 1.12, 1.08, 1] : [1, 1.02, 1],
        opacity: celebrate ? [0.95, 1, 1, 0.98] : [0.9, 1, 0.95],
      }}
      transition={{
        duration: celebrate ? 8 : 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top: "10%",
        left: "15%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        background:
          "radial-gradient(circle,#fff9d6,#efe6a7,#d8d4aa)",

        boxShadow: celebrate
          ? `
              0 0 80px rgba(255,255,220,.95),
              0 0 180px rgba(255,245,190,.65),
              0 0 300px rgba(255,240,180,.30)
            `
          : `
              0 0 80px rgba(255,255,220,.35)
            `,
      }}
    />
  );
}