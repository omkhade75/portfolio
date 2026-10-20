import React, { useMemo } from 'react';
import { ExternalLink, Layers, CheckCircle2, KeyRound } from 'lucide-react';
import { motion, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { GithubIcon } from './Icons';
import type { ProjectData } from '../data/portfolio';

interface ProjectCard3DProps {
  project: ProjectData;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isActive: boolean;
  onOpenModal: (project: ProjectData) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  project,
  index,
  total,
  scrollYProgress,
  isActive,
  onOpenModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Compute keyframes for this card in the 3D rotating wheel
  const keyframes = useMemo(() => {
    if (total <= 1) {
      return {
        range: [0, 1],
        rotateX: [0, 0],
        y: [0, 0],
        z: [0, 0],
        scale: [1, 1],
        opacity: [1, 1],
      };
    }

    const step = 1 / (total - 1);
    const C = index * step;
    const flatD = step * 0.28; // zone where card is flat and in full spotlight

    if (index === 0) {
      return {
        range: [0, flatD, step],
        rotateX: [0, 0, 48],
        y: [0, 0, -200],
        z: [0, 0, -320],
        scale: [1, 1, 0.82],
        opacity: [1, 1, 0],
      };
    } else if (index === total - 1) {
      return {
        range: [C - step, C - flatD, 1],
        rotateX: [-48, 0, 0],
        y: [200, 0, 0],
        z: [-320, 0, 0],
        scale: [0.82, 1, 1],
        opacity: [0, 1, 1],
      };
    } else {
      return {
        range: [C - step, C - flatD, C + flatD, C + step],
        rotateX: [-48, 0, 0, 48],
        y: [200, 0, 0, -200],
        z: [-320, 0, 0, -320],
        scale: [0.82, 1, 1, 0.82],
        opacity: [0, 1, 1, 0],
      };
    }
  }, [index, total]);

  const rotateX = useTransform(
    scrollYProgress,
    keyframes.range,
    shouldReduceMotion ? keyframes.range.map(() => 0) : keyframes.rotateX
  );

  const y = useTransform(
    scrollYProgress,
    keyframes.range,
    shouldReduceMotion ? keyframes.range.map(() => 0) : keyframes.y
  );

  const z = useTransform(
    scrollYProgress,
    keyframes.range,
    shouldReduceMotion ? keyframes.range.map(() => 0) : keyframes.z
  );

  const scale = useTransform(
    scrollYProgress,
    keyframes.range,
    shouldReduceMotion ? keyframes.range.map(() => 1) : keyframes.scale
  );

  const opacity = useTransform(
    scrollYProgress,
    keyframes.range,
    keyframes.opacity
  );

  const pointerEvents = useTransform(opacity, (val) =>
    val > 0.45 ? 'auto' : 'none'
  );

  const zIndex = useTransform(opacity, (val) =>
    val > 0.7 ? 30 : val > 0.1 ? 20 : 5
  );

  const highlights = project?.engineeringHighlights || [];
  const tags = project?.tags || [];
  const archList = project?.architecture || [];
  const credentials = project?.demoCredentials || [];

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        rotateX,
        y,
        z,
        scale,
        opacity,
        pointerEvents,
        zIndex,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 50%',
      }}
      className="w-full"
    >
      <div
        className={`neo-box p-4 sm:p-6 lg:p-7 border-2 sm:border-3 border-[#121212] shadow-brutal-lg relative overflow-hidden group transition-all duration-200 bg-white dark:bg-[#121218] ${
          isActive ? 'ring-2 ring-neo-yellow border-[#121212]' : 'hover:border-[#121212]'
        }`}
      >
        {/* Subtle 3D Cylinder Depth Edge Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#121212]/20 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          {/* Left 7 Columns: Overview, Badges, Metrics & CTAs */}
          <div className="lg:col-span-7 space-y-3">
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
                STAGE {index + 1} OF {total}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-grotesk font-black text-lg sm:text-2xl lg:text-3xl text-[#121212] dark:text-white leading-snug group-hover:text-neo-blue transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-xs sm:text-sm font-bold text-neo-blue mt-0.5">
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
                    className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2 shadow-brutal-sm flex items-start gap-1.5"
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
                      className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 font-bold text-[#121212] dark:text-white text-[10px]"
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
                    className="font-mono text-[10px] sm:text-[11px] font-bold bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2.5 py-0.5 shadow-brutal-sm text-[#121212] dark:text-white hover:bg-neo-yellow hover:text-[#121212] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {project.liveUrl ? (
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2 font-grotesk font-black text-[#121212] shadow-brutal"
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
                  className="neo-btn bg-neo-green text-[#121212] hover:bg-emerald-300 text-xs px-4 py-2 font-grotesk font-black shadow-brutal flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>EXPLORE REPOSITORY</span>
                </motion.a>
              )}

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenModal(project)}
                className="neo-btn bg-white/90 dark:bg-white/10 backdrop-blur-sm hover:bg-neo-paper text-xs px-4 py-2 font-grotesk font-bold text-[#121212] dark:text-white shadow-brutal"
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
                  className="neo-btn bg-neo-paper hover:bg-white text-xs px-3 py-2 font-grotesk font-bold text-[#121212]"
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
                <CheckCircle2 className="w-3 h-3" /> VERIFIED
              </span>
            </div>

            {/* Architecture list */}
            {archList.length > 0 && (
              <div className="space-y-1.5">
                {archList.slice(0, 4).map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2 shadow-brutal-sm flex items-start gap-2"
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
