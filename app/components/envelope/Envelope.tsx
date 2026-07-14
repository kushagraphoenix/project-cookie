"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useStory } from "@/app/context/StoryContext";

import EnvelopeBody from "./EnvelopeBody";
import EnvelopeFlap from "./EnvelopeFlap";
import EnvelopeSeal from "./EnvelopeSeal";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  const { scene } = useStory();

  const isPassword = scene === "password";
 const hideEnvelope =
    scene==="reading" ||
    scene==="opening";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 180,
        scale: 0.92,
      }}
      animate={{
        opacity: hideEnvelope ? 0 : 1,

        y: hideEnvelope
          ? 40
          : [180, 0, -5, 0],

        scale: hideEnvelope
          ? 0.95
          : isPassword
          ? 1.08
          : 1,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: "50%",
        bottom: "10%",
        transform: "translateX(-50%)",
        width: 420,
        aspectRatio: "1.45",
        zIndex: 5,
      }}
    >
      {/* Moon Glow */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,220,0.12), transparent 75%)",
          filter: "blur(50px)",
          zIndex: -1,
        }}
      />

      {/* Floating Envelope */}
      <motion.div
        animate={{
          y: opened ? 0 : [-2, 2, -2],
          rotate: opened ? 0 : [-0.2, 0.2, -0.2],
        }}
        transition={{
          duration: 5,
          repeat: opened ? 0 : Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <EnvelopeBody />

        <EnvelopeFlap />

        <EnvelopeSeal
          opened={opened}
          onOpen={() => setOpened(true)}
        />
      </motion.div>
    </motion.div>
  );
}