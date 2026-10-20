import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './Motion';
import { ProjectCard3D } from './ProjectCard3D';
import { PROJECTS, type ProjectData } from '../data/portfolio';
import { triggerHaptic } from '../utils/haptics';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const isThrottled = useRef<boolean>(false);
  const touchStartY = useRef<number | null>(null);

  const categories = ['All', 'Full-Stack', 'AI Platform'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : (PROJECTS || []).filter((p) => p.category === filter);

  // Clamp active index if filter changes
  useEffect(() => {
    setActiveIndex(0);
    setDirection(1);
  }, [filter]);

  const currentProject = filteredProjects[activeIndex] || filteredProjects[0];

  const handleSelectProject = (newIdx: number) => {
    if (newIdx === activeIndex) return;
    triggerHaptic('selection');
    setDirection(newIdx > activeIndex ? 1 : -1);
    setActiveIndex(newIdx);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      triggerHaptic('selection');
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredProjects.length - 1) {
      triggerHaptic('selection');
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  };

  // Mouse wheel scroll to rotate wheel naturally
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 35) return;
    if (isThrottled.current) return;

    if (e.deltaY > 0) {
      // User scrolling down -> rotate to next project if available
      if (activeIndex < filteredProjects.length - 1) {
        e.preventDefault();
        isThrottled.current = true;
        setDirection(1);
        setActiveIndex((prev) => prev + 1);
        triggerHaptic('selection');
        setTimeout(() => {
          isThrottled.current = false;
        }, 600);
      }
    } else if (e.deltaY < 0) {
      // User scrolling up -> rotate to previous project if available
      if (activeIndex > 0) {
        e.preventDefault();
        isThrottled.current = true;
        setDirection(-1);
        setActiveIndex((prev) => prev - 1);
        triggerHaptic('selection');
        setTimeout(() => {
          isThrottled.current = false;
        }, 600);
      }
    }
  };

  // Mobile Touch Swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0 && activeIndex < filteredProjects.length - 1) {
        // Swiped up -> next
        handleNext();
      } else if (diffY < 0 && activeIndex > 0) {
        // Swiped down -> prev
        handlePrev();
      }
    }
  };

  const getShortName = (title: string) => {
    if (title.includes('BIZORA')) return 'BIZORA AI';
    if (title.includes('MEDICARE')) return 'MEDICARE';
    if (title.includes('AGENTRIX')) return 'AGENTRIX';
    if (title.includes('ORBIT')) return 'ORBIT AI';
    return title.split('—')[0].trim();
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2] dark:bg-[#0B0B0F] transition-colors relative overflow-hidden">
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
                  className={`px-3 py-1 font-grotesk font-bold text-[11px] sm:text-xs uppercase transition-all shrink-0 active:scale-95 cursor-pointer ${
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

        {/* Interactive 3D Wheel Controller Bar */}
        <div className="neo-glass-subtle p-3 sm:p-3.5 shadow-brutal-sm mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-neo-green animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-neo-blue animate-spin-slow" />
              <span>3D REVOLVING WHEEL:</span>
            </span>
            <span className="neo-badge bg-[#121212] text-white text-[10px] font-mono font-bold">
              0{activeIndex + 1} OF 0{filteredProjects.length} IN SPOTLIGHT
            </span>
            <span className="text-[10px] text-neo-subtle hidden lg:inline">
              (SCROLL OR SWIPE OVER CARD TO ROTATE)
            </span>
          </div>

          {/* Quick Jump Project Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto py-0.5">
            {filteredProjects.map((proj, pIdx) => (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(pIdx)}
                className={`px-3 py-1.5 text-[11px] font-grotesk font-black uppercase border-2 transition-all shrink-0 cursor-pointer ${
                  activeIndex === pIdx
                    ? 'bg-neo-yellow text-[#121212] border-[#121212] shadow-brutal-sm -translate-y-0.5 font-extrabold'
                    : 'bg-white dark:bg-white/10 text-neo-dark dark:text-gray-300 border-[#121212]/30 hover:border-[#121212]'
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
              className={`px-3 py-1.5 border-2 border-[#121212] text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                activeIndex === 0
                  ? 'opacity-30 cursor-not-allowed bg-gray-200 dark:bg-gray-800'
                  : 'bg-white dark:bg-white/10 hover:bg-neo-yellow hover:text-[#121212] active:scale-95 shadow-brutal-sm text-[#121212] dark:text-white cursor-pointer'
              }`}
              title="Rotate Wheel to Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[11px] font-grotesk font-black">PREV</span>
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === filteredProjects.length - 1}
              className={`px-3 py-1.5 border-2 border-[#121212] text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                activeIndex === filteredProjects.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-gray-200 dark:bg-gray-800'
                  : 'bg-white dark:bg-white/10 hover:bg-neo-yellow hover:text-[#121212] active:scale-95 shadow-brutal-sm text-[#121212] dark:text-white cursor-pointer'
              }`}
              title="Rotate Wheel to Next Project"
            >
              <span className="text-[11px] font-grotesk font-black">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Vertically Centered 3D Revolving Wheel Stage (Middle of Screen) */}
        <div
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full min-h-[560px] sm:min-h-[500px] lg:min-h-[460px] flex items-center justify-center my-6 overflow-visible"
          style={{
            perspective: '1400px',
            transformStyle: 'preserve-3d',
          }}
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            {currentProject && (
              <ProjectCard3D
                key={currentProject.id}
                project={currentProject}
                index={activeIndex}
                total={filteredProjects.length}
                direction={direction}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Wheel Step Indicators Bar */}
        <div className="flex items-center justify-center gap-2 pt-4 font-mono text-xs">
          {filteredProjects.map((_, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSelectProject(pIdx)}
              className={`transition-all cursor-pointer h-2 rounded-full border border-[#121212] ${
                activeIndex === pIdx
                  ? 'w-8 bg-neo-yellow shadow-brutal-sm'
                  : 'w-2 bg-[#121212]/30 hover:bg-[#121212]'
              }`}
              title={`Go to Stage 0${pIdx + 1}`}
            />
          ))}
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
