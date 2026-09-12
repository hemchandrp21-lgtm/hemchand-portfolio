import { skillsSystem, toolsList, certifications } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';
import { Wrench, Award, Code, Sparkles, Layers } from 'lucide-react';

function SkillsSection() {
  const { isFire } = useIceFire();

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow */}
      <div className={`absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[160px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
              <span>TOOLKIT & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold uppercase tracking-tight text-white leading-none">
              SKILLS <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>&amp; TOOLS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-md uppercase tracking-wider leading-relaxed">
            Multi-disciplinary expertise spanning core product design, research methodologies, and interactive front-end technology.
          </p>
        </div>

        {/* Skills Categories Stack (Echo Vale Style) */}
        <div className="space-y-12">
          {/* 1. UX & Product Design */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
              <Layers className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>01 &bull; UX &amp; PRODUCT DESIGN ARCHITECTURE</span>
            </div>
            <div className="flex flex-wrap gap-2.5 font-mono">
              {skillsSystem.uxProduct.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs text-zinc-200 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 2. Visual & Art Direction */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
              <Sparkles className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>02 &bull; VISUAL &amp; ART DIRECTION</span>
            </div>
            <div className="flex flex-wrap gap-2.5 font-mono">
              {skillsSystem.visual.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs text-zinc-200 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 3. Tech & Creative Code */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
              <Code className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>03 &bull; TECH &amp; CREATIVE CODE</span>
            </div>
            <div className="flex flex-wrap gap-2.5 font-mono">
              {skillsSystem.techExperimentation.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs text-zinc-200 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 4. Software Tools */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
              <Wrench className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>04 &bull; SOFTWARE &amp; PLATFORMS</span>
            </div>
            <div className="flex flex-wrap gap-2 font-mono">
              {toolsList.map((tool) => (
                <span
                  key={tool}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 ${
                    isFire
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400'
                      : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Certifications */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
              <Award className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>05 &bull; CERTIFICATIONS &amp; CREDENTIALS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 hover:border-white/20 transition-all"
                >
                  <p className="text-white font-semibold">{cert.title}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {cert.provider}
                  </p>
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

