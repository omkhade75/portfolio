import React from 'react';
import { ExternalLink, Layers, CheckCircle2, KeyRound } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { GithubIcon } from './Icons';
import type { ProjectData } from '../data/portfolio';

interface ProjectCard3DProps {
  project: ProjectData;
  index: number;
  total: number;
  direction: number;
  onOpenModal: (project: ProjectData) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  project,
  index,
  total,
  direction,
  onOpenModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // 3D Revolving Wheel physics variants
  const wheelVariants = {
    enter: (dir: number) => ({
      rotateX: shouldReduceMotion ? 0 : dir > 0 ? -52 : 52,
      y: shouldReduceMotion ? 0 : dir > 0 ? 110 : -110,
      z: shouldReduceMotion ? 0 : -320,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.88,
    }),
    center: {
      rotateX: 0,
      y: 0,
      z: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 340,
        damping: 28,
        mass: 0.9,
      },
    },
    exit: (dir: number) => ({
      rotateX: shouldReduceMotion ? 0 : dir > 0 ? 52 : -52,
      y: shouldReduceMotion ? 0 : dir > 0 ? -110 : 110,
      z: shouldReduceMotion ? 0 : -320,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.88,
      transition: {
        duration: 0.32,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
      },
    }),
  };

  const highlights = project?.engineeringHighlights || [];
  const tags = project?.tags || [];
  const archList = project?.architecture || [];
  const credentials = project?.demoCredentials || [];

  return (
    <motion.div
      custom={direction}
      variants={wheelVariants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 50%',
      }}
      className="w-full"
    >
      {/* 100% Solid Opaque Neo-Brutalist Frame (Zero Content Bleed-Through) */}
      <div className="neo-box p-4 sm:p-6 lg:p-8 border-3 border-[#121212] shadow-brutal-xl relative overflow-hidden bg-[#FAF7F2] dark:bg-[#141419] w-full">
        {/* Subtle Top Accent Border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-neo-yellow border-b border-[#121212]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start pt-1">
          {/* Left 7 Columns: Overview, Badges, Metrics & CTAs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            {/* Badge Bar */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 ${project.accentColor} border-2 border-[#121212] shadow-brutal-sm font-grotesk font-black text-xs flex items-center justify-center`}
              >
                {project.number}
              </span>
              <span className="neo-badge bg-neo-paper text-[10px] sm:text-xs font-mono font-bold text-[#121212]">
                {project.category}
              </span>
              <span className="neo-badge bg-neo-yellow text-[9px] sm:text-[10px] font-bold text-[#121212]">
                {project.badge}
              </span>
              <span
                className={`neo-badge text-[9px] sm:text-[10px] font-mono font-bold ml-auto sm:ml-0 flex items-center gap-1 ${
                  project.liveUrl ? 'bg-neo-green text-[#121212]' : 'bg-[#121212] text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.liveUrl ? 'bg-black animate-pulse' : 'bg-neo-green'
                  }`}
                />
                {project.statusBadge || (project.liveUrl ? 'LIVE DEMO' : 'LOCAL SYSTEM')}
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] text-neo-subtle font-bold ml-auto">
                WHEEL STAGE {index + 1} OF {total}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-grotesk font-black text-lg sm:text-2xl lg:text-3xl text-[#121212] dark:text-white leading-snug group-hover:text-neo-blue transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-xs sm:text-sm font-bold text-neo-blue mt-0.5 sm:mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-xs sm:text-sm text-neo-dark dark:text-gray-300 font-medium leading-relaxed">
              {project.description}
            </p>

            {/* Key Metrics Badges Bar */}
            {project.keyMetrics && project.keyMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
                {project.keyMetrics.map((km, kmIdx) => (
                  <div
                    key={kmIdx}
                    className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2 shadow-brutal-sm flex items-start gap-1.5"
                  >
                    <span className="text-sm shrink-0">{km.icon}</span>
                    <div className="min-w-0">
                      <span className="font-grotesk font-black text-[10px] sm:text-[11px] text-[#121212] dark:text-white block leading-tight truncate">
                        {km.title}
                      </span>
                      <span className="font-mono text-[8px] sm:text-[9px] text-neo-subtle block leading-tight truncate">
                        {km.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Demo Credentials Pill Bar (If Available) */}
            {credentials.length > 0 && (
              <div className="neo-glass-subtle p-2 sm:p-2.5 shadow-brutal-sm flex flex-wrap items-center gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-[#121212] dark:text-white text-[11px]">
                  <KeyRound className="w-3.5 h-3.5 text-neo-red" />
                  <span>DEMO ACCESS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                  {credentials.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="bg-white/95 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 font-bold text-[#121212] dark:text-white text-[10px]"
                    >
                      <span className="text-neo-blue">{c.role}:</span> {c.email} /{' '}
                      <span className="text-neo-red font-mono">{c.pass}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Chips */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] sm:text-[11px] font-bold bg-white/80 dark:bg-white/10 border border-[#121212] px-2.5 py-0.5 shadow-brutal-sm text-[#121212] dark:text-white hover:bg-neo-yellow hover:text-[#121212] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-2">
              {project.liveUrl ? (
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2 font-grotesk font-black text-[#121212] shadow-brutal cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LAUNCH LIVE DEMO</span>
                </motion.a>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn bg-neo-green text-[#121212] hover:bg-emerald-300 text-xs px-4 py-2 font-grotesk font-black shadow-brutal flex items-center gap-1.5 cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>EXPLORE REPOSITORY</span>
                </motion.a>
              )}

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenModal(project)}
                className="neo-btn bg-white hover:bg-neo-paper text-xs px-4 py-2 font-grotesk font-bold text-[#121212] shadow-brutal cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-neo-blue" />
                <span>ARCHITECTURE SPECS</span>
              </motion.button>

              {project.liveUrl && project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn bg-neo-paper hover:bg-white text-xs px-3 py-2 font-grotesk font-bold text-[#121212] cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SOURCE CODE</span>
                </motion.a>
              )}
            </div>
          </div>

          {/* Right 5 Columns: Architecture Highlights & Spec Box */}
          <div className="lg:col-span-5 space-y-2.5 neo-glass-subtle p-3.5 sm:p-4 shadow-brutal-sm">
            <div className="border-b-2 border-[#121212] pb-1.5 flex items-center justify-between font-mono text-xs font-bold">
              <span className="text-[#121212] dark:text-white uppercase">ENGINEERING SPECIFICATIONS</span>
              <span className="text-neo-green font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
              </span>
            </div>

            {/* Architecture list */}
            {archList.length > 0 && (
              <div className="space-y-1.5">
                {archList.slice(0, 4).map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2 shadow-brutal-sm flex items-start gap-2"
                  >
                    <span className="font-mono text-[9px] font-bold bg-[#121212] text-white px-1.5 py-0.5 shrink-0 mt-0.5">
                      0{aIdx + 1}
                    </span>
                    <p className="font-body text-[11px] sm:text-xs text-neo-dark dark:text-gray-300 font-medium leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="space-y-1 pt-1 border-t border-[#121212]/20">
                {highlights.slice(0, 2).map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-1.5 text-[11px] text-neo-dark dark:text-gray-300 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-neo-green shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
