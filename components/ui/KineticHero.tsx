"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const KineticHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="h-[200vh] relative bg-black overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
          <motion.div
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]) }}
            className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,230,0.1),transparent_50%)]"
          />
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[12vw] font-black leading-[0.8] italic uppercase tracking-tighter">
            <div className="overflow-hidden mb-[-2vw]">
              {splitText("FUTURE")}
            </div>
            <div className="overflow-hidden text-[#FF00E6]">
              {splitText("SOVEREIGN")}
            </div>
          </h1>
          <p className="mt-8 font-mono text-xs uppercase tracking-[1em] text-white/30">
            Protocols of Luxury Engineering
          </p>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-[1px] h-40 bg-gradient-to-b from-transparent via-[#FF00E6]/20 to-transparent"
               style={{
                 left: `${20 * i + 10}%`,
                 top: `${Math.random() * 100}%`,
               }}
               animate={{
                 y: [0, -100, 0],
                 opacity: [0, 0.5, 0]
               }}
               transition={{
                 duration: 4 + Math.random() * 4,
                 repeat: Infinity,
                 ease: "linear"
               }}
             />
           ))}
        </div>
      </div>
    </div>
  );
};
