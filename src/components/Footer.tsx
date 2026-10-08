import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL, EDUCATION, AVAILABILITY } from '../data/portfolio';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#121212] text-white border-t-4 border-[#121212] pt-8 sm:pt-14 pb-24 sm:pb-12 relative overflow-hidden">
      
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Callout Banner (Frosted Glass Card Box on Dark Footer) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          className="neo-box text-[#121212] border-3 border-[#121212] p-5 sm:p-8 mb-10 shadow-brutal-lg flex flex-col lg:flex-row items-center justify-between gap-6 transition-transform"
        >
          <div>
            <span className="neo-badge bg-neo-yellow text-[#121212] text-xs font-mono font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 inline mr-1" />
              {AVAILABILITY.status}
            </span>
            <h2 className="font-grotesk font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#121212]">
              LET'S BUILD THE{' '}
              <motion.span
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block my-1 transform -rotate-1 cursor-default"
              >
                NEXT GENERATION OF AI.
              </motion.span>
            </h2>
            <p className="font-body text-xs sm:text-sm font-semibold mt-2 text-neo-dark max-w-xl leading-relaxed">
              Open to Software Engineering, Full-Stack, Backend, and AI/ML internship opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL.resumePath}
              download="Om_Khade_Resume.pdf"
              className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-[#121212] text-xs sm:text-sm px-5 py-3 font-grotesk font-bold"
            >
              <Download className="w-4 h-4 text-[#121212]" />
              <span>DOWNLOAD RESUME</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="neo-btn bg-neo-red text-white hover:bg-red-600 text-xs sm:text-sm px-5 py-3 font-grotesk font-bold"
            >
              <Mail className="w-4 h-4" />
              <span>SCHEDULE INTERVIEW</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Links & Details Grid (Frosted Glass Container on Dark Background) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="neo-box text-[#121212] border-3 border-[#121212] p-5 sm:p-8 shadow-brutal grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8"
        >
          
          {/* Col 1: Bio & Live Clock */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-neo-yellow border-2 border-[#121212] shadow-brutal-sm text-[#121212] font-grotesk font-black text-base flex items-center justify-center">
                OK
              </div>
              <span className="font-grotesk font-black text-xl sm:text-2xl text-[#121212]">
                {PERSONAL.name}
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-neo-dark max-w-md leading-relaxed font-medium">
              {EDUCATION.degree} @ {EDUCATION.universityShort}. Building full-stack applications, backend APIs, and AI-powered systems.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold bg-neo-yellow text-[#121212] px-3 py-1.5 border-2 border-[#121212] shadow-brutal-sm">
              <span className="w-2 h-2 rounded-full bg-neo-green animate-pulse" />
              <span>KOLHAPUR, INDIA (IST): {time || '15:30:00 PM'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-1.5 font-mono text-xs">
            <span className="font-grotesk font-black text-xs sm:text-sm text-[#121212] uppercase block mb-2.5 border-b-2 border-[#121212] pb-1">
              NAVIGATION
            </span>
            <a href="#about" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → About Me
            </a>
            <a href="#projects" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → Featured Systems
            </a>
            <a href="#ai-sandbox" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → System Architecture Lab
            </a>
            <a href="#skills" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → Technical Stack
            </a>
            <a href="#hackathons" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → Hackathons
            </a>
            <a href="#education" className="block text-neo-dark hover:text-neo-blue font-bold transition-colors">
              → Education & Leadership
            </a>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-grotesk font-black text-xs sm:text-sm text-[#121212] uppercase block mb-2.5 border-b-2 border-[#121212] pb-1">
              PROFILES & CONTACT
            </span>
            
            <div className="flex items-center gap-2.5">
              <motion.a
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center hover:bg-neo-yellow transition-colors"
                title={`GitHub: ${PERSONAL.githubHandle}`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#121212]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center hover:bg-neo-cyan transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#121212]" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenContact}
                className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-[#121212] text-xs px-3.5 py-2 font-grotesk font-bold"
              >
                <span>SEND MESSAGE</span>
              </motion.button>
            </div>

            <div className="font-mono text-xs space-y-1 text-neo-dark pt-1">
              <p>
                📧 <a href={`mailto:${PERSONAL.email}`} className="font-bold hover:text-neo-blue underline">{PERSONAL.email}</a>
              </p>
              <p>
                📞 <a href={`tel:${PERSONAL.phone}`} className="font-bold hover:text-neo-blue underline">+91 {PERSONAL.phone}</a>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToTop}
              className="neo-btn bg-neo-paper hover:bg-neo-yellow text-[#121212] text-xs px-4 py-2 w-full flex items-center justify-between mt-2 font-grotesk font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#121212]" />
            </motion.button>
          </div>

        </motion.div>

        {/* Bottom copyright row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {PERSONAL.name}. Built with React & TypeScript.</p>
          <p className="font-bold text-gray-300">
            Engineered for technical recruiters & engineering teams
          </p>
        </div>

      </div>
    </footer>
  );
};
