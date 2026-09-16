import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playHoverSound, playClickSound } from '../../utils/audioEngine';

const defaultProjects = [
  {
    id: 'nobroker-packers-movers-ux',
    num: '01',
    title: 'NOBROKER PACKERS & MOVERS REDESIGN',
    subtitle: 'UX Research & Usability Testing',
    category: 'CASE STUDY',
    image: '/.webp',
  },
  {
    id: 'hozatra-corporate-web-ui',
    num: '02',
    title: 'HOZATRA CORPORATE & AFTTER STOREFRONT',
    subtitle: 'Brand Identity & Storefront',
    category: 'CASE STUDY',
    image: '/.webp',
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '03',
    title: 'SEED TO SOUL E-COMMERCE',
    subtitle: 'Conversion E-Commerce & Hospitality',
    category: 'LIVE WEBSITE',
    image: '/.webp',
    externalUrl: 'https://www.seedtosoul.co/',
  },
  {
    id: 'texture-lab-web-app',
    num: '04',
    title: 'LYNK FOODS & TEXTURE LAB 3D APP',
    subtitle: 'Regional Sweets & Creative Tech',
    category: 'LIVE WEBSITE',
    image: '/.webp',
    externalUrl: 'https://lynkfoods.com/',
  }
];

export function AnimatedSlideshow({ items = defaultProjects, autoPlayDuration = 5000, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance slide if not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayDuration);
    return () => clearInterval(timer);
  }, [isPaused, items.length, autoPlayDuration]);

  const activeProject = items[activeIndex];
  const isExternal = Boolean(activeProject.externalUrl);
  const CardWrapper = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? { href: activeProject.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
    : { to: `/work/${activeProject.id}` };

  return (
    <div 
      className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* LEFT COLUMN: Large Typography Vertical Stack (Matching 21st.dev screenshot 1:1) */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={item.id}
              onMouseEnter={() => {
                playHoverSound();
                setActiveIndex(idx);
              }}
              onClick={() => {
                playClickSound();
                setActiveIndex(idx);
              }}
              className="group cursor-pointer flex flex-col transition-all duration-500"
            >
              <div className="flex items-baseline gap-4">
                <span className={`font-mono text-sm sm:text-base font-bold transition-colors duration-500 ${
                  isActive ? 'text-[#A93207]' : 'text-white/20 group-hover:text-white/40'
                }`}>
                  {item.num}
                </span>

                <h3 className={`font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-all duration-500 leading-tight ${
                  isActive 
                    ? 'text-white scale-[1.01] translate-x-1' 
                    : 'text-white/20 group-hover:text-white/50'
                }`}>
                  {item.title}
                </h3>
              </div>

              {/* Active Subtitle Detail */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="pl-9 pt-2 flex items-center gap-3"
                >
                  <span className="h-[2px] w-6 bg-[#A93207]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A93207]">
                    {item.subtitle} • {item.category}
                  </span>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT COLUMN: Interactive Image Stage with Clip-Path Reveal */}
      <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden border border-white/15 bg-[#080a0f] shadow-2xl group">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeProject.id}
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', opacity: 0.6 }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
            exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', opacity: 0.6 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover object-top opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* TOP BADGE */}
        <div className="relative z-20 flex items-center justify-between p-6 font-mono">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white uppercase tracking-widest shadow-md">
            <span>{activeProject.category}</span>
            <Sparkles className="w-3 h-3 text-[#A93207]" />
          </span>

          <span className="text-xs font-bold font-mono tracking-widest text-white/80 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
            {activeProject.num} / 0{items.length}
          </span>
        </div>

        {/* BOTTOM FLOATING LINK */}
        <div className="relative z-20 flex justify-end p-6 mt-auto">
          <CardWrapper
            {...linkProps}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#A93207] hover:text-white shadow-xl hover:scale-105 no-underline"
          >
            <span>{isExternal ? "EXPLORE SITE" : "VIEW STUDY"}</span>
            {isExternal ? (
              <ExternalLink className="w-4 h-4" />
            ) : (
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}

export default AnimatedSlideshow;
