import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, workCategories } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';
import { LayoutGrid, List, ArrowUpRight, TrendingUp, Sparkles, Award } from 'lucide-react';

function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const { isFire } = useIceFire();

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'UX / UI') return project.category.includes('UX');
    if (activeCategory === 'MOBILE') return project.typeTag?.toLowerCase().includes('mobile');
    if (activeCategory === 'WEB') return project.typeTag?.toLowerCase().includes('web');
    if (activeCategory === 'E-COMMERCE') return project.typeTag?.toLowerCase().includes('e-commerce');
    if (activeCategory === 'BRANDING') return project.typeTag?.toLowerCase().includes('brand');
    return true;
  });

  const getCategoryCount = (cat) => {
    if (cat === 'ALL') return projects.length;
    return projects.filter((project) => {
      if (cat === 'UX / UI') return project.category.includes('UX');
      if (cat === 'MOBILE') return project.typeTag?.toLowerCase().includes('mobile');
      if (cat === 'WEB') return project.typeTag?.toLowerCase().includes('web');
      if (cat === 'E-COMMERCE') return project.typeTag?.toLowerCase().includes('e-commerce');
      if (cat === 'BRANDING') return project.typeTag?.toLowerCase().includes('brand');
      return true;
    }).length;
  };

  return (
    <section id="work" className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white overflow-hidden">
      {/* Background Volumetric Ambient Glows */}
      <div className={`absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[150px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />
      <div className={`absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full filter blur-[150px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-orange-600/10' : 'bg-blue-600/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold uppercase tracking-tight text-white leading-none">
              SELECTED <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>WORK</span>
            </h2>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Curated UX redesigns, product case studies, and digital experiences solving real user friction with measurable metrics.
            </p>
          </div>

          {/* Controls: Category Filter Tabs + View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em]">
              {workCategories.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 rounded-full border transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? isFire
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black border-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-[1.02]'
                          : 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-[1.02]'
                        : 'bg-white/5 text-zinc-400 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                      isActive 
                        ? 'bg-black/20 text-black' 
                        : 'bg-white/10 text-zinc-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setViewMode('list')}
                title="Editorial List View"
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                  viewMode === 'list'
                    ? isFire ? 'bg-amber-400 text-black' : 'bg-cyan-400 text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                  viewMode === 'grid'
                    ? isFire ? 'bg-amber-400 text-black' : 'bg-cyan-400 text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty state if filtered out */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-4 rounded-2xl border border-dashed border-white/10 bg-white/5">
            <Sparkles className="w-8 h-8 mx-auto text-zinc-500 animate-spin" />
            <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveCategory('ALL')}
              className="text-xs font-mono text-amber-400 underline cursor-pointer hover:text-amber-300"
            >
              Reset Category Filter
            </button>
          </div>
        )}

        {/* Projects Showcase Container */}
        {viewMode === 'list' ? (
          /* EDITORIAL LIST VIEW */
          <div className="space-y-20">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={project.id}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-white/10 pb-20 last:border-b-0"
                >
                  {/* Image Showcase Card */}
                  <div
                    className={`lg:col-span-7 relative rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Link to={`/work/${project.id}`} className="block relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                      />
                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-zinc-200 uppercase font-semibold">
                          {project.typeTag || project.category}
                        </span>

                        {project.num === '01' && (
                          <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold uppercase shadow-lg ${
                            isFire ? 'bg-amber-400 text-black' : 'bg-cyan-400 text-black'
                          }`}>
                            <Award className="w-3.5 h-3.5" />
                            <span>FEATURED</span>
                          </span>
                        )}
                      </div>

                      {/* Floating CTA Button */}
                      <div className={`absolute bottom-6 right-6 px-4 py-2.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${
                        isFire ? 'bg-amber-400 text-black' : 'bg-cyan-400 text-black'
                      }`}>
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>

                  {/* Project Details Content */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Header Spec Info */}
                    <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-3">
                      <span className={`text-base font-bold tracking-widest ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                        {project.num}
                      </span>
                      <span className="text-zinc-400 tracking-wider uppercase font-medium">
                        {project.year} &bull; {project.client}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors">
                        <Link to={`/work/${project.id}`} className="no-underline text-white hover:text-amber-400 transition-colors">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Metrics Banner (if present) */}
                    {project.beforeAfterMetrics && project.beforeAfterMetrics.length > 0 && (
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 font-mono text-[11px] backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                            <TrendingUp className={`w-3.5 h-3.5 ${isFire ? 'text-amber-400' : 'text-cyan-400'}`} />
                            METRIC IMPACT & RESULTS
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-200 pt-1">
                          {project.beforeAfterMetrics.map((m, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5">
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                              <div className="overflow-hidden">
                                <p className="text-[9px] text-zinc-400 uppercase truncate">{m.metric}</p>
                                <p className="text-[11px] font-bold text-white tracking-wide">{m.change}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tool Badges */}
                    {project.tools && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 hover:border-white/20 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        to={`/work/${project.id}`}
                        className={`inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] uppercase no-underline transition-all group/link ${
                          isFire ? 'text-amber-400 hover:text-amber-300' : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        <span>EXPLORE FULL CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono tracking-widest text-zinc-300 uppercase">
                      {project.typeTag || project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                      <span className={`font-bold ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>{project.num}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold uppercase text-white tracking-tight group-hover:text-amber-400 transition-colors line-clamp-2">
                      <Link to={`/work/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-zinc-400 uppercase">{project.client}</span>
                    <Link
                      to={`/work/${project.id}`}
                      className={`inline-flex items-center gap-1 font-bold ${
                        isFire ? 'text-amber-400' : 'text-cyan-400'
                      }`}
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SelectedWork;

