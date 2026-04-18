"use client";

import React from "react";
import { KineticHero } from "@/components/ui/KineticHero";
import { FluidGallery } from "@/components/ui/FluidGallery";
import { RevealManifesto } from "@/components/ui/RevealManifesto";
import { AdvancedBento } from "@/components/ui/AdvancedBento";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Instagram, Twitter, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-black text-white selection:bg-[#FF00E6] selection:text-white">
      <NoiseOverlay />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-10 flex justify-between items-center mix-blend-difference">
         <div className="text-xl font-black italic tracking-tighter uppercase">
           Mavi<span className="text-[#FF00E6]">.</span>Sovereign
         </div>
         <div className="flex gap-10 items-center">
            {["Gallery", "Manifesto", "Sectors"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            ))}
            <MagneticButton variant="primary" className="!px-6 !py-2 text-[10px]">
              Connect
            </MagneticButton>
         </div>
      </nav>

      <KineticHero />

      <section id="manifesto">
        <RevealManifesto />
      </section>

      <section id="gallery">
        <div className="container px-6 py-40 border-t border-white/5">
           <div className="flex justify-between items-end mb-20">
              <h2 className="text-[clamp(3rem,6vw,10rem)] font-black uppercase italic leading-none tracking-tighter">
                Visual <br/> <span className="text-[#FF00E6]">Interia</span>
              </h2>
              <p className="max-w-[300px] text-white/40 font-mono text-[10px] uppercase tracking-widest leading-relaxed text-right">
                Curadoria de momentos capturados em alta fidelidade. A estética como prova de existência.
              </p>
           </div>
           <FluidGallery />
        </div>
      </section>

      <section id="sectors" className="py-60 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container px-6">
           <div className="mb-32">
              <span className="text-[#FF00E6] font-mono text-xs uppercase tracking-[1em] mb-4 block">Engineered Systems</span>
              <h2 className="text-[clamp(3rem,8vw,12rem)] font-black uppercase italic leading-[0.8] tracking-tighter">
                Pilares da <br/> Dominância
              </h2>
           </div>
           <AdvancedBento />
        </div>
      </section>

      <footer className="py-40 bg-black border-t border-white/5 relative">
         <div className="container px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-20">
               <div>
                  <h2 className="text-[15vw] font-black italic uppercase tracking-tighter text-[#FF00E6] leading-none mb-10">MAVI</h2>
                  <div className="flex gap-8">
                     <Instagram className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer" />
                     <Twitter className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer" />
                     <Globe className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
               </div>

               <div className="space-y-10 text-right">
                  <p className="text-white/20 font-mono text-xs uppercase tracking-[0.5em]">The Eternal Sovereign Protocol</p>
                  <MagneticButton variant="secondary" className="group">
                    Collaborate <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>
               </div>
            </div>

            <div className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-[8px] font-mono uppercase tracking-widest text-white/10">
               <span>© 2026 MAVI.SOVEREIGN — SOVEREIGN BY MAVI</span>
               <span>All Rights Reserved</span>
            </div>
         </div>
      </footer>
    </main>
  );
}
