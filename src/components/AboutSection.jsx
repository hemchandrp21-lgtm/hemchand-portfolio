import { useIceFire } from '../context/IceFireContext';

function AboutSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      {/* Volumetric Dual Glow Background */}
      <div className="absolute top-1/2 left-0 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
            <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
            <span>PHILOSOPHY & POSITIONING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
            ABOUT <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>HEMCHAND</span>
          </h2>
        </div>

        {/* Large Typographic Statement */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card relative overflow-hidden border border-white/10">
          <div className="space-y-8 max-w-4xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase leading-[1.15] tracking-tight text-white">
              I DESIGN AT THE EDGE OF <br />
              <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>
                CREATIVITY &times; TECHNOLOGY.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed tracking-wide">
              I am Hemchand Paunikar, a B.Des UX Design student at Symbiosis Institute of Design. I combine research rigor with high-craft visual design and creative technology to build products that resonate deeply with users.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="space-y-2">
                <span className={`text-[10px] uppercase tracking-widest block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  01 &bull; EMOTION & UTILITY
                </span>
                <p className="text-zinc-300 text-xs">
                  Interfaces should feel intuitive, tactile and visually inspiring, removing friction while delighting users.
                </p>
              </div>

              <div className="space-y-2">
                <span className={`text-[10px] uppercase tracking-widest block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  02 &bull; EVIDENCE-BASED UX
                </span>
                <p className="text-zinc-300 text-xs">
                  Usability testing and qualitative insights drive every interaction, layout, and visual decision.
                </p>
              </div>

              <div className="space-y-2">
                <span className={`text-[10px] uppercase tracking-widest block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  03 &bull; CREATIVE TECH
                </span>
                <p className="text-zinc-300 text-xs">
                  Bridging design with front-end execution, micro-interactions, AI-assisted tools, and dynamic motion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Bio Details Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
              EDUCATION & ACADEMICS
            </h4>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-2">
                <span>DEGREE</span>
                <span className="text-zinc-200">2023 &ndash; 2027</span>
              </div>
              <p className="text-base text-white font-semibold font-sans">
                B.Des in User Experience Design
              </p>
              <p className="text-xs text-zinc-400">
                Symbiosis Institute of Design (SID), Pune, India
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
              PRIMARY COMPETENCIES
            </h4>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">UI/UX Design</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Product Architecture</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Design Systems</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Usability Testing</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Brand Identity</div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Creative Coding & Motion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
