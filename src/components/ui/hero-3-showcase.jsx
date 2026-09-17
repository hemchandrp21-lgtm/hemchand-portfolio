import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playHoverSound, playClickSound } from '../../utils/audioEngine';

const defaultProjects = [
  {
    id: 'nobroker-packers-movers-ux',
    num: '01',
    title: 'NOBROKER PACKERS & MOVERS REDESIGN',
    subtitle: 'UX Research & Usability Testing',
    category: 'CASE STUDY',
    image: '/nobroker_behance.webp',
  },
  {
    id: 'hozatra-corporate-web-ui',
    num: '02',
    title: 'HOZATRA CORPORATE & AFTTER STOREFRONT',
    subtitle: 'Brand Identity & Storefront',
    category: 'CASE STUDY',
    image: '/real_aftter.webp',
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '03',
    title: 'SEED TO SOUL E-COMMERCE',
    subtitle: 'Conversion E-Commerce & Hospitality',
    category: 'LIVE WEBSITE',
    image: '/real_seedtosoul.webp',
    externalUrl: 'https://www.seedtosoul.co/',
  },
  {
    id: 'texture-lab-web-app',
    num: '04',
    title: 'LYNK FOODS & TEXTURE LAB 3D APP',
    subtitle: 'Regional Sweets & Creative Tech',
    category: 'LIVE WEBSITE',
    image: '/real_lynk.webp',
    externalUrl: 'https://lynkfoods.com/',
  }
];

export function Hero3Showcase({ items = defaultProjects, className = '' }) {
  const [isPaused, setIsPaused] = useState(false);

  // 6 sets of items to guarantee 100% continuous edge-to-edge coverage across all screen sizes
  const marqueeItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className={`w-full flex flex-col space-y-8 overflow-hidden ${className}`}>
      
      {/* Dynamic Animated Marquee Container */}
      <div 
        className="relative w-full overflow-hidden py-4 select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <motion.div
          className="flex items-center w-max"
          animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 55,
            ease: 'linear',
          }}
        >
          {marqueeItems.map((item, idx) => {
            const targetUrl = item.externalUrl || item.behanceUrl || 'https://www.behance.net/hemchanpaunika';
            const CardWrapper = 'a';
            const linkProps = { href: targetUrl, target: '_blank', rel: 'noopener noreferrer' };

            return (
              <div key={`${item.id}-${idx}`} className="pr-6 shrink-0">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className="group relative w-[320px] sm:w-[420px] lg:w-[480px] h-[260px] sm:h-[310px] overflow-hidden rounded-3xl border border-white/10 bg-[#080a0f] shadow-2xl transition-all duration-[1200ms] ease-out hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                  data-cursor={item.externalUrl ? "LIVE SITE ↗" : "BEHANCE ↗"}
                >
                  <CardWrapper
                    {...linkProps}
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                    className="relative flex h-full w-full flex-col justify-between no-underline"
                  >
                    {/* Background Image - Clean & Minimal */}
                    <div className="absolute inset-0 z-0 overflow-hidden bg-[#040507]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-top opacity-100 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* TOP BAR: Minimal Number & Category Pill */}
                    <div className="relative z-10 flex items-center justify-between font-mono p-4 sm:p-5">
                      {/* Number Badge */}
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-md transition-colors duration-[1200ms] group-hover:border-white/30">
                        {item.num}
                      </span>

                      {/* Category Badge */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-md transition-all duration-[1200ms] group-hover:border-[#A93207] group-hover:bg-[#A93207]">
                        <span>{item.category}</span>
                        {isExternal ? (
                          <ExternalLink className="w-3 h-3 text-white" />
                        ) : (
                          <ArrowUpRight className="w-3 h-3 text-white transition-transform duration-[1200ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </span>
                    </div>

                    {/* BOTTOM OVERLAY: Minimal Title & Subtitle directly on image (No Box) */}
                    <div className="relative z-10 flex items-end justify-between gap-4 pt-10 pb-4 px-4 sm:pb-5 sm:px-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-[2px] w-4 bg-[#A93207] group-hover:w-8 transition-all duration-[1200ms] ease-out" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 drop-shadow-sm">
                            {item.subtitle}
                          </span>
                        </div>

                        <h3 className="font-display text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-tight text-white drop-shadow-md transition-colors duration-[1200ms] leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white shadow-lg">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-[1200ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero3Showcase;
