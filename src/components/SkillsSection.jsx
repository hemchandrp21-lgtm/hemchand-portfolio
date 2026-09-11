import { skillsSystem, toolsList, certifications } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';

function SkillsSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
            <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
            <span>TOOLKIT & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
            SKILLS <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>&amp; TOOLS</span>
          </h2>
        </div>

        {/* Experimental Typography Skills Cloud */}
        <div className="space-y-12">
          {/* 1. UX & Product Design */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase block border-b border-white/10 pb-2">
              01 &bull; UX &amp; PRODUCT DESIGN
            </span>
            <div className="flex flex-wrap gap-3 font-mono">
              {skillsSystem.uxProduct.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl glass-card text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Visual & Art Direction */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase block border-b border-white/10 pb-2">
              02 &bull; VISUAL &amp; ART DIRECTION
            </span>
            <div className="flex flex-wrap gap-3 font-mono">
              {skillsSystem.visual.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl glass-card text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Tech & Creative Code */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase block border-b border-white/10 pb-2">
              03 &bull; TECH &amp; CREATIVE CODE
            </span>
            <div className="flex flex-wrap gap-3 font-mono">
              {skillsSystem.techExperimentation.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl glass-card text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Software Tools */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase block border-b border-white/10 pb-2">
              04 &bull; SOFTWARE &amp; PLATFORMS
            </span>
            <div className="flex flex-wrap gap-2.5 font-mono">
              {toolsList.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-300 ${
                    isFire
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Certifications */}
          <div className="space-y-4 pt-4">
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase block border-b border-white/10 pb-2">
              05 &bull; CERTIFICATIONS &amp; CREDENTIALS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1"
                >
                  <p className="text-white font-medium">{cert.title}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
