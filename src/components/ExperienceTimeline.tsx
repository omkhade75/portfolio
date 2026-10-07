import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './Motion';
import { TIMELINE } from '../data/portfolio';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="05 // EXPERIENCE & EDUCATION"
          badge="ACADEMIC & LEADERSHIP MILESTONES"
          badgeColor="bg-neo-purple text-white"
          title={
            <>
              EXPERIENCE & <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">EDUCATION.</span>
            </>
          }
          description="Chronological engineering journey, academic milestones, and entrepreneurial leadership of Om Ajinath Khade."
        />

        {/* Brutalist Vertical Timeline with Animated Progress Line */}
        <div className="relative border-l-4 border-[#121212] ml-3 sm:ml-8 space-y-6 sm:space-y-8 pl-5 sm:pl-10">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Node Bullet Marker with Pulsing Active Effect */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 10 }}
                className={`absolute -left-[31px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-10 sm:h-10 ${item.accent} border-2 sm:border-3 border-[#121212] shadow-brutal-sm flex items-center justify-center font-bold z-10 font-mono text-xs`}
              >
                0{idx + 1}
                {idx === 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neo-green rounded-full animate-ping" />
                )}
              </motion.div>

              {/* Card Container */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="neo-box p-4 sm:p-6 lg:p-7 border-2 sm:border-3 border-[#121212] shadow-brutal"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="neo-badge bg-white/80 dark:bg-white/10 backdrop-blur-sm text-[#121212] text-xs font-mono font-bold">
                    {item.period}
                  </span>
                  {item.metric && (
                    <span className="neo-badge bg-neo-yellow text-[#121212] text-xs font-mono font-bold">
                      {item.metric}
                    </span>
                  )}
                </div>

                <h3 className="font-grotesk font-black text-base sm:text-xl lg:text-2xl text-[#121212] mb-1.5 leading-snug group-hover:text-neo-blue transition-colors">
                  {item.title}
                </h3>

                <div className="font-mono text-xs font-bold text-neo-subtle mb-3">
                  ORGANIZATION: {item.organization}
                </div>

                <p className="font-body text-xs sm:text-sm text-neo-dark leading-relaxed font-medium mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {item.tags.map((t, tidx) => (
                    <motion.span
                      key={tidx}
                      whileHover={{ scale: 1.05 }}
                      className="font-mono text-[10px] sm:text-[11px] font-bold text-[#121212] bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 shadow-brutal-sm hover:bg-neo-yellow hover:text-[#121212] transition-colors cursor-default"
                    >
                      #{t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
