"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const MagneticButton = ({ children, className, variant = "primary" }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    mouseX.set((e.clientX - centerX) * 0.4);
    mouseY.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(255,0,230,0.15), transparent 80%)`;

  const handleGradientMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    gradientX.set(e.clientX - left);
    gradientY.set(e.clientY - top);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        handleMouseMove(e);
        handleGradientMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      className={`
        relative px-8 py-4 rounded-full font-black uppercase italic tracking-widest text-sm
        transition-colors overflow-hidden group
        ${variant === "primary" ? "bg-white text-black hover:bg-[#FF00E6] hover:text-white" : "border border-white/10 text-white hover:border-[#FF00E6]"}
        ${className}
      `}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
