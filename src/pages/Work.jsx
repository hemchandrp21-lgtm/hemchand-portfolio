import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import { TiltCard } from '../components/ui/tilt-card';
import { ArrowUpRight, ExternalLink, Sparkles, Search, Smartphone, Globe, ShoppingBag, Layers } from 'lucide-react';

function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Category list
  const categories = [
    { id: 'ALL', label: 'ALL WORK', icon: Layers },
    { id: 'UX / UI', label: 'UX / UI STUDIES', icon: Sparkles },
    { id: 'MOBILE', label: 'MOBILE APPS', icon: Smartphone },
    { id: 'WEB', label: 'WEB PLATFORMS', icon: Globe },
    { id: 'E-COMMERCE & BRANDING', label: 'E-COMMERCE', icon: ShoppingBag }
  ];

  const getProjectCategoryGroup = (p) => {
    const cat = p.category?.toUpperCase() || '';
    const tag = p.typeTag?.toUpperCase() || '';
    const title = p.title?.toUpperCase() || '';

    const isMobile = tag.includes('MOBILE') || title.includes('MOBILE') || p.id.includes('mobile');
    const isWeb = tag.includes('WEB') || tag.includes('CORPORATE') || title.includes('WEB') || p.id.includes('web');
    const isEcom = tag.includes('E-COMMERCE') || tag.includes('BRANDING') || title.includes('BRAND') || p.id.includes('ecommerce');

    return { isMobile, isWeb, isEcom };
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const { isMobile, isWeb, isEcom } = getProjectCategoryGroup(p);

      let matchesCategory = true;
      if (activeCategory === 'UX / UI') {
        matchesCategory = p.category === 'UX / UI' || p.typeTag?.includes('UX');
      } else if (activeCategory === 'MOBILE') {
        matchesCategory = isMobile;
      } else if (activeCategory === 'WEB') {
        matchesCategory = isWeb;
      } else if (activeCategory === 'E-COMMERCE & BRANDING') {
        matchesCategory = isEcom;
      }

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
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Work Hero Header Banner */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A93207] font-bold block">
              PORTFOLIO ARCHIVE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none text-white font-extrabold">
              FEATURED <span className="text-[#A93207]">CASES</span> &amp; PROJECTS
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 font-mono max-w-2xl leading-relaxed uppercase">
              CURATED SELECTION OF END-TO-END UX RESEARCH, USABILITY TESTING, MOBILE APPS, AND DIGITAL DESIGN SYSTEMS.
            </p>
          </div>

          {/* CATEGORY FILTER TABS & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#080b12] p-3 rounded-2xl border border-white/10 shadow-xl">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                const count = projects.filter((p) => {
                  if (cat.id === 'ALL') return true;
                  const { isMobile, isWeb, isEcom } = getProjectCategoryGroup(p);
                  if (cat.id === 'UX / UI') return p.category === 'UX / UI';
                  if (cat.id === 'MOBILE') return isMobile;
                  if (cat.id === 'WEB') return isWeb;
                  if (cat.id === 'E-COMMERCE & BRANDING') return isEcom;
                  return false;
                }).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playClickSound();
                      setActiveCategory(cat.id);
                    }}
                    onMouseEnter={playHoverSound}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-bold border-white shadow-md'
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

            {/* Search Input Box */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="SEARCH PROJECTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs uppercase placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="space-y-6">
            {filteredProjects.length === 0 ? (
              <div className="p-16 text-center rounded-3xl bg-[#080b12] border border-white/10 space-y-4 font-mono">
                <h3 className="text-lg font-display uppercase text-white">NO MATCHING PROJECTS</h3>
                <p className="text-xs text-zinc-500">TRY CLEARING YOUR SEARCH OR SWITCHING CATEGORIES.</p>
                <button
                  onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-bold uppercase text-xs cursor-pointer"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TiltCard
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        scale={1.02}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        className="group rounded-3xl overflow-hidden bg-[#080b12] border border-white/15 flex flex-col justify-between hover:border-[#A93207]/60 transition-all duration-300 h-full shadow-2xl"
                      >
                        {/* Top Image Preview & Badges */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-black">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-80" />

                          {/* Top Pill */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 font-mono text-[10px]">
                            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-bold uppercase">
                              {project.num} &bull; {project.category}
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-zinc-400">
                              {project.year || '2025'}
                            </span>
                          </div>
                        </div>

                        {/* Content Info */}
                        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-2">
                            <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-white group-hover:text-[#A93207] transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs font-mono text-zinc-400 line-clamp-2 leading-relaxed">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* Tools List */}
                          <div className="flex flex-wrap gap-1.5 font-mono text-[10px] pt-3 border-t border-white/10">
                            {project.tools?.slice(0, 3).map((tool) => (
                              <span key={tool} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 uppercase">
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 font-mono text-xs">
                            <Link
                              to={`/work/${project.id}`}
                              onMouseEnter={playHoverSound}
                              onClick={playClickSound}
                              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white text-black font-bold uppercase text-[11px] tracking-wider hover:bg-[#A93207] hover:text-white transition-all no-underline shadow-md"
                            >
                              <span>EXPLORE STUDY</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>

                            {project.behanceUrl && (
                              <a
                                href={project.behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={playHoverSound}
                                onClick={playClickSound}
                                className="p-2.5 rounded-xl bg-white/5 hover:bg-white hover:text-black border border-white/15 text-zinc-300 transition-colors"
                                title="View on Behance"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </TiltCard>
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
