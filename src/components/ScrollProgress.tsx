import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
      setIsVisible(latest > 0.02);
    });
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 pointer-events-none select-none">
      {/* Percentage Pill */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-mono text-[9px] font-black bg-white border-2 border-[#121212] px-1.5 py-0.5 shadow-brutal-sm text-[#121212]"
      >
        {percent}%
      </motion.div>

      {/* Progress Track */}
      <div className="w-2.5 h-36 bg-[#FAF7F2] border-2 border-[#121212] shadow-brutal-sm relative overflow-hidden">
        <motion.div
          style={{ scaleY }}
          className="w-full bg-neo-yellow border-b border-[#121212] origin-top h-full"
        />
      </div>

      {/* Terminal Node */}
      <div className="w-2 h-2 bg-[#121212] rotate-45" />
    </div>
  );
};
