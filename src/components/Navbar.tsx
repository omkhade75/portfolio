import React, { useState, useEffect } from 'react';
import {
  Code,
  Cpu,
  FolderGit2,
  Mail,
  User,
  Download,
  FileText,
  Trophy,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { triggerHaptic } from '../utils/haptics';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isMono = theme === 'mono';
  const isDark = theme === 'cyber' || theme === 'hyper' || theme === 'mono';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'projects', 'ai-sandbox', 'skills', 'hackathons', 'experience'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FolderGit2, color: 'bg-neo-yellow text-[#121212]' },
    { id: 'ai-sandbox', label: 'Architecture', icon: Cpu, color: 'bg-neo-cyan text-[#121212]' },
    { id: 'skills', label: 'Skills', icon: Code, color: 'bg-neo-green text-[#121212]' },
    { id: 'hackathons', label: 'Hackathons', icon: Trophy, color: 'bg-neo-red text-white' },
    { id: 'experience', label: 'Education', icon: User, color: 'bg-white text-[#121212]' },
  ];

  const scrollTo = (id: string) => {
    triggerHaptic('selection');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ========== TOP HEADER BAR ========== */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? isDark
              ? 'py-2 bg-[#0E0E12]/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
              : 'py-2 bg-[#FAF7F2]/85 backdrop-blur-xl border-b-2 border-[#121212] shadow-sm'
            : 'py-2.5 sm:py-3.5 bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12 flex items-center justify-between gap-2">
          
          {/* LEFT: Clean Logo */}
          <a
            href="#hero"
            onClick={() => triggerHaptic('light')}
            className="flex items-center gap-2 group shrink-0"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`w-7 h-7 sm:w-9 sm:h-9 bg-neo-yellow border-2 sm:border-3 border-[#121212] shadow-brutal-sm font-grotesk font-black text-xs sm:text-base flex items-center justify-center text-[#121212] shrink-0 ${
                isMono ? 'rounded-lg' : ''
              }`}
            >
              OK
            </motion.div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-grotesk font-black text-xs sm:text-base tracking-tight leading-none truncate ${
                  isDark ? 'text-white' : 'text-[#121212]'
                }`}
              >
                {PERSONAL.nameShort}
              </span>
              <span className="hidden sm:inline font-mono text-[7px] sm:text-[9px] font-bold tracking-wider text-neo-subtle uppercase truncate">
                FULL STACK DEVELOPER
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Nav Items (Strictly md+ only) with Frosted Glass Sheen */}
          <nav className="hidden md:flex items-center gap-1 bg-white/85 dark:bg-[#161622]/85 backdrop-blur-md border-2 sm:border-3 border-[#121212] dark:border-[#444] p-1 shadow-brutal rounded-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 font-grotesk font-bold text-xs uppercase transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? `${item.color} border-2 border-[#121212] shadow-brutal-sm -translate-y-0.5`
                      : 'hover:bg-neo-paper text-[#121212] dark:text-gray-200 dark:hover:bg-[#222232]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          {/* RIGHT: DESKTOP & MOBILE CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Professional Theme Switcher */}
            <ThemeToggle />

            {/* Desktop Resume & Contact */}
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL.resumePath}
              download="Om_Khade_Resume.pdf"
              className="hidden lg:inline-flex neo-btn bg-white/90 dark:bg-[#161622]/90 backdrop-blur-sm dark:text-white hover:bg-neo-paper text-xs px-3.5 py-2 font-grotesk font-bold"
              title="Download Om Khade Resume"
            >
              <FileText className="w-3.5 h-3.5 text-neo-blue" />
              <span>RESUME</span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="hidden sm:inline-flex neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-3.5 py-2 font-grotesk font-bold text-[#121212]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* ========== HIGH-CONTRAST MOBILE FLOATING DOCK (TOUCH OPTIMIZED FROSTED GLASS) ========== */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 safe-bottom">
        <div
          className={`backdrop-blur-2xl py-2 px-2 flex items-center justify-around gap-1 rounded-2xl transition-colors duration-200 shadow-2xl ${
            isDark
              ? 'bg-[#18181D]/85 border border-white/20 text-white'
              : 'bg-white/85 border-2 border-[#121212] shadow-brutal-lg text-[#121212]'
          }`}
        >
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`min-h-[44px] min-w-[48px] py-1.5 px-2 flex flex-col items-center justify-center gap-0.5 font-grotesk font-bold text-[9px] uppercase transition-all rounded-xl active:scale-90 ${
                  isActive
                    ? isDark
                      ? 'bg-white text-black font-extrabold shadow-md -translate-y-0.5'
                      : 'bg-neo-yellow text-black border border-[#121212] -translate-y-0.5 shadow-brutal-sm'
                    : isDark
                    ? 'text-neutral-300 hover:text-white active:bg-white/10'
                    : 'text-neutral-700 hover:text-black active:bg-neutral-100'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="tracking-tight">{item.label.slice(0, 5)}</span>
              </button>
            );
          })}
          
          {/* Contact CTA in bottom dock */}
          <button
            onClick={() => {
              triggerHaptic('medium');
              onOpenContact();
            }}
            className={`min-h-[44px] min-w-[48px] py-1.5 px-2 flex flex-col items-center justify-center gap-0.5 font-grotesk font-bold text-[9px] uppercase rounded-xl active:scale-90 transition-all ${
              isDark
                ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                : 'bg-neo-cyan text-black border border-[#121212] shadow-brutal-sm'
            }`}
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="tracking-tight">Talk</span>
          </button>
          
          {/* CV Download CTA */}
          <a
            href={PERSONAL.resumePath}
            download="Om_Khade_Resume.pdf"
            onClick={() => triggerHaptic('success')}
            className="min-h-[44px] min-w-[48px] py-1.5 px-2.5 bg-neo-yellow text-black border border-[#121212] shadow-brutal-sm font-grotesk font-extrabold text-[9px] uppercase flex flex-col items-center justify-center gap-0.5 active:translate-y-0.5 rounded-xl shrink-0 active:scale-90"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span className="tracking-tight">CV</span>
          </a>
        </div>
      </div>
    </>
  );
};
