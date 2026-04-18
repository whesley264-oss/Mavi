"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CursorReveal = ({ baseLayer, revealLayer }: { baseLayer: React.ReactNode; revealLayer: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Layer */}
      <div className="absolute inset-0 z-0">
        {baseLayer}
      </div>

      {/* Reveal Layer with Clip Path */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          clipPath: `circle(${isHovered ? 150 : 0}px at ${springX}px ${springY}px)`,
          WebkitClipPath: `circle(${isHovered ? 150 : 0}px at ${springX}px ${springY}px)`
        }}
      >
        {revealLayer}
      </motion.div>

      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-[100] pointer-events-none mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  )
}
