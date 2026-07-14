"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStory } from "@/app/context/StoryContext";
import { PASSWORD, HINT } from "@/app/constants/password";

export default function PasswordModal() {
  const { scene, setScene } = useStory();

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);

  if (scene !== "password") return null;

  function handleUnlock() {
    if (value.trim() === PASSWORD) {
      setScene("unlocking");

setTimeout(() => {
    setScene("opening");
}, 1200);
      return;
    }

    setError("That doesn't feel quite right...");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.45)",
          backdropFilter: "blur(6px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: .95,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          style={{
            width: 500,
            background: "#F8EFD9",
            borderRadius: 24,
            padding: 40,
            boxShadow: "0 30px 80px rgba(0,0,0,.35)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 34,
              color: "#5C4033",
              marginBottom: 18,
            }}
          >
            This letter...
          </h2>

          <p
            style={{
              color: "#6B4F3A",
              lineHeight: 1.8,
              marginBottom: 30,
            }}
          >
            isn't meant for everyone.
            <br />
            Only someone who truly knows our story
            can continue.
          </p>

          <input
            type="password"
            placeholder="Enter the passphrase..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError("");
            }}
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: 12,
              border: "2px solid #d9c8aa",
              fontSize: 18,
              outline: "none",
              marginBottom: 20,
            }}
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: .97 }}
            onClick={handleUnlock}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 12,
              border: "none",
              background: "#8B2E2E",
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Unlock
          </motion.button>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                color: "#A32626",
                marginTop: 18,
              }}
            >
              {error}
            </motion.p>
          )}

          <button
            onClick={() => setShowHint(!showHint)}
            style={{
              marginTop: 30,
              background: "transparent",
              border: "none",
              color: "#7B5E57",
              cursor: "pointer",
            }}
          >
            🌙 I need a little help...
          </button>

          {showHint && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: 20,
                color: "#6D4C41",
                lineHeight: 1.7,
              }}
            >
              {HINT}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}