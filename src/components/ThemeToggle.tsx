import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { triggerHaptic } from '../utils/haptics';

export const ThemeToggle: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false,
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'cyber' || theme === 'hyper' || theme === 'mono';

  const toggleLightDark = () => {
    triggerHaptic('selection');
    if (isDark) {
      setTheme('solar');
    } else {
      setTheme('cyber');
    }
  };

  // Minimal single-button icon cycler (for mobile & tight spaces)
  if (compact) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleLightDark}
        className={`w-8 h-8 border-2 border-[#121212] dark:border-[#444] flex items-center justify-center shadow-brutal-sm transition-all shrink-0 ${
          isDark
            ? 'bg-[#161622] text-white hover:bg-[#222232]'
            : 'bg-neo-yellow text-[#121212] hover:bg-neo-yellowHover'
        } ${className}`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        aria-label="Toggle theme mode"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
        )}
      </motion.button>
    );
  }

  // Desktop Sleek Professional [ LIGHT | DARK ] Segmented Control
  return (
    <div
      className={`inline-flex items-center bg-white dark:bg-[#161622] border-2 border-[#121212] dark:border-[#444] p-0.5 shadow-brutal-sm select-none gap-0.5 ${className}`}
    >
      <button
        onClick={() => {
          triggerHaptic('selection');
          setTheme('solar');
        }}
        className={`px-2.5 py-1 text-xs font-grotesk font-black uppercase transition-all flex items-center gap-1.5 shrink-0 ${
          !isDark
            ? 'bg-neo-yellow text-[#121212] border border-[#121212] shadow-brutal-sm font-extrabold -translate-y-0.2'
            : 'text-gray-500 hover:text-[#121212] dark:hover:text-white'
        }`}
        title="Switch to Light Theme"
      >
        <Sun className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        <span>LIGHT</span>
      </button>

      <button
        onClick={() => {
          triggerHaptic('selection');
          setTheme('cyber');
        }}
        className={`px-2.5 py-1 text-xs font-grotesk font-black uppercase transition-all flex items-center gap-1.5 shrink-0 ${
          isDark
            ? 'bg-[#121212] text-white border border-[#333] shadow-brutal-sm font-extrabold -translate-y-0.2'
            : 'text-gray-500 hover:text-[#121212] dark:hover:text-white'
        }`}
        title="Switch to Dark Theme"
      >
        <Moon className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
        <span>DARK</span>
      </button>
    </div>
  );
};
