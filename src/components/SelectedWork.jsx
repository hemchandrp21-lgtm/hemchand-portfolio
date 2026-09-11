import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, workCategories } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';

function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('ALL');
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

  return (
    <section id="work" className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white">
      {/* Background Volumetric Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
              SELECTED <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>WORK</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
            {workCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? isFire
                      ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                      : 'bg-cyan-500 text-black border-cyan-500 font-semibold'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Visual Story Project List */}
        <div className="space-y-24">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-white/10 pb-20"
              >
                {/* Visual Image Showcase */}
                <div
                  className={`lg:col-span-7 relative rounded-2xl overflow-hidden glass-card transition-all duration-500 group-hover:border-white/30 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Link to={`/work/${project.id}`} className="block relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                    {/* Dark gradient overlay & glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-zinc-300">
                      {project.typeTag || project.category}
                    </div>

                    {/* View Button Indicator */}
                    <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      VIEW CASE STUDY &rarr;
                    </div>
                  </Link>
                </div>

                {/* Project Editorial Metadata */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Number & Year */}
                  <div className="flex items-center justify-between font-mono text-xs text-zinc-500 border-b border-white/10 pb-3">
                    <span className={`text-sm font-bold tracking-widest ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {project.num}
                    </span>
                    <span className="tracking-widest uppercase">{project.year} &bull; {project.client}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors">
                      <Link to={`/work/${project.id}`} className="no-underline text-white hover:text-amber-400">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metrics Highlight (if available) */}
                  {project.beforeAfterMetrics && project.beforeAfterMetrics.length > 0 && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 font-mono text-[11px]">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">
                        METRIC IMPACT
                      </span>
                      <div className="flex flex-wrap gap-4 text-zinc-200">
                        {project.beforeAfterMetrics.map((m, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                            <span>{m.metric}: <strong className="text-white">{m.change}</strong></span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools */}
                  {project.tools && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      to={`/work/${project.id}`}
                      className={`inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase no-underline transition-colors ${
                        isFire ? 'text-amber-400 hover:text-amber-300' : 'text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
