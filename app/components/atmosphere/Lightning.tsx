"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Lightning() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);

      setTimeout(() => {
        setFlash(false);
      }, 150);

      // Random time until next flash (8–18 seconds)
      const nextFlash = Math.random() * 10000 + 8000;
      timer = window.setTimeout(triggerFlash, nextFlash);
    };

    let timer = window.setTimeout(triggerFlash, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: flash ? 0.25 : 0,
      }}
      transition={{
        duration: 0.15,
      }}
      style={{
        position: "absolute",
        inset: 0,
        background: "#ffffff",
        pointerEvents: "none",
      }}
    />
  );
}