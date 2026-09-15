import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

const CARD_DATA = [
  {
    id: '01',
    title: "Family Time UX",
    category: "RESEARCH · UX DESIGN",
    description: "Exploring meaningful social connections & modern family dynamics.",
    image: "/nobroker_behance.jpg",
    tags: ["Research", "Figma", "UX"]
  },
  {
    id: '02',
    title: "Inkscale Store",
    category: "E-COMMERCE · BRAND",
    description: "Brand identity system and responsive shopping experience.",
    image: "/inkscale_behance.jpg",
    tags: ["Shopify", "UI/UX", "Brand"]
  },
  {
    id: '03',
    title: "Digital Identity",
    category: "PERSONAL BRAND",
    description: "Interactive visual world showcasing projects and experiments.",
    image: "/hozatra_behance.jpg",
    tags: ["React", "Motion", "Design"]
  },
  {
    id: '04',
    title: "3D Spatial Lab",
    category: "CREATIVE TECH",
    description: "Cinematic 3D experiments and spatial composition.",
    image: "/mobile_app_behance.jpg",
    tags: ["3D Art", "Direction", "WebGL"]
  },
  {
    id: '05',
    title: "Echo Engine",
    category: "EXPERIMENTAL FX",
    description: "Volumetric particle systems and dynamic theme engines.",
    image: "/hozatra_behance.jpg",
    tags: ["Shaders", "GLSL", "Interactive"]
  }
];

export function CardFanCarousel({
  items = CARD_DATA,
  sectionTitle = "CREATIVE ARCHIVE",
  sectionSubtitle = "01 / CREATIVE FAN CAROUSEL"
}) {
  const isFire = true;
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 bg-[#050507] text-white border-y border-white/10 overflow-hidden select-none font-sans">
      {/* Volumetric Glow matching Ice/Fire Theme */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[200px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-[#E04E39]/15' : 'bg-[#3FBCE8]/15'
      }`} />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10 space-y-16">
        {/* Section Header with Chromatic Styling */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#E04E39]">
            <Sparkles className={`w-3.5 h-3.5 ${isFire ? 'text-[#E04E39]' : 'text-cyan-400'}`} />
            <span>{sectionSubtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            {sectionTitle}
          </h2>

          <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            HOVER OVER CARDS TO SPREAD THE FAN &bull; CLICK TO SELECT
          </p>
        </div>

        {/* Card Fan Stage */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center pt-8"
        >
          {items.map((card, index) => {
            const offset = index - activeIndex;
            const isSelected = index === activeIndex;

            // Compute precise arc fan angles & positions
            const fanAngle = isHovered ? 14 : 5;
            const rotateDeg = offset * fanAngle;
            const translateX = offset * (isHovered ? 85 : 30);
            const translateY = Math.abs(offset) * (isHovered ? 16 : 6);
            const scale = isSelected ? 1.05 : 1 - Math.abs(offset) * 0.06;
            const zIndex = items.length - Math.abs(offset);

            return (
              <motion.div
                key={card.id || index}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  rotate: rotateDeg,
                  x: translateX,
                  y: translateY,
                  scale: scale,
                  zIndex: zIndex
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24
                }}
                whileHover={{
                  scale: isSelected ? 1.1 : scale * 1.05,
                  y: translateY - 20,
                  transition: { duration: 0.2 }
                }}
                style={{ transformOrigin: 'bottom center' }}
                className={`absolute w-[270px] sm:w-[320px] h-[360px] sm:h-[410px] rounded-[2rem] p-5 cursor-pointer overflow-hidden border backdrop-blur-xl shadow-2xl transition-[border-color,background-color,box-shadow,opacity] duration-300 ${
                  isSelected
                    ? isFire
                      ? 'border-[#E04E39] shadow-[0_0_40px_rgba(224,78,57,0.35)] bg-[#0e0e12]/95'
                      : 'border-[#3FBCE8] shadow-[0_0_40px_rgba(63,188,232,0.35)] bg-[#0e0e12]/95'
                    : 'border-white/15 bg-[#09090b]/85 opacity-75 hover:opacity-100 hover:border-white/30'
                }`}
              >
                {/* Image Showcase Frame */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full font-mono text-[10px] font-extrabold tracking-widest uppercase border backdrop-blur-md shadow-md ${
                    isSelected
                      ? isFire
                        ? 'bg-[#E04E39] border-[#E04E39] text-white'
                        : 'bg-[#3FBCE8] border-[#3FBCE8] text-black'
                      : 'bg-black/70 border-white/20 text-zinc-300'
                  }`}>
                    {card.id}
                  </span>
                </div>

                {/* Card Details */}
                <div className="space-y-2 font-mono">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${
                      isSelected ? (isFire ? 'text-[#E04E39]' : 'text-[#3FBCE8]') : 'text-zinc-500'
                    }`}>
                      {card.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                  </div>

                  <h3 className="text-base sm:text-xl font-display font-extrabold text-white uppercase tracking-tight line-clamp-1">
                    {card.title}
                  </h3>

                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-1.5 pt-1">
                    {card.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-zinc-400 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Circular Single-Card Controls (21st.dev Style) */}
        <div className="flex items-center gap-6 pt-4 font-mono">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all active:scale-95 shadow-lg"
            aria-label="Previous Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Active Card Number Counter & Dots */}
          <div className="flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className={`font-mono text-xs font-bold ${isFire ? 'text-[#E04E39]' : 'text-[#3FBCE8]'}`}>
              0{activeIndex + 1}
            </span>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? `w-6 ${isFire ? 'bg-[#E04E39]' : 'bg-[#3FBCE8]'}`
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-zinc-500">
              0{items.length}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all active:scale-95 shadow-lg"
            aria-label="Next Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardFanCarousel;
