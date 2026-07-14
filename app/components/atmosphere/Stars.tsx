"use client";

import { useEffect, useState } from "react";
import { useStory } from "@/app/context/StoryContext";
import { motion } from "framer-motion";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);
  const { celebrate } = useStory();
  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: celebrate
              ? [0.4, 1, 0.5, 1]
              : [0.2, 1, 0.2],

            scale: celebrate
              ? [1, 2, 1.2, 2, 1]
              : [1, 1.5, 1],
          }}
          transition={{
            duration: celebrate
              ? star.duration * 0.6
              : star.duration,

            delay: star.delay,

            repeat: Infinity,

            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "white",
            boxShadow: celebrate
              ? "0 0 18px rgba(255,255,255,1)"
              : "0 0 8px rgba(255,255,255,.8)",
          }}
        />
      ))}
    </>
  );
}