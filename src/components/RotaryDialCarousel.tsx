import React, { useState } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface RotaryDialCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemKey: (item: T) => string;
  getItemTitle?: (item: T) => string;
  dialLabel?: string;
}

export function RotaryDialCarousel<T>({
  items,
  renderItem,
  itemKey,
  getItemTitle,
  dialLabel = 'DECK',
}: RotaryDialCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleDial = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    triggerHaptic('selection');
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    triggerHaptic('selection');
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    triggerHaptic('selection');
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -400) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 400) {
      handlePrev();
    }
  };

  const currentItem = items[currentIndex];
  const itemTitle = getItemTitle ? getItemTitle(currentItem) : `ITEM 0${currentIndex + 1}`;

  return (
    <div className="w-full select-none">
      
      {/* Sleek Interactive Deck Header & Controller */}
      <div className="flex items-center justify-between gap-2 mb-3 bg-white border-2 sm:border-3 border-[#121212] p-2 sm:p-2.5 shadow-brutal">
        
        {/* Left: Active Item Pill */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="neo-badge bg-neo-yellow text-[#121212] text-[10px] sm:text-xs font-mono font-black shrink-0">
            0{currentIndex + 1} / 0{items.length}
          </span>
          <span className="font-grotesk font-black text-xs sm:text-sm text-[#121212] truncate">
            {itemTitle}
          </span>
        </div>

        {/* Right: Controller Hardware Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FAF7F2] hover:bg-neo-yellow active:scale-90 border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center text-[#121212] transition-transform"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FAF7F2] hover:bg-neo-yellow active:scale-90 border-2 border-[#121212] shadow-brutal-sm flex items-center justify-center text-[#121212] transition-transform"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Swipeable Viewport Canvas */}
      <div className="relative overflow-hidden touch-pan-y min-h-[360px] sm:min-h-[420px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={itemKey(currentItem)}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            {renderItem(currentItem, currentIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tactile Hardware Dial Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 pt-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDial(idx)}
            className={`h-2.5 transition-all rounded-full border border-[#121212] ${
              currentIndex === idx
                ? 'w-7 sm:w-8 bg-neo-yellow shadow-brutal-sm'
                : 'w-2.5 bg-white hover:bg-neutral-300'
            }`}
            aria-label={`Slide to item ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
