import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { playHoverSound, playClickSound } from "../../utils/audioEngine";
import { TiltCard } from "./tilt-card";

function StackingCard({ slide, index, total, progress, accentColor }) {
  // Stacking calculation supporting dynamic card count
  const targetScale = 1 - (total - index) * 0.025;
  const denominator = Math.max(total - 1, 1);
  const startRange = (index / denominator) * 0.65;
  const scale = useTransform(progress, [startRange, 1], [1, Math.max(targetScale, 0.75)]);
  
  // Card top offset for layered stacking (Compact top offset preventing viewport clipping)
  const topOffsetDesktop = 64 + index * 12;
  const topOffsetMobile = 52 + index * 8;

  const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
  const formattedTotal = total < 10 ? `0${total}` : `${total}`;

  return (
    <div
      className="sticky flex items-center justify-center my-2 sm:my-3 transform-gpu"
      style={{
        top: `clamp(${topOffsetMobile}px, 8vh + ${index * 10}px, ${topOffsetDesktop}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-[1180px] min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#090c14] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-8 select-none group transition-all duration-300 hover:border-[#A93207]/60 transform-gpu"
      >
        {/* Ambient Dark Gradient Accent */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top opacity-20 sm:opacity-20 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#090c14]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090c14] via-[#090c14]/85 to-transparent" />
        </div>

        {/* Card Info (Left) */}
        <div className="relative z-10 flex flex-col justify-between h-full space-y-3 sm:space-y-4 w-full lg:max-w-[52%]">
          {/* Tag & Counter */}
          <div className="flex items-center justify-between gap-2">
            <span
              className="px-2.5 py-1 sm:px-3.5 sm:py-1 rounded-full border font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md shadow-md"
              style={{
                borderColor: `${accentColor}55`,
                color: accentColor === '#00E5FF' ? '#00E5FF' : '#FF6B00',
                backgroundColor: `${accentColor}15`
              }}
            >
              {slide.overlay || `PROJECT ${formattedIndex}`}
            </span>

            <div className="flex items-center gap-1 font-mono text-[10px] sm:text-xs font-bold text-zinc-400 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 shrink-0">
              <span className="text-white">{formattedIndex}</span>
              <span className="text-white/30">/</span>
              <span>{formattedTotal}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-lg sm:text-2xl lg:text-4xl font-display font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-[1.05] drop-shadow-lg group-hover:text-white transition-colors">
              {slide.title}
            </h3>
            {slide.description && (
              <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-zinc-300 leading-relaxed max-w-[500px] line-clamp-2 sm:line-clamp-3">
                {slide.description}
              </p>
            )}
          </div>

          {/* Mobile Image Preview Block */}
          <div className="block lg:hidden my-1 sm:my-2 w-full">
            <a
              href={slide.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="block w-full h-[150px] xs:h-[180px] sm:h-[210px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 relative group/mobpreview shadow-xl no-underline"
              title={`Open ${slide.title}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover/mobpreview:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 pointer-events-none" />
            </a>
          </div>

          {/* Action CTA Button */}
          <div className="pt-1 sm:pt-3">
            <a
              href={slide.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-black font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest hover:bg-[#A93207] hover:text-white active:scale-[0.98] transition-all duration-300 shadow-xl group/btn no-underline min-h-[36px] sm:min-h-[40px]"
            >
              <span>{slide.action || "EXPLORE CASE STUDY"}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Preview Frame */}
        <div className="relative z-10 hidden lg:flex flex-col justify-center items-end w-[44%] h-full">
          <a
            href={slide.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="w-full h-full block cursor-pointer group/poster no-underline"
            title={`Open ${slide.title} live site`}
          >
            <TiltCard
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.03}
              glareEnable={true}
              glareMaxOpacity={0.25}
              className="w-full h-[250px] sm:h-[280px] lg:h-[300px] rounded-2xl overflow-hidden shadow-2xl relative group/preview border border-white/10 group-hover/poster:border-white/40 transition-colors"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/preview:opacity-10 transition-opacity pointer-events-none" />
            </TiltCard>
          </a>
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

  // Spacious track height with comfortable breathing space for desktop
  const trackHeight = `${(slides.length - 1) * 62 + 65}vh`;

  return (
    <div ref={containerRef} style={{ height: trackHeight }} className="relative w-full select-none pb-8 sm:pb-16 lg:pb-24">
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
