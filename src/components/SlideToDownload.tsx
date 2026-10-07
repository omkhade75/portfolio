import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { Download, Check, ArrowRight } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

export const SlideToDownload: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [downloaded, setDownloaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const maxDrag = 220; // Maximum draggable distance in px
  const opacityText = useTransform(x, [0, maxDrag * 0.6], [1, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x >= maxDrag * 0.8) {
      setDownloaded(true);
      // Trigger download
      const link = document.createElement('a');
      link.href = PERSONAL.resumePath;
      link.download = 'Om_Khade_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloaded(false);
        x.set(0);
      }, 3500);
    } else {
      x.set(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[320px] sm:max-w-[340px] h-12 sm:h-14 bg-white dark:bg-[#121212] border-3 border-[#000000] shadow-brutal flex items-center p-1 select-none overflow-hidden ${className}`}
    >
      {/* Background Track Text */}
      <motion.div
        style={{ opacity: opacityText }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#000000] dark:text-white gap-1.5 pl-10"
      >
        <span>Slide to Download PDF</span>
        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
      </motion.div>

      {/* Draggable Knob */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: maxDrag }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
        style={{ x }}
        whileTap={{ cursor: 'grabbing' }}
        className={`w-10 h-10 sm:w-11 sm:h-11 bg-[#000000] text-white border-2 border-white shadow-brutal-sm flex items-center justify-center cursor-grab shrink-0 z-10 ${
          downloaded ? 'bg-[#000000] text-white' : ''
        }`}
      >
        {downloaded ? (
          <Check className="w-5 h-5 text-white" />
        ) : (
          <Download className="w-4 h-4 text-white" />
        )}
      </motion.div>

      {/* Success Notification Bar */}
      {downloaded && (
        <div className="absolute inset-0 bg-[#000000] text-white flex items-center justify-center font-mono text-xs font-black z-20">
          <Check className="w-4 h-4 mr-1.5" />
          <span>RESUME DOWNLOADED!</span>
        </div>
      )}
    </div>
  );
};
