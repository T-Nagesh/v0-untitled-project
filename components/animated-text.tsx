"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({ text, className = "", delay = 0, tag = "p" }: AnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation()

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const Component = motion[tag]

  return (
    <Component
      ref={ref}
      className={`${className} inline-block overflow-hidden`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </Component>
  )
}
