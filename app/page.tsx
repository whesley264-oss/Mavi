"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Heart,
  ExternalLink,
  Star,
  Sparkles,
  Zap,
  Camera,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlitchText } from "@/components/ui/GlitchText";
import { InterlockingCards } from "@/components/ui/InterlockingCards";
import { DepthText } from "@/components/ui/DepthText";
import { BentoCard } from "@/components/ui/BentoCard";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollInterlock } from "@/components/sections/ScrollInterlock";
import { AdvancedBento } from "@/components/ui/AdvancedBento";

export default function Home() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const clipPath = useMotionTemplate`circle(150px at ${springX}px ${springY}px)`;

  return (
    <main className="relative bg-[#050505] text-white selection:bg-[#FF00E6] selection:text-white">
      <NoiseOverlay />

      {/* Editorial Navigation */}
      <nav className="fixed top-0 w-full z-[100] p-8 flex justify-between items-center mix-blend-difference">
         <div className="font-black text-3xl tracking-tighter italic">MAVI<span className="text-[#FF00E6]">.</span>SOVEREIGN</div>
         <div className="flex gap-10 font-mono text-[10px] uppercase tracking-[0.3em]">
           <a href="#galeria" className="hover:text-[#FF00E6] transition-all hover:tracking-[0.5em]">Galeria</a>
           <a href="#sobre" className="hover:text-[#FF00E6] transition-all hover:tracking-[0.5em]">A Mestra</a>
           <a href="#" className="flex items-center gap-2 hover:text-[#FF00E6] transition-colors text-[#FF00E6] border border-[#FF00E6]/30 px-4 py-2 rounded-full backdrop-blur-md">
             PORTFOLIO VIRTUAL <ExternalLink size={10} />
           </a>
         </div>
      </nav>

      {/* Hero Section - Argus Grade */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,230,0.15),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dzv9rqg45/image/upload/v1691230626/noise_vms8nx.png')] opacity-[0.03] pointer-events-none" />

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8"
          >
            <h2 className="text-[clamp(3rem,8vw,10rem)] font-black uppercase tracking-tighter text-white leading-[0.85] italic">
              A MAIS MAIS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E6] via-[#00F0FF] to-[#FF00E6] bg-[length:200%_auto] animate-gradient-x [text-shadow:0_0_60px_rgba(255,0,230,0.4)]">
                TEM NOME.
              </span>
            </h2>
          </motion.div>

          <div
            className="relative cursor-none mb-16 py-8"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-[clamp(6rem,22vw,28rem)] leading-[0.7] font-black uppercase tracking-tighter text-white/[0.02] select-none [text-stroke:1px_rgba(255,255,255,0.05)]">
              MAVI
            </h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                clipPath: clipPath,
                WebkitClipPath: clipPath
              }}
            >
              <h1 className="text-[clamp(6rem,22vw,28rem)] leading-[0.7] font-black uppercase tracking-tighter text-[#FF00E6] select-none filter drop-shadow-[0_0_40px_rgba(255,0,230,0.6)]">
                MAVI
              </h1>
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full z-[100] pointer-events-none mix-blend-difference blur-sm"
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                scale: isHovered ? 1 : 0
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <MagneticButton className="px-16 py-6 bg-white text-black font-black rounded-full text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_30px_60px_rgba(255,255,255,0.2)]">
              REVELAR ESSÊNCIA
            </MagneticButton>
            <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
               <span>Scroll para o impacto</span>
               <div className="w-10 h-[1px] bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GSAP Scroll Interlock Section */}
      <ScrollInterlock />

      {/* DNA Segment Section (Interlocking) */}
      <div id="galeria">
        <section className="bg-black py-60 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(0,240,255,0.05),transparent_50%)]" />
          <div className="container px-6 text-center mb-32 relative z-10">
             <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Visual DNA</span>
             <h2 className="text-[clamp(4rem,12vw,15rem)] font-black uppercase italic leading-none [text-stroke:1px_rgba(255,255,255,0.1)] text-transparent group hover:text-white transition-all duration-1000">
               AURA <span className="text-white group-hover:text-[#FF00E6] transition-colors">VISUAL</span>
             </h2>
             <p className="text-white/20 font-mono text-xs mt-8 uppercase tracking-[1em]">Sincronia Perfeita Controlada</p>
          </div>
          <InterlockingCards />
        </section>

        {/* Sovereign Protocol Bento */}
        <section className="py-60 bg-[#080808] border-y border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] brightness-200" />
           <div className="container px-6">
              <div className="max-w-4xl mb-32">
                 <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
                   SISTEMA DE <br/> <span className="text-[#FF00E6]">SOBERANIA</span>
                 </h2>
                 <p className="text-white/40 text-xl font-light max-w-2xl leading-relaxed">
                   A arquitetura de uma presença que não pede permissão. Cada módulo representa um pilar da excelência inalcançável de Mavi.
                 </p>
              </div>
              <AdvancedBento />
           </div>
        </section>

        <section id="sobre" className="bg-black py-60 relative">
          <div className="container px-6 text-center mb-32">
            <span className="text-[#FF00E6] font-mono text-xs uppercase tracking-[1em] mb-4 block">Manifesto</span>
            <h2 className="text-8xl font-black uppercase italic [text-shadow:0_20px_40px_rgba(255,0,230,0.2)]">PRESENÇA SUPREMA</h2>
          </div>
          <DepthText text="DOMÍNIO">
             <div className="bg-neutral-900/30 backdrop-blur-[60px] border border-white/10 p-32 rounded-[80px] text-center shadow-2xl group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00E6]/20 to-[#00F0FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10">
                  <h3 className="text-7xl font-black mb-12 italic text-white tracking-tighter">MAVI: A MESTRA</h3>
                  <p className="text-white/70 text-3xl max-w-3xl mx-auto leading-relaxed font-light italic">
                    "Uma força da natureza que redefine o conceito de estética.
                    Não é apenas sobre visual, é sobre a energia que emana em cada detalhe."
                  </p>
                  <div className="mt-20 flex justify-center gap-16">
                     {[
                       { icon: Star, label: "Raridade", color: "text-[#FF00E6]" },
                       { icon: Sparkles, label: "Brilho", color: "text-[#00F0FF]" },
                       { icon: Zap, label: "Energia", color: "text-yellow-400" }
                     ].map((item, i) => (
                       <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="flex flex-col items-center gap-4"
                       >
                          <div className={`p-6 rounded-full bg-white/5 border border-white/10 ${item.color}`}>
                             <item.icon size={32} />
                          </div>
                          <span className="font-mono text-xs uppercase tracking-widest text-white/40">{item.label}</span>
                       </motion.div>
                     ))}
                  </div>
                </div>
             </div>
          </DepthText>
        </section>
      </div>

      {/* Signature Styles Grid */}
      <section className="py-60 bg-[#050505]">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-32">
             <h2 className="text-[clamp(4rem,15vw,18rem)] font-black uppercase tracking-tighter leading-[0.7] italic">
               THE <br/> <span className="text-[#FF00E6]">MAVI</span> <br/> <span className="text-white/10 [text-stroke:1px_rgba(255,255,255,0.05)]">GALLERY</span>
             </h2>
             <div className="max-w-[350px] space-y-6">
               <p className="text-white/40 font-mono text-[12px] uppercase tracking-widest leading-loose text-left md:text-right">
                 A curadoria definitiva de quem domina o cenário. Estilo inalcançável, traduzido em pixels de alta fidelidade.
               </p>
               <div className="flex justify-start md:justify-end">
                 <MagneticButton variant="secondary" className="group">
                    Explorar Full Index <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                 </MagneticButton>
               </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            <BentoCard title="A MAIS MAIS" desc="Definição de perfeição." className="md:col-span-8 md:row-span-2 relative overflow-hidden group">
               <Image src="/mavi-1.jpg" alt="Mavi 1" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <Heart className="absolute bottom-12 right-12 text-[#FF00E6] drop-shadow-[0_0_20px_rgba(255,0,230,0.5)]" size={80} />
            </BentoCard>

            <BentoCard title="Elegância" desc="Postura de soberana." className="md:col-span-4 md:row-span-2 bg-[#0A0A0B] relative overflow-hidden group">
               <Image src="/mavi-2.jpg" alt="Mavi 2" fill className="object-cover opacity-40 group-hover:opacity-90 transition-all duration-700" />
               <Zap className="absolute bottom-12 right-12 text-yellow-400" size={60} />
            </BentoCard>

            <BentoCard title="Atitude" desc="Ousadia encontra a classe." className="md:col-span-4 relative overflow-hidden group">
               <Image src="/mavi-5.jpg" alt="Mavi 5" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" />
               <Camera className="absolute bottom-8 right-8 text-white/20" size={40} />
            </BentoCard>

            <BentoCard title="Look Premium" desc="Editorial Mavi 2024." className="md:col-span-8 relative overflow-hidden bg-white/5 group">
               <Image src="/mavi-6.jpg" alt="Mavi 6" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
               <div className="absolute top-10 left-10 p-4 border border-white/20 backdrop-blur-md rounded-xl">
                  <span className="text-xs font-mono">STATUS: ICONIC</span>
               </div>
            </BentoCard>

            <BentoCard title="Essência" desc="A alma por trás do olhar." className="md:col-span-6 md:row-span-2 relative overflow-hidden group">
               <Image src="/mavi-8.jpg" alt="Mavi 8" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </BentoCard>

            <BentoCard title="Impacto" desc="Dominando o ambiente." className="md:col-span-6 md:row-span-2 relative overflow-hidden group">
               <Image src="/mavi-9.jpg" alt="Mavi 9" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </BentoCard>
          </div>
        </div>
      </section>

      <footer className="py-60 border-t border-white/5 text-center bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,0,230,0.1),transparent_50%)]" />
         <div className="mb-24 relative z-10">
            <motion.h2
              whileInView={{ scale: [0.9, 1.1, 1], rotate: [0, -2, 0] }}
              className="text-[15vw] font-black tracking-tighter text-[#FF00E6] leading-none mb-4 italic"
            >
              MAVI
            </motion.h2>
            <p className="text-white/20 font-mono text-sm uppercase tracking-[1.5em]">The Eternal Sovereign</p>
         </div>
         <div className="flex flex-wrap justify-center gap-16 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 relative z-10">
            {["Resiliência", "Poder", "Inalcançável", "Soberana"].map((word, i) => (
              <span key={i} className="hover:text-white transition-all cursor-crosshair hover:scale-125">{word}</span>
            ))}
         </div>
         <div className="mt-40 text-white/10 font-mono text-[8px] uppercase tracking-widest">
            © 2024 MAVI.SOVEREIGN PROTOCOL — SOVEREIGN BY MAVI
         </div>
      </footer>
    </main>
  );
}
