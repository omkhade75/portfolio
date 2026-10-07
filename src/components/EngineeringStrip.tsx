import React from 'react';
import { motion } from 'framer-motion';

export const EngineeringStrip: React.FC = () => {
  const techStack = [
    { name: 'C++', category: 'CORE DSA', accent: 'bg-neo-yellow text-[#121212]' },
    { name: 'PYTHON', category: 'AI / ML', accent: 'bg-neo-cyan text-[#121212]' },
    { name: 'TYPESCRIPT', category: 'TYPED FULL-STACK', accent: 'bg-white text-[#121212]' },
    { name: 'REACT 19', category: 'UI / CLIENT', accent: 'bg-neo-yellow text-[#121212]' },
    { name: 'NODE.JS', category: 'RUNTIME', accent: 'bg-neo-green text-[#121212]' },
    { name: 'NESTJS', category: 'ENTERPRISE REST', accent: 'bg-neo-red text-white' },
    { name: 'POSTGRESQL', category: 'DATABASE', accent: 'bg-neo-blue text-white' },
    { name: 'PRISMA ORM', category: 'DATA ACCESS', accent: 'bg-white text-[#121212]' },
    { name: 'MULTI-AGENT AI', category: 'AUTONOMOUS FLEET', accent: 'bg-neo-red text-white' },
    { name: 'VAPI AI VOICE', category: 'VOICE AGENTS', accent: 'bg-neo-cyan text-[#121212]' },
    { name: 'E-CELL SGU', category: 'GENERAL SECRETARY', accent: 'bg-neo-yellow text-[#121212]' },
    { name: 'NASA SPACE APPS', category: 'GLOBAL HONORS', accent: 'bg-neo-purple text-white' },
    { name: 'MONGODB ATLAS', category: 'NOSQL CATALOG', accent: 'bg-neo-green text-[#121212]' },
    { name: 'GIT & GITHUB', category: 'VERSIONING', accent: 'bg-white text-[#121212]' },
    { name: 'TAILWIND CSS', category: 'DESIGN TOKENS', accent: 'bg-neo-paper text-[#121212]' },
  ];

  // Tripled array for seamless infinite looping
  const items = [...techStack, ...techStack, ...techStack];

  return (
    <div className="border-b-3 border-[#121212] bg-[#121212] py-2.5 overflow-hidden relative select-none">
      
      {/* Left & Right Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: 'paused' }}
        className="flex items-center gap-4 sm:gap-6 whitespace-nowrap will-change-transform w-max"
      >
        {items.map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white group cursor-default"
          >
            <span className="w-1.5 h-1.5 bg-neo-yellow rounded-full animate-pulse" />
            <span className={`px-2.5 py-0.5 border border-[#121212] shadow-brutal-sm text-[11px] font-grotesk font-black tracking-wide ${tech.accent}`}>
              {tech.name}
            </span>
            <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase">
              {tech.category}
            </span>
            <span className="text-gray-600 font-bold ml-2">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
