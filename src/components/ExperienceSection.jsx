import { internships } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

function ExperienceSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow */}
      <div className={`absolute top-1/2 right-[-10%] w-[500px] h-[500px] rounded-full filter blur-[150px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-500/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
              <span>INDUSTRY EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold uppercase tracking-tight text-white leading-none">
              WHERE I&apos;VE <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>WORKED</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-md uppercase tracking-wider leading-relaxed">
            Hands-on design internships, e-commerce products, design system creation, and real-world client handoffs.
          </p>
        </div>

        {/* Timeline Experience Cards Grid (Echo Vale Style) */}
        <div className="space-y-6">
          {internships.map((exp, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <article
                key={exp.company}
                className="group relative rounded-3xl bg-zinc-900/40 border border-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                {/* Accent Side Line */}
                <div className={`absolute top-0 left-0 w-1.5 h-full transition-colors duration-500 ${
                  isFire ? 'bg-amber-400/40 group-hover:bg-amber-400' : 'bg-cyan-400/40 group-hover:bg-cyan-400'
                }`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Period & Role */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl font-mono font-bold tracking-widest ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                        {num}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-zinc-500" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-semibold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      {exp.company}
                    </h3>

                    <p className="text-xs font-mono text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.role}
                    </p>
                  </div>

                  {/* Right Column: Summary & Tags */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      {exp.summary}
                    </p>

                    {exp.focus && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {exp.focus.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase hover:border-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

