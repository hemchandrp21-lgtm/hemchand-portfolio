import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIceFire } from '../context/IceFireContext';
import { CSSImageStacking } from './ui/css-image-stacking';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import { projects } from '../data/projectsData';

function SelectedWork() {
  const { accentColor, glowGradient } = useIceFire();

  // 4 Featured Projects: Seed to Soul, Lynk, Aftter, and NoBroker
  const featuredIds = [
    'resort-hospitality-web-ui',
    'texture-lab-web-app',
    'hozatra-corporate-web-ui',
    'nobroker-packers-movers-ux'
  ];

  const showcaseProjects = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  const formattedSlides = showcaseProjects.map((proj, idx) => {
    const isLive = Boolean(proj.externalUrl);
    const numStr = `0${idx + 1}`;
    const categoryTag = isLive ? 'LIVE WEBSITE' : (proj.category || 'CASE STUDY');
    const actionText = isLive ? 'EXPLORE LIVE SITE' : 'EXPLORE CASE STUDY';
    const linkUrl = proj.externalUrl || proj.behanceUrl || 'https://www.behance.net/hemchanpaunika';

    return {
      id: proj.id,
      title: proj.title,
      description: proj.subtitle || proj.summary,
      image: proj.image,
      imageAlt: proj.title,
      overlay: `${numStr} • ${categoryTag}`,
      action: actionText,
      href: linkUrl,
      target: '_blank',
    };
  });

  return (
    <section id="work" className="relative w-full max-w-full bg-[#040507] text-white select-none pt-0 pb-12 px-6 sm:px-12 overflow-hidden">
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
