import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CinematicHeroEffect from './CinematicHeroEffect';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

import { Link } from 'react-router-dom';

// Individual Keyword Item Component
function KeywordItem({ item, index, scrollYProgress }) {
  const xTransform = useTransform(scrollYProgress, [0, 0.5], ['0px', `${(index + 1) * 35}px`]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  return (
    <Link to={`/work?search=${encodeURIComponent(item)}`} onClick={playClickSound} className="no-underline block">
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.3 + index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ x: xTransform, opacity: opacityTransform }}
        whileHover={{ x: -10, color: '#A93207', transition: { duration: 0.2 } }}
        onMouseEnter={playHoverSound}
        className="cursor-pointer text-white/85 hover:text-white font-bold transition-colors select-none"
      >
        {item}
      </motion.div>
    </Link>
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
  const disciplineItems = [
    'RESEARCH',
    'UI/UX',
    'PROTOTYPING',
    'DESIGN SYSTEMS',
    'AI-ASSISTED DESIGN & VIBE CODING'
  ];

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
      itemScope
      itemType="https://schema.org/Person"
      className="relative w-full max-w-full h-[100dvh] min-h-[580px] overflow-hidden bg-transparent text-white flex flex-col justify-between select-none"
    >
      <meta itemProp="name" content="Hemchand Paunikar" />
      <meta itemProp="jobTitle" content="UI/UX Designer & Product Designer" />
      <meta itemProp="url" content="https://hemchand-portfolio.vercel.app/" />
      <meta itemProp="image" content="https://hemchand-portfolio.vercel.app/hero_portrait_suit.webp" />

      {/* 1. BACKGROUND CINEMATIC VISUAL IMAGE (FULL HIGH-RES CRISP SHARP IMAGE) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0 origin-center overflow-hidden"
      >
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
      </motion.div>

      {/* Subtle Minimal Gradients for Maximum Clarity & Sharpness */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-24 bg-gradient-to-b from-[#040507]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#040507]/60 to-transparent pointer-events-none z-10" />

      {/* Spacer for Global Floating Header */}
      <div className="relative z-30 w-full h-16 sm:h-24 pointer-events-none" />

      {/* 2. MIDDLE SECTION (DESKTOP DISCIPLINES & TAGLINE) */}
      <div className="relative z-20 w-full max-w-full overflow-hidden px-4 sm:px-12 md:px-16 my-auto hidden sm:grid grid-cols-12 items-center pointer-events-none gap-4">
        
        {/* Personal UX Statement (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 sm:col-span-6 md:col-span-5 space-y-2 pointer-events-auto"
        >
          <p className="font-mono text-[11px] sm:text-[13px] leading-relaxed tracking-wider uppercase text-white/90 max-w-[320px] font-medium drop-shadow-md">
            I DESIGN INTUITIVE DIGITAL EXPERIENCES, USER FLOWS, AND PRODUCTS THAT ELIMINATE FRICTION.
          </p>
        </motion.div>

        {/* Disciplines Vertical List for Desktop */}
        <ScrollSlideKeywords items={disciplineItems} scrollYProgress={smoothProgress} />
      </div>

      {/* 3. BOTTOM MONUMENTAL NAME TITLE & MOBILE TAGLINE BLOCK */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full max-w-full overflow-hidden pb-6 sm:pb-8 px-4 sm:px-12 md:px-16 text-left pointer-events-none flex flex-col justify-end space-y-4 sm:space-y-0"
      >
        {/* Personal UX Statement & Touch-Friendly Pill Bar for Mobile (Attached with breathing space) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block sm:hidden space-y-3 pointer-events-auto pb-1"
        >
          <p className="font-mono text-[11px] xs:text-[12px] leading-relaxed tracking-wider uppercase text-white/90 max-w-[310px] font-medium drop-shadow-lg">
            I DESIGN INTUITIVE DIGITAL EXPERIENCES, USER FLOWS, AND PRODUCTS THAT ELIMINATE FRICTION.
          </p>

          <div className="flex items-center gap-2 pt-0.5 font-mono text-[10px] tracking-wider uppercase text-white/80 overflow-x-auto no-scrollbar py-1">
            <Link to="/work?search=UI%2FUX" onClick={playClickSound} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A93207] border border-white/15 text-white backdrop-blur-md shrink-0 no-underline">UI/UX</Link>
            <Link to="/work?search=RESEARCH" onClick={playClickSound} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A93207] border border-white/15 text-white backdrop-blur-md shrink-0 no-underline">RESEARCH</Link>
            <Link to="/work?search=PROTOTYPING" onClick={playClickSound} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A93207] border border-white/15 text-white backdrop-blur-md shrink-0 no-underline">PROTOTYPING</Link>
            <Link to="/work?search=DESIGN%20SYSTEMS" onClick={playClickSound} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A93207] border border-white/15 text-white backdrop-blur-md shrink-0 no-underline">DESIGN SYSTEMS</Link>
            <Link to="/work?search=AI-ASSISTED%20DESIGN%20%26%20VIBE%20CODING" onClick={playClickSound} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A93207] border border-white/15 text-white backdrop-blur-md shrink-0 no-underline">AI DESIGN & VIBE CODING</Link>
          </div>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black uppercase tracking-tight text-white leading-[0.88] sm:leading-[0.95] drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)] select-none text-left w-full sm:whitespace-nowrap"
          style={{ fontSize: 'clamp(3rem, 8.7vw, 10rem)' }}
        >
          <span className="block sm:inline">HEMCHAND</span>{' '}
          <span className="block sm:inline">PAUNIKAR</span>
        </motion.h1>
      </motion.div>

    </section>
  );
}

export default Hero;

