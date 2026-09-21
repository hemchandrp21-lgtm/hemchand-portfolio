import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import { ExternalLink, Sparkles, Search, Smartphone, Globe, ShoppingBag, Layers, ArrowUpRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Exact 4 Featured Projects from Home Page (SelectedWork.jsx)
const FEATURED_IDS = [
  'resort-hospitality-web-ui',
  'lynk-foods-ecommerce',
  'aftter-illustration',
  'nobroker-packers-movers-ux'
];

function ProjectCard({ project, isFeatured = false }) {
  const isLive = Boolean(project.externalUrl);
  const linkUrl = project.externalUrl || project.behanceUrl || 'https://www.behance.net/hemchanpaunika';
  const actionText = isLive ? 'EXPLORE LIVE SITE' : 'BEHANCE CASE STUDY';
  const cursorLabel = isLive ? 'LIVE SITE ↗' : 'BEHANCE ↗';
  const categoryTag = isLive ? 'LIVE WEBSITE' : project.category;

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={playHoverSound}
        onClick={playClickSound}
        className="no-underline block group space-y-4"
        data-cursor={cursorLabel}
      >
        {/* Thumbnail Container */}
        <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0a0d14] border transition-all duration-500 shadow-xl ${
          isFeatured ? 'border-[#A93207]/50 group-hover:border-[#A93207]' : 'border-white/10 group-hover:border-white/30'
        }`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* Minimal Overlay Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 font-mono text-[10px]">
            <div className="flex items-center gap-2 flex-wrap">
              {isFeatured && (
                <span className="px-2.5 py-1 rounded-full bg-[#A93207] text-white font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current text-white" />
                  <span>FEATURED</span>
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-bold uppercase">
                {project.num} &bull; {categoryTag}
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-400">
              {project.year || '2025'}
            </span>
          </div>

          {/* Subtle Bottom Hover Indicator */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
              <span>{actionText}</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Info Below Image */}
        <div className="space-y-2 pt-1 px-1">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-tight text-white group-hover:text-[#A93207] transition-colors leading-tight">
              {project.title}
            </h2>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#A93207] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-0.5" />
          </div>

          <p className="text-xs sm:text-sm font-mono text-zinc-400 line-clamp-2 leading-relaxed font-light">
            {project.subtitle}
          </p>

          {/* Tool Tags */}
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px] pt-2">
            {project.tools?.slice(0, 4).map((tool) => (
              <span key={tool} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 uppercase">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryScrollRef = useRef(null);

  const scrollLeft = () => {
    playClickSound();
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    playClickSound();
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  const workSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Hemchand Paunikar Case Studies & Work Portfolio',
    'url': 'https://hemchand-portfolio.vercel.app/work',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': projects.map((p, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'item': {
          '@type': 'CreativeWork',
          'name': p.title,
          'description': p.subtitle,
          'url': p.externalUrl || p.behanceUrl || 'https://www.behance.net/hemchanpaunika',
          'creator': {
            '@type': 'Person',
            'name': 'Hemchand Paunikar'
          }
        }
      }))
    }
  };

  // 4 Main Categories requested by user
  const categories = [
    { id: 'ALL', label: 'ALL WORK', icon: Layers },
    { id: 'UI/UX & Product Design', label: 'UI/UX & PRODUCT DESIGN', icon: Sparkles },
    { id: 'Branding & Visual Design', label: 'BRANDING & VISUAL DESIGN', icon: ShoppingBag },
    { id: 'Illustration & Digital Art', label: 'ILLUSTRATION & DIGITAL ART', icon: Globe },
    { id: 'Graphic & Poster Design', label: 'GRAPHIC & POSTER DESIGN', icon: Smartphone }
  ];

  const { featuredProjects, otherProjects, isDefaultAllView } = useMemo(() => {
    const isDefault = activeCategory === 'ALL' && searchQuery.trim() === '';

    if (isDefault) {
      const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
      const others = projects.filter((p) => !FEATURED_IDS.includes(p.id));
      return { featuredProjects: featured, otherProjects: others, isDefaultAllView: true };
    }

    const filtered = projects.filter((p) => {
      const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tools?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });

    return { featuredProjects: [], otherProjects: filtered, isDefaultAllView: false };
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#040507] text-white selection:bg-[#A93207] selection:text-white relative font-sans">
      <SEOHead
        title="Selected Works & Case Studies | Hemchand Paunikar"
        description="Explore UI/UX case studies and design projects by Hemchand Paunikar, featuring Seed to Soul Resort, Lynk Foods E-commerce, Aftter Enterprise Web UI, and NoBroker Packers & Movers UX."
        path="/work"
        keywords="Hemchand Paunikar projects, Hemchand Paunikar Behance, NoBroker UX redesign, Seed to Soul UI UX, Lynk Foods ecommerce, Hemchand Paunikar case studies"
        jsonLd={workSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          
          {/* TOP CONTROL BAR: CATEGORY SLIDER BUTTONS ON TOP WITH SEARCH BAR ON THE SIDE */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[#080a0f] border border-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl backdrop-blur-xl shadow-2xl">
            
            {/* Category Filter Pills Container with Left & Right Scroll Buttons */}
            <div className="relative flex items-center gap-2 flex-1 max-w-full overflow-hidden">
              {/* Left Arrow Button */}
              <button
                onClick={scrollLeft}
                onMouseEnter={playHoverSound}
                title="Scroll Left"
                aria-label="Scroll left"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Scroll Track */}
              <div
                ref={categoryScrollRef}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 flex-1 max-w-full"
              >
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;

                  const count = projects.filter((p) => {
                    if (cat.id === 'ALL') return true;
                    return p.category === cat.id;
                  }).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        playClickSound();
                        setActiveCategory(cat.id);
                      }}
                      onMouseEnter={playHoverSound}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer shrink-0 select-none ${
                        isActive
                          ? 'bg-white text-black font-bold border-white shadow-lg shadow-white/10 scale-105'
                          : 'bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="whitespace-nowrap">{cat.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        isActive ? 'bg-black text-white' : 'bg-white/10 text-zinc-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={scrollRight}
                onMouseEnter={playHoverSound}
                title="Scroll Right"
                aria-label="Scroll right"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all shrink-0 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sleek Search Input on the side */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="SEARCH CASE STUDIES..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs uppercase placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all"
              />
            </div>
          </div>

          {/* EDITORIAL HEADER BELOW TOP CONTROL BAR */}
          <div className="space-y-4 border-b border-white/10 pb-8 sm:pb-12">
            <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#A93207] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#A93207] animate-pulse" />
              <span>BEHANCE PORTFOLIO &bull; {projects.length} CASE STUDIES</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[0.95] text-white font-extrabold">
                SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#A93207]">WORKS</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-md leading-relaxed uppercase">
                Direct portfolio archive of end-to-end UX research, mobile interfaces, web architecture, and design systems.
              </p>
            </div>
          </div>

          {/* PROJECT SHOWCASE SECTION */}
          <div>
            {isDefaultAllView ? (
              <div className="space-y-12 sm:space-y-16">
                {/* 1. FEATURED PROJECTS SECTION (SAME 4 AS HOME PAGE) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-white/80 uppercase font-bold border-b border-white/10 pb-4">
                    <Star className="w-4 h-4 text-[#A93207] fill-current" />
                    <span>01 / FEATURED CASES ({featuredProjects.length})</span>
                  </div>
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    <AnimatePresence>
                      {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} isFeatured={true} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* 2. OTHER PROJECTS SECTION */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-white/50 uppercase font-bold border-b border-white/10 pb-4">
                    <Layers className="w-4 h-4 text-white/40" />
                    <span>02 / OTHER WORKS ({otherProjects.length})</span>
                  </div>
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    <AnimatePresence>
                      {otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} isFeatured={false} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            ) : (
              /* FILTERED OR SEARCH VIEW */
              <div>
                {otherProjects.length === 0 ? (
                  <div className="p-16 text-center rounded-3xl bg-white/5 border border-white/10 space-y-4 font-mono">
                    <h3 className="text-lg font-display uppercase text-white">NO MATCHING CASE STUDIES</h3>
                    <p className="text-xs text-zinc-500">TRY CLEARING YOUR SEARCH OR SWITCHING CATEGORIES.</p>
                    <button
                      onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
                      className="px-6 py-2 rounded-full bg-white text-black font-bold uppercase text-xs cursor-pointer"
                    >
                      RESET FILTERS
                    </button>
                  </div>
                ) : (
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    <AnimatePresence>
                      {otherProjects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          isFeatured={FEATURED_IDS.includes(project.id)}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>
            )}
          </div>

        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default Work;
