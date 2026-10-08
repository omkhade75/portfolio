import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './Motion';
import { SKILL_CATEGORIES, CURRENTLY_LEARNING } from '../data/portfolio';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="03 // TECHNICAL SKILLS"
          badge="CORE STACK & COMPETENCIES"
          badgeColor="bg-neo-green text-[#121212]"
          title={
            <>
              TECHNICAL <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">STACK.</span>
            </>
          }
          description="Languages, frameworks, databases, and AI engineering tools used across deployed projects, academic builds, and competitive hackathons."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="neo-box p-4 sm:p-6 border-3 border-[#121212] shadow-brutal flex flex-col justify-between group"
            >
              <div>
                {/* Category Title Bar */}
                <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3 mb-4">
                  <span className="font-grotesk font-black text-base sm:text-lg text-[#121212] tracking-tight group-hover:text-neo-blue transition-colors">
                    {cat.title}
                  </span>
                  <span className={`w-3 h-3 ${cat.accent} border border-[#121212] rounded-none shadow-brutal-sm`} />
                </div>

                {/* Skill Chips with Micro-Hover Motion */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className="font-mono text-xs font-bold text-[#121212] bg-white/75 dark:bg-white/10 backdrop-blur-sm border-2 border-[#121212] px-3 py-1.5 shadow-brutal-sm hover:bg-neo-yellow hover:text-[#121212] hover:border-[#121212] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[#121212]/30 flex items-center justify-between font-mono text-[10px] text-neo-subtle">
                <span>{cat.skills.length} TECHNOLOGIES</span>
                <span className="text-neo-green font-bold">● VERIFIED IN BUILDS</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring / Active Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="neo-box p-5 sm:p-8 border-3 border-[#121212] shadow-brutal-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#121212] pb-3.5 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-neo-yellow border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4 text-[#121212]" />
              </div>
              <div>
                <span className="neo-badge bg-neo-cyan text-[#121212] text-[9px] font-mono font-bold">
                  ACTIVE ROADMAP
                </span>
                <h3 className="font-grotesk font-black text-lg sm:text-xl text-[#121212]">
                  CURRENTLY EXPLORING & STRENGTHENING
                </h3>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-neo-subtle flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neo-green animate-ping" />
              SEMESTER 3 ACTIVE DEEP-DIVES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative">
            {CURRENTLY_LEARNING.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="neo-glass-subtle p-3.5 shadow-brutal-sm flex items-start gap-2.5 hover:bg-neo-yellow/30 hover:border-neo-blue transition-all cursor-default"
              >
                <span className="w-5 h-5 bg-[#121212] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-brutal-sm">
                  0{idx + 1}
                </span>
                <p className="font-body text-xs font-bold text-[#121212] leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
