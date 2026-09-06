import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CinematicHeroEffect from '../components/CinematicHeroEffect';
import { personalInfo, certifications } from '../data/projectsData';

function About() {
  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-amber-400 selection:text-black">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
        {/* Title Header */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-amber-400 font-semibold uppercase mb-3 block">
            ABOUT &amp; PERSONALITY
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            CURIOUS. <br />
            <span className="text-zinc-500">HUMAN-CENTERED.</span> <br />
            EXPERIMENTAL.
          </h1>
        </div>

        {/* Cinematic Portrait & Personal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-400 uppercase font-medium">
              <span>{personalInfo.name}</span>
              <span className="text-amber-400 font-semibold">SYMBIOSIS INSTITUTE OF DESIGN</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
              "MOST OF MY DESIGN PROCESS STARTS WITH CURIOSITY."
            </h2>
            <p>
              I like asking why something works the way it does, why users behave differently than expected and where an experience starts becoming unnecessarily complicated.
            </p>
            <p>
              I'm equally interested in structure and aesthetics — the logic behind an interface and the feeling it creates.
            </p>
            <div className="p-6 bg-zinc-950 border border-white/10 shadow-sm space-y-3 font-mono text-xs text-amber-300 font-medium">
              <p>&bull; Sometimes that means conducting research.</p>
              <p>&bull; Sometimes it means rebuilding a flow.</p>
              <p>&bull; Sometimes it means obsessing over typography for far too long.</p>
              <p className="text-white font-bold uppercase pt-2 border-t border-white/10">
                THAT'S THE PART OF DESIGN I ENJOY.
              </p>
            </div>
            <p>
              My long-term interest lies at the intersection of human behavior, AI and digital products. I want to build experiences that are not only usable, but meaningful, intelligent and visually memorable.
            </p>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16">
          <div className="lg:col-span-6 space-y-6 bg-zinc-950 border border-white/10 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-semibold block">
              EDUCATION &amp; JOURNEY
            </span>
            <h3 className="text-2xl font-display font-bold uppercase text-white">
              {personalInfo.education.degree}
            </h3>
            <p className="text-sm font-mono text-amber-400 font-semibold">
              {personalInfo.education.institution} &bull; {personalInfo.education.period}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Presenting design education as a continuous journey of research, experimentation, and industry internship practice.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 bg-zinc-950 border border-white/10 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-semibold block">
              CERTIFICATIONS
            </span>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono text-zinc-200 py-2 border-b border-zinc-800 font-medium">
                  <span className="text-white font-semibold">{cert.title}</span>
                  <span className="text-amber-400 font-semibold text-[11px]">{cert.provider}</span>
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
