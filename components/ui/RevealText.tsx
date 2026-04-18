"use client"
import { motion } from "framer-motion"

export const RevealText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.h1
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.h1>
  )
}
