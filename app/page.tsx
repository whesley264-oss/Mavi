"use client"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import { RevealText } from "@/components/ui/RevealText"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { BentoCard } from "@/components/ui/BentoCard"
import { NoiseOverlay } from "@/components/ui/NoiseOverlay"
import { InterlockingCards } from "@/components/ui/InterlockingCards"
import { DepthText } from "@/components/ui/DepthText"
import { GlitchText } from "@/components/ui/GlitchText"
import { Zap, Heart, Camera, Star, Sparkles, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Showcase() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const springRadius = useSpring(radius, { stiffness: 300, damping: 30 })

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    radius.set(isHovered ? 150 : 0)
  }, [isHovered, radius])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <main className="relative min-h-screen bg-[#0A0A0B] selection:bg-[#FF00E6] selection:text-white">
      <NoiseOverlay />

      {/* Supreme Header */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center mix-blend-difference">
         <div className="font-black text-2xl tracking-tighter">MAVI.SOVEREIGN</div>
         <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
           <a href="#galeria" className="hover:text-[#FF00E6] transition-colors">Galeria</a>
           <a href="#sobre" className="hover:text-[#FF00E6] transition-colors">A Mestra</a>
           <a href="#" className="flex items-center gap-1 hover:text-[#FF00E6] transition-colors text-[#FF00E6]">
             PORTFOLIO VIRTUAL <ExternalLink size={10} />
           </a>
         </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,230,0.1),transparent_70%)]" />

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <h2 className="text-[8vw] font-black uppercase tracking-tighter text-white leading-none">
              A MAIS MAIS <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E6] to-[#00F0FF]">TEM NOME.</span>
            </h2>
          </motion.div>

          <div
            className="relative cursor-none mb-12 py-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-[18vw] leading-[0.8] font-black uppercase tracking-tighter text-white/5 select-none">
              MAVI
            </h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                clipPath: clipPath,
                WebkitClipPath: clipPath
              }}
            >
              <h1 className="text-[18vw] leading-[0.8] font-black uppercase tracking-tighter text-[#FF00E6] select-none filter drop-shadow-[0_0_30px_rgba(255,0,230,0.5)]">
                MAVI
              </h1>
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 w-12 h-12 bg-[#FF00E6] rounded-full z-[100] pointer-events-none mix-blend-screen blur-md"
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                opacity: isHovered ? 1 : 0
              }}
            />
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <MagneticButton className="px-12 py-5 bg-[#FF00E6] text-white font-black rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,0,230,0.4)]">
              REVELAR ESSÊNCIA
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* DNA Segment Section (Interlocking) */}
      <div id="galeria">
        <section className="bg-black py-40 overflow-hidden">
          <div className="container px-6 text-center mb-20">
             <GlitchText text="AURA VISUAL" className="text-7xl font-black uppercase italic text-white" />
             <p className="text-white/40 font-mono text-xs mt-4 uppercase tracking-[0.5em]">Sincronia Perfeita</p>
          </div>
          <InterlockingCards />
        </section>

        <section id="sobre" className="bg-[#0A0A0B] py-40 border-y border-white/5">
          <div className="container px-6 text-center mb-20">
            <span className="text-[#FF00E6] font-mono text-xs uppercase tracking-widest">Protocolo Sovereign</span>
            <h2 className="text-7xl font-black mt-4 uppercase italic">PRESENÇA SUPREMA</h2>
          </div>
          <DepthText text="DOMÍNIO">
             <div className="bg-neutral-900/50 backdrop-blur-3xl border border-white/10 p-20 rounded-[64px] text-center shadow-2xl group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF00E6]/10 to-[#00F0FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <h3 className="relative z-10 text-6xl font-black mb-8 italic text-white">MAVI: A MESTRA</h3>
                <p className="relative z-10 text-white/60 text-2xl max-w-2xl mx-auto leading-relaxed font-light">
                  Uma força da natureza que redefine o conceito de estética.
                  Não é apenas sobre visual, é sobre a energia que emana em cada detalhe.
                </p>
                <div className="mt-12 flex justify-center gap-8 relative z-10">
                   <div className="flex flex-col items-center">
                      <Star className="text-[#FF00E6] mb-2" />
                      <span className="font-mono text-[10px] uppercase">Raridade</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <Sparkles className="text-[#00F0FF] mb-2" />
                      <span className="font-mono text-[10px] uppercase">Brilho</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <Zap className="text-yellow-400 mb-2" />
                      <span className="font-mono text-[10px] uppercase">Energia</span>
                   </div>
                </div>
             </div>
          </DepthText>
        </section>
      </div>

      {/* Signature Styles Grid */}
      <section className="py-40 bg-black">
        <div className="container px-6">
          <div className="flex justify-between items-end mb-20">
             <h2 className="text-9xl font-black uppercase tracking-tighter leading-none">THE <br/> <span className="text-[#FF00E6]">MAVI</span> <br/> <span className="text-white/20">COLLECTION</span></h2>
             <p className="max-w-[250px] text-white/30 font-mono text-[12px] uppercase tracking-widest leading-loose text-right">
               A curadoria definitiva de quem <br/> domina o cenário. <br/> Estilo inalcançável.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard title="A MAIS MAIS" desc="Definição de perfeição." className="md:col-span-2 relative h-[500px] overflow-hidden">
               <Image src="/mavi-1.jpg" alt="Mavi 1" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <Heart className="absolute bottom-10 right-10 text-[#FF00E6]" size={60} />
            </BentoCard>

            <BentoCard title="Elegância" desc="Postura de soberana." className="bg-[#0A0A0B] relative h-[500px] overflow-hidden">
               <Image src="/mavi-2.jpg" alt="Mavi 2" fill className="object-cover opacity-40 group-hover:opacity-90 transition-all duration-700" />
               <Zap className="absolute bottom-10 right-10 text-yellow-400" size={50} />
            </BentoCard>

            <BentoCard title="Atitude" desc="Onde a ousadia encontra a classe." className="relative h-[400px] overflow-hidden">
               <Image src="/mavi-5.jpg" alt="Mavi 5" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" />
               <Camera className="absolute bottom-6 right-6 text-white/20" size={40} />
            </BentoCard>

            <BentoCard title="Look Premium" desc="Editorial Mavi 2024." className="md:col-span-2 relative h-[400px] overflow-hidden bg-white/5">
               <Image src="/mavi-6.jpg" alt="Mavi 6" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
               <div className="absolute top-10 left-10 p-4 border border-white/20 backdrop-blur-md rounded-xl">
                  <span className="text-xs font-mono">STATUS: ICONIC</span>
               </div>
            </BentoCard>

            <BentoCard title="Detalhes" desc="O segredo está no zoom." className="relative h-[400px] overflow-hidden">
               <Image src="/mavi-7.jpg" alt="Mavi 7" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" />
            </BentoCard>

            <BentoCard title="Essência" desc="A alma por trás do olhar." className="relative h-[400px] overflow-hidden">
               <Image src="/mavi-8.jpg" alt="Mavi 8" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" />
            </BentoCard>

            <BentoCard title="Impacto" desc="Dominando o ambiente." className="relative h-[400px] overflow-hidden">
               <Image src="/mavi-9.jpg" alt="Mavi 9" fill className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" />
            </BentoCard>
          </div>
        </div>
      </section>

      <footer className="py-40 border-t border-white/5 text-center bg-black">
         <div className="mb-20">
            <h2 className="text-[10vw] font-black tracking-tighter text-[#FF00E6]">MAVI</h2>
            <p className="text-white/20 font-mono text-xs uppercase tracking-[1em]">The Eternal Sovereign</p>
         </div>
         <div className="flex justify-center gap-12 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <span className="hover:text-white transition-colors cursor-crosshair">Resiliência</span>
            <span className="hover:text-white transition-colors cursor-crosshair">Poder</span>
            <span className="hover:text-white transition-colors cursor-crosshair">Inalcançável</span>
         </div>
      </footer>
    </main>
  )
}
