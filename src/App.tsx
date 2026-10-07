/**
 * Om Ajinath Khade — Engineering Portfolio Application Entry Point
 * 
 * Architecture:
 * - Framework: React 19 with Vite 8 & TypeScript 6
 * - Styling: Tailwind CSS v4 (Neo-Brutalist Light / Cyber Matrix / Hyper / Mono)
 * - Motion: Framer Motion physics-based transitions & Choreography
 * - 3D Graphics: HTML5 Canvas Polyhedral Neural Projection Core (60fps)
 * 
 * @author Om Ajinath Khade (omkhade09@gmail.com)
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringStrip } from './components/EngineeringStrip';
import { RecruiterBrief } from './components/RecruiterBrief';
import { Projects } from './components/Projects';
import { SystemArchitecture } from './components/SystemArchitecture';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Hackathons } from './components/Hackathons';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  // Global modal state for contact & interview scheduling
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#0B0B0F] text-[#121212] dark:text-[#F3F4F6] font-body selection:bg-[#FFDE00] selection:text-[#121212] relative overflow-x-clip transition-colors duration-200">
        {/* Desktop-only subtle custom cursor */}
        <CustomCursor />

        {/* Right edge vertical scroll progress indicator */}
        <ScrollProgress />

        {/* Top Header Navigation Bar & Mobile Dock */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Main Page Layout Sections */}
        <main className="pb-28 sm:pb-0 relative z-10">
          {/* 01. Hero: Developer Profile & 3D Neural Canvas Core */}
          <Hero onOpenContact={handleOpenContact} />

          {/* Continuous Engineering Telemetry Motion Strip */}
          <EngineeringStrip />

          {/* 02. Executive Recruiter Snapshot */}
          <RecruiterBrief onOpenContact={handleOpenContact} />

          {/* 03. Flagship Production Systems & Projects */}
          <Projects />

          {/* 04. System Architecture Lab */}
          <SystemArchitecture />

          {/* 05. Technical Highlights & Skills Matrix */}
          <SkillsMatrix />

          {/* 06. Competitions & Global Hackathons */}
          <Hackathons />

          {/* 07. Academic Timeline & Learning Journey */}
          <ExperienceTimeline />

          {/* 08. Verified Credentials & Certifications */}
          <Certificates />
        </main>

        {/* 09. Dark Footer with CTA & Live Clock */}
        <Footer onOpenContact={handleOpenContact} />

        {/* Interactive Contact & Interview Scheduling Modal */}
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </div>
    </ThemeProvider>
  );
}

export default App;
