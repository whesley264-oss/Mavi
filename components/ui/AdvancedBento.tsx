"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { Star, Zap, Sparkles, Shield, Cpu, Globe } from "lucide-react";

const items = [
  {
    title: "Sovereign Protocol",
    description: "Autonomia total através de sistemas descentralizados e autogestão extrema.",
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    className: "md:col-span-2 md:row-span-2",
    image: "/mavi-1.jpg",
  },
  {
    title: "Neural Synergy",
    description: "Conexão profunda entre intuição e processamento de alta velocidade.",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Reach",
    description: "Presença onipresente em redes digitais globais.",
    icon: <Globe className="w-6 h-6 text-cyan-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "High Octane",
    description: "Execução em milissegundos. Sem atrasos, apenas resultados.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    className: "md:col-span-1 md:row-span-2",
    image: "/mavi-2.jpg",
  },
  {
    title: "Stellar Aura",
    description: "O brilho da excelência que define novos padrões de luxo.",
    icon: <Star className="w-6 h-6 text-pink-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

export const AdvancedBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[18rem]">
      {items.map((item, index) => (
        <LiquidGlassCard
          key={index}
          className={`flex flex-col justify-end group/item ${item.className}`}
        >
          {item.image && (
            <motion.div
              className="absolute inset-0 z-0 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-40 group-hover/item:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>
          )}

          <div className="relative z-10">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-2">
              {item.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
              {item.description}
            </p>
          </div>

          <motion.div
            className="absolute top-6 right-6 opacity-0 group-hover/item:opacity-100 transition-opacity"
            whileHover={{ rotate: 45 }}
          >
            <Sparkles className="w-5 h-5 text-white/40" />
          </motion.div>
        </LiquidGlassCard>
      ))}
    </div>
  );
};
