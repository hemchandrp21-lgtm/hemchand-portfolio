import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    [
      'rgba(255, 255, 255, 0.2)',
      '#FFFFFF'
    ]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.25em] will-change-[opacity,color] transition-opacity duration-150"
    >
      {children}
    </motion.span>
  );
}

function TextRevealSection() {
  const targetRef = useRef(null);

  const statementText = "I collect ideas, chase experiences, and turn random thoughts into things that actually exist.";
  const words = statementText.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    // Inspired by yadavnarayan.in second section: 300vh sticky track with bold accent background & word-by-word reveal
    <section id="about" ref={targetRef} className="relative h-[300vh] bg-[#A93207] text-white z-10">
      {/* Sticky full-screen viewport container */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center px-6 sm:px-16 lg:px-24 overflow-hidden select-none">
        
        {/* Subtle background texture overlay */}
        <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-black/30 pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-10 relative z-10">
          
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3 justify-center">
            <span className="w-8 h-[2px] bg-white/60" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.3em] text-white/80 uppercase font-bold">
              (ABOUT &bull; PHILOSOPHY)
            </span>
            <span className="w-8 h-[2px] bg-white/60" />
          </div>

          {/* Large Bold Statement Word-by-Word Text Reveal */}
          <p className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.12] tracking-tight uppercase flex flex-wrap justify-center gap-x-[0.2em] gap-y-[0.1em] text-white drop-shadow-lg">
            {words.map((word, i) => {
              // Word illumination progresses smoothly from 0.05 to 0.70, staying 100% white until section unpins at 1.00
              const totalWords = words.length;
              const step = 0.65 / totalWords;
              const start = 0.05 + i * step;
              const end = Math.min(1, start + step * 1.5);

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TextRevealSection;
