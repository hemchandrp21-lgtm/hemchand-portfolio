import { designProcessSteps } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';

function ProcessSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
              <span>DESIGN METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
              PROCESS <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>FRAMEWORK</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-xs uppercase tracking-widest">
            8 iterative phases from user discovery to polished final delivery.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designProcessSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl glass-card relative overflow-hidden group space-y-4 transition-all duration-300 hover:border-white/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className={`text-sm font-mono font-bold tracking-widest ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  {step.num}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  PHASE
                </span>
              </div>

              <h3 className="text-lg font-display uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
