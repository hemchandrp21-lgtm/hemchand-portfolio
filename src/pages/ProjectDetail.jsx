import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProjectDetail() {
  const { id } = useParams();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-display uppercase font-bold">Project Not Found</h1>
        <Link to="/" className="text-sm font-mono tracking-widest text-amber-400 uppercase border-b border-amber-400">
          &larr; Return to Portfolio Home
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-amber-400 selection:text-black">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
          >
            &larr; Back to Selected Work
          </Link>
        </div>

        {/* Hero Title & Header Info */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col space-y-4 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono tracking-widest uppercase">
                {project.num} CASE STUDY
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase">{project.typeTag}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl text-amber-300 font-display uppercase tracking-wide">
              "{project.subtitle}"
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/5">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">Role</span>
              <span className="text-sm font-sans text-zinc-200 font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">Year &amp; Context</span>
              <span className="text-sm font-sans text-zinc-200 font-medium">{project.year} &bull; {project.client}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">Toolkit &amp; Stack</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tools.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">Category</span>
              <span className="text-xs font-mono text-amber-400 uppercase font-bold">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Main Cover Banner */}
        <div className="relative w-full aspect-video lg:aspect-[21/9] overflow-hidden bg-zinc-900 mb-24 rounded-sm border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter contrast-[1.15] brightness-[0.85]"
          />
        </div>

        {/* CASE STUDY CONTENT BODY */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {/* PROBLEM STATEMENT */}
          {project.problemStatement && (
            <section className="space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                01 &mdash; THE PROBLEM &amp; CONTEXT
              </span>
              <div className="p-8 bg-zinc-950 border border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">THE FRICTION</h2>
                <p className="text-lg text-zinc-200 font-sans leading-relaxed">
                  "{project.problemStatement}"
                </p>
              </div>
            </section>
          )}

          {/* NOBROKER SPECIAL: BEFORE vs AFTER METRICS TABLE */}
          {project.beforeAfterMetrics && (
            <section className="space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                02 &mdash; MEASURED OUTCOMES (BEFORE vs AFTER)
              </span>
              <h2 className="text-3xl font-display font-bold uppercase text-white">QUANTIFIABLE UX IMPROVEMENTS</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.beforeAfterMetrics.map((item, idx) => (
                  <div key={idx} className="p-6 bg-zinc-950 border border-white/10 space-y-4 rounded-sm">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase block">{item.metric}</span>
                    <div className="space-y-1 font-mono">
                      <div className="text-xs text-zinc-500 line-through">BEFORE: {item.before}</div>
                      <div className="text-xl text-white font-bold">AFTER: {item.after}</div>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-xs font-mono text-emerald-400 font-bold uppercase">
                      &bull; {item.change}
                    </div>
                  </div>
                ))}
              </div>

              {project.keyTakeaway && (
                <div className="p-6 bg-amber-400/10 border-l-4 border-amber-400 text-amber-300 font-mono text-sm">
                  <span className="font-bold uppercase block mb-1">KEY TAKEAWAY:</span>
                  "{project.keyTakeaway}"
                </div>
              )}
            </section>
          )}

          {/* THE TIME WE STILL HAVE SPECIAL: RESEARCH QUOTES & PIVOTAL SHIFT */}
          {project.quotes && (
            <section className="space-y-8">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                02 &mdash; RESEARCH QUOTES &amp; OBSERVATION CONTRADICTION
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.quotes.map((q, i) => (
                  <div key={i} className="p-8 bg-zinc-950 border border-white/10 space-y-3">
                    <span className="text-xs font-mono text-amber-400 uppercase font-bold">{q.context}</span>
                    <p className="text-xl font-display uppercase text-white italic">"{q.text}"</p>
                  </div>
                ))}
              </div>

              {project.keyInsight && (
                <div className="p-8 bg-white/5 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold block">PIVOTAL RESEARCH INSIGHT</span>
                  <p className="text-lg text-zinc-200 font-sans leading-relaxed">{project.keyInsight}</p>
                </div>
              )}
            </section>
          )}

          {/* RESEARCH FINDINGS / PAIN POINTS */}
          {project.researchFindings && (
            <section className="space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                RESEARCH FINDINGS &amp; USER INSIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.researchFindings.map((finding, idx) => (
                  <div key={idx} className="p-5 bg-white/5 border border-white/5 flex items-start gap-4">
                    <span className="text-xs font-mono text-amber-400 font-bold pt-0.5">0{idx + 1}</span>
                    <p className="text-sm text-zinc-200 font-sans leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* REDESIGN FOCUS / DELIVERABLES */}
          {(project.redesignFocus || project.deliverables || project.coreFlows) && (
            <section className="space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                DESIGN FOCUS &amp; KEY DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(project.redesignFocus || project.deliverables || project.coreFlows).map((item, idx) => (
                  <div key={idx} className="p-4 bg-zinc-950 border border-white/10 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-sm font-sans text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROCESS FLOW IF AVAILABLE */}
          {project.processFlow && (
            <section className="space-y-6">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                PROCESS &amp; ARCHITECTURE STEPS
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {project.processFlow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs uppercase font-bold">
                      {step}
                    </span>
                    {idx < project.processFlow.length - 1 && (
                      <span className="text-zinc-600 font-mono text-sm">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTIONS DETAIL */}
          {project.sections && (
            <section className="space-y-8 border-t border-white/10 pt-16">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block">
                DETAILED CASE STUDY OVERVIEW
              </span>
              <div className="space-y-6 text-base text-zinc-300 font-sans leading-relaxed">
                {Object.entries(project.sections).map(([key, value]) => (
                  <div key={key} className="p-6 bg-zinc-950 border border-white/10 space-y-2 rounded-sm">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase block">{key}</span>
                    <p className="text-sm sm:text-base text-zinc-200">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Case Study Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/work/${prevProject.id}`}
            className="group text-left space-y-1 hover:text-amber-400 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">&larr; PREVIOUS CASE STUDY</span>
            <span className="text-xl font-display font-bold uppercase text-white group-hover:text-amber-400">{prevProject.title}</span>
          </Link>

          <Link
            to={`/work/${nextProject.id}`}
            className="group text-right space-y-1 hover:text-amber-400 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">NEXT CASE STUDY &rarr;</span>
            <span className="text-xl font-display font-bold uppercase text-white group-hover:text-amber-400">{nextProject.title}</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
