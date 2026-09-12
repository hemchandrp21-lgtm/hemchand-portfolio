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

      {/* 2. Main Grid Content matching Reference Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pointer-events-none">
        
        {/* Left Side: Headline & Bio Subtext cleanly aligned */}
        <div className="lg:col-span-7 flex flex-col justify-center self-center my-auto pointer-events-auto items-start text-left space-y-6">
          <h1 className="font-sans font-medium text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] tracking-tight text-zinc-100 leading-[1.25] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            UI/UX Designer <br />
            and <br />
            Creative Technologist
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed tracking-normal max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            I design digital experiences <br />
            that blend creativity, functionality <br />
            and human emotion -- turning ideas <br />
            into meaningful products.
          </p>
        </div>

        {/* Right Side: Monospace Minimal HUD Columns matching Reference Image */}
        <div className="hidden lg:grid lg:col-span-4 grid-cols-2 gap-8 text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase pointer-events-auto self-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {/* Column 1: DESIGN */}
          <div className="space-y-4">
            <div>
              <span className="text-zinc-500 text-[10px] block font-mono">--</span>
              <span className="font-semibold tracking-[0.25em] text-[10px] text-zinc-300 block mt-0.5">
                DESIGN
              </span>
            </div>
            <div className="space-y-2.5 text-zinc-400 font-medium">
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
              <span className="font-semibold tracking-[0.25em] text-[10px] text-zinc-300 block mt-0.5">
                FEATURED
              </span>
            </div>
            <div className="space-y-2.5 text-zinc-400 font-medium">
              <p className="hover:text-white transition-colors cursor-default">COLLEGE PROJECTS</p>
              <p className="hover:text-white transition-colors cursor-default">PERSONAL WORK</p>
              <p className="hover:text-white transition-colors cursor-default">INTERNSHIPS</p>
              <p className="hover:text-white transition-colors cursor-default">CASE STUDIES</p>
              <p className="hover:text-white transition-colors cursor-default">PLAYGROUND</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: SCROLL & Live Mouse Coordinates */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end justify-between pointer-events-none text-[10px] font-mono text-zinc-400 uppercase tracking-widest pt-4">
        {/* Bottom Left Scroll Indicator */}
        <div className="pointer-events-auto space-y-1">
          <a
            href="#work"
            onClick={scrollToWork}
            className="transition-colors no-underline cursor-pointer font-medium tracking-[0.25em] text-zinc-300 hover:text-white block"
          >
            SCROLL
          </a>
          <span className="text-zinc-500 text-[10px] block font-mono">--</span>
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


