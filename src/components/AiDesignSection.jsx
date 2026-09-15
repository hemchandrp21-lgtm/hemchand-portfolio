import { Sparkles, ArrowRight } from 'lucide-react';

function AiDesignSection() {
  const isFire = true;

  const curiousTopics = [
    'AI × DESIGN',
    'INTERACTION',
    '3D',
    'MOTION',
    'CREATIVE CODING',
    'DIGITAL EXPERIENCES',
    'VISUAL STORYTELLING',
    'HUMAN BEHAVIOUR'
  ];

  const personalityKeywords = [
    'CURIOUS',
    'EXPERIMENTAL',
    'VISUAL',
    'OBSERVANT',
    'ITERATIVE',
    'BOLD'
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full filter blur-[160px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* CURRENTLY EXPLORING BLOCK */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <Sparkles className={`w-3.5 h-3.5 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>CURRENTLY EXPLORING</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-semibold uppercase tracking-tight text-white flex items-center gap-3">
              CURRENTLY CURIOUS ABOUT <ArrowRight className={`w-6 h-6 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            {curiousTopics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2.5 rounded-2xl bg-black/50 border border-white/10 text-zinc-200 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                {topic}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-sans italic leading-relaxed pt-2 border-t border-white/10">
            &ldquo;I&apos;m interested in what happens when design moves beyond static screens and becomes an experience.&rdquo;
          </p>
        </div>

        {/* SO, WHO IS HEMCHAND? BLOCK */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-5xl font-display font-semibold uppercase tracking-tight text-white">
              SO, WHO IS <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>HEMCHAND?</span>
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-4xl">
            <p>
              I&apos;m a designer who enjoys moving between different worlds. One day I&apos;m thinking about user behaviour and information architecture. The next, I&apos;m experimenting with typography, 3D visuals, motion or a completely new visual direction.
            </p>
            <p>
              I enjoy the uncomfortable stage where an idea isn&apos;t figured out yet — because that&apos;s usually where the interesting work begins. I&apos;m constantly learning, experimenting and looking for better ways to turn ideas into experiences.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2.5 font-mono text-xs">
            {personalityKeywords.map((kw) => (
              <span
                key={kw}
                className={`px-3.5 py-1.5 rounded-full border text-[10px] tracking-widest uppercase font-bold ${
                  isFire ? 'bg-amber-400/10 text-amber-300 border-amber-400/30' : 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30'
                }`}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiDesignSection;


