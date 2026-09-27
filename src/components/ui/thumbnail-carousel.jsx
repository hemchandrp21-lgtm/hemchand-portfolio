import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_IMGS = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg"
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3.5; // smooth delay between auto flows
const DRAG_BUFFER = 50; // drag threshold to switch slides

const SMOOTH_SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

// Slide size classes optimized for all mobile screens
const SLIDE_SIZE_CLASSES = "w-[270px] xxs:w-[290px] xs:w-[340px] sm:w-[440px] h-[340px] xs:h-[400px] sm:h-[480px]";

export const ThumbnailCarousel = ({ images = DEFAULT_IMGS, captions = [] }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (isHovered) return;

    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, images.length, isHovered]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (x >= DRAG_BUFFER) {
      setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handlePrev = () => {
    setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="flex flex-col items-center justify-center overflow-hidden select-none py-2 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-4xl py-2 flex items-center justify-center">
        {/* Floating Prev Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-1 sm:left-4 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#A93207] text-white/90 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-1 sm:right-4 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#A93207] text-white/90 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Flow Container */}
        <div className="relative overflow-hidden rounded-3xl p-1 w-full flex justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{ translateX: `-${imgIndex * 100}%` }}
            transition={SMOOTH_SPRING}
            onDragEnd={onDragEnd}
            className="flex cursor-grab active:cursor-grabbing w-full"
          >
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 flex justify-center px-2 sm:px-4"
              >
                <motion.div
                  animate={{
                    scale: imgIndex === idx ? 1 : 0.9,
                    opacity: imgIndex === idx ? 1 : 0.4,
                  }}
                  transition={SMOOTH_SPRING}
                  className={`relative ${SLIDE_SIZE_CLASSES} rounded-3xl overflow-hidden border border-white/15 bg-[#040507] shadow-2xl group`}
                >
                  <img
                    src={imgSrc}
                    alt={`Gallery photo ${idx + 1}`}
                    className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out pointer-events-none ${
                      captions[idx]?.fit === 'contain' ? 'object-contain p-2 bg-[#040507]' : 'object-cover'
                    }`}
                    style={{ objectPosition: captions[idx]?.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {captions[idx] && (
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 space-y-1 pointer-events-none">
                      {captions[idx].tag && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#A93207] text-[10px] font-display font-bold uppercase tracking-widest text-white inline-block shadow-md">
                          {captions[idx].tag}
                        </span>
                      )}
                      {captions[idx].title && (
                        <h3 className="text-base sm:text-xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                          {captions[idx].title}
                        </h3>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Draggable & Centered Image Previews Strip */}
      <div className="mt-5 w-full max-w-4xl py-1 px-4 flex justify-center items-center">
        <motion.div
          drag="x"
          dragConstraints={{ left: -300, right: 300 }}
          dragElastic={0.15}
          className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 cursor-grab active:cursor-grabbing select-none p-1 mx-auto"
        >
          {images.map((imgSrc, idx) => (
            <motion.button
              key={idx}
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setImgIndex(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden transition-all duration-300 shrink-0 cursor-pointer ${
                idx === imgIndex
                  ? "ring-2 ring-[#A93207] ring-offset-2 ring-offset-[#040507] scale-110 opacity-100 shadow-xl z-10"
                  : "opacity-45 hover:opacity-90 scale-95 hover:scale-100"
              }`}
            >
              <img
                src={imgSrc}
                alt={`Photo preview ${idx + 1}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
