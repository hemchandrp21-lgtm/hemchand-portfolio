import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import CinematicHeroEffect from './CinematicHeroEffect';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

// Individual Keyword Item Component to obey React Rules of Hooks
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

// 21st.dev rahil1202 Signature Scroll Slide-In Keywords Component
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

  // Live time ticker state (e.g. INDIA 22:50:15)
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}:${secs}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#040507] text-white flex flex-col justify-between select-none"
    >
      {/* 1. BACKGROUND CINEMATIC VISUAL IMAGE (UNCHANGED PORTRAIT IMAGE) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0 origin-center"
      >
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.webp" />
      </motion.div>

      {/* Subtle Overlay Gradients for Readability */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040507]/80 via-[#040507]/30 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040507] via-[#040507]/60 to-transparent pointer-events-none z-10" />

      {/* 2. TOP HEADER OVERLAY BAR */}
      <div className="relative z-30 w-full px-6 sm:px-12 md:px-16 py-8 flex items-center justify-between font-mono text-xs tracking-[0.2em] uppercase text-white/90 pointer-events-auto">
        {/* Top-Left: Brand Logo */}
        <Link
          to="/"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-white no-underline hover:text-white/80 transition-colors"
        >
          Hemchand&reg;
        </Link>

        {/* Top-Center: Live Location & Time Ticker */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white/80 tracking-[0.25em]">
          <span>INDIA</span>
          <span className="font-bold text-white">{timeStr || '12:00:00'}</span>
        </div>

        {/* Top-Right: Clean Horizontal Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] sm:text-xs tracking-[0.2em]">
          <Link
            to="/about"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            About
          </Link>
          <Link
            to="/work"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Work
          </Link>
          <Link
            to="/playground"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Playground
          </Link>
          <Link
            to="/contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* 3. MIDDLE SECTION (LEFT PERSONAL TAGLINE & RIGHT DISCIPLINES) */}
      <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 my-auto grid grid-cols-12 items-center pointer-events-none">
        
        {/* Mid-Left Personal UX Designer Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 sm:col-span-6 md:col-span-5 space-y-2 pointer-events-auto"
        >
          <p className="font-mono text-xs sm:text-[13px] leading-relaxed tracking-wider uppercase text-white/90 max-w-[310px] font-medium drop-shadow-md">
            I DESIGN INTUITIVE DIGITAL EXPERIENCES, USER FLOWS, AND PRODUCTS THAT ELIMINATE FRICTION.
          </p>
        </motion.div>

        {/* Mid-Right Personal UI/UX Disciplines Vertical List with 21st.dev rahil1202 Scroll-Slide Animation */}
        <ScrollSlideKeywords items={disciplineItems} scrollYProgress={smoothProgress} />
      </div>

      {/* 4. BOTTOM GIANT DISPLAY TITLE (PERSONAL NAME OVERLAY) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full pb-4 sm:pb-8 px-6 sm:px-12 md:px-16 text-left pointer-events-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold uppercase tracking-tight text-white leading-none whitespace-nowrap drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] select-none text-left text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[12.5rem]"
          style={{ fontSize: 'clamp(2.2rem, 7.8vw, 12.5rem)' }}
        >
          HEMCHAND PAUNIKAR
        </motion.h1>
      </motion.div>

    </section>
  );
}

export default Hero;

