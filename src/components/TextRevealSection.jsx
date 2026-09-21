import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    [
      'rgba(255, 255, 255, 0.15)',
      '#FFFFFF'
    ]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.22em] will-change-[opacity,color]"
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
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section ref={targetRef} className="relative w-full bg-[#040507] text-white z-10 pt-16 sm:pt-24 pb-8 sm:pb-12 px-5 sm:px-12 lg:px-20 select-none">
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Label Indicator */}
        <div className="flex items-center gap-3 justify-center mb-4 sm:mb-6">
          <span className="w-8 h-[2px] bg-white/40" />
          <span className="text-[11px] sm:text-xs font-display tracking-[0.25em] text-white/40 uppercase font-bold">
            PHILOSOPHY / STATEMENT
          </span>
        </div>

        {/* Word-by-Word Text Reveal */}
        <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.12] tracking-tight uppercase">
          {words.map((word, i) => {
            const totalWords = words.length;
            const step = 1 / totalWords;
            const start = i * step;
            const end = Math.min(start + step * 1.5, 1);

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
        </h2>
      </div>
    </section>
  );
}

export default TextRevealSection;
