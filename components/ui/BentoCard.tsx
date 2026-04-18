"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BentoCard = ({ title, desc, className, children }: { title: string; desc: string; className?: string; children?: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0A0A0B] p-8 group", className)}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold uppercase tracking-tight">{title}</h3>
        <p className="mt-2 text-white/40 text-sm max-w-[200px]">{desc}</p>
      </div>
      {children}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}
