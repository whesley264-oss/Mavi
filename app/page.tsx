"use client"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Lenis from "lenis"
import { RevealText } from "@/components/ui/RevealText"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { BentoCard } from "@/components/ui/BentoCard"
import { NoiseOverlay } from "@/components/ui/NoiseOverlay"
import { InterlockingCards } from "@/components/ui/InterlockingCards"
import { DepthText } from "@/components/ui/DepthText"
import { CursorReveal } from "@/components/ui/CursorReveal"
import { Shield, Zap, Layout, Terminal, Cpu, Eye, ExternalLink } from "lucide-react"

export default function Showcase() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0A0A0B] selection:bg-[#C8FF00] selection:text-black">
      <NoiseOverlay />

      {/* Supreme Header */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center mix-blend-difference">
         <div className="font-black text-2xl tracking-tighter">ARGUS v3.1</div>
         <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
           <a href="#dna" className="hover:text-[#C8FF00] transition-colors">DNA Protocol</a>
           <a href="#styles" className="hover:text-[#C8FF00] transition-colors">Signature Styles</a>
           <a href="./index.html" className="flex items-center gap-1 hover:text-[#C8FF00] transition-colors">
             Static Portal <ExternalLink size={10} />
           </a>
         </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,255,0,0.05),transparent_50%)]" />

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-mono tracking-widest text-[#C8FF00] border border-[#C8FF00]/20 rounded-full bg-[#C8FF00]/5"
          >
            SOVEREIGN AI DEVELOPMENT STANDARD
          </motion.div>

          <RevealText
            text="ENGENHARIA DE"
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter mb-4"
          />
          <RevealText
            text="IMPACTO EXTREMO"
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
          />

          <div className="flex gap-4 justify-center mt-12">
            <MagneticButton className="px-8 py-4 bg-[#C8FF00] text-black font-bold rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(200,255,0,0.3)]">
              Ativar Skill
            </MagneticButton>
            <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
              Explorar v3.1
            </button>
          </div>
        </div>
      </section>

      {/* DNA Segment Section */}
      <div id="dna">
        <section className="bg-black py-20">
          <div className="container px-6 text-center mb-20">
            <span className="text-[#C8FF00] font-mono text-xs uppercase tracking-widest">Protocol 01</span>
            <h2 className="text-6xl font-black mt-4 uppercase italic">Interlocking DNA</h2>
          </div>
          <InterlockingCards />
        </section>

        <section className="bg-[#0A0A0B] py-20">
          <div className="container px-6 text-center mb-20">
            <span className="text-[#C8FF00] font-mono text-xs uppercase tracking-widest">Protocol 02</span>
            <h2 className="text-6xl font-black mt-4 uppercase italic">Layered Depth</h2>
          </div>
          <DepthText text="SUPREME">
             <div className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 p-16 rounded-[48px] text-center shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="relative z-10 text-5xl font-black mb-8 italic text-[#C8FF00]">EXPERIÊNCIA IMERSIVA</h3>
                <p className="relative z-10 text-white/50 text-xl max-w-xl mx-auto leading-relaxed">
                  O conteúdo não é plano. Ele respira através de camadas de paralaxe e física de inércia,
                  criando a percepção de um ecossistema de luxo.
                </p>
             </div>
          </DepthText>
        </section>
      </div>

      {/* Signature Styles Grid */}
      <section id="styles" className="py-40 border-t border-white/5 bg-black">
        <div className="container px-6">
          <div className="flex justify-between items-end mb-20">
             <h2 className="text-8xl font-black uppercase tracking-tighter">THE <br/> <span className="text-[#C8FF00]">ENCYCLOPEDIA</span></h2>
             <p className="max-w-[200px] text-white/20 font-mono text-[10px] uppercase tracking-widest leading-loose">
               11 estilos profissionais. <br/> Zero genérico. <br/> Ingerido por IAs de Elite.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BentoCard title="Neo-Brutalism" desc="Ousadia Visceral." className="bg-[#FFE600] text-black border-black border-4 shadow-[12px_12px_0px_#000]">
               <Terminal className="absolute bottom-6 right-6 opacity-20" size={80} />
            </BentoCard>

            <BentoCard title="Liquid Glass" desc="Refração futurista vOS." className="bg-white/5 backdrop-blur-3xl border-white/10 saturate-150">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse" />
            </BentoCard>

            <BentoCard title="Cyber Tech X" desc="Protocolo hacker supremo." className="bg-[#05000F] border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]" />
               <Cpu className="absolute bottom-6 right-6 text-cyan-400 opacity-50" size={50} />
            </BentoCard>

            <BentoCard title="Skeuo Elite" desc="Toque físico industrial." className="bg-neutral-100 text-black shadow-[inset_0_4px_20px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.1)] border-white border-2">
               <div className="mt-12 flex gap-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-16 h-16 rounded-2xl bg-neutral-200 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_5px_10px_rgba(0,0,0,0.1)] border border-white" />
                 ))}
               </div>
            </BentoCard>

            <BentoCard title="Advanced Bento" desc="Modular Editorial." className="md:col-span-2 bg-neutral-900 border-white/5">
               <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-4 h-40">
                 <div className="col-span-2 row-span-2 bg-white/5 rounded-2xl" />
                 <div className="col-span-2 bg-[#C8FF00]/10 rounded-2xl border border-[#C8FF00]/20" />
                 <div className="bg-white/5 rounded-2xl" />
                 <div className="bg-white/5 rounded-2xl" />
               </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center bg-black">
         <RevealText text="ARGUS UI/UX" className="text-4xl font-black mb-4 tracking-tighter" />
         <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">The Sovereign AI Development Standard — v3.1</p>
      </footer>
    </main>
  )
}
