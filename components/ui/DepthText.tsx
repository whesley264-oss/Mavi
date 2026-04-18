"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const DepthText = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.1, 0])

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Text Layer */}
      <motion.h2
        style={{ scale: textScale, opacity: textOpacity }}
        className="absolute text-[30vw] font-black text-white pointer-events-none z-0 whitespace-nowrap uppercase tracking-tighter"
      >
        {text}
      </motion.h2>

      {/* Middle Content Layer (The "Subject") */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {children}
      </div>

      {/* Foreground elements can be added as children with higher z-index */}
    </div>
  )
}
