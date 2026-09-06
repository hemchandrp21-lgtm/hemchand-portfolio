import { internships } from '../data/projectsData';

function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-32 px-6 lg:px-12 bg-[#070707] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-semibold">
              06 &mdash; PROFESSIONAL JOURNEY
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2 text-white">
              INTERNSHIP EXPERIENCE.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Hands-on design experience across e-commerce ecosystems, gamified UX platforms, enterprise software, and freelance client work.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8">
          {internships.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 bg-zinc-950 border border-white/10 shadow-sm rounded-sm hover:border-amber-400/50 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold tracking-widest uppercase block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                    {exp.company}
                  </h3>
                </div>
                <div className="px-3.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 font-medium uppercase self-start sm:self-center">
                  {exp.role}
                </div>
              </div>

              <p className="text-base text-zinc-300 font-sans leading-relaxed">
                "{exp.summary}"
              </p>

              {exp.projectsIncluded && (
                <div className="p-4 bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-amber-400 uppercase block font-bold mb-1">E-COMMERCE PLATFORMS WORKED ON:</span>
                  {exp.projectsIncluded.join(' • ')}
                </div>
              )}

              {exp.selectedWork && (
                <div className="p-4 bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-amber-400 uppercase block font-bold mb-1">SELECTED FREELANCE DELIVERABLES:</span>
                  {exp.selectedWork.join(' • ')}
                </div>
              )}

              {/* Focus tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.focus.map((item, i) => (
                  <span key={i} className="text-[10px] font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-sm border border-zinc-800 font-medium">
                    &bull; {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
