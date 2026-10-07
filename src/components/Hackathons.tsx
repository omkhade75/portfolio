import React from 'react';
import { Trophy, Award, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './Motion';
import { HACKATHONS, type HackathonItem } from '../data/portfolio';

export const Hackathons: React.FC = () => {

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'RECOGNITION': return <Globe className="w-4 h-4 text-neo-yellow" />;
      case 'NATIONAL': return <Award className="w-4 h-4 text-neo-red" />;
      default: return <Code2 className="w-4 h-4 text-neo-cyan" />;
    }
  };

  return (
    <section id="hackathons" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="04 // HACKATHONS"
          badge="GLOBAL & NATIONAL COMPETITIONS"
          badgeColor="bg-neo-red text-white"
          title={
            <>
              HACKATHON <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">HONORS & TRACKS.</span>
            </>
          }
          description="Competitive hackathons, NASA space challenges, and national buildathons where Om Ajinath Khade engineered and deployed software solutions."
          action={
            <div className="hidden sm:flex items-center gap-2">
              <div className="neo-glass-subtle px-3 py-1.5 shadow-brutal font-mono text-xs font-bold text-center">
                <span className="text-neo-red font-black">7 VERIFIED COMPETITIONS</span>
              </div>
            </div>
          }
        />

        {/* 2-Column Responsive Arena Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {HACKATHONS.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -3 }}
                className="neo-box p-4 sm:p-5 border-2 sm:border-3 border-[#121212] shadow-brutal flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`neo-badge ${h.badgeColor} text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1`}>
                        {getTierIcon(h.tier)}
                        <span>{h.tier}</span>
                      </span>
                    </div>

                    <span className="font-mono text-xs font-black text-neo-dark bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 shadow-brutal-sm">
                      {h.year}
                    </span>
                  </div>

                  {/* Title & Host */}
                  <h3 className="font-grotesk font-black text-base sm:text-xl text-[#121212] mb-1 group-hover:text-neo-blue transition-colors leading-tight">
                    {h.title}
                  </h3>

                  <div className="font-mono text-[11px] font-bold text-neo-subtle mb-3">
                    HOST: {h.organizer}
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-neo-dark font-medium leading-relaxed mb-4">
                    {h.description}
                  </p>
                </div>

                {/* Stamped Award Badge Footer */}
                <div className="pt-3 border-t-2 border-[#121212] flex items-center justify-between bg-white/60 dark:bg-white/5 backdrop-blur-sm -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Trophy className="w-4 h-4 text-neo-yellow shrink-0" />
                    <span className="font-grotesk font-black text-xs text-[#121212] truncate">
                      {h.award}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] font-bold text-neo-blue shrink-0">
                    TRACK #0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};
