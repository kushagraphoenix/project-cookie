"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";

interface Props {
  opened: boolean;
  onOpen: () => void;
}

export default function EnvelopeSeal({
  opened,
  onOpen,
}: Props) {
  const { setScene } = useStory();

  function handleClick() {
    onOpen(); // Play seal animation
    setTimeout(() => {
    setScene("password");
  }, 800);
  }

  return (
    <motion.div
      onClick={handleClick}
      animate={{
        scale: opened ? 0 : [1, 1.05, 1],
        opacity: opened ? 0 : 1,
        y: opened ? -35 : 0,
        rotate: opened ? 15 : 0,
      }}
      transition={{
        duration: opened ? 0.5 : 2.5,
        repeat: opened ? 0 : Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 70,
        height: 70,
        transform: "translate(-50%, -45%)",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      <Image
        src="/assets/envelope/seal.png"
        alt="Wax Seal"
        fill
        draggable={false}
        style={{
          objectFit: "contain",
          userSelect: "none",
        }}
      />
    </motion.div>
  );
}