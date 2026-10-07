import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, AlertCircle, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';
import type { ProjectData } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-5 sm:p-8 border-3 border-[#121212] shadow-brutal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between gap-4 border-b-3 border-[#121212] pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className={`w-10 h-10 ${project.accentColor} border-3 border-[#121212] shadow-brutal-sm font-grotesk font-black text-xl flex items-center justify-center`}>
                  {project.number}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="neo-badge bg-neo-paper text-[10px]">
                      {project.category}
                    </span>
                    <span className="neo-badge bg-neo-yellow text-[10px] font-bold">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="font-grotesk font-black text-xl sm:text-2xl text-[#121212] mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-9 h-9 bg-neo-paper hover:bg-neo-red hover:text-white border-2 border-[#121212] shadow-brutal-sm font-bold flex items-center justify-center transition-colors shrink-0"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Tagline Banner */}
            <div className="neo-glass-subtle p-3 mb-5 font-mono text-xs sm:text-sm font-bold text-[#121212]">
              💡 {project.tagline}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-[#121212] p-3.5 shadow-brutal-sm">
                <span className="font-mono text-xs font-bold uppercase text-neo-red flex items-center gap-1.5 mb-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  THE ENGINEERING CHALLENGE
                </span>
                <p className="font-body text-xs text-neo-dark leading-relaxed font-medium">
                  {project.problem}
                </p>
              </div>

              <div className="bg-neo-yellow/25 backdrop-blur-sm border-2 border-[#121212] p-3.5 shadow-brutal-sm">
                <span className="font-mono text-xs font-bold uppercase text-neo-green flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green" />
                  ARCHITECTURAL SOLUTION
                </span>
                <p className="font-body text-xs text-neo-dark leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Demo Credentials Box if available */}
            {project.demoCredentials && project.demoCredentials.length > 0 && (
              <div className="neo-glass-subtle p-3 mb-5 shadow-brutal-sm font-mono text-xs">
                <span className="font-bold text-[#121212] uppercase block mb-1.5">
                  🔑 LIVE DEMO TEST CREDENTIALS:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {project.demoCredentials.map((c, cIdx) => (
                    <span key={cIdx} className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2.5 py-1 font-bold text-[#121212]">
                      <span className="text-neo-blue">{c.role}:</span> {c.email} / <span className="text-neo-red font-mono">{c.pass}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Architecture Highlights */}
            <div className="space-y-2.5 mb-5">
              <h4 className="font-grotesk font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-neo-blue" />
                ARCHITECTURE & DATA FLOW
              </h4>
              <ul className="space-y-1.5 neo-glass-subtle p-3 shadow-brutal-sm">
                {(project.architecture || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-body text-xs text-neo-dark leading-relaxed">
                    <span className="text-neo-blue font-mono font-bold mt-0.5">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Engineering Implementation */}
            <div className="space-y-2.5 mb-5">
              <h4 className="font-grotesk font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-neo-dark" />
                KEY ENGINEERING HIGHLIGHTS
              </h4>
              <ul className="space-y-1.5">
                {(project.engineeringHighlights || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-body text-xs text-neo-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-6">
              <span className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-2">
                CORE TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(project.tags || []).map((tag, idx) => (
                  <span key={idx} className="font-mono text-[11px] font-bold bg-neo-paper border border-[#121212] px-2 py-0.5">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-[#121212]">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-btn bg-white hover:bg-neo-paper text-xs px-4 py-2.5 font-grotesk font-bold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>SOURCE REPOSITORY</span>
              </motion.a>

              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2.5 font-grotesk font-bold"
                >
                  <span>OPEN LIVE SYSTEM</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
