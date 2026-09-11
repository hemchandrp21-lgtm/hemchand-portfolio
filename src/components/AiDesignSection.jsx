import { useIceFire } from '../context/IceFireContext';

function AiDesignSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
              <span>AI &amp; CREATIVE TECH PHILOSOPHY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white">
              AI AS AN <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>AUGMENTATION LAYER</span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-4xl">
            I leverage AI to accelerate iteration, generate rapid wireframe variants, automate visual asset prep, and test creative concepts faster. However, core human empathy, structural clarity, and emotional storytelling remain human-driven.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 font-mono text-xs">
            <div className="space-y-1.5">
              <span className="text-white font-semibold block">01 &bull; RAPID PROTOTYPING</span>
              <p className="text-zinc-400 text-xs">Accelerating concept generation and layout exploration by 3x.</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-white font-semibold block">02 &bull; DATA AUGMENTATION</span>
              <p className="text-zinc-400 text-xs">Synthesizing qualitative user test feedback into actionable insights.</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-white font-semibold block">03 &bull; INTENTIONAL CRAFT</span>
              <p className="text-zinc-400 text-xs">Ensuring human nuance, visual hierarchy, and emotion lead final execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiDesignSection;
