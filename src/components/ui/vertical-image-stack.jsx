import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playHoverSound, playClickSound } from '../../utils/audioEngine';

export function VerticalImageStack({
  items = [],
  pinnedScrollProgress = null,
  autoPlay = false,
  autoPlayDuration = 3500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Sync scroll progress from parent sticky section if provided
  useEffect(() => {
    if (pinnedScrollProgress !== null && pinnedScrollProgress !== undefined && items.length > 0) {
      const targetIndex = Math.min(
        items.length - 1,
        Math.floor(pinnedScrollProgress * items.length)
      );
      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    }
  }, [pinnedScrollProgress, items.length, currentIndex]);

  // Autoplay fallback if not scroll-pinned
  useEffect(() => {
    if (!autoPlay || pinnedScrollProgress !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayDuration);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayDuration, items.length, pinnedScrollProgress]);

  const handleNext = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[650px] min-h-[580px] bg-[#040507] text-white rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none shadow-2xl"
    >
      {/* Background Volumetric Light & Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(169,50,7,0.18),transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      {/* Top Header Bar */}
      <div className="relative z-30 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#A93207] animate-pulse" />
          <span className="text-xs font-mono tracking-[0.25em] text-white/70 font-bold uppercase">
            VERTICAL IMAGE STACK
          </span>
        </div>

        {/* Step Indicator Bullets */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                playClickSound();
                setCurrentIndex(idx);
              }}
              className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#A93207]'
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Numeric Counter */}
        <div className="font-mono text-xs font-bold text-white/60">
          <span className="text-white text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-1 text-white/30">/</span>
          <span>{String(items.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Main Vertical Card Stack Container */}
      <div className="relative flex-1 w-full my-4 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[860px] h-[440px] flex items-center justify-center">
          {items.map((item, index) => {
            // Calculate relative offset from current active card
            const offset = (index - currentIndex + items.length) % items.length;
            const isFront = offset === 0;

            // Stacking offset calculations (cards stack slightly upward with scale & slight rotation)
            const scale = Math.max(0.76, 1 - offset * 0.05);
            const translateY = -offset * 18; 
            const rotate = offset === 0 ? 0 : (offset % 2 === 0 ? 1.5 : -1.5) * Math.min(offset, 3);
            const opacity = isFront ? 1 : Math.max(0.15, 1 - offset * 0.25);
            const zIndex = items.length - offset;

            const targetUrl = item.externalUrl || item.behanceUrl || 'https://www.behance.net/hemchanpaunika';
            const CardWrapper = 'a';
            const linkProps = { href: targetUrl, target: '_blank', rel: 'noopener noreferrer' };

            return (
              <motion.div
                key={item.id || index}
                initial={false}
                animate={{
                  scale,
                  y: translateY,
                  rotate,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                  mass: 0.7,
                }}
                drag={isFront ? 'y' : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.y < -50) handleNext();
                  else if (info.offset.y > 50) handlePrev();
                }}
                className={`absolute w-full h-full rounded-3xl border border-white/15 bg-[#080b12]/95 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${
                  isFront ? 'cursor-grab active:cursor-grabbing ring-1 ring-white/20' : 'pointer-events-none'
                }`}
                style={{
                  transformOrigin: 'bottom center',
                  boxShadow: isFront
                    ? '0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(169, 50, 7, 0.2)'
                    : 'none',
                }}
              >
                {/* Left Card Info Content */}
                <div className="w-full md:w-[46%] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 z-10 bg-[#06080e]/90">
                  <div className="space-y-4">
                    {/* Number Badge & Category */}
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full bg-[#A93207]/20 border border-[#A93207]/40 text-[#A93207] font-mono text-[11px] font-bold tracking-wider uppercase">
                        {item.number} • {item.category}
                      </span>
                      <Sparkles className="w-4 h-4 text-white/30" />
                    </div>

                    {/* Main Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                      {item.title}
                    </h3>

                    {/* Description / Subtitle */}
                    <p className="text-xs sm:text-sm font-mono text-white/70 leading-relaxed">
                      {item.subtitle || item.desc}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-6">
                    <CardWrapper
                      {...linkProps}
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-[#A93207] hover:text-white font-mono text-xs tracking-wider uppercase font-bold transition-all duration-300 shadow-xl group no-underline"
                    >
                      <span>EXPLORE PROJECT</span>
                      {isExternal ? (
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </CardWrapper>
                  </div>
                </div>

                {/* Right Card Artwork Display */}
                <div className="relative w-full md:w-[54%] h-[240px] md:h-full bg-black/50 overflow-hidden group">
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Controls */}
      <div className="relative z-30 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="text-[11px] font-mono text-white/50 tracking-wider">
          <span className="hidden sm:inline">SWIPE OR USE CHEVRON CONTROLS TO SWAP STACK</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            onMouseEnter={playHoverSound}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/15 text-white transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Previous card"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={playHoverSound}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/15 text-white transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Next card"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerticalImageStack;
