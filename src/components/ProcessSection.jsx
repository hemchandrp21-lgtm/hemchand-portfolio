import { designProcessSteps } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';
import { Compass, CheckCircle2 } from 'lucide-react';

function ProcessSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Glow */}
      <div className={`absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full filter blur-[150px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
              <span>DESIGN METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold uppercase tracking-tight text-white leading-none">
              PROCESS <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>FRAMEWORK</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-md uppercase tracking-wider leading-relaxed">
            Iterative UX framework from empathetic user discovery to high-fidelity prototype testing and handoff.
          </p>
        </div>

        {/* Echo Vale Process Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designProcessSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden group space-y-4 transition-all duration-500 hover:border-white/25 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                  <span className={`font-bold tracking-widest text-sm ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {step.num}
                  </span>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    PHASE
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                <CheckCircle2 className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;

