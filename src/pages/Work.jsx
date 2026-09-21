import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import { ExternalLink, Sparkles, Search, Smartphone, Globe, ShoppingBag, Layers, ArrowUpRight, Palette, Brush, Image as ImageIcon } from 'lucide-react';

function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const workSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Hemchand Paunikar Case Studies & Portfolio',
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
          'url': p.behanceUrl || 'https://www.behance.net/hemchanpaunika',
          'creator': {
            '@type': 'Person',
            'name': 'Hemchand Paunikar'
          }
        }
      }))
    }
  };

  // 4 User-Defined Project Categories
  const categories = [
    { id: 'ALL', label: 'ALL WORK', icon: Layers },
    { id: 'UI/UX & Product Design', label: 'UI/UX & PRODUCT DESIGN', icon: Sparkles },
    { id: 'Branding & Visual Design', label: 'BRANDING & VISUAL DESIGN', icon: Globe },
    { id: 'Illustration & Digital Art', label: 'ILLUSTRATION & DIGITAL ART', icon: Brush },
    { id: 'Graphic & Poster Design', label: 'GRAPHIC & POSTER DESIGN', icon: Palette }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tools?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#040507] text-white selection:bg-[#A93207] selection:text-white relative font-sans">
      <SEOHead
        title="Selected Works & Case Studies | Hemchand Paunikar"
        description="Explore UI/UX & Product Design, Branding, Digital Illustration, and Graphic Posters by Hemchand Paunikar."
        path="/work"
        keywords="Hemchand Paunikar projects, NoBroker UX redesign, Quash Laundry, InkScale, HOZATRA, Titan Watch branding, Porsche poster"
        jsonLd={workSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          {/* MINIMAL EDITORIAL HEADER */}
          <div className="space-y-4 border-b border-white/10 pb-8 sm:pb-12">
            <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#A93207] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#A93207] animate-pulse" />
              <span>BEHANCE PORTFOLIO &bull; {projects.length} PROJECTS</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[0.95] text-white font-extrabold">
                SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#A93207]">WORKS</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-md leading-relaxed uppercase">
                Organized archive of UI/UX product design, brand identity systems, digital illustrations, and graphic posters.
              </p>
            </div>
          </div>

          {/* CLEAN MINIMAL CATEGORY FILTER BAR */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                const count = projects.filter((p) => cat.id === 'ALL' || p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playClickSound();
                      setActiveCategory(cat.id);
                    }}
                    onMouseEnter={playHoverSound}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-white text-black font-bold border-white shadow-lg shadow-white/10'
                        : 'bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                      isActive ? 'bg-black text-white' : 'bg-white/10 text-zinc-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sleek Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs uppercase placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>

          {/* CLEAN MINIMAL PROJECT GRID */}
          <div>
            {filteredProjects.length === 0 ? (
              <div className="p-16 text-center rounded-3xl bg-white/5 border border-white/10 space-y-4 font-mono">
                <h3 className="text-lg font-display uppercase text-white">NO MATCHING PROJECTS</h3>
                <p className="text-xs text-zinc-500">TRY CLEARING YOUR SEARCH OR SWITCHING CATEGORIES.</p>
                <button
                  onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
                  className="px-6 py-2 rounded-full bg-white text-black font-bold uppercase text-xs cursor-pointer"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <a
                        href={project.behanceUrl || 'https://www.behance.net/hemchanpaunika'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHoverSound}
                        onClick={playClickSound}
                        className="no-underline block group space-y-4"
                        data-cursor="BEHANCE ↗"
                      >
                        {/* Minimal Crisp Thumbnail Container */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0a0d14] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040507]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                          {/* Minimal Overlay Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 font-mono text-[10px]">
                            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-bold uppercase">
                              {project.num} &bull; {project.category}
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-400">
                              {project.year || '2025'}
                            </span>
                          </div>

                          {/* Subtle Bottom Hover Indicator */}
                          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                              <span>BEHANCE CASE STUDY</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* Minimalist Info Below Image */}
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

                          {/* Minimal Tool Tags */}
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
                  ))}
                </AnimatePresence>
              </motion.div>
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
