"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn("relative group cursor-default inline-block", className)}>
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
        className="absolute inset-0 text-[#FF00E6] z-0 select-none pointer-events-none"
      >
        {text}
      </motion.span>
    </div>
  )
}
