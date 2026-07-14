"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useStory } from "@/app/context/StoryContext";
import { useLetterStory } from "@/app/context/LetterStoryContext";
import ReadingPaper from "./ReadingPaper";
import ReadingContent from "./ReadingContent";
import MemoryLayer from "./MemoryLayer";
import ContinueButton from "./ContinueButton";
import styles from "./Reading.module.css";

export default function ReadingLetter(){

    const {scene}=useStory();
    const { step } = useLetterStory();
    const [pageFinished, setPageFinished] = useState(false);
    const [activeMemory, setActiveMemory] = useState<number | null>(null);

useEffect(() => {
  setPageFinished(false);
  setActiveMemory(null);
}, [step]);

    return(

        <AnimatePresence>

        {

            scene==="reading" &&(

                <motion.div
                 key={step}
                className={styles.overlay}

                initial={{

                    opacity:0,

                    scale:.94,

                    y:40,

                }}

              animate={{
  opacity: 1,

  scale: [1, 1.004, 1],

  y: [0, -6, 0],

  rotate: [0, 0.25, 0],
}}

                exit={{

                    opacity:0,

                    scale:.96,

                }}

                transition={{
  opacity: {
    duration: 1.3,
  },

  scale: {
    duration: 7,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },

  y: {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },

  rotate: {
    duration: 10,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
}}

                >

                    <div className={styles.paper}>

                       <ReadingPaper />

<ReadingContent
  onComplete={() => setPageFinished(true)}
  onParagraphComplete={(index) => {
    setActiveMemory(index);
  }}
/>

<MemoryLayer
  activeMemory={activeMemory}
/>
<ContinueButton
  visible={pageFinished}
/>

                    </div>

                </motion.div>

            )

        }

        </AnimatePresence>

    );

}