import { useState } from 'react';
import { designProcessSteps } from '../data/projectsData';

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = designProcessSteps[activeStep];

  return (
    <section id="process" className="relative w-full py-32 px-6 lg:px-12 bg-[#ffffff] text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="border-b border-zinc-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold">
              13 &mdash; DESIGN METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2 text-zinc-900">
              DESIGN PROCESS.
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
            An 8-stage iterative framework moving from observation and qualitative research to refined digital products.
          </p>
        </div>

        {/* Interactive Step Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {designProcessSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left transition-all duration-300 border flex flex-col justify-between space-y-3 ${
                  isActive
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105 z-10'
                    : 'bg-zinc-100 text-zinc-800 border-zinc-200 hover:bg-zinc-200'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-white' : 'text-amber-700'}`}>
                  {step.num}
                </span>
                <h3 className="font-display font-bold uppercase text-xs sm:text-sm tracking-tight leading-tight">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Highlight Banner */}
        <div className="p-8 sm:p-12 bg-white border border-zinc-200 shadow-sm rounded-sm space-y-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono text-amber-600 uppercase tracking-widest block font-bold">
              STAGE {current.num} &bull; {current.title}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-zinc-900">
              "{current.desc}"
            </h3>
          </div>
          <div className="text-5xl font-mono text-amber-600/20 font-black">
            {current.num}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
