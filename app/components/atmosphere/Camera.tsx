"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useStory } from "@/app/context/StoryContext";

interface CameraProps {
  children: ReactNode;
}

export default function Camera({ children }: CameraProps) {
  const { scene } = useStory();

  const zoom = scene === "reading" ? 1.08 : 1;

  return (
    <motion.div
      animate={{
        scale: zoom,
      }}
      transition={{
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
}