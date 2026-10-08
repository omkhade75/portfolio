import React from 'react';
import { Briefcase, Award, CheckCircle2, Download, Mail, Code2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL, EDUCATION, AVAILABILITY } from '../data/portfolio';

interface RecruiterBriefProps {
  onOpenContact: () => void;
}

export const RecruiterBrief: React.FC<RecruiterBriefProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-neo-yellow/10 border-b-3 border-[#121212]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="neo-box bg-white p-5 sm:p-8 shadow-brutal-lg border-3 border-[#121212]"
        >
          
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#121212] pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neo-yellow border-3 border-[#121212] shadow-brutal-sm flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5 text-[#121212]" />
              </div>
              <div>
                <span className="neo-badge bg-neo-red text-white text-[10px] font-mono font-bold">
                  ABOUT ME // EXECUTIVE SUMMARY
                </span>
                <h3 className="font-grotesk font-black text-xl sm:text-2xl lg:text-3xl text-[#121212]">
                  RECRUITER SNAPSHOT — {PERSONAL.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="neo-badge bg-neo-green text-[#121212] text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse mr-1 inline-block" />
                {AVAILABILITY.status}
              </span>
            </div>
          </div>

          {/* About Me Narrative Block */}
          <div className="bg-[#FAF7F2] border-2 border-[#121212] p-4 sm:p-5 shadow-brutal-sm mb-6">
            <span className="neo-badge bg-neo-yellow text-[#121212] text-[10px] font-mono font-bold mb-2">
              PROFILE SUMMARY
            </span>
            <p className="font-body text-xs sm:text-sm text-[#121212] leading-relaxed font-medium">
              B.Tech CSE (AI &amp; Data Science) student at <strong>Sanjay Ghodawat University</strong> (NIAT Upskilling Program) with hands-on experience building full-stack applications, backend APIs, and database-driven systems. Skilled in <strong>React, JavaScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, and Supabase</strong>, with practical experience in REST APIs, authentication, RBAC/Row Level Security, and AI integrations. Actively seeking a <strong>Full Stack / SDE internship</strong> to build reliable, user-focused software.
            </p>
          </div>

          {/* Key Recruiter Highlights Grid (Staggered Children) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            
            {/* Box 1: Academics & Education */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="neo-glass-subtle p-4 shadow-brutal-sm group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neo-subtle uppercase mb-2">
                <GraduationCap className="w-4 h-4 text-neo-purple" />
                <span>EDUCATION & ACADEMICS</span>
              </div>
              <div className="space-y-1.5 font-body text-xs text-[#121212]">
                <p className="font-grotesk font-bold text-sm text-[#121212] group-hover:text-neo-blue transition-colors">
                  {EDUCATION.degree}
                </p>
                <p className="text-neo-dark font-medium">{EDUCATION.university}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="neo-badge bg-neo-yellow text-[10px] font-bold">
                    CGPA: {EDUCATION.cgpa}
                  </span>
                  <span className="neo-badge bg-neo-paper text-[10px] font-bold">
                    {EDUCATION.duration}
                  </span>
                  <span className="neo-badge bg-neo-cyan text-[10px] font-bold">
                    MHT-CET {EDUCATION.mhtCetPercentile}%ile
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Core Engineering & Languages */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="neo-glass-subtle p-4 shadow-brutal-sm group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neo-subtle uppercase mb-2">
                <Code2 className="w-4 h-4 text-neo-blue" />
                <span>CORE ENGINEERING</span>
              </div>
              <ul className="space-y-1 font-body text-xs text-[#121212]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0" />
                  <span><strong>Languages:</strong> C++, JavaScript, Python, SQL</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0" />
                  <span><strong>Full-Stack:</strong> React.js, Node.js, Express.js, REST APIs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0" />
                  <span><strong>Databases:</strong> PostgreSQL, MongoDB, Supabase, Prisma</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green shrink-0" />
                  <span><strong>Auth & Security:</strong> JWT, RBAC, Row Level Security</span>
                </li>
              </ul>
            </motion.div>

            {/* Box 3: Competition & Verified Highlights */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="bg-neo-yellow/25 backdrop-blur-md border-2 border-[#121212] p-4 shadow-brutal-sm group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#121212] uppercase mb-2">
                <Award className="w-4 h-4 text-neo-red" />
                <span>LEADERSHIP & AWARDS</span>
              </div>
              <ul className="space-y-1.5 font-body text-xs text-[#121212]">
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>E-Cell (SGU):</strong> General Secretary</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>NASA Space Apps:</strong> Participant</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>Smart India Hackathon:</strong> SIH Participant</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>Grand Finalist:</strong> OpenAI &amp; NIAT Hackathons</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>Projects:</strong> 3 Full-Stack &amp; AI Systems</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neo-red font-bold">★</span>
                  <span><strong>Mobility:</strong> Remote, Hybrid &amp; Relocation</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#121212]">
            <div className="font-mono text-xs font-bold text-neo-subtle flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL.email);
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2000);
                }}
                className="hover:text-neo-blue transition-colors flex items-center gap-1 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] px-2 py-0.5 shadow-brutal-sm"
                title="Click to copy email address"
              >
                <span>📧 {PERSONAL.email}</span>
                <span className="text-[10px] text-neo-green font-mono font-bold">
                  {copiedEmail ? '✓ COPIED' : '(COPY)'}
                </span>
              </button>
              <span className="hidden sm:inline">•</span>
              <span>📞 {PERSONAL.phone}</span>
              <span className="hidden sm:inline">•</span>
              <span>📍 {PERSONAL.location}</span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL.resumePath}
                download="Om_Khade_Resume.pdf"
                className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2.5 font-grotesk font-bold"
              >
                <Download className="w-3.5 h-3.5 text-[#121212]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenContact}
                className="neo-btn bg-neo-red text-white hover:bg-red-600 text-xs px-4 py-2.5 font-grotesk font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT FOR OPPORTUNITIES</span>
              </motion.button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
