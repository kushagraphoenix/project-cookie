"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MemoryPhotoProps {
  src: string;
  caption?: string;
  rotation?: number;
}

export default function MemoryPhoto({
  src,
  caption,
  rotation = 0,
}: MemoryPhotoProps) {
  return (
    <motion.div
      whileHover={{
        rotate: rotation + 2,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      style={{
        width: 185,
        background: "#fff",

        padding: 10,
        paddingBottom: 34,

        borderRadius: 3,

        boxShadow:
          "0 18px 45px rgba(0,0,0,.22)",

        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",

          overflow: "hidden",

          background: "#ececec",
        }}
      >
        <Image
          src={src}
          alt=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {caption && (
        <div
          style={{
            marginTop: 14,

            textAlign: "center",

            fontFamily: "Caveat",

            fontSize: 22,

            color: "#6A4B39",
          }}
        >
          {caption}
        </div>
      )}
    </motion.div>
  );
}