"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export const InterlockingCards = ({ className }: { className?: string }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Mapping scroll progress to convergence
  const x1 = useTransform(scrollYProgress, [0, 0.5], [-200, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const r1 = useTransform(scrollYProgress, [0, 0.5], [-15, 0])

  const x2 = useTransform(scrollYProgress, [0, 0.5], [200, 0])
  const y2 = useTransform(scrollYProgress, [0, 0.5], [150, 0])
  const r2 = useTransform(scrollYProgress, [0, 0.5], [20, 0])

  return (
    <div ref={containerRef} className={cn("relative h-[100vh] flex items-center justify-center", className)}>
      <motion.div
        style={{ x: x1, y: y1, rotate: r1 }}
        className="absolute w-64 h-80 bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl z-10 p-6"
      >
        <div className="w-full h-full bg-white/5 rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-white/20 uppercase tracking-widest">
          DNA Segment A
        </div>
      </motion.div>

      <motion.div
        style={{ x: x2, y: y2, rotate: r2 }}
        className="absolute w-64 h-80 bg-neutral-800 border border-white/10 rounded-2xl shadow-2xl z-20 p-6"
      >
        <div className="w-full h-full bg-white/5 rounded-lg border border-white/5 flex items-center justify-center font-mono text-[10px] text-white/20 uppercase tracking-widest">
          DNA Segment B
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="z-0 text-center"
      >
        <h2 className="text-8xl font-black text-white/5 uppercase">INTERLOCK</h2>
      </motion.div>
    </div>
  )
}
