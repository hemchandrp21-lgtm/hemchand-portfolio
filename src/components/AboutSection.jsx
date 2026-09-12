import { useIceFire } from '../context/IceFireContext';
import { Award, Zap, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

function AboutSection() {
  const { isFire } = useIceFire();

  const stats = [
    { label: 'YEARS UX EXPERIENCE', value: '2023–27', sub: 'Symbiosis SID' },
    { label: 'CASE STUDIES', value: '06+', sub: 'End-to-End Projects' },
    { label: 'AVG SATISFACTION LIFT', value: '+82%', sub: 'Usability Testing' },
    { label: 'DESIGN COMPETENCIES', value: '10+', sub: 'UI/UX & Creative Tech' },
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white overflow-hidden border-t border-white/10">
      {/* Echo Vale Volumetric Ambient Background Glows */}
      <div className={`absolute top-1/3 left-[-10%] w-[550px] h-[550px] rounded-full filter blur-[160px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />
      <div className={`absolute bottom-1/4 right-[-10%] w-[550px] h-[550px] rounded-full filter blur-[160px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-orange-600/10' : 'bg-emerald-600/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
              <span>PHILOSOPHY & POSITIONING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold uppercase tracking-tight text-white leading-none">
              ABOUT <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>HEMCHAND</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-md uppercase tracking-wider leading-relaxed">
            Bridging evidence-based UX research, high-craft product design, and creative front-end technology.
          </p>
        </div>

        {/* Stats Counter Row (Echo Vale Metric Banner) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-2 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                {stat.label}
              </span>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-display font-bold ${
                isFire ? 'text-white group-hover:text-amber-400' : 'text-white group-hover:text-cyan-400'
              } transition-colors`}>
                {stat.value}
              </div>
              <span className="text-[11px] font-mono text-zinc-400 block">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Manifesto Bento Card (Echo Vale Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden space-y-10">
          <div className="space-y-6 max-w-4xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase leading-[1.2] tracking-tight text-white font-semibold">
              I DESIGN AT THE INTERSECTION OF <br />
              <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>
                HUMAN EMOTION &times; CREATIVE TECHNOLOGY.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed tracking-wide">
              I am Hemchand Paunikar, a B.Des UX Design candidate at Symbiosis Institute of Design. My work focuses on removing friction, discovering key user insights, and crafting sleek digital interfaces that feel tactile, responsive, and meaningful.
            </p>
          </div>

          {/* 3 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <Zap className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  01 &bull; EMOTION & UTILITY
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                Interfaces should feel intuitive, tactile, and visually inspiring, removing friction while delighting users.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <Award className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  02 &bull; EVIDENCE UX
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                Usability testing, quantitative metrics, and user interviews drive every interaction and visual decision.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className={`w-4 h-4 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  03 &bull; CREATIVE TECH
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                Bridging design with front-end execution, micro-interactions, AI-assisted tools, and dynamic motion.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Competencies Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              ACADEMIC FOUNDATION
            </h4>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4 font-mono text-xs backdrop-blur-md">
              <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-3">
                <span className="font-semibold text-white">DEGREE PROGRAM</span>
                <span className={`font-bold ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>2023 &ndash; 2027</span>
              </div>
              <div>
                <p className="text-base text-white font-semibold font-sans">
                  B.Des in User Experience Design
                </p>
                <p className="text-xs text-zinc-400 pt-1">
                  Symbiosis Institute of Design (SID), Pune, India
                </p>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 leading-relaxed font-sans border-t border-white/5">
                Focus on UX Research, Information Architecture, Interactive Prototyping, Usability Testing & Product Design Systems.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
              PRIMARY COMPETENCIES
            </h4>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              {[
                'UI/UX Design',
                'Product Architecture',
                'Design Systems',
                'Usability Testing',
                'User Research',
                'Wireframing & Spec',
                'Brand Identity',
                'Creative Motion'
              ].map((skill) => (
                <div 
                  key={skill}
                  className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

