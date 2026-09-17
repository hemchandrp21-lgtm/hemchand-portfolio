import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIceFire } from '../context/IceFireContext';
import { CSSImageStacking } from './ui/css-image-stacking';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

function SelectedWork() {
  const { accentColor, glowGradient } = useIceFire();

  const showcaseProjects = [
    {
      number: '01',
      id: 'nobroker-packers-movers-ux',
      title: 'NOBROKER PACKERS & MOVERS REDESIGN',
      subtitle: 'UX Research & Usability Testing',
      category: 'CASE STUDY',
      src: '/nobroker_behance.webp',
      behanceUrl: 'https://www.behance.net/gallery/252993955/NOBROKERS-Redesign',
      desc: 'Usability Testing, Friction Elimination & Flow Optimization for 2BHK Relocation.'
    },
    {
      number: '02',
      id: 'hozatra-corporate-web-ui',
      title: 'HOZATRA CORPORATE & AFTTER STOREFRONT',
      subtitle: 'Brand Identity & Storefront',
      category: 'CASE STUDY',
      src: '/real_aftter.webp',
      behanceUrl: 'https://www.behance.net/hemchanpaunika',
      desc: 'E-commerce Storefront, Design System & Corporate UI Experience.'
    },
    {
      number: '03',
      id: 'resort-hospitality-web-ui',
      title: 'SEED TO SOUL E-COMMERCE',
      subtitle: 'Conversion E-Commerce & Hospitality',
      category: 'LIVE WEBSITE',
      src: '/real_seedtosoul.webp',
      externalUrl: 'https://www.seedtosoul.co/',
      desc: 'High-conversion organic store & sustainable hospitality experience.'
    },
    {
      number: '04',
      id: 'texture-lab-web-app',
      title: 'LYNK FOODS & TEXTURE LAB 3D APP',
      subtitle: 'Regional Sweets & Creative Tech',
      category: 'LIVE WEBSITE',
      src: '/real_lynk.webp',
      externalUrl: 'https://lynkfoods.com/',
      desc: '3D interactive sweet texture lab & immersive regional branding.'
    }
  ];

  const formattedSlides = showcaseProjects.map((proj) => ({
    id: proj.id,
    title: proj.title,
    description: proj.subtitle || proj.desc,
    image: proj.src,
    imageAlt: proj.title,
    overlay: `${proj.number} • ${proj.category}`,
    action: proj.externalUrl ? 'EXPLORE LIVE SITE' : 'EXPLORE CASE STUDY',
    href: proj.externalUrl || proj.behanceUrl || 'https://www.behance.net/hemchanpaunika',
    target: '_blank',
  }));

  return (
    <section id="work" className="relative w-full max-w-full bg-[#040507] text-white select-none py-16 px-6 sm:px-12 overflow-hidden">
      {/* Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none opacity-20 filter blur-[180px]"
        style={{ background: glowGradient }}
      />

      <div className="max-w-[1280px] mx-auto w-full relative z-10 space-y-8">
        {/* Clean Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase font-bold block">
              SELECTED PROJECTS & CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white">
              FEATURED <span style={{ color: accentColor }}>CASES</span>
            </h2>
          </div>

          <Link
            to="/work"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/10 text-white font-mono text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 shadow-lg group no-underline self-start sm:self-auto"
          >
            <span>ALL WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured CSS Stacking Cards Showcase */}
        <CSSImageStacking slides={formattedSlides} accent={accentColor} />
      </div>
    </section>
  );
}

export default SelectedWork;
