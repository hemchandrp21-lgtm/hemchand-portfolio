import { useEffect, useRef } from 'react';
import CinematicHeroEffect from './CinematicHeroEffect';
import { useIceFire } from '../context/IceFireContext';

function Hero() {
  const xRef = useRef(null);
  const yRef = useRef(null);
  const { isFire } = useIceFire();

  useEffect(() => {
    let animFrameId = null;
    let latestX = 153;
    let latestY = 283;
    let scheduled = false;

    const handleMouseMove = (e) => {
      latestX = Math.round(e.clientX);
      latestY = Math.round(e.clientY);

      if (!scheduled) {
        scheduled = true;
        animFrameId = requestAnimationFrame(() => {
          if (xRef.current) xRef.current.textContent = latestX;
          if (yRef.current) yRef.current.textContent = latestY;
          scheduled = false;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-[#050505] text-white flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-24 pb-8 select-none">
      {/* 1. Background Cinematic ICE × FIRE Portrait Visual Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0">
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
      </div>

      {/* 2. Main Grid Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pointer-events-none">
        
        {/* Left Side: Editorial Typography & Positioning */}
        <div className="lg:col-span-7 flex flex-col justify-center self-center my-auto pointer-events-auto space-y-6 sm:space-y-8 items-start text-left">
          {/* Tag & Subhead */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
            <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400 animate-pulse' : 'bg-cyan-400 animate-pulse'}`} />
            <span>ICE &times; FIRE PORTFOLIO</span>
          </div>

          {/* Main Title - Architectural Uppercase */}
          <div className="max-w-xl">
            <h1 className="font-sans font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.18] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              UI/UX DESIGNER <br />
              AND <br />
              <span className={`transition-colors duration-500 ${isFire ? 'gradient-text-fire' : 'gradient-text-ice'}`}>
                CREATIVE TECHNOLOGIST
              </span>
            </h1>
          </div>

          {/* Bio Subtext */}
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              I design digital experiences that blend creativity, functionality, technology and human emotion — turning ideas into meaningful products.
            </p>
          </div>

          {/* Call to Action CTA */}
          <div className="pt-2 flex items-center gap-6">
            <a
              href="#work"
              onClick={scrollToWork}
              className={`px-6 py-3 rounded-full text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 no-underline shadow-lg ${
                isFire
                  ? 'bg-amber-500 text-black font-semibold hover:bg-amber-400 hover:shadow-amber-500/30'
                  : 'bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-cyan-500/30'
              }`}
            >
              <span>EXPLORE WORK</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="/about"
              className="text-xs font-mono tracking-[0.2em] text-zinc-300 hover:text-white transition-colors no-underline uppercase"
            >
              ABOUT ME &rarr;
            </a>
          </div>
        </div>

        {/* Center Space */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Right Side: Editorial Micro UI HUD Details */}
        <div className="hidden lg:grid lg:col-span-4 grid-cols-2 gap-8 text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase pointer-events-auto self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {/* Column 1: DESIGN */}
          <div className="space-y-4">
            <div>
              <span className="text-zinc-500 text-[10px] block font-mono">--</span>
              <span className={`font-semibold tracking-[0.25em] text-[10px] block mt-0.5 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                DESIGN
              </span>
            </div>
            <div className="space-y-2.5 text-zinc-300 font-medium">
              <p className="hover:text-white transition-colors cursor-default">UI/UX</p>
              <p className="hover:text-white transition-colors cursor-default">PRODUCT DESIGN</p>
              <p className="hover:text-white transition-colors cursor-default">BRAND IDENTITY</p>
              <p className="hover:text-white transition-colors cursor-default">WEB EXPERIENCE</p>
              <p className="hover:text-white transition-colors cursor-default">MOTION</p>
            </div>
          </div>

          {/* Column 2: FEATURED */}
          <div className="space-y-4">
            <div>
              <span className="text-zinc-500 text-[10px] block font-mono">--</span>
              <span className={`font-semibold tracking-[0.25em] text-[10px] block mt-0.5 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                FEATURED
              </span>
            </div>
            <div className="space-y-2.5 text-zinc-300 font-medium">
              <p className="hover:text-white transition-colors cursor-default">COLLEGE PROJECTS</p>
              <p className="hover:text-white transition-colors cursor-default">PERSONAL WORK</p>
              <p className="hover:text-white transition-colors cursor-default">INTERNSHIPS</p>
              <p className="hover:text-white transition-colors cursor-default">CASE STUDIES</p>
              <p className="hover:text-white transition-colors cursor-default">PLAYGROUND</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: SCROLL (Left) & Live Coordinates (Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end justify-between pointer-events-none text-[10px] font-mono text-zinc-400 uppercase tracking-widest pt-4 border-t border-white/10">
        {/* Bottom Left Scroll Indicator */}
        <div className="pointer-events-auto flex items-center space-x-3">
          <span className="text-zinc-500 text-[10px]">--</span>
          <a
            href="#work"
            onClick={scrollToWork}
            className={`transition-colors no-underline cursor-pointer font-medium tracking-[0.25em] ${
              isFire ? 'hover:text-amber-400 text-zinc-300' : 'hover:text-cyan-400 text-zinc-300'
            }`}
          >
            SCROLL DOWN
          </a>
        </div>

        {/* Bottom Right Live Mouse Coordinates */}
        <div className="pointer-events-auto text-zinc-400 font-mono tracking-[0.2em] hidden sm:block">
          X: <span ref={xRef} className="text-zinc-200 font-semibold">153</span> &nbsp;&nbsp; Y: <span ref={yRef} className="text-zinc-200 font-semibold">283</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
