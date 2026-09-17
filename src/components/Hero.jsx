import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CinematicHeroEffect from './CinematicHeroEffect';
import { playHoverSound } from '../utils/audioEngine';

// Individual Keyword Item Component
function KeywordItem({ item, index, scrollYProgress }) {
  const xTransform = useTransform(scrollYProgress, [0, 0.5], ['0px', `${(index + 1) * 35}px`]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.3 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ x: xTransform, opacity: opacityTransform }}
      whileHover={{ x: -10, color: '#E1CBA6', transition: { duration: 0.2 } }}
      onMouseEnter={playHoverSound}
      className="cursor-pointer text-white/85 hover:text-white font-bold transition-colors select-none"
    >
      {item}
    </motion.div>
  );
}

// Scroll Slide Keywords for Desktop
function ScrollSlideKeywords({ items, scrollYProgress }) {
  return (
    <div className="hidden sm:flex col-span-6 md:col-span-7 flex-col items-end text-right font-mono text-xs tracking-[0.25em] uppercase space-y-2 pointer-events-auto overflow-hidden py-2">
      {items.map((item, index) => (
        <KeywordItem
          key={item}
          item={item}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const disciplineItems = ['RESEARCH', 'UI/UX', 'PROTOTYPING', 'DESIGN SYSTEMS'];

  // Track scroll position relative to Hero section for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Parallax transforms
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '-25%']);
  const textOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '12%']);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-full h-[100dvh] min-h-[580px] overflow-hidden bg-[#040507] text-white flex flex-col justify-between select-none"
    >
      {/* 1. BACKGROUND CINEMATIC VISUAL IMAGE */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0 origin-center overflow-hidden"
      >
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.webp" />
      </motion.div>

      {/* Subtle Overlay Gradients for Readability */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#040507]/90 via-[#040507]/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-[#040507] via-[#040507]/70 to-transparent pointer-events-none z-10" />

      {/* Spacer for Global Floating Header */}
      <div className="relative z-30 w-full h-16 sm:h-24 pointer-events-none" />

      {/* 2. MIDDLE SECTION (LEFT PERSONAL TAGLINE & RIGHT DISCIPLINES) */}
      <div className="relative z-20 w-full max-w-full overflow-hidden px-4 sm:px-12 md:px-16 my-auto grid grid-cols-12 items-center pointer-events-none gap-4">
        
        {/* Personal UX Statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 sm:col-span-6 md:col-span-5 space-y-2 pointer-events-auto"
        >
          <p className="font-mono text-[11px] sm:text-[13px] leading-relaxed tracking-wider uppercase text-white/90 max-w-[320px] font-medium drop-shadow-md">
            I DESIGN INTUITIVE DIGITAL EXPERIENCES, USER FLOWS, AND PRODUCTS THAT ELIMINATE FRICTION.
          </p>

          {/* Touch-Friendly Discipline Pill Bar on Mobile Phone Screens */}
          <div className="flex sm:hidden items-center gap-1.5 pt-2 font-mono text-[10px] tracking-wider uppercase text-white/70 overflow-x-auto no-scrollbar py-1">
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shrink-0">UX/UI</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shrink-0">RESEARCH</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shrink-0">DESIGN SYSTEMS</span>
          </div>
        </motion.div>

        {/* Disciplines Vertical List for Desktop */}
        <ScrollSlideKeywords items={disciplineItems} scrollYProgress={smoothProgress} />
      </div>

      {/* 3. BOTTOM MONUMENTAL NAME TITLE */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full max-w-full overflow-hidden pb-4 sm:pb-8 px-4 sm:px-12 md:px-16 text-left pointer-events-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold uppercase tracking-tight text-white leading-[0.95] break-words max-w-full drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)] select-none text-left text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[12.5rem]"
          style={{ fontSize: 'clamp(2.25rem, 9.5vw, 12.5rem)' }}
        >
          HEMCHAND PAUNIKAR
        </motion.h1>
      </motion.div>

    </section>
  );
}

export default Hero;

