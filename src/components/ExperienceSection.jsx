import { internships } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';

function ExperienceSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
              <span>INDUSTRY EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
              WHERE I&apos;VE <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>WORKED</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-xs uppercase tracking-widest">
            Hands-on design internships, e-commerce products, and real-world client handoffs.
          </p>
        </div>

        {/* Editorial Internship List */}
        <div className="space-y-0">
          {internships.map((exp, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <div
                key={exp.company}
                className="group relative border-b border-white/10 py-10 transition-all duration-300 hover:bg-white/[0.02] px-4 sm:px-6 rounded-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Date */}
                  <div className="lg:col-span-4 flex items-start justify-between lg:flex-col lg:justify-start space-y-2">
                    <span className={`text-xl font-mono font-bold tracking-widest ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {num}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="lg:col-span-4 space-y-1">
                    <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {exp.role}
                    </p>
                  </div>

                  {/* Summary & Focus Tags */}
                  <div className="lg:col-span-4 space-y-4">
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      {exp.summary}
                    </p>

                    {exp.focus && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.focus.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-400 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
