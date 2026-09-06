function AiDesignSection() {
  return (
    <section id="ai-design" className="relative w-full py-32 px-6 lg:px-12 bg-[#070707] text-white border-t border-white/10 overflow-hidden">
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-semibold">
              09 &mdash; CREATIVE TECHNOLOGY
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2 text-white">
              DESIGNING WITH AI.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            AI as an exploratory amplifier, accelerating ideation without replacing human empathy and design thinking.
          </p>
        </div>

        {/* Visual Relationship Diagram */}
        <div className="p-8 sm:p-12 bg-zinc-950 border border-white/10 shadow-sm rounded-sm space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center">
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase block font-bold">01 &bull; HUMAN</span>
              <h3 className="text-xl font-display font-bold uppercase text-white">EMPATHY &amp; SENSE</h3>
              <p className="text-xs text-zinc-400 font-sans">Understanding real people, questioning assumptions &amp; intuition.</p>
            </div>

            <div className="text-2xl font-mono text-amber-400 font-bold hidden md:block">+</div>

            <div className="p-6 bg-zinc-900/60 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase block font-bold">02 &bull; AI WORKFLOWS</span>
              <h3 className="text-xl font-display font-bold uppercase text-white">RAPID GENERATION</h3>
              <p className="text-xs text-zinc-400 font-sans">Exploring variant branches &amp; rapid prototyping.</p>
            </div>

            <div className="text-2xl font-mono text-amber-400 font-bold hidden md:block">=</div>
          </div>

          <div className="p-6 bg-amber-500/10 border border-amber-400/30 text-center space-y-2">
            <span className="text-xs font-mono tracking-[0.2em] text-amber-400 uppercase font-bold block">
              THE EQUATION
            </span>
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
              HUMAN + AI + DESIGN THINKING = BETTER EXPLORATION
            </h4>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed text-center">
            <p>
              "AI is becoming part of how I explore, prototype and think about design.
            </p>
            <p>
              I use AI-assisted workflows to accelerate exploration, generate possibilities, test directions and move faster from idea to prototype.
            </p>
            <p className="text-white font-semibold">
              But I don't see AI as a replacement for design thinking. The valuable part of design is still understanding people, making decisions, questioning assumptions and knowing what should exist in the first place."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiDesignSection;
