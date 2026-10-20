import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './Motion';
import { ProjectCard3D } from './ProjectCard3D';
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
    <section id="projects" className="py-12 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2] dark:bg-[#0B0B0F] transition-colors relative">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        {/* Section Header with Category Filters */}
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

        {/* 3D Wheel Scroll Stream: Natural Scrolling with Cylinder Roll Rotation */}
        <div
          className="space-y-10 sm:space-y-16 lg:space-y-20 py-4"
          style={{ perspective: '1400px' }}
        >
          {filteredProjects.map((project, pIdx) => (
            <ProjectCard3D
              key={project.id || pIdx}
              project={project}
              index={pIdx}
              total={filteredProjects.length}
              onOpenModal={(proj) => setSelectedProject(proj)}
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
