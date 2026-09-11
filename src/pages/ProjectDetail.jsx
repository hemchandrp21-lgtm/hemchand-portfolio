import { useParams, Link } from 'react';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useIceFire } from '../context/IceFireContext';

function ProjectDetail() {
  const { id } = useParams();
  const { isFire } = useIceFire();

  const project = projects.find((p) => p.id === id) || projects[0];
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-400 selection:text-black">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-28 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Back Button */}
          <div>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors no-underline uppercase tracking-[0.2em]"
            >
              <span>&larr; BACK TO SELECTED WORK</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-8 border-b border-white/10 pb-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">
              <span className={`font-bold text-sm ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                {project.num}
              </span>
              <span>&bull;</span>
              <span>{project.category}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.1] text-white">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-mono tracking-wide max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">CLIENT</span>
                <span className="text-zinc-200">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">ROLE</span>
                <span className="text-zinc-200">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">TIMELINE</span>
                <span className="text-zinc-200">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">CATEGORY</span>
                <span className="text-zinc-200">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Featured Large Visual */}
          <div className="rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Metrics Highlight (If available) */}
          {project.beforeAfterMetrics && project.beforeAfterMetrics.length > 0 && (
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-6">
              <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                MEASURED METRICS &amp; USABILITY IMPACT
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.beforeAfterMetrics.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">{m.metric}</span>
                    <div className="text-2xl font-bold text-white">{m.change}</div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between pt-2 border-t border-white/10">
                      <span>BEFORE: {m.before}</span>
                      <span>AFTER: {m.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Deep Dive Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            {/* Left Sidebar Tools */}
            <div className="lg:col-span-4 space-y-8 font-mono text-xs">
              <div className="space-y-3">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">TOOLS &amp; METHODOLOGY</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.keyTakeaway && (
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest block">KEY TAKEAWAY</span>
                  <p className="text-zinc-200 text-xs italic font-sans">{project.keyTakeaway}</p>
                </div>
              )}
            </div>

            {/* Right Main Editorial Sections */}
            <div className="lg:col-span-8 space-y-12 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              {/* Problem */}
              {project.problemStatement && (
                <div className="space-y-4">
                  <h3 className="text-xl font-display uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    THE PROBLEM STATEMENT
                  </h3>
                  <p className="text-zinc-300">{project.problemStatement}</p>
                </div>
              )}

              {/* Research Findings */}
              {project.researchFindings && project.researchFindings.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-display uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    USER RESEARCH &amp; OBSERVATIONS
                  </h3>
                  <ul className="space-y-2 font-mono text-xs list-disc list-inside text-zinc-300">
                    {project.researchFindings.map((finding, idx) => (
                      <li key={idx}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Redesign Focus */}
              {project.redesignFocus && project.redesignFocus.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-display uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    REDESIGN FOCUS &amp; STRATEGY
                  </h3>
                  <ul className="space-y-2 font-mono text-xs list-disc list-inside text-zinc-300">
                    {project.redesignFocus.map((focus, idx) => (
                      <li key={idx}>{focus}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections Overview */}
              {project.sections?.overview && (
                <div className="space-y-4">
                  <h3 className="text-xl font-display uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    SOLUTION OVERVIEW
                  </h3>
                  <p className="text-zinc-300">{project.sections.overview}</p>
                </div>
              )}
            </div>
          </div>

          {/* Project Pagination Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16 border-t border-white/10 font-mono text-xs">
            <Link
              to={`/work/${prevProject.id}`}
              className="p-6 rounded-2xl glass-card border border-white/10 space-y-2 group no-underline"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">&larr; PREVIOUS PROJECT</span>
              <span className="text-lg font-display uppercase text-white group-hover:text-amber-400 transition-colors block">
                {prevProject.title}
              </span>
            </Link>

            <Link
              to={`/work/${nextProject.id}`}
              className="p-6 rounded-2xl glass-card border border-white/10 space-y-2 text-right group no-underline"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">NEXT PROJECT &rarr;</span>
              <span className="text-lg font-display uppercase text-white group-hover:text-amber-400 transition-colors block">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
