"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLetterStory } from "../../context/LetterStoryContext";
import { MEMORIES } from "../../constants/memories";
import MemoryPhoto from "./MemoryPhoto";

interface MemoryLayerProps {
  activeMemory: number | null;
}

export default function MemoryLayer({
  activeMemory,
}: MemoryLayerProps) {
  const { paragraphs, step } = useLetterStory();

  if (activeMemory === null) return null;

  const paragraph = paragraphs[activeMemory];

  if (!paragraph?.photo) return null;

  const memory = MEMORIES[paragraph.photo.id.trim()];

  if (!memory) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${step}-${memory.id}`}
        initial={{
          opacity: 0,
          y: -120,
          rotate: -18,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: memory.rotation,
          scale: memory.scale,
        }}
        exit={{
          opacity: 0,
          y: 80,
          scale: 0.8,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "absolute",
          left: `${memory.x}px`,
          top: `${memory.y}px`,
          zIndex: 12,
          pointerEvents: "none",
        }}
      >
        <MemoryPhoto
          src={memory.src}
          caption={memory.caption}
          rotation={0}
        />
      </motion.div>
    </AnimatePresence>
  );
}