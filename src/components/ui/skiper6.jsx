import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const DEFAULT_MEMBERS = [
  {
    id: 1,
    name: "HEMCHAND PAUNIKAR",
    role: "UI/UX DESIGNER & CREATIVE TECH",
    year: "2026",
    image: "/hozatra_behance.jpg",
    tags: ["UX Research", "Figma", "Design Systems"]
  },
  {
    id: 2,
    name: "FAMILY TIME UX",
    role: "UEDP5 SOCIAL IMPACT CASE STUDY",
    year: "2025",
    image: "/nobroker_behance.jpg",
    tags: ["User Experience", "Problem Framing", "Prototyping"]
  },
  {
    id: 3,
    name: "INKSCALE STORE",
    role: "E-COMMERCE & BRAND ARCHITECTURE",
    year: "2025",
    image: "/inkscale_behance.jpg",
    tags: ["Brand Systems", "Shopify", "UI Design"]
  },
  {
    id: 4,
    name: "3D SPATIAL LAB",
    role: "CINEMATIC VISUAL EXPERIMENTS",
    year: "2024",
    image: "/mobile_app_behance.jpg",
    tags: ["Art Direction", "Motion Graphics", "3D Art"]
  }
];

export function Skiper6({
  members = DEFAULT_MEMBERS,
  defaultTitle = "HOVER TO EXPLORE SHOWCASE",
  subtitle = "06 / HOVER SHOWCASE — SKIPER6 ANIMATION ENGINE"
}) {
  const isFire = true;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Mouse coordinate springs for floating preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white overflow-hidden border-t border-white/10 select-none"
    >
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[200px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-[#E04E39]/10' : 'bg-cyan-500/10'
      }`} />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#E04E39] tracking-[0.25em] uppercase font-bold mb-3">
            <Sparkles className={`w-4 h-4 ${isFire ? 'text-[#E04E39]' : 'text-cyan-400'}`} />
            <span>{subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white">
            {hoveredIndex !== null ? (
              <motion.span
                key={hoveredIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={isFire ? 'echo-vale-title-coral' : 'echo-vale-title-ice'}
              >
                {members[hoveredIndex].name}
              </motion.span>
            ) : (
              <span className="text-zinc-400">{defaultTitle}</span>
            )}
          </h2>
        </div>

        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isFire ? 'bg-[#E04E39]' : 'bg-cyan-400'} animate-pulse`} />
          <span>INTERACTIVE HOVER REVEAL</span>
        </div>
      </div>

      {/* Members Showcase List */}
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        {members.map((member, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div
              key={member.id || index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="group relative py-8 sm:py-10 border-b border-white/10 cursor-pointer transition-all duration-300"
            >
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ${
                isHovered
                  ? 'px-4 sm:px-6 bg-white/[0.03] rounded-2xl border border-white/10'
                  : isAnyHovered
                  ? 'opacity-30 blur-[0.5px]'
                  : 'opacity-90'
              }`}>
                {/* Left: Index & Name */}
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className={`font-mono text-xs sm:text-sm font-bold tracking-widest ${
                    isHovered ? (isFire ? 'text-[#E04E39]' : 'text-cyan-400') : 'text-zinc-500'
                  }`}>
                    0{index + 1}
                  </span>

                  <h3 className={`text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight transition-colors duration-300 ${
                    isHovered
                      ? (isFire ? 'text-white' : 'text-white')
                      : 'text-zinc-200'
                  }`}>
                    {member.name}
                  </h3>
                </div>

                {/* Right: Role & Arrow */}
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-12">
                  <div className="flex flex-col items-start sm:items-end">
                    <span className="font-mono text-xs sm:text-sm text-zinc-300 font-semibold tracking-wider uppercase">
                      {member.role}
                    </span>
                    <div className="flex gap-2 mt-1">
                      {member.tags?.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isHovered
                      ? (isFire ? 'bg-[#E04E39] border-[#E04E39] text-white rotate-45' : 'bg-cyan-500 border-cyan-500 text-black rotate-45')
                      : 'border-white/10 text-zinc-400'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mouse Following Image Preview Card (Skiper6 Core Animation) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          left: -120,
          top: -140
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:block"
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: 2 }}
              exit={{ scale: 0.6, opacity: 0, rotate: 6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-900"
            >
              <img
                src={members[hoveredIndex].image}
                alt={members[hoveredIndex].name}
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-white">
                <span className={`block font-bold uppercase ${isFire ? 'text-[#E04E39]' : 'text-cyan-400'}`}>
                  {members[hoveredIndex].name}
                </span>
                <span className="text-[10px] text-zinc-300">
                  {members[hoveredIndex].year} — SHOWCASE PREVIEW
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skiper6;
