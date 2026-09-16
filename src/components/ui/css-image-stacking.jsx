import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { playHoverSound, playClickSound } from "../../utils/audioEngine";
import { useIceFire } from "../../context/IceFireContext";
import { TiltCard } from "./tilt-card";

function StackingCard({ slide, index, total, progress, targetScale, accentColor }) {
  // Compute scale reduction as subsequent cards stack over this card
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  
  const isExternal = Boolean(slide.target === "_blank" || slide.href?.startsWith("http"));

  return (
    <div
      className="sticky top-20 sm:top-24 flex items-center justify-center my-6 sm:my-10"
      style={{
        top: `calc(12vh + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-[1200px] min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] rounded-3xl overflow-hidden border border-white/15 bg-[#080b12]/95 backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row justify-between p-6 sm:p-10 select-none group transition-shadow duration-500 hover:shadow-[0_35px_80px_-15px_rgba(169,50,7,0.3)]"
      >
        {/* Background Image & Ambient Gradient Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top opacity-35 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#080b12]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040507]/95 via-[#080b12]/60 to-transparent" />
        </div>

        {/* Card Left Info Section */}
        <div className="relative z-10 flex flex-col justify-between h-full space-y-6 lg:max-w-[55%]">
          {/* Top Tag & Stack Counter */}
          <div className="flex items-center justify-between">
            <span
              className="px-4 py-1.5 rounded-full border font-mono text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-md"
              style={{
                backgroundColor: `${accentColor}25`,
                borderColor: `${accentColor}66`,
                color: accentColor === '#00E5FF' ? '#00E5FF' : '#FF6B00'
              }}
            >
              {slide.overlay || `CASE STUDY 0${index + 1}`}
            </span>

            <div className="flex items-center gap-2 font-mono text-xs font-bold text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <span className="text-white">0{index + 1}</span>
              <span className="text-white/30">/</span>
              <span>0{total}</span>
            </div>
          </div>

          {/* Title & Subtitle/Description */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.1] drop-shadow-xl group-hover:text-white/90 transition-colors">
              {slide.title}
            </h3>
            {slide.description && (
              <p className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed max-w-[520px]">
                {slide.description}
              </p>
            )}
          </div>

          {/* Action Link Button */}
          <div className="pt-4">
            {isExternal ? (
              <a
                href={slide.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-all duration-300 shadow-2xl group/btn no-underline"
              >
                <span>EXPLORE LIVE SITE</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <Link
                to={slide.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-all duration-300 shadow-2xl group/btn no-underline"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        {/* Right High-Impact Project Card Display */}
        <div className="relative z-10 hidden lg:flex flex-col justify-center items-end w-[42%] h-full">
          <TiltCard
            tiltMaxAngleX={16}
            tiltMaxAngleY={16}
            scale={1.04}
            glareEnable={true}
            glareMaxOpacity={0.35}
            className="w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl relative group/preview"
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/preview:opacity-20 transition-opacity pointer-events-none" />
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
      {slides.map((slide, i) => {
        const targetScale = 1 - (slides.length - i) * 0.04;
        return (
          <StackingCard
            key={slide.id || i}
            slide={slide}
            index={i}
            total={slides.length}
            progress={scrollYProgress}
            targetScale={targetScale}
            accentColor={accent}
          />
        );
      })}
    </div>
  );
}

export default CSSImageStacking;
