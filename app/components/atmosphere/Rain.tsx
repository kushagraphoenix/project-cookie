"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";

type Drop = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  height: number;
};

export default function Rain() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const { celebrate } = useStory();

  useEffect(() => {
    const rain = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 0.8 + Math.random() * 0.8,
      height: 12 + Math.random() * 18,
    }));

    setDrops(rain);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: celebrate ? 0 : 1,
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {drops.map((drop) => (
        <div
          key={drop.id}
          style={{
            position: "absolute",
            left: `${drop.left}%`,
            top: "-30px",
            width: "1px",
            height: `${drop.height}px`,
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,.45), transparent)",
            animation: `rain ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        />
      ))}
    </motion.div>
  );
}