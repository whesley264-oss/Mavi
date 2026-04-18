"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GlitchText } from "../ui/GlitchText";

gsap.registerPlugin(ScrollTrigger);

export const ScrollInterlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(leftRef.current, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0)
        .fromTo(rightRef.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0)
        .fromTo(centerRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.7)" }, 0.2);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)] blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center relative z-10">
        <div ref={leftRef} className="text-center md:text-left space-y-4">
          <div className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">Protocolo 01</div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none">Inércia<br/>Física</h2>
          <p className="text-white/40 max-w-xs mx-auto md:mx-0 text-sm italic">O movimento tem massa. Cada frame é esculpido para ressonância profunda.</p>
        </div>

        <div ref={centerRef} className="flex flex-col items-center justify-center py-12 md:py-0">
          <div className="w-64 h-64 md:w-96 md:h-96 relative group">
             <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-4 rounded-full border border-purple-500/20 shadow-[0_0_50px_rgba(120,50,255,0.2)]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <GlitchText text="MAVI" className="text-7xl md:text-9xl font-black tracking-tighter" />
             </div>
          </div>
        </div>

        <div ref={rightRef} className="text-center md:text-right space-y-4">
          <div className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">Protocolo 02</div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none">Confluência<br/>Digital</h2>
          <p className="text-white/40 max-w-xs mx-auto md:ml-auto text-sm italic">Onde o código se torna arte. A convergência final de todos os sistemas.</p>
        </div>
      </div>
    </section>
  );
};
