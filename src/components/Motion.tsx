import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Spring transition physics tailored for Neo-Brutalist snappy feel
export const springTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export const gentleSpring = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

// Reusable Framer Motion Variants
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// Reusable Animated Wrapper Components
interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeUp: React.FC<MotionProps> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer: React.FC<MotionProps> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<MotionProps> = ({ children, className = '' }) => (
  <motion.div variants={staggerItemVariants} className={className}>
    {children}
  </motion.div>
);

// Section Header with Engineering Index Tag (e.g. 01 // PROFILE, 02 // ARCHITECTURES)
interface SectionHeaderProps {
  index: string;
  badge: string;
  badgeColor?: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  badge,
  badgeColor = 'bg-neo-yellow text-[#121212]',
  title,
  description,
  action,
}) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
    <div>
      <div className="flex items-center gap-2 mb-2.5">
        <span className="font-mono text-xs font-black text-neo-blue bg-white border-2 border-[#121212] px-2 py-0.5 shadow-brutal-sm">
          {index}
        </span>
        <span className={`neo-badge ${badgeColor} text-[10px] font-mono font-bold`}>
          {badge}
        </span>
      </div>

      <h2 className="font-grotesk font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212]">
        {title}
      </h2>

      {description && (
        <p className="font-body text-xs sm:text-base text-neo-dark font-medium mt-2 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>

    {action && <div className="shrink-0">{action}</div>}
  </div>
);
