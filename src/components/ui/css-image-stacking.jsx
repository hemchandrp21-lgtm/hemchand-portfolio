import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { playHoverSound, playClickSound } from "../../utils/audioEngine";
import { TiltCard } from "./tilt-card";

function StackingCard({ slide, index, total, progress, accentColor }) {
  // 21st.dev @ishamsu/scroll-cards card stacking calculations
  const targetScale = 1 - (total - index) * 0.04;
  const startRange = index / total;
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);
  
  // Card top offset for clean layered stacking
  const topOffset = 80 + index * 24;

  return (
    <div
      className="sticky flex items-center justify-center my-6 sm:my-10 transform-gpu"
      style={{
        top: `${topOffset}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-[1140px] min-h-[420px] sm:min-h-[500px] lg:min-h-[520px] rounded-3xl overflow-hidden border border-white/15 bg-[#090c14] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row justify-between p-6 sm:p-10 select-none group transition-all duration-300 hover:border-[#A93207]/60 transform-gpu"
      >
        {/* Background Image Vignette Accent */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top opacity-20 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#090c14]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090c14] via-[#090c14]/80 to-transparent" />
        </div>

        {/* Card Content (Left) */}
        <div className="relative z-10 flex flex-col justify-between h-full space-y-6 lg:max-w-[52%]">
          {/* Top Pill Header */}
          <div className="flex items-center justify-between gap-3">
            <span
              className="px-3.5 py-1.5 rounded-full border font-mono text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md shadow-md"
              style={{
                borderColor: `${accentColor}55`,
                color: accentColor === '#00E5FF' ? '#00E5FF' : '#FF6B00',
                backgroundColor: `${accentColor}15`
              }}
            >
              {slide.overlay || `PROJECT 0${index + 1}`}
            </span>

            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
              <span className="text-white">0{index + 1}</span>
              <span className="text-white/30">/</span>
              <span>0{total}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05] drop-shadow-lg group-hover:text-white transition-colors">
              {slide.title}
            </h3>
            {slide.description && (
              <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed max-w-[500px]">
                {slide.description}
              </p>
            )}
          </div>

          {/* Action CTA Button */}
          <div className="pt-4">
            <a
              href={slide.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#A93207] hover:text-white active:scale-[0.98] transition-all duration-300 shadow-2xl group/btn no-underline min-h-[44px]"
            >
              <span>{slide.action || "EXPLORE CASE STUDY"}</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Project Preview Image Frame */}
        <div className="relative z-10 hidden lg:flex flex-col justify-center items-end w-[44%] h-full">
          <TiltCard
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.03}
            glareEnable={true}
            glareMaxOpacity={0.25}
            className="w-full h-[320px] sm:h-[350px] rounded-2xl overflow-hidden shadow-2xl relative group/preview border border-white/10"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/preview:opacity-10 transition-opacity pointer-events-none" />
          </TiltCard>
        </div>
      </motion.div>
    </div>
  );
}

export function CSSImageStacking({ slides = [], accent = "#A93207" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!slides || slides.length === 0) return null;

  return (
    <div ref={containerRef} className="relative w-full py-8 select-none">
      {slides.map((slide, i) => (
        <StackingCard
          key={slide.id || i}
          slide={slide}
          index={i}
          total={slides.length}
          progress={scrollYProgress}
          accentColor={accent}
        />
      ))}
    </div>
  );
}

export default CSSImageStacking;
