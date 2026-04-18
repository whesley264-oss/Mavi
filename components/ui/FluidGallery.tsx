"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import Image from "next/image";

const images = [
  "/mavi-1.jpg", "/mavi-2.jpg", "/mavi-3.jpg",
  "/mavi-4.jpg", "/mavi-5.jpg", "/mavi-6.jpg"
];

export const FluidGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const skew = useTransform(smoothVelocity, [-1, 1], [-20, 20]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x, skewX: skew }}
          className="flex gap-12 px-12"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-[30vw] h-[50vh] flex-shrink-0 overflow-hidden rounded-2xl group border border-white/5"
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                <p className="font-black italic uppercase tracking-tighter text-2xl">Visual Archive</p>
                <p className="font-mono text-[10px] text-white/60">PRTCL_0{i+1}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 left-12">
        <h2 className="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-white/5 pointer-events-none">
          CHRONOS
        </h2>
      </div>
    </section>
  );
};
