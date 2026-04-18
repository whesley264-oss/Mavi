"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ImmersiveHero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, scale, opacity }} className="relative z-10 text-center">
          <h2 className="text-[15vw] font-black leading-none uppercase tracking-tighter">
            IMMERSIVE <br/> <span className="text-[#C8FF00]">POWER</span>
          </h2>
        </motion.div>

        {/* Layered Composition Example */}
        <motion.div
           initial={{ x: -200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           className="absolute top-1/4 left-10 w-64 h-96 bg-neutral-900 border border-white/10 rounded-2xl z-0"
        />
        <motion.div
           initial={{ x: 200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           className="absolute bottom-1/4 right-10 w-64 h-96 bg-neutral-800 border border-white/10 rounded-2xl z-20"
        />
      </div>
    </section>
  )
}
