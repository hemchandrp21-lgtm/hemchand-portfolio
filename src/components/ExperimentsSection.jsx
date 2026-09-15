import { useState } from 'react';
import { experiments } from '../data/projectsData';

function ExperimentsSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experiments" className="relative w-full py-32 px-6 lg:px-12 bg-[#040507] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A93207] font-bold">
              04 &mdash; PLAYGROUND
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2">
              EXPERIMENTS.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono leading-relaxed uppercase">
            EXPLORING BEYOND TRADITIONAL UI CONSTRAINTS. SHADERS, AI GENERATION NODES, KINETIC TYPOGRAPHY, AND AUDIO-VISUAL MICRO-INTERACTIONS.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              data-cursor="INSPECT"
              className="group relative bg-[#080b12] border border-white/15 p-6 rounded-2xl space-y-6 cursor-pointer hover:border-[#A93207]/80 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-square overflow-hidden bg-black rounded-xl border border-white/10">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-[0.85] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#A93207] font-bold uppercase rounded-md">
                  {exp.num}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase block font-semibold">
                  {exp.category}
                </span>
                <h3 className="text-xl font-display font-extrabold uppercase text-white group-hover:text-[#A93207] transition-colors leading-tight">
                  {exp.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {exp.description}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[#A93207] font-bold tracking-wider uppercase">
                  {exp.tools}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experiment Modal */}
      {selectedExp && (
        <div
          onClick={() => setSelectedExp(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#080b12] border border-white/20 p-8 sm:p-12 max-w-2xl w-full space-y-6 relative rounded-3xl shadow-2xl"
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white font-mono text-xs uppercase font-bold cursor-pointer"
            >
              [ CLOSE ESC ]
            </button>

            <span className="text-xs font-mono text-[#A93207] uppercase tracking-widest block font-bold">
              {selectedExp.num} &bull; {selectedExp.category}
            </span>

            <h3 className="text-3xl font-display font-extrabold uppercase text-white">
              {selectedExp.title}
            </h3>

            <div className="aspect-video bg-black overflow-hidden border border-white/10 rounded-2xl">
              <img src={selectedExp.image} alt="" className="w-full h-full object-cover filter contrast-125" />
            </div>

            <p className="text-sm text-zinc-300 font-mono leading-relaxed uppercase">
              {selectedExp.description}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>TOOLS: {selectedExp.tools}</span>
              <span className="text-[#A93207] font-bold">EXPERIMENTAL STAGE</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperimentsSection;
