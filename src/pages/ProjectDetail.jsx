import { useParams, Link } from 'react';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
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

      <main className="pt-28 pb-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Top Bar: Back to All Work */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors no-underline uppercase tracking-[0.25em]"
            >
              <span>&larr; BACK TO SELECTED WORK</span>
            </Link>

            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest hidden sm:block">
              CASE STUDY &bull; {project.num} / {projects.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Project Title & Subtitle Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
              <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
              <span>{project.category} &bull; {project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.1] text-white">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-mono tracking-wide max-w-4xl leading-relaxed">
              {project.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">CLIENT</span>
                <span className="text-zinc-200 font-semibold">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">ROLE</span>
                <span className="text-zinc-200 font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">TIMELINE</span>
                <span className="text-zinc-200 font-semibold">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">TYPE</span>
                <span className="text-zinc-200 font-semibold">{project.typeTag || project.category}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Featured Behance Presentation Image */}
          <div className="rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* Metrics & Usability Impact Section (If available) */}
          {project.beforeAfterMetrics && project.beforeAfterMetrics.length > 0 && (
            <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  01 &bull; MEASURED METRICS &amp; USABILITY IMPACT
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-white">
                  BEFORE VS AFTER USER TESTING RESULTS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {project.beforeAfterMetrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">{m.metric}</span>
                    <div className={`text-2xl sm:text-3xl font-bold ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {m.change}
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between pt-3 border-t border-white/10">
                      <span>BEFORE: <strong className="text-zinc-200">{m.before}</strong></span>
                      <span>AFTER: <strong className="text-white">{m.after}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Overview & Research Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Sidebar: Tools & Key Takeaway */}
            <div className="lg:col-span-4 space-y-8 font-mono text-xs">
              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">
                  TOOLS &amp; METHODOLOGY
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {project.keyTakeaway && (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <span className={`text-[10px] uppercase tracking-widest block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    UX INSIGHT TAKEAWAY
                  </span>
                  <p className="text-zinc-200 text-xs italic font-sans leading-relaxed">
                    &ldquo;{project.keyTakeaway}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              {/* Problem */}
              {project.problemStatement && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10">
                  <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    02 &bull; PROBLEM STATEMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white">
                    THE HESITATION &amp; FRICTION MOMENTS
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{project.problemStatement}</p>
                </div>
              )}

              {/* Research Findings */}
              {project.researchFindings && project.researchFindings.length > 0 && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10">
                  <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    03 &bull; QUALITATIVE RESEARCH &amp; USABILITY TESTING
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white">
                    KEY USER TESTING OBSERVATIONS
                  </h3>
                  <ul className="space-y-3 font-mono text-xs list-disc list-inside text-zinc-300">
                    {project.researchFindings.map((finding, idx) => (
                      <li key={idx} className="leading-relaxed">{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Redesign Focus */}
              {project.redesignFocus && project.redesignFocus.length > 0 && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10">
                  <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    04 &bull; REDESIGN STRATEGY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white">
                    KEY UX SOLUTIONS IMPLEMENTED
                  </h3>
                  <ul className="space-y-3 font-mono text-xs list-disc list-inside text-zinc-300">
                    {project.redesignFocus.map((focus, idx) => (
                      <li key={idx} className="leading-relaxed">{focus}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Summary / Overview */}
              {project.sections?.overview && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10">
                  <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                    05 &bull; CASE STUDY SUMMARY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white">
                    FINAL DESIGN REFLECTION
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{project.sections.overview}</p>
                </div>
              )}
            </div>
          </div>

          {/* Full-Bleed Behance Gallery Visual Presentation Stack */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-12 pt-8">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className={`text-xs font-mono tracking-[0.25em] uppercase block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
                  BEHANCE PRESENTATION &bull; VISUAL GALLERY
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                  FULL CASE STUDY PRESENTATION BOARDS
                </h3>
              </div>

              <div className="space-y-12">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
                    <img
                      src={imgUrl}
                      alt={`${project.title} Presentation Board ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Pagination Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16 border-t border-white/10 font-mono text-xs">
            <Link
              to={`/work/${prevProject.id}`}
              className="p-8 rounded-3xl glass-card border border-white/10 space-y-3 group no-underline transition-all duration-300 hover:border-white/30"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">&larr; PREVIOUS PROJECT</span>
              <span className="text-lg sm:text-xl font-display uppercase text-white group-hover:text-amber-400 transition-colors block">
                {prevProject.title}
              </span>
              <span className="text-[11px] text-zinc-400 block">{prevProject.subtitle}</span>
            </Link>

            <Link
              to={`/work/${nextProject.id}`}
              className="p-8 rounded-3xl glass-card border border-white/10 space-y-3 text-right group no-underline transition-all duration-300 hover:border-white/30"
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">NEXT PROJECT &rarr;</span>
              <span className="text-lg sm:text-xl font-display uppercase text-white group-hover:text-amber-400 transition-colors block">
                {nextProject.title}
              </span>
              <span className="text-[11px] text-zinc-400 block">{nextProject.subtitle}</span>
            </Link>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default ProjectDetail;
