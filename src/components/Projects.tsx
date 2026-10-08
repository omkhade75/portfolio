import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './Motion';
import { PROJECTS, type ProjectData } from '../data/portfolio';
import { triggerHaptic } from '../utils/haptics';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const categories = ['All', 'Full-Stack', 'AI Platform'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : (PROJECTS || []).filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="01 // FEATURED SYSTEMS"
          badge="FEATURED PROJECTS & ARCHITECTURES"
          badgeColor="bg-neo-yellow text-[#121212]"
          title={
            <>
              FEATURED <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block text-[#121212]">SYSTEMS.</span>
            </>
          }
          description="Full-stack applications and AI-powered systems built by Om Khade — featuring a decision intelligence OS, a multi-role hospital management system, and an enterprise voice agent platform."
          action={
            <div className="flex flex-wrap items-center gap-1.5 neo-glass p-1.5 shadow-brutal">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    triggerHaptic('selection');
                    setFilter(cat);
                  }}
                  className={`px-3 py-1 font-grotesk font-bold text-[11px] sm:text-xs uppercase transition-all shrink-0 active:scale-95 ${
                    filter === cat
                      ? 'bg-neo-yellow border border-[#121212] shadow-brutal-sm text-[#121212] -translate-y-0.5'
                      : 'text-neo-dark hover:bg-neo-paper hover:text-[#121212]'
                  }`}
                >
                  {cat === 'All' ? 'All Systems' : cat}
                </button>
              ))}
            </div>
          }
        />

        {/* High-Trust Engineering Systems Showcase */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, pIdx) => {
            const highlights = project?.engineeringHighlights || [];
            const tags = project?.tags || [];
            const archList = project?.architecture || [];
            const credentials = project?.demoCredentials || [];

            return (
              <motion.div
                key={project.id || pIdx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: pIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="neo-box p-5 sm:p-7 lg:p-8 border-2 sm:border-3 border-[#121212] shadow-brutal-lg relative overflow-hidden group hover:border-[#121212] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left 7 Columns: Core Overview, Credentials & Demos */}
                  <div className="lg:col-span-7 space-y-3.5">
                    
                    {/* Badge Bar */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`w-8 h-8 ${project.accentColor} border-2 border-[#121212] shadow-brutal-sm font-grotesk font-black text-xs flex items-center justify-center`}>
                        {project.number}
                      </span>
                      <span className="neo-badge bg-neo-paper text-[10px] sm:text-xs font-mono font-bold text-[#121212]">
                        {project.category}
                      </span>
                      <span className="neo-badge bg-neo-yellow text-[9px] sm:text-[10px] font-bold text-[#121212]">
                        {project.badge}
                      </span>
                      <span className="neo-badge bg-neo-green text-[#121212] text-[9px] sm:text-[10px] font-mono font-bold ml-auto sm:ml-0 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        LIVE DEMO
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="font-grotesk font-black text-xl sm:text-2xl lg:text-3xl text-[#121212] leading-snug group-hover:text-neo-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm font-bold text-neo-blue mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-body text-xs sm:text-sm text-neo-dark font-medium leading-relaxed">
                      {project.description}
                    </p>

                    {/* Demo Credentials Pill Bar (If Available) */}
                    {credentials.length > 0 && (
                      <div className="neo-glass-subtle p-2.5 sm:p-3 shadow-brutal-sm flex flex-wrap items-center gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 font-bold text-[#121212]">
                          <KeyRound className="w-3.5 h-3.5 text-neo-red" />
                          <span>DEMO ACCESS:</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[11px]">
                          {credentials.map((c, cIdx) => (
                            <span key={cIdx} className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 font-bold text-[#121212]">
                              <span className="text-neo-blue">{c.role}:</span> {c.email} / <span className="text-neo-red font-mono">{c.pass}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Chips */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] sm:text-[11px] font-bold bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2.5 py-0.5 shadow-brutal-sm text-[#121212] hover:bg-neo-yellow transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2.5 font-grotesk font-black text-[#121212] shadow-brutal"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LAUNCH LIVE DEMO</span>
                        </motion.a>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProject(project)}
                        className="neo-btn bg-white/90 backdrop-blur-sm hover:bg-neo-paper text-xs px-4 py-2.5 font-grotesk font-bold text-[#121212] shadow-brutal"
                      >
                        <Layers className="w-3.5 h-3.5 text-neo-blue" />
                        <span>ARCHITECTURE SPECS</span>
                      </motion.button>

                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="neo-btn bg-neo-paper hover:bg-white text-xs px-3.5 py-2.5 font-grotesk font-bold text-[#121212]"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">SOURCE CODE</span>
                        </motion.a>
                      )}
                    </div>

                  </div>

                  {/* Right 5 Columns: Architecture Highlights & Spec Box */}
                  <div className="lg:col-span-5 space-y-3 neo-glass-subtle p-4 sm:p-5 shadow-brutal-sm">
                    <div className="border-b-2 border-[#121212] pb-2 flex items-center justify-between font-mono text-xs font-bold">
                      <span className="text-[#121212] uppercase">ENGINEERING SPECIFICATIONS</span>
                      <span className="text-neo-green font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> VERIFIED
                      </span>
                    </div>

                    {/* Architecture list */}
                    {archList.length > 0 && (
                      <div className="space-y-2">
                        {archList.slice(0, 3).map((arch, aIdx) => (
                          <div
                            key={aIdx}
                            className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2.5 shadow-brutal-sm flex items-start gap-2.5"
                          >
                            <span className="font-mono text-[10px] font-bold bg-[#121212] text-white px-1.5 py-0.5 shrink-0 mt-0.5">
                              0{aIdx + 1}
                            </span>
                            <p className="font-body text-xs text-neo-dark font-medium leading-relaxed">
                              {arch}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    {highlights.length > 0 && (
                      <div className="space-y-1.5 pt-1 border-t border-[#121212]/20">
                        {highlights.slice(0, 2).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-neo-dark font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
