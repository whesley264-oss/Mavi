"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const MagneticButton = ({ children, className = "", variant = "primary" }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();

    // Magnetic Logic
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });

    // Spotlight Logic
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    mouseX.set(0);
    mouseY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(120px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.15), transparent 80%)`;

  const baseStyles = "relative flex items-center justify-center px-10 py-4 font-bold transition-all duration-300 rounded-full overflow-hidden";
  const variants = {
    primary: "bg-white text-black hover:scale-105",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
