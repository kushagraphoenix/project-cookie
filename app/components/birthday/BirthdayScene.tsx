"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";

const messages = [
  "Before this night ends...",

  "There's one last thing i wanted to tell you...",

  `they say human brain plays the best memories of their life
before dying for 7 mins,`,

  `just know that you will be in
those final 7 mins of mine.`,

  "and when i say this...",

  "im dead serious.",

  "in the end...",

  "thank you cookie.",

  "I have just one last wish...",

  "🎂 Happy Birthday, Cookie.",

  `I hope this year makes you smile
far more than your brain rot reels ever made me smile.`,

  `I hope every dream that you quietly keep in your heart
finds its way to you.`,

  `I hope every time life becomes difficult,
you remember how strong you really are.`,

  `I hope you never forget
how deeply you are loved.`,

  `Even on the days
when you don't feel it yourself.`,

  "Because somewhere...",

  `there's still someone
who silently wishes
for every happiness
to find its way to you.`,

  `Thank you for every memory.
Thank you for every smile.
Thank you for letting me be a small part of your life.`,

  "Once again...",

  "Happy Birthday, Cookie. ❤️",

  `With lots of love,

-Kushagra`,
];

export default function BirthdayScene() {
  const { scene, setCelebrate } = useStory();

  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  // Reset when entering birthday scene
  useEffect(() => {
    if (scene !== "birthday") return;

    setIndex(0);
    setShowFinal(false);
    setCelebrate(true);
  }, [scene, setCelebrate]);

  // Message progression
  useEffect(() => {
    if (scene !== "birthday") return;

    if (index >= messages.length - 1) return;

    const minimumTime = 4500;
    const readingTime = messages[index].length * 75;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, Math.max(minimumTime, readingTime));

    return () => clearTimeout(timeout);
  }, [scene, index]);

  // Final screen after last message
  useEffect(() => {
    if (index !== messages.length - 1) return;

    const timer = setTimeout(() => {
      setShowFinal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [index]);

  if (scene !== "birthday") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2.2,
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background:
          "radial-gradient(circle at top,#13294B,#08111E,#010203)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Moonlight Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,240,170,.28), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Moon */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: 70,
          right: 120,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "#FFF4B5",
          boxShadow: "0 0 120px rgba(255,245,190,.85)",
        }}
      />

      <AnimatePresence mode="wait">
        {!showFinal ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 2.3,
              ease: "easeInOut",
            }}
            style={{
              width: "78%",
              whiteSpace: "pre-line",
              textAlign: "center",
              color: "white",
              fontFamily: "Cormorant Garamond",
              fontSize: 54,
              lineHeight: 1.55,
              fontWeight: 500,
              zIndex: 10,
            }}
          >
            {messages[index]}
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            style={{
              textAlign: "center",
              color: "white",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontSize: 70,
                marginBottom: 25,
              }}
            >
              ❤️
            </div>

            <h1
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 64,
                fontWeight: 600,
                marginBottom: 25,
              }}
            >
              Happy Birthday Cookie
            </h1>

            <p
              style={{
                fontSize: 30,
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              May all your dreams come true.
              <br />
              May your smile never fade.
              <br />
              May life always be kind to you.
            </p>

            <div
              style={{
                marginTop: 60,
                fontSize: 28,
                opacity: 0.85,
              }}
            >
              Forever Yours,
              <br />
              Kushagra ❤️
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}