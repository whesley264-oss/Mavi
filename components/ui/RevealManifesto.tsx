"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const RevealManifesto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const maskSize = useSpring(isHovered ? 400 : 0, { stiffness: 100, damping: 20 });
  const clipPath = useMotionTemplate`circle(${maskSize}px at ${springX}px ${springY}px)`;

  return (
    <section
      ref={containerRef}
      className="py-60 bg-black relative cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container px-6 relative">
        {/* Background Text (Dark) */}
        <div className="text-white/5 select-none">
           <ManifestoContent />
        </div>

        {/* Revealed Text (Bright) */}
        <motion.div
          className="absolute inset-0 z-10 px-6 container flex items-center"
          style={{ clipPath }}
        >
           <div className="text-white">
             <ManifestoContent />
           </div>
        </motion.div>
      </div>

      {/* Custom Cursor Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 border border-[#FF00E6] rounded-full z-[100] pointer-events-none flex items-center justify-center mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1 : 0.5
        }}
      >
        <span className="text-[8px] font-mono text-[#FF00E6] uppercase tracking-tighter">Reveal</span>
      </motion.div>
    </section>
  );
};

const ManifestoContent = () => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-[clamp(3rem,8vw,12rem)] font-black uppercase italic leading-[0.8] tracking-tighter mb-12">
      A Estética <br/> como Arma de <br/> <span className="text-[#FF00E6]">Soberania</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
       <p className="text-4xl font-light italic leading-tight">
         No futuro, a atenção é a moeda mais valiosa. Aqueles que dominam a forma, dominam o destino.
       </p>
       <div className="space-y-8 text-xl font-mono uppercase tracking-widest opacity-60">
          <p>[01] Engenharia Inalcançável</p>
          <p>[02] Estética Antigenerica</p>
          <p>[03] Protocolo Mavi Sovereign</p>
       </div>
    </div>
  </div>
);
