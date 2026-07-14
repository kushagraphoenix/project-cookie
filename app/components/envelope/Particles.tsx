"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, left: 60, bottom: 40, duration: 2.8, delay: 0 },
  { id: 2, left: 95, bottom: 90, duration: 3.2, delay: .5 },
  { id: 3, left: 130, bottom: 55, duration: 2.5, delay: 1 },
  { id: 4, left: 170, bottom: 110, duration: 3.1, delay: 1.5 },
  { id: 5, left: 205, bottom: 70, duration: 2.7, delay: 2 },
  { id: 6, left: 250, bottom: 45, duration: 3.3, delay: .8 },
  { id: 7, left: 285, bottom: 95, duration: 2.9, delay: 1.2 },
  { id: 8, left: 320, bottom: 65, duration: 3.4, delay: 2.4 },
];

export default function Particles() {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, .7, 0],
            y: -40,
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
          }}
          style={{
            position: "absolute",
            left: particle.left,
            bottom: particle.bottom,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#FFD96A",
            filter: "blur(1px)",
          }}
        />
      ))}
    </>
  );
}