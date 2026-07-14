"use client";

import { motion } from "framer-motion";
import Stars from "./Stars";
import Fog from "./Fog";
import Lightning from "./Lightning";
import Rain from "./Rain";
import { useStory } from "@/app/context/StoryContext";

export default function Background() {
  const { scene } = useStory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        filter: scene === "password" ? "brightness(0.55)" : "brightness(1)",
      }}
      transition={{
        opacity: { duration: 2 },
        filter: { duration: 0.8 },
      }}
      className="fixed inset-0 -z-50 overflow-hidden"
    >
      {/* Night Sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #243b55 0%, #141e30 45%, #020617 100%)",
        }}
      />

      {/* Moon Glow */}
      <div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
          top: -180,
          right: -120,
        }}
      />

      {/* Atmosphere */}
      <Stars />
      <Fog />
      <Lightning />
      <Rain />
    </motion.div>
  );
}