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
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#070707] text-white flex flex-col justify-between px-8 lg:px-16 pt-24 pb-8 select-none">
      {/* Full-Screen Cinematic Background Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0">
        <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
      </div>

      {/* Main Grid Content matching reference mockup floating typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pointer-events-none">
        
        {/* Left Side: Headline & Bio Subtext */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full py-8 pointer-events-auto space-y-16 lg:space-y-24">
          {/* Main Title matching reference layout */}
          <div className="pt-6">
            <h1 className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white/90 leading-[1.15]">
              UI/UX Designer <br />
              and <br />
              Creative Technologist
            </h1>
          </div>

          {/* Subtitle Bio matching reference snippet */}
          <div className="max-w-sm">
            <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed tracking-wide">
              I design digital experiences that blend creativity, functionality and human emotion -- turning ideas into meaningful products.
            </p>
          </div>
        </div>

        {/* Right Side: 2 Detailed Columns matching Reference Screenshot */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-12 text-[11px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase pointer-events-auto self-center lg:pl-8">
          {/* Column 1: DESIGN */}
          <div className="space-y-6">
            <div>
              <span className="text-zinc-500 text-[11px] block font-mono">--</span>
              <span className="text-zinc-400 font-semibold tracking-widest text-xs block mt-1">DESIGN</span>
            </div>
            <div className="space-y-3 text-zinc-300">
              <p className="hover:text-amber-400 transition-colors cursor-pointer">UI/UX</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">PRODUCT DESIGN</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">BRAND IDENTITY</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">WEB EXPERIENCE</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">MOTION</p>
            </div>
          </div>

          {/* Column 2: FEATURED */}
          <div className="space-y-6">
            <div>
              <span className="text-zinc-500 text-[11px] block font-mono">--</span>
              <span className="text-zinc-400 font-semibold tracking-widest text-xs block mt-1">FEATURED</span>
            </div>
            <div className="space-y-3 text-zinc-300">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end justify-between pointer-events-none text-xs font-mono text-zinc-400 uppercase tracking-widest pt-4">
        {/* Bottom Left Scroll Indicator */}
        <div className="pointer-events-auto flex flex-col space-y-1">
          <span className="text-zinc-500 text-[10px]">--</span>
          <a
            href="#work"
            onClick={scrollToWork}
            className="hover:text-amber-400 transition-colors no-underline cursor-pointer text-zinc-400"
          >
            SCROLL
          </a>
        </div>

        {/* Bottom Right Live Mouse Coordinates matching Reference: X: 153  Y: 283 */}
        <div className="pointer-events-auto text-zinc-400 font-mono tracking-widest">
          X: <span className="text-zinc-200">{coords.x}</span> &nbsp;&nbsp; Y: <span className="text-zinc-200">{coords.y}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
