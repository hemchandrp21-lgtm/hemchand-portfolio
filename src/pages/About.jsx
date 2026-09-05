import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CinematicHeroEffect from '../components/CinematicHeroEffect';
import { personalInfo, certifications } from '../data/projectsData';

function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 selection:bg-amber-600 selection:text-white">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
        {/* Title Header */}
        <div className="border-b border-zinc-200 pb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-amber-600 font-semibold uppercase mb-3 block">
            ABOUT &amp; PERSONALITY
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display font-extrabold uppercase tracking-tight text-zinc-900 leading-none">
            CURIOUS. <br />
            <span className="text-zinc-500">HUMAN-CENTERED.</span> <br />
            EXPERIMENTAL.
          </h1>
        </div>

        {/* Cinematic Portrait & Personal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100">
              <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-600 uppercase font-medium">
              <span>{personalInfo.name}</span>
              <span className="text-amber-600 font-semibold">SYMBIOSIS INSTITUTE OF DESIGN</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-zinc-700 text-base sm:text-lg leading-relaxed font-sans">
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-zinc-900">
              "MOST OF MY DESIGN PROCESS STARTS WITH CURIOSITY."
            </h2>
            <p>
              I like asking why something works the way it does, why users behave differently than expected and where an experience starts becoming unnecessarily complicated.
            </p>
            <p>
              I'm equally interested in structure and aesthetics — the logic behind an interface and the feeling it creates.
            </p>
            <div className="p-6 bg-white border border-zinc-200 shadow-sm space-y-3 font-mono text-xs text-amber-800 font-medium">
              <p>&bull; Sometimes that means conducting research.</p>
              <p>&bull; Sometimes it means rebuilding a flow.</p>
              <p>&bull; Sometimes it means obsessing over typography for far too long.</p>
              <p className="text-zinc-900 font-bold uppercase pt-2 border-t border-zinc-200">
                THAT'S THE PART OF DESIGN I ENJOY.
              </p>
            </div>
            <p>
              My long-term interest lies at the intersection of human behavior, AI and digital products. I want to build experiences that are not only usable, but meaningful, intelligent and visually memorable.
            </p>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-200 pt-16">
          <div className="lg:col-span-6 space-y-6 bg-white border border-zinc-200 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold block">
              EDUCATION &amp; JOURNEY
            </span>
            <h3 className="text-2xl font-display font-bold uppercase text-zinc-900">
              {personalInfo.education.degree}
            </h3>
            <p className="text-sm font-mono text-amber-700 font-semibold">
              {personalInfo.education.institution} &bull; {personalInfo.education.period}
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Presenting design education as a continuous journey of research, experimentation, and industry internship practice.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 bg-white border border-zinc-200 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold block">
              CERTIFICATIONS
            </span>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono text-zinc-800 py-2 border-b border-zinc-100 font-medium">
                  <span className="text-zinc-900 font-semibold">{cert.title}</span>
                  <span className="text-amber-700 font-semibold text-[11px]">{cert.provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
