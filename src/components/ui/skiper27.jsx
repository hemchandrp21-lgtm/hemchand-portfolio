import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function Skiper27VelocityRow({ children, baseVelocity = 100, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap select-none my-4">
      <motion.div className={`flex flex-nowrap gap-8 items-center ${className}`} style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function Skiper27({
  items = [
    'UI/UX DESIGNER',
    'VISUAL STORYTELLING',
    'CREATIVE TECHNOLOGIST',
    '3D EXPERIMENTS',
    'HEMCHAND PAUNIKAR',
    'PRODUCT ARCHITECTURE'
  ],
  subtext = "I TURN CURIOUS IDEAS INTO BOLD EXPERIENCES."
}) {
  const isFire = true;

  return (
    <div className="relative w-full py-16 bg-[#050507] text-white border-y border-white/10 overflow-hidden font-mono">
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[180px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-[#E04E39]/10' : 'bg-cyan-500/10'
      }`} />

      {/* Row 1: Forward Marquee */}
      <Skiper27VelocityRow baseVelocity={-2} className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span className={isFire ? 'echo-vale-title-coral' : 'echo-vale-title-ice'}>{item}</span>
            <span className="text-[#E04E39] text-xl font-bold">&bull;</span>
          </span>
        ))}
      </Skiper27VelocityRow>

      {/* Row 2: Reverse Marquee */}
      <Skiper27VelocityRow baseVelocity={2} className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight opacity-75">
        {items.slice().reverse().map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span className="text-zinc-200">{item}</span>
            <Sparkles className={`w-4 h-4 ${isFire ? 'text-[#E04E39]' : 'text-cyan-400'}`} />
          </span>
        ))}
      </Skiper27VelocityRow>

      {/* Subtext Banner */}
      {subtext && (
        <div className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between text-xs text-zinc-400 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isFire ? 'bg-[#E04E39]' : 'bg-cyan-400'}`} />
            <span>SKIPER27 &bull; VELOCITY ENGINE</span>
          </div>
          <span className="hidden sm:block text-zinc-300 font-semibold">{subtext}</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-500" />
        </div>
      )}
    </div>
  );
}

export default Skiper27;
