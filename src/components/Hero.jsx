import { useState, useEffect } from 'react';
import CinematicHeroEffect from './CinematicHeroEffect';

function Hero() {
  const [coords, setCoords] = useState({ x: 153, y: 283 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden bg-[#070707] text-white flex flex-col justify-between px-8 lg:px-16 pt-24 pb-8 select-none">
      {/* Full-Screen Cinematic Background Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0">
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
      </div>

      {/* Main Grid Content matching exact reference scale */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pointer-events-none">
        
        {/* Left Side: Title & Bio Subtext */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full py-6 pointer-events-auto space-y-12 lg:space-y-20">
          {/* Main Title matching reference screenshot proportion */}
          <div className="pt-4 max-w-sm">
            <h1 className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-[1.25]">
              UI/UX Designer <br />
              and <br />
              Creative Technologist
            </h1>
          </div>

          {/* Subtitle Bio snippet matching reference text scale */}
          <div className="max-w-[280px] sm:max-w-xs">
            <p className="text-[11px] sm:text-xs text-zinc-300 font-mono leading-relaxed tracking-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              I design digital experiences that blend creativity, functionality and human emotion -- turning ideas into meaningful products.
            </p>
          </div>
        </div>

        {/* Center Space */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Right Side: 2 Columns matching Reference Screenshot */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-300 uppercase pointer-events-auto self-center lg:pl-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          {/* Column 1: DESIGN */}
          <div className="space-y-4">
            <div>
              <span className="text-zinc-500 text-[10px] block font-mono">--</span>
              <span className="text-zinc-300 font-semibold tracking-widest text-[10px] block mt-0.5">DESIGN</span>
            </div>
            <div className="space-y-2 text-zinc-200 font-medium">
              <p className="hover:text-amber-400 transition-colors cursor-pointer">UI/UX</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">PRODUCT DESIGN</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">BRAND IDENTITY</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">WEB EXPERIENCE</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">MOTION</p>
            </div>
          </div>

          {/* Column 2: FEATURED */}
          <div className="space-y-4">
            <div>
              <span className="text-zinc-500 text-[10px] block font-mono">--</span>
              <span className="text-zinc-300 font-semibold tracking-widest text-[10px] block mt-0.5">FEATURED</span>
            </div>
            <div className="space-y-2 text-zinc-200 font-medium">
              <p className="hover:text-amber-400 transition-colors cursor-pointer">COLLEGE PROJECTS</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">PERSONAL WORK</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">INTERNSHIPS</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">CASE STUDIES</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">PLAYGROUND</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: SCROLL (Left) & Coordinates (Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end justify-between pointer-events-none text-[10px] font-mono text-zinc-400 uppercase tracking-widest pt-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        {/* Bottom Left Scroll Indicator */}
        <div className="pointer-events-auto flex flex-col space-y-0.5">
          <span className="text-zinc-500 text-[9px]">--</span>
          <a
            href="#work"
            onClick={scrollToWork}
            className="hover:text-amber-400 transition-colors no-underline cursor-pointer text-zinc-300 font-medium"
          >
            SCROLL
          </a>
        </div>

        {/* Bottom Right Live Mouse Coordinates matching Reference */}
        <div className="pointer-events-auto text-zinc-400 font-mono tracking-widest">
          X: <span className="text-zinc-200 font-semibold">{coords.x}</span> &nbsp;&nbsp; Y: <span className="text-zinc-200 font-semibold">{coords.y}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
