"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Zap, Sparkles, Shield, Cpu, Globe, ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Sovereign Protocol",
    description: "Autonomia total através de sistemas descentralizados.",
    icon: <Shield className="w-8 h-8 text-[#FF00E6]" />,
    className: "md:col-span-2 md:row-span-2",
    image: "/mavi-1.jpg",
    tag: "Security"
  },
  {
    title: "Neural Synergy",
    description: "Conexão profunda entre intuição e IA.",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    className: "md:col-span-1 md:row-span-1",
    tag: "Intelligence"
  },
  {
    title: "Global Reach",
    description: "Presença onipresente em redes digitais.",
    icon: <Globe className="w-6 h-6 text-yellow-400" />,
    className: "md:col-span-1 md:row-span-1",
    tag: "Network"
  },
  {
    title: "Stellar Aura",
    description: "O brilho que define novos padrões de luxo.",
    icon: <Star className="w-6 h-6 text-purple-400" />,
    className: "md:col-span-1 md:row-span-2",
    image: "/mavi-5.jpg",
    tag: "Luxury"
  },
  {
    title: "High Octane",
    description: "Execução em milissegundos.",
    icon: <Zap className="w-6 h-6 text-[#FF00E6]" />,
    className: "md:col-span-1 md:row-span-1",
    tag: "Performance"
  },
];

export const AdvancedBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[18rem]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0B] group ${item.className}`}
        >
          {item.image && (
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
            </div>
          )}

          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                 {item.icon}
               </div>
               <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">{item.tag}</span>
            </div>

            <div>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="text-[#FF00E6]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
