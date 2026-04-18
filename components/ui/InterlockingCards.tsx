"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const InterlockingCards = ({ className }: { className?: string }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Mapping scroll progress to convergence
  const x1 = useTransform(scrollYProgress, [0, 0.5], [-400, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.5], [-200, 0])
  const r1 = useTransform(scrollYProgress, [0, 0.5], [-25, 0])

  const x2 = useTransform(scrollYProgress, [0, 0.5], [400, 0])
  const y2 = useTransform(scrollYProgress, [0, 0.5], [250, 0])
  const r2 = useTransform(scrollYProgress, [0, 0.5], [30, 0])

  return (
    <div ref={containerRef} className={cn("relative h-[120vh] flex items-center justify-center", className)}>
      <motion.div
        style={{ x: x1, y: y1, rotate: r1 }}
        className="absolute w-80 h-[450px] bg-neutral-900 border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(255,0,230,0.2)] z-10 overflow-hidden group"
      >
        <Image
          src="/mavi-3.jpg"
          alt="Mavi Aura A"
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/50 uppercase tracking-widest">
          AURA SEGMENTO_01
        </div>
      </motion.div>

      <motion.div
        style={{ x: x2, y: y2, rotate: r2 }}
        className="absolute w-80 h-[450px] bg-neutral-800 border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(0,240,255,0.2)] z-20 overflow-hidden group"
      >
        <Image
          src="/mavi-4.jpg"
          alt="Mavi Aura B"
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/50 uppercase tracking-widest text-right w-full pr-12">
          AURA SEGMENTO_02
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="z-0 text-center pointer-events-none"
      >
        <h2 className="text-[20vw] font-black text-white/[0.03] uppercase select-none">SYNERGY</h2>
      </motion.div>
    </div>
  )
}
