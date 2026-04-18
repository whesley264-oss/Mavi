"use client"
import { motion } from "framer-motion"

export const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative group cursor-default">
      <span className="relative z-10">{text}</span>
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5, x: -2, y: 1 }}
        className="absolute inset-0 text-cyan-500 z-0 select-none pointer-events-none"
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5, x: 2, y: -1 }}
        className="absolute inset-0 text-magenta-500 z-0 select-none pointer-events-none"
      >
        {text}
      </motion.span>
    </div>
  )
}
