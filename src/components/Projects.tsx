import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './Motion';
import { ProjectCard3D } from './ProjectCard3D';
import { PROJECTS, type ProjectData } from '../data/portfolio';
import { triggerHaptic } from '../utils/haptics';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Full-Stack', 'AI Platform'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : (PROJECTS || []).filter((p) => p.category === filter);

  // Track scroll through the dedicated 3D wheel track
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Synchronously update active index as the wheel rotates
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (filteredProjects.length <= 1) {
      setActiveIndex(0);
      return;
    }
    const step = 1 / (filteredProjects.length - 1);
    const currentIdx = Math.min(
      Math.max(Math.round(latest / step), 0),
      filteredProjects.length - 1
    );
    if (currentIdx !== activeIndex) {
      setActiveIndex(currentIdx);
    }
  });

  // Smoothly rotate the wheel to a specific project card
  const scrollToProject = (idx: number) => {
    triggerHaptic('selection');
    setActiveIndex(idx);
    if (!trackRef.current) return;
    const trackEl = trackRef.current;
    const rect = trackEl.getBoundingClientRect();
    const trackTop = window.pageYOffset + rect.top;
    const trackHeight = trackEl.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollableDistance = Math.max(trackHeight - windowHeight, 0);

    const targetProgress = filteredProjects.length > 1
      ? idx / (filteredProjects.length - 1)
      : 0;

    const targetScrollY = trackTop + targetProgress * scrollableDistance;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToProject(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToProject(activeIndex + 1);
    }
  };

  // Helper to extract clean short name for navigator pills
  const getShortName = (title: string) => {
    if (title.includes('BIZORA')) return 'BIZORA AI';
    if (title.includes('MEDICARE')) return 'MEDICARE';
    if (title.includes('AGENTRIX')) return 'AGENTRIX';
    if (title.includes('ORBIT')) return 'ORBIT AI';
    return title.split('—')[0].trim();
  };

  return (
    <section id="projects" className="py-10 sm:py-16 border-b-3 border-[#121212] bg-[#FAF7F2] dark:bg-[#0B0B0F] transition-colors relative">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          index="01 // FEATURED SYSTEMS"
          badge="FEATURED PROJECTS & ARCHITECTURES"
          badgeColor="bg-neo-yellow text-[#121212]"
          title={
            <>
              FEATURED{' '}
              <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block text-[#121212]">
                SYSTEMS.
              </span>
            </>
          }
          description="Full-stack applications, local systems architectures, and enterprise AI platforms built by Om Khade — featuring an autonomous multi-tenant retail ERP, offline AI workstation, healthcare management, and voice agents."
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
                      : 'text-neo-dark dark:text-gray-300 hover:bg-neo-paper hover:text-[#121212]'
                  }`}
                >
                  {cat === 'All' ? 'All Systems' : cat}
                </button>
              ))}
            </div>
          }
        />

        {/* Interactive 3D Wheel Navigator Bar */}
        <div className="neo-glass-subtle p-2.5 sm:p-3 shadow-brutal-sm mb-6 sm:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-neo-green animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neo-blue" />
              <span>3D REVOLVING WHEEL:</span>
            </span>
            <span className="neo-badge bg-[#121212] text-white text-[10px] font-mono font-bold">
              0{activeIndex + 1} / 0{filteredProjects.length} IN FOCUS
            </span>
          </div>

          {/* Quick Jump Project Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto py-0.5">
            {filteredProjects.map((proj, pIdx) => (
              <button
                key={proj.id}
                onClick={() => scrollToProject(pIdx)}
                className={`px-2.5 py-1 text-[10px] sm:text-[11px] font-grotesk font-black uppercase border transition-all shrink-0 cursor-pointer ${
                  activeIndex === pIdx
                    ? 'bg-neo-yellow text-[#121212] border-[#121212] shadow-brutal-sm -translate-y-0.5 font-extrabold'
                    : 'bg-white/80 dark:bg-white/10 text-neo-dark dark:text-gray-300 border-[#121212]/30 hover:border-[#121212]'
                }`}
              >
                0{pIdx + 1} {getShortName(proj.title)}
              </button>
            ))}
          </div>

          {/* Next / Previous Quick Step Buttons */}
          <div className="flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-1.5 border border-[#121212] neo-glass text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                activeIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-neo-yellow active:scale-95 shadow-brutal-sm text-[#121212] dark:text-white cursor-pointer'
              }`}
              title="Rotate Wheel to Previous Project"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px]">PREV</span>
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === filteredProjects.length - 1}
              className={`p-1.5 border border-[#121212] neo-glass text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                activeIndex === filteredProjects.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-neo-yellow active:scale-95 shadow-brutal-sm text-[#121212] dark:text-white cursor-pointer'
              }`}
              title="Rotate Wheel to Next Project"
            >
              <span className="hidden sm:inline text-[10px]">NEXT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scroll Track: Drives the 3D Wheel Rotation as the user scrolls */}
        <div
          ref={trackRef}
          className="relative"
          style={{
            height: `${Math.max(filteredProjects.length * 85, 200)}vh`,
          }}
        >
          {/* Pinned 3D Wheel Stage Viewport */}
          <div
            className="sticky top-20 sm:top-24 lg:top-26 w-full z-10"
            style={{
              perspective: '1600px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative w-full min-h-[580px] sm:min-h-[520px] lg:h-[490px]">
              {filteredProjects.map((project, pIdx) => (
                <ProjectCard3D
                  key={project.id || pIdx}
                  project={project}
                  index={pIdx}
                  total={filteredProjects.length}
                  scrollYProgress={scrollYProgress}
                  isActive={activeIndex === pIdx}
                  onOpenModal={(proj) => setSelectedProject(proj)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
