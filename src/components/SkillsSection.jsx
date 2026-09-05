import { skillsSystem, toolsList } from '../data/projectsData';

function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-32 px-6 lg:px-12 bg-[#f8f9fa] text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="border-b border-zinc-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold">
              07 &amp; 08 &mdash; VISUAL SKILL SYSTEM
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase mt-2 text-zinc-900">
              SKILLS &amp; TOOLKIT.
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
            A non-bar visual skill architecture spanning UX research, visual systems, creative technology, and specialized interface domains.
          </p>
        </div>

        {/* 4 Core Discipline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: UX / Product */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600 border-b border-zinc-200 pb-3 font-bold">
              UX &amp; PRODUCT DESIGN
            </h3>
            <div className="space-y-2">
              {skillsSystem.uxProduct.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-zinc-200 text-xs font-mono text-zinc-800 uppercase hover:border-amber-500 shadow-sm transition-colors font-medium">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Visual */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600 border-b border-zinc-200 pb-3 font-bold">
              VISUAL &amp; BRANDING
            </h3>
            <div className="space-y-2">
              {skillsSystem.visual.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-zinc-200 text-xs font-mono text-zinc-800 uppercase hover:border-amber-500 shadow-sm transition-colors font-medium">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Tech / Experimentation */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600 border-b border-zinc-200 pb-3 font-bold">
              TECH &amp; EXPERIMENTATION
            </h3>
            <div className="space-y-2">
              {skillsSystem.techExperimentation.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-zinc-200 text-xs font-mono text-zinc-800 uppercase hover:border-amber-500 shadow-sm transition-colors font-medium">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Specialities */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-amber-600 border-b border-zinc-200 pb-3 font-bold">
              INTERFACE SPECIALITIES
            </h3>
            <div className="space-y-2">
              {skillsSystem.specialities.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-zinc-200 text-xs font-mono text-zinc-800 uppercase hover:border-amber-500 shadow-sm transition-colors font-medium">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 08: Visual Software Toolkit */}
        <div className="p-8 bg-white border border-zinc-200 shadow-sm rounded-sm space-y-6">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-600 font-semibold block">
            08 &mdash; SOFTWARE &amp; TOOLKIT
          </span>
          <div className="flex flex-wrap gap-3">
            {toolsList.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-900 font-semibold uppercase tracking-wider hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
