import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
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
    colSpan: 'col-span-12 md:col-span-7',
    aspectRatio: 'h-[220px] sm:h-[250px] md:h-[270px] lg:h-[290px]'
  },
  {
    id: 'hozatra-corporate-web-ui',
    num: '02',
    title: 'HOZATRA CORPORATE & AFTTER STOREFRONT',
    subtitle: 'Brand Identity & Storefront',
    category: 'CASE STUDY',
    image: '/real_aftter.webp',
    colSpan: 'col-span-12 md:col-span-5',
    aspectRatio: 'h-[220px] sm:h-[250px] md:h-[270px] lg:h-[290px]'
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '03',
    title: 'SEED TO SOUL E-COMMERCE',
    subtitle: 'Conversion E-Commerce & Hospitality',
    category: 'LIVE WEBSITE',
    image: '/real_seedtosoul.webp',
    externalUrl: 'https://www.seedtosoul.co/',
    colSpan: 'col-span-12 md:col-span-5',
    aspectRatio: 'h-[220px] sm:h-[250px] md:h-[270px] lg:h-[290px]'
  },
  {
    id: 'texture-lab-web-app',
    num: '04',
    title: 'LYNK FOODS & TEXTURE LAB 3D APP',
    subtitle: 'Regional Sweets & Creative Tech',
    category: 'LIVE WEBSITE',
    image: '/real_lynk.webp',
    externalUrl: 'https://lynkfoods.com/',
    colSpan: 'col-span-12 md:col-span-7',
    aspectRatio: 'h-[220px] sm:h-[250px] md:h-[270px] lg:h-[290px]'
  }
];

export function ConditionGrid({ items = defaultProjects, className = '' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 w-full ${className}`}
    >
      {items.map((item) => {
        const isExternal = Boolean(item.externalUrl);
        const colClass = item.colSpan || 'col-span-12 md:col-span-6';
        const heightClass = item.aspectRatio || 'h-[240px] sm:h-[270px]';

        const CardWrapper = isExternal ? 'a' : Link;
        const linkProps = isExternal
          ? { href: item.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
          : { to: item.linkUrl || `/work/${item.id}` };

        return (
          <motion.div
            key={item.id || item.num}
            variants={cardVariants}
            className={`${colClass} group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#080a0f] shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] ${heightClass}`}
            data-cursor={isExternal ? "LIVE SITE ↗" : "VIEW STUDY"}
          >
            <CardWrapper
              {...linkProps}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="relative flex h-full w-full flex-col justify-between p-4 sm:p-5 lg:p-6 no-underline"
            >
              {/* Background Image Container - 100% Clear & Crisp */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#040507]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Minimal Top & Bottom Gradients for Text Legibility without Dimming Image */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
              </div>

              {/* TOP BAR: Number Badge & Category Pill */}
              <div className="relative z-10 flex items-center justify-between font-mono">
                {/* Project Number */}
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-white/40">
                  {item.num}
                </span>

                {/* Category / Live Tag */}
                <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg group-hover:border-[#A93207] group-hover:bg-[#A93207] transition-all duration-300">
                  <span>{item.category}</span>
                  {isExternal ? (
                    <ExternalLink className="w-2.5 h-2.5 text-white/90" />
                  ) : (
                    <ArrowUpRight className="w-2.5 h-2.5 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </span>
              </div>

              {/* BOTTOM OVERLAY: Subtitle, Title & Action Trigger */}
              <div className="relative z-10 flex flex-col justify-end space-y-1.5 sm:space-y-2 pt-6">
                {/* Subtitle / Domain Tag */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#A93207] group-hover:w-8 transition-all duration-300" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 group-hover:text-white/90 transition-colors">
                    {item.subtitle}
                  </span>
                </div>

                {/* Main Headline Title & Circular Arrow Badge */}
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-white leading-[1.08]">
                    {item.title}
                  </h3>

                  {/* Circular Hover Button Icon */}
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white shadow-xl">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </CardWrapper>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ConditionGrid;
