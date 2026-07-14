"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useStory } from "@/app/context/StoryContext";

export default function Fireflies() {
  const { celebrate } = useStory();

  const particles = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 6,
        size: 2 + Math.random() * 4,
      })),
    []
  );

  if (!celebrate) return null;

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            y: 120,
            opacity: 0,
          }}
         animate={{
  y: -1200,
  opacity: [0, 1, 1, 0],
  x: [0, 20, -20, 10],
}}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: `${p.left}%`,
            bottom: -20,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#FFF7B5",
            boxShadow: "0 0 15px #FFF7B5",
            zIndex: 99999,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}