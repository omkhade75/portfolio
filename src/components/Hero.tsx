import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Download, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Hero3DCanvas } from './Hero3DCanvas';
import { PERSONAL, EDUCATION, AVAILABILITY } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { triggerHaptic } from '../utils/haptics';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('photo');
  const { theme } = useTheme();
  const isMono = theme === 'mono';

  const scrollTo = (id: string) => {
    triggerHaptic('light');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 border-b-3 border-[#121212] overflow-hidden bg-[#FAF7F2]">
      
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Availability Badge — Choreographed Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-5 inline-flex flex-wrap items-center gap-2"
        >
          <div className="neo-badge bg-neo-yellow text-[#121212] text-[10px] sm:text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-neo-green animate-pulse inline-block mr-1.5" />
            {AVAILABILITY.status}
          </div>
          <div className="hidden sm:inline-flex neo-badge bg-white text-[#121212] text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 mr-1 text-neo-red" />
            {PERSONAL.location}
          </div>
        </motion.div>

        {/* Main Grid: Left Details & Right 3D/Photo Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Bio, CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-6">

            {/* Profile Developer ID Badge Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="neo-box bg-white p-3 sm:p-4 shadow-brutal border-2 sm:border-3 border-[#121212] max-w-xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between border-b-2 border-[#121212] pb-1.5 sm:pb-2 mb-2 font-mono text-[9px] sm:text-[11px] font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neo-green animate-pulse" />
                  <span className="text-[#121212] uppercase tracking-wider truncate">ENGINEER ID • {PERSONAL.name}</span>
                </div>
                <span className="neo-badge bg-neo-yellow text-[#121212] text-[8px] sm:text-[9px] px-1.5 py-0.5">
                  VERIFIED
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-4">
                {/* Photo Frame with Mono Grayscale Hover Glow */}
                <div className={`w-14 h-14 sm:w-20 sm:h-20 border-2 sm:border-3 border-[#121212] shadow-brutal-sm bg-neo-yellow overflow-hidden shrink-0 group relative ${isMono ? 'rounded-2xl grayscale hover:grayscale-0 transition-all duration-500' : ''}`}>
                  <img
                    src={PERSONAL.profilePhoto}
                    alt={PERSONAL.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-neo-yellow text-[#121212] font-mono text-[6px] sm:text-[8px] font-black text-center border-t border-black">
                    AI & DS
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-0.5 sm:space-y-1 flex-1 min-w-0">
                  <h2 className="font-grotesk font-black text-base sm:text-2xl text-[#121212] leading-none truncate group-hover:text-neo-blue transition-colors">
                    {PERSONAL.name}
                  </h2>

                  <p className="font-grotesk font-bold text-[11px] sm:text-sm text-neo-blue leading-tight truncate">
                    {EDUCATION.degree}
                  </p>

                  <p className="font-mono text-[9px] sm:text-[11px] text-neo-dark font-medium truncate">
                    {EDUCATION.universityShort}
                  </p>

                  {/* Highlights Pills */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <span className="neo-badge bg-neo-yellow text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 text-[#121212]">
                      {EDUCATION.sem1SGPA} SGPA
                    </span>
                    <span className="neo-badge bg-neo-purple text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5">
                      GEN SEC • E-CELL
                    </span>
                    <span className="neo-badge bg-neo-cyan text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 text-[#121212]">
                      MHT-CET {EDUCATION.mhtCetPercentile}%ile
                    </span>
                    <span className="neo-badge bg-neo-red text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5">
                      NASA SPACE APPS
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1.5 sm:space-y-2"
            >
              {isMono ? (
                /* Editorial Luxury Headline for Mono Mode */
                <div className="space-y-2">
                  <p className="font-serif italic text-lg sm:text-2xl text-neutral-500">
                    Hello, I am
                  </p>
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#171717] leading-[1.05]">
                    Om Ajinath Khade
                  </h1>
                  <p className="font-sans text-xs sm:text-base text-neutral-600 font-medium tracking-wide">
                    AI & Full-Stack Engineer • Multi-Agent ERP Architect • <span className="font-semibold text-black">9.5 SGPA</span>
                  </p>
                </div>
              ) : (
                /* Classic Neo-Brutalist Headline for Solar, Cyber & Hyper */
                <h1 className="font-grotesk font-black text-2xl sm:text-4xl lg:text-5xl xl:text-[3.8rem] leading-[1.05] sm:leading-[1.02] tracking-tight text-[#121212]">
                  AI & DATA SCIENCE{' '}
                  <motion.span
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="bg-neo-yellow text-[#121212] px-1.5 sm:px-3 py-0.5 border-2 sm:border-3 border-[#121212] shadow-brutal inline-block my-1 transform -rotate-1 cursor-default"
                  >
                    ENGINEER
                  </motion.span>{' '}
                  — CRAFTING AGENTIC AI & FULL-STACK SYSTEMS.
                </h1>
              )}
            </motion.div>

            {/* Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className={`font-body text-xs sm:text-base text-neo-dark font-medium leading-relaxed max-w-2xl neo-glass p-3.5 sm:p-5 shadow-brutal ${isMono ? 'rounded-2xl border-neutral-200 shadow-sm' : ''}`}
            >
              Hi, I'm <strong className="font-bold underline decoration-neo-yellow decoration-4">Om Ajinath Khade</strong> — an ambitious engineering student specializing in Artificial Intelligence & Data Science at Next Wave Institute of Advanced Technology (collaborated with Sanjay Ghodawat University). Maintaining a <strong className="bg-neo-yellow text-[#121212] px-1 font-bold border border-black">{EDUCATION.sem1SGPA} SGPA</strong> while building enterprise multi-agent ERP platforms, AI voice streaming agents, and high-performance full-stack applications.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('projects')}
                className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs sm:text-sm px-4 sm:px-5 py-3 text-center justify-center font-grotesk font-bold text-[#121212]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              {/* Direct Resume Download Button across all modes */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 1 }}
                href={PERSONAL.resumePath}
                download="Om_Khade_Resume.pdf"
                className={`text-xs sm:text-sm px-4 sm:px-5 py-3 text-center justify-center font-grotesk font-bold flex items-center gap-2 transition-all ${
                  isMono
                    ? 'bg-white text-black rounded-full border border-neutral-300 shadow-md hover:bg-neutral-100'
                    : 'neo-btn bg-white/90 backdrop-blur-sm hover:bg-neo-paper text-[#121212]'
                }`}
              >
                <Download className="w-4 h-4 text-neo-blue" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('ai-sandbox')}
                className="neo-btn bg-neo-red text-white hover:bg-red-600 text-xs sm:text-sm px-4 py-3 text-center justify-center font-grotesk font-bold"
              >
                <Cpu className="w-4 h-4" />
                <span>SYSTEM ARCHITECTURE</span>
              </motion.button>
            </motion.div>

            {/* Executive Quick Stats Strip — Glassmorphism Tiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1"
            >
              <div className="neo-glass-subtle p-2.5 shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                <span className="font-grotesk font-black text-lg sm:text-xl text-[#121212] block leading-none">
                  9.5 <span className="text-xs font-mono font-bold text-neo-blue">SGPA</span>
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neo-subtle font-bold uppercase tracking-wider">
                  Academic Rank
                </span>
              </div>

              <div className="neo-glass-subtle p-2.5 shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                <span className="font-grotesk font-black text-lg sm:text-xl text-[#121212] block leading-none">
                  5 <span className="text-xs font-mono font-bold text-neo-green">DEPLOYED</span>
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neo-subtle font-bold uppercase tracking-wider">
                  Production Systems
                </span>
              </div>

              <div className="neo-glass-subtle p-2.5 shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                <span className="font-grotesk font-black text-lg sm:text-xl text-[#121212] block leading-none">
                  7 <span className="text-xs font-mono font-bold text-neo-red">HONORS</span>
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neo-subtle font-bold uppercase tracking-wider">
                  Hackathons & Space Apps
                </span>
              </div>

              <div className="neo-glass-subtle p-2.5 shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                <span className="font-grotesk font-black text-base sm:text-lg text-[#121212] block leading-none truncate">
                  GEN SEC
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neo-subtle font-bold uppercase tracking-wider truncate block">
                  E-Cell (SGU)
                </span>
              </div>
            </motion.div>

            {/* Quick Links / Social Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-2.5 sm:gap-3 pt-1"
            >
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neo-subtle">
                PROFILES:
              </span>
              <motion.a
                whileHover={{ scale: 1.12, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center hover:bg-neo-yellow transition-colors text-[#121212] ${isMono ? 'rounded-full border-neutral-300 shadow-sm' : ''}`}
                title={`GitHub: ${PERSONAL.githubHandle}`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center hover:bg-neo-cyan transition-colors text-[#121212] ${isMono ? 'rounded-full border-neutral-300 shadow-sm' : ''}`}
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.12, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenContact}
                className={`w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center hover:bg-neo-red hover:text-white transition-colors text-[#121212] ${isMono ? 'rounded-full border-neutral-300 shadow-sm' : ''}`}
                title={`Email: ${PERSONAL.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </motion.button>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Canvas / Photo Toggle Window (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className={`neo-box p-2.5 sm:p-3 border-2 sm:border-3 border-[#121212] shadow-brutal-lg ${isMono ? 'rounded-3xl border-neutral-200 shadow-xl overflow-hidden' : ''}`}>
              
              {/* Window Titlebar with Mode Switch Button */}
              <div className={`neo-glass-subtle p-1.5 sm:p-2 mb-2 flex items-center justify-between font-mono text-xs font-bold ${isMono ? 'rounded-xl border-neutral-200' : ''}`}>
                <div className="flex items-center gap-1 min-w-0">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neo-red border border-[#121212]" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neo-yellow border border-[#121212]" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neo-green border border-[#121212]" />
                  <span className="ml-1.5 font-bold text-[9px] sm:text-[11px] truncate uppercase text-[#121212]">
                    {viewMode === 'photo' ? 'ENGINEER_PORTRAIT.JPG' : 'NEURAL_3D_CORE.OBJ'}
                  </span>
                </div>

                {/* Switch Button (PHOTO / 3D) */}
                <div className={`flex items-center bg-white/90 backdrop-blur-sm border border-black sm:border-2 sm:border-[#121212] p-0.5 shadow-brutal-sm shrink-0 ${isMono ? 'rounded-full' : ''}`}>
                  <button
                    onClick={() => setViewMode('photo')}
                    className={`px-2 py-0.5 text-[9px] font-mono font-bold transition-all ${
                      viewMode === 'photo'
                        ? 'bg-neo-yellow text-[#121212] border border-[#121212] shadow-brutal-sm font-black'
                        : 'text-neo-subtle hover:text-[#121212]'
                    } ${isMono ? 'rounded-full' : ''}`}
                    title="View Profile Photo"
                  >
                    PHOTO
                  </button>
                  <button
                    onClick={() => setViewMode('3d')}
                    className={`px-2 py-0.5 text-[9px] font-mono font-bold transition-all ${
                      viewMode === '3d'
                        ? 'bg-neo-cyan text-[#121212] border border-[#121212] shadow-brutal-sm font-black'
                        : 'text-neo-subtle hover:text-[#121212]'
                    } ${isMono ? 'rounded-full' : ''}`}
                    title="Switch to 3D Neural Mesh"
                  >
                    3D CORE
                  </button>
                </div>
              </div>
              
              {/* Display Area: Photo (Default) or 3D Neural Canvas with Smooth Crossfade */}
              <AnimatePresence mode="wait">
                {viewMode === 'photo' ? (
                  <motion.div
                    key="photo-view"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className={`relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[490px] flex flex-col items-center justify-center bg-[#FAF7F2] p-4 sm:p-6 border-2 border-[#121212] overflow-hidden ${isMono ? 'rounded-2xl border-neutral-200' : ''}`}
                  >
                    {/* Background Grid Accent */}
                    <div className="absolute inset-3 border-2 border-dashed border-[#121212]/20 pointer-events-none" />

                    <div className={`w-full max-w-[280px] sm:max-w-[340px] aspect-[4/5] border-3 border-[#121212] shadow-brutal-lg bg-neo-yellow relative overflow-hidden group ${isMono ? 'rounded-2xl shadow-xl' : ''}`}>
                      <img
                        src={PERSONAL.profilePhoto}
                        alt={PERSONAL.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Name Badge */}
                      <div className="absolute top-3 left-3 neo-badge bg-neo-yellow text-[#121212] text-[9px] sm:text-[11px] font-bold shadow-brutal border-2 border-[#121212]">
                        ★ {PERSONAL.name}
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute top-3 right-3 neo-badge bg-neo-green text-[#121212] text-[8px] sm:text-[9px] font-mono font-bold shadow-brutal border-2 border-[#121212] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        AVAILABLE
                      </div>

                      {/* Bottom Credentials Footer */}
                      <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-sm border-2 border-[#121212] p-2 shadow-brutal font-mono text-[9px] sm:text-[11px] font-bold text-[#121212] flex justify-between items-center">
                        <span className="truncate">{EDUCATION.universityShort}</span>
                        <span className="neo-badge bg-neo-yellow text-[#121212] text-[8px] sm:text-[9px] px-1.5 py-0.5 shrink-0 border border-black">
                          {EDUCATION.sem1SGPA} SGPA
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="3d-view"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Hero3DCanvas />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
