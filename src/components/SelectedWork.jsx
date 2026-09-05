import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, workCategories } from '../data/projectsData';

function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.category.includes(selectedCategory) || (p.typeTag && p.typeTag.includes(selectedCategory)));

  return (
    <section id="work" className="relative w-full py-32 px-6 lg:px-12 bg-[#ffffff] text-zinc-900">
      {/* Section Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold">
              01 &mdash; FEATURED PROJECTS
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase mt-3 text-zinc-900">
              SELECTED WORK.
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md leading-relaxed font-sans">
            Case studies spanning UX research, product design, enterprise dashboards, e-commerce ecosystems, and visual story publications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mt-8">
          {workCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 rounded-none ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white font-bold shadow-md'
                  : 'bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Case Study Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {filteredProjects.map((project) => {
          const isHovered = hoveredId === project.id;
          return (
            <div
              key={project.id}
              className={`${project.colSpan} group relative flex flex-col space-y-6 cursor-pointer`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-cursor="VIEW CASE"
            >
              {/* Image Container with Soft Shadow & Border */}
              <Link to={`/work/${project.id}`} className="relative block overflow-hidden bg-zinc-100 rounded-sm border border-zinc-200/80 shadow-sm">
                <div className={`relative w-full ${project.aspect} overflow-hidden`}>
                  {/* Primary Photo */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
                  />

                  {/* Light Aberration Overlay */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-0 transition-all duration-300 pointer-events-none filter hue-rotate-[-40deg] ${
                      isHovered ? 'opacity-25 translate-x-2 -translate-y-1 scale-105' : ''
                    }`}
                  />

                  {/* Top-Right Tag */}
                  <div className="absolute top-5 right-5 z-10 px-3 py-1 bg-white/90 backdrop-blur-md border border-zinc-200 text-[10px] font-mono tracking-widest text-amber-700 font-bold uppercase shadow-sm">
                    {project.num} &bull; {project.category}
                  </div>
                </div>
              </Link>

              {/* Information */}
              <div className="flex flex-col space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                  <span className="text-amber-700 uppercase font-semibold">{project.typeTag}</span>
                  <span>{project.role}</span>
                </div>

                <Link to={`/work/${project.id}`} className="group/title">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-zinc-900 group-hover/title:text-amber-600 transition-colors leading-tight flex items-center gap-3">
                    {project.title}
                    <span className="text-xl opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300">
                      &rarr;
                    </span>
                  </h3>
                </Link>

                <p className="text-base text-amber-700 font-display uppercase tracking-wide font-medium">
                  "{project.subtitle}"
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed font-sans max-w-xl">
                  {project.summary}
                </p>

                {/* Key Metric / Takeaway Highlight */}
                {project.keyTakeaway && (
                  <div className="p-3 bg-amber-50 border-l-2 border-amber-500 text-xs font-mono text-amber-900 font-medium">
                    &bull; {project.keyTakeaway}
                  </div>
                )}

                {/* Tools & Link */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-sm border border-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/work/${project.id}`}
                    className="text-xs font-bold font-mono tracking-widest uppercase text-zinc-900 hover:text-amber-600 transition-colors inline-flex items-center gap-2"
                  >
                    View Case Study <span className="text-sm">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SelectedWork;
