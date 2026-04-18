"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import React, { ReactNode } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
}

export const LiquidGlassCard = ({ children, className = "" }: LiquidGlassCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.08), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-[40px] saturate-[150%] ${className}`}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Noise / Grain effect */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05] [background-image:url('https://res.cloudinary.com/dzv9rqg45/image/upload/v1691230626/noise_vms8nx.png')] bg-repeat"></div>

      {/* Inner border highlight */}
      <div className="pointer-events-none absolute inset-0 z-[2] rounded-[2rem] border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
