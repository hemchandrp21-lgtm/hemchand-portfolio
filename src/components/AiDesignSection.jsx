import { useIceFire } from '../context/IceFireContext';
import { Bot, Cpu, Sparkles, Brain } from 'lucide-react';

function AiDesignSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full filter blur-[160px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <Bot className={`w-3.5 h-3.5 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>AI &amp; CREATIVE TECH PHILOSOPHY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold uppercase tracking-tight text-white">
              AI AS AN <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>AUGMENTATION LAYER</span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-4xl">
            I leverage AI to accelerate iteration, generate rapid wireframe variants, automate visual asset prep, and test creative concepts faster. However, core human empathy, structural clarity, and emotional storytelling remain human-driven.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-white font-bold block text-[11px]">01 &bull; RAPID PROTOTYPING</span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">Accelerating concept generation and layout exploration by 3x.</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Brain className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-white font-bold block text-[11px]">02 &bull; DATA AUGMENTATION</span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">Synthesizing qualitative user test feedback into actionable insights.</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-white font-bold block text-[11px]">03 &bull; INTENTIONAL CRAFT</span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">Ensuring human nuance, visual hierarchy, and emotion lead final execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiDesignSection;

