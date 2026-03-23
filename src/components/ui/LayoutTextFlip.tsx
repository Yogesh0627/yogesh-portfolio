'use client'
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from 'react'

type Props = {
  words: string[]
}

const LayoutTextFlip = ({ words }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.div
      layout
      aria-live="polite"
      aria-atomic="true"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="text-secondary relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 pt-0 text-sm shadow-custom sm:order-last sm:mx-0 sm:mb-0"
    >
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          initial={{
            y: -20,
            opacity: 0,
            filter: "blur(10px)"
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            x: [0, -2, 2, 0] // 👈 one-time bounce // 👈 bounce left-right
          }}
          exit={{
            y: 20,
            opacity: 0,
            filter: "blur(10px)"
          }}
          transition={{
            y: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.4 },
            filter: { duration: 0.4 },
            x: {
              delay: 0.4,        // 👈 wait for entry
              duration: 0.3,     // 👈 visible bounce
              ease: "easeInOut"
            }
          }}
          className="whitespace-nowrap"
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </motion.div>
  )
}

export { LayoutTextFlip }