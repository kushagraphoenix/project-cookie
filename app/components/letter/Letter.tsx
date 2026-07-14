"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { useStory } from "@/app/context/StoryContext";

import LetterPaper from "./LetterPaper";
import LetterContent from "./LetterContent";

import styles from "./Letter.module.css";

export default function Letter() {
  const { scene, setScene } = useStory();

  const [hovered, setHovered] = useState(false);

  const isReading = scene === "reading";

  return (
    <motion.div
      className={styles.letter}
      initial={false}
      animate={{
  opacity:
    scene === "opening" 
      ? 1
      : 0,

  x: "-50%",

  y:
    scene === "opening"
      ? -140
      : isReading
      ? -520
      : 260,

  scale:
    isReading
      ? 1.85
      : hovered
      ? 1.02
      : 1,

  rotate:
    isReading
      ? 0
      : scene === "opening"
      ? -2
      : 0,

  borderRadius: isReading ? 24 : 18,
}}
      transition={{
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1],
}}
      onHoverStart={() => {
        if (scene === "opening") {
          setHovered(true);
        }
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
      onClick={() => {
        if (scene === "opening") {
          setScene("reading");
        }
      }}
      style={{
        position: "absolute",
        left: "50%",
        bottom: "18%",
        width: 340,
        height: 470,
        transform: "translateX(-50%)",
        transformOrigin: "bottom center",
        zIndex: 8,
      }}
    >
      <LetterPaper />
      <LetterContent />
    </motion.div>
  );
}