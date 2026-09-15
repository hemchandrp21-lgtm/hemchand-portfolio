import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { playHoverSound, playClickSound } from "../../utils/audioEngine";

export function SqueezeCarousel({
    slides = [],
    defaultIndex = 0,
    onIndexChange,
    pinnedScrollProgress = null,
    accent = "#A93207",
    label = "Featured Cases",
    className = "",
}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const count = slides ? slides.length : 0;
    const navigate = useNavigate();
    const lastProgressRef = useRef(pinnedScrollProgress);

    // Sync scroll progress from sticky parent section ONLY when actual user scrolling happens
    useEffect(() => {
        if (pinnedScrollProgress !== null && pinnedScrollProgress !== undefined && count > 1) {
            const diff = Math.abs((pinnedScrollProgress ?? 0) - (lastProgressRef.current ?? 0));
            if (diff > 0.005) {
                lastProgressRef.current = pinnedScrollProgress;
                const targetIndex = Math.min(
                    count - 1,
                    Math.floor(pinnedScrollProgress * count)
                );
                setActiveIndex(targetIndex);
            }
        }
    }, [pinnedScrollProgress, count]);

    const handleNext = () => {
        playClickSound();
        const nextIdx = (activeIndex + 1) % count;
        setActiveIndex(nextIdx);
        onIndexChange?.(nextIdx);
    };

    const handlePrev = () => {
        playClickSound();
        const prevIdx = (activeIndex - 1 + count) % count;
        setActiveIndex(prevIdx);
        onIndexChange?.(prevIdx);
    };

    const handleSelect = (index) => {
        playClickSound();
        setActiveIndex(index);
        onIndexChange?.(index);
    };

    const handleCardClick = (index, slide) => {
        if (index !== activeIndex) {
            handleSelect(index);
        } else if (slide.href) {
            playClickSound();
            if (slide.target === "_blank" || slide.href.startsWith("http")) {
                window.open(slide.href, "_blank", "noopener,noreferrer");
            } else {
                navigate(slide.href);
            }
        }
    };

    if (!count) return null;

    const currentSlide = slides[activeIndex];

    return (
        <div className={`flex w-full flex-col select-none ${className}`}>
            {/* Top Bar: Progress Bullets & Controls */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelect(idx)}
                            onMouseEnter={playHoverSound}
                            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                                idx === activeIndex
                                    ? "w-8"
                                    : "w-2 bg-white/20 hover:bg-white/50"
                            }`}
                            style={idx === activeIndex ? { backgroundColor: accent } : {}}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-white/50 mr-2">
                        <span className="text-white text-sm">{String(activeIndex + 1).padStart(2, "0")}</span>
                        <span className="mx-1 text-white/30">/</span>
                        <span>{String(count).padStart(2, "0")}</span>
                    </span>

                    <button
                        type="button"
                        onClick={handlePrev}
                        onMouseEnter={playHoverSound}
                        className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg outline-none"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        onMouseEnter={playHoverSound}
                        className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg outline-none"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Accordion Squeeze Row */}
            <div className="relative w-full h-[360px] sm:h-[400px] flex gap-3 sm:gap-4 overflow-hidden my-2">
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={slide.id || index}
                            onClick={() => handleCardClick(index, slide)}
                            onMouseEnter={() => {
                                if (!isActive) playHoverSound();
                            }}
                            className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex group/card ${
                                isActive
                                    ? "flex-[4.5] sm:flex-[5] border border-white/25 ring-1 ring-white/15 shadow-2xl bg-[#080b12]"
                                    : "flex-1 hover:flex-[1.25] border border-white/10 bg-[#06080e]/90 opacity-75 hover:opacity-100"
                            }`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-black/40 overflow-hidden">
                                {slide.image ? (
                                    <img
                                        src={slide.image}
                                        alt={slide.imageAlt || slide.title}
                                        draggable={false}
                                        className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                                            isActive ? "scale-100 group-hover/card:scale-105" : "scale-110 filter blur-[1px]"
                                        }`}
                                    />
                                ) : (
                                    <div 
                                        className="w-full h-full" 
                                        style={{ background: slide.background || '#0a0d14' }} 
                                    />
                                )}

                                {/* Vignette Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-700 ${
                                        isActive
                                            ? "bg-gradient-to-t from-black/95 via-black/50 to-black/20 sm:bg-gradient-to-r sm:from-black/95 sm:via-black/55 sm:to-transparent"
                                            : "bg-black/60 hover:bg-black/40"
                                    }`}
                                />
                            </div>

                            {/* Hero Content Overlay inside active expanded card */}
                            {isActive ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                                    className="relative z-20 w-full h-full p-6 sm:p-8 flex flex-col justify-between"
                                >
                                    {/* Top Overlay Badge */}
                                    {slide.overlay && (
                                        <div className="flex items-center justify-between">
                                            <span 
                                                className="px-3.5 py-1 rounded-full border font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md"
                                                style={{
                                                    backgroundColor: `${accent}33`,
                                                    borderColor: `${accent}66`,
                                                    color: accent === '#00E5FF' ? '#00E5FF' : '#FF6B00'
                                                }}
                                            >
                                                {slide.overlay}
                                            </span>
                                            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase hidden sm:inline-block">
                                                Click to view project
                                            </span>
                                            <Sparkles className="w-4 h-4 text-white/40" />
                                        </div>
                                    )}

                                    {/* Inline Title & Desc on Desktop inside Hero Image */}
                                    <div className="max-w-[540px] space-y-2 mt-auto">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover/card:text-white/90 transition-colors">
                                            {slide.title}
                                        </h3>
                                        {slide.description && (
                                            <p className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed max-w-[460px] line-clamp-2">
                                                {slide.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                /* Squeezed Strip View */
                                <div className="relative z-20 w-full h-full flex flex-col justify-between items-center py-6 px-2">
                                    <span 
                                        className="font-mono text-xs font-bold"
                                        style={{ color: accent }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Rotated Vertical Title */}
                                    <div className="flex-1 flex items-center justify-center my-4">
                                        <span
                                            className="font-display text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap group-hover/card:text-white transition-colors"
                                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                        >
                                            {slide.title}
                                        </span>
                                    </div>

                                    <span className="w-2 h-2 rounded-full bg-white/40 group-hover/card:bg-white" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom Panel: Detail text & Action Button */}
            <div className="mt-4 border-t border-white/10 pt-4">
                <AnimatePresence mode="wait">
                    {currentSlide && (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                        >
                            <div className="max-w-[46rem] space-y-1">
                                <h4 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-white">
                                    {currentSlide.title}
                                </h4>
                                {currentSlide.description && (
                                    <p className="text-xs sm:text-sm font-mono text-white/70 leading-relaxed">
                                        {currentSlide.description}
                                    </p>
                                )}
                            </div>

                            {currentSlide.action && (
                                <ActionBtn slide={currentSlide} accent={accent} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function ActionBtn({ slide, accent }) {
    const isExternal = Boolean(slide.target === "_blank" || slide.href?.startsWith("http"));

    const content = (
        <>
            <span>{slide.action}</span>
            {isExternal ? (
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : (
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
        </>
    );

    const buttonStyle = "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-white/90 transition-all duration-300 shadow-xl no-underline";

    if (slide.href) {
        if (isExternal) {
            return (
                <a
                    href={slide.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                        playClickSound();
                        slide.onAction?.();
                    }}
                    onMouseEnter={playHoverSound}
                    className={buttonStyle}
                >
                    {content}
                </a>
            );
        } else {
            return (
                <Link
                    to={slide.href}
                    onClick={() => {
                        playClickSound();
                        slide.onAction?.();
                    }}
                    onMouseEnter={playHoverSound}
                    className={buttonStyle}
                >
                    {content}
                </Link>
            );
        }
    }

    return (
        <button
            type="button"
            onClick={() => {
                playClickSound();
                slide.onAction?.();
            }}
            onMouseEnter={playHoverSound}
            className={buttonStyle}
        >
            {content}
        </button>
    );
}

export default SqueezeCarousel;
