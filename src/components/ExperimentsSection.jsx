import { useState } from 'react';
import { experiments } from '../data/projectsData';

function ExperimentsSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experiments" className="relative w-full py-32 px-6 lg:px-12 bg-[#070707] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400">
              04 &mdash; PLAYGROUND
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2">
              EXPERIMENTS.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Exploring beyond traditional UI constraints. Shaders, AI generation nodes, kinetic typography, and audio-visual micro-interactions.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              data-cursor="INSPECT"
              className="group relative bg-zinc-950 border border-white/10 p-6 rounded-sm space-y-6 cursor-pointer hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-square overflow-hidden bg-zinc-900 rounded-sm">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-[0.8] group-hover:scale-110 transition-transform duration-500"
                />
                {/* Chromatic Ghost Overlay on Hover */}
                <img
                  src={exp.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-0 group-hover:opacity-40 filter hue-rotate-90 translate-x-2 transition-opacity pointer-events-none"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400 uppercase">
                  {exp.num}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase block">
                  {exp.category}
                </span>
                <h3 className="text-xl font-display font-bold uppercase text-white group-hover:text-amber-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {exp.description}
                </p>
                <div className="pt-2 text-[10px] font-mono text-amber-400">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-950 border border-white/20 p-8 sm:p-12 max-w-2xl w-full space-y-6 relative rounded-sm shadow-2xl"
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white font-mono text-sm uppercase"
            >
              [ CLOSE ESC ]
            </button>

            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              {selectedExp.num} &bull; {selectedExp.category}
            </span>

            <h3 className="text-3xl font-display font-bold uppercase text-white">
              {selectedExp.title}
            </h3>

            <div className="aspect-video bg-zinc-900 overflow-hidden border border-white/10">
              <img src={selectedExp.image} alt="" className="w-full h-full object-cover filter contrast-125" />
            </div>

            <p className="text-sm text-zinc-300 font-sans leading-relaxed">
              {selectedExp.description}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>TOOLS: {selectedExp.tools}</span>
              <span className="text-amber-400">EXPERIMENTAL STAGE</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperimentsSection;
