import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ children, progress, range, isHighlight }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(
    progress,
    range,
    [
      'rgba(255, 255, 255, 0.18)',
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
  const highlightWords = ["ideas,", "experiences,", "random", "thoughts", "exist."];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    // Outer scroll track container provides distance to pin the section
    <div ref={targetRef} className="relative h-[250vh] bg-[#040507] z-10">
      {/* Inner viewport container stays sticky-pinned on screen until text reveal completes */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden select-none">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Label Indicator */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-8 h-[2px] bg-white/40" />
            <span className="text-xs font-display tracking-[0.25em] text-white/40 uppercase">
              PHILOSOPHY / STATEMENT
            </span>
          </div>

          {/* Sticky Word-by-Word Text Reveal */}
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.12] tracking-tight uppercase">
            {words.map((word, i) => {
              // Word illumination occurs between 0 and 0.85 scroll progress
              const start = (i / words.length) * 0.85;
              const end = start + (1 / words.length) * 0.85;
              const isHighlight = highlightWords.includes(word);

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlight={isHighlight}
                >
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextRevealSection;
