import { Link } from 'react-router-dom';
import CinematicHeroEffect from './CinematicHeroEffect';
import { certifications, personalInfo } from '../data/projectsData';

function AboutSection() {
  const exploringTopics = [
    { title: 'AI × Design Workflows', desc: 'Accelerating exploration and rapid prototyping while retaining human empathy.' },
    { title: 'Creative Coding & Shaders', desc: 'Exploring web canvas refractions, shaders, and kinetic typography.' },
    { title: 'Interaction Design & Micro-Motion', desc: 'Crafting intuitive gesture feedback and tactile state transitions.' },
    { title: 'Design Systems Architecture', desc: 'Building consistent multi-platform component tokens and responsive libraries.' },
    { title: 'Behavioral Design & Psychology', desc: 'Understanding cognitive load, mental models, and decision-making friction.' },
    { title: 'Visual Storytelling', desc: 'Translating research insights into editorial publications and graphic narratives.' }
  ];

  return (
    <section id="about" className="relative w-full py-32 px-6 lg:px-12 bg-[#070707] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 03: Primary About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Portrait Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-400 uppercase font-medium">
              <span>HEMCHAND PAUNIKAR</span>
              <span className="text-amber-400 font-semibold">SYMBIOSIS INSTITUTE OF DESIGN</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block mb-2 font-semibold">
                03 &mdash; ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight uppercase leading-[0.95] text-white">
                CURIOUS UX DESIGNER SIMPLIFYING COMPLEX EXPERIENCES.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              <p>
                I’m a curious UX designer who enjoys understanding people and simplifying complex experiences. My work combines user-centered thinking with visual design, interaction and technology to create digital experiences that are clear, useful and engaging.
              </p>
              <p>
                From e-commerce platforms and enterprise systems to community experiences, research projects and experimental interfaces, I like exploring how design can make complicated things feel simple.
              </p>
              <p className="text-sm text-zinc-400">
                I’m also interested in how AI and emerging technologies are changing the way designers think, create and build.
              </p>
            </div>

            {/* Core Identity Stack */}
            <div className="p-6 bg-zinc-950 border border-white/10 shadow-sm space-y-2 text-xs font-mono text-zinc-300">
              <span className="text-amber-400 uppercase block font-bold mb-1">CORE POSITIONING STACK:</span>
              <p className="text-sm text-white font-display uppercase tracking-wider font-bold">
                UX THINKING + VISUAL DESIGN + RESEARCH + TECHNOLOGY + EXPERIMENTATION
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-black font-bold text-xs tracking-widest uppercase hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/10"
              >
                Read Full Story &amp; Certifications &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Section 04: Design Philosophy */}
        <div className="p-8 sm:p-14 bg-zinc-950 border border-white/10 rounded-sm space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block font-semibold">
              04 &mdash; DESIGN PHILOSOPHY
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white leading-tight">
              GOOD DESIGN STARTS BEFORE THE SCREEN.
            </h3>
            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              I believe the best interfaces are not created by jumping straight into pixels. They start with questions:
            </p>
          </div>

          {/* Key Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Who are we designing for?',
              'What are they trying to accomplish?',
              'Where does the experience break?',
              'What information do they need?',
              'What can be simplified?'
            ].map((q, i) => (
              <div key={i} className="p-4 bg-zinc-900/60 border border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-amber-400 font-bold block">QUESTION 0{i + 1}</span>
                <p className="text-xs text-zinc-200 font-sans leading-snug font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: The Designer I'm Becoming & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block font-semibold">
              10 &mdash; VISION
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white">
              THE DESIGNER I'M BECOMING.
            </h3>
            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              I want to grow into a designer who can move comfortably between UX research, product thinking, visual systems and emerging technology.
            </p>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              My long-term interest lies at the intersection of human behavior, AI and digital products. I want to build experiences that are not only usable, but meaningful, intelligent and visually memorable.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'AI Product Experience',
                'Design Systems',
                'Behavioral Design',
                'Creative Technology',
                'Spatial Computing',
                'Emerging Interfaces'
              ].map((item, i) => (
                <div key={i} className="p-3 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-amber-300 font-semibold uppercase">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-5 space-y-6 bg-zinc-950 border border-white/10 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block font-semibold">
              11 &amp; 12 &mdash; EDUCATION &amp; CERTIFICATIONS
            </span>
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block font-medium">EDUCATION</span>
              <h4 className="text-lg font-display font-bold uppercase text-white mt-1">
                {personalInfo.education.degree}
              </h4>
              <p className="text-xs font-mono text-amber-400 font-semibold">
                {personalInfo.education.institution} &bull; {personalInfo.education.period}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 font-medium">CERTIFICATIONS</span>
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono text-zinc-200 py-1 border-b border-zinc-800/80 font-medium">
                  <span>{cert.title}</span>
                  <span className="text-zinc-400 text-[10px]">{cert.provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 15: Currently Exploring */}
        <div className="space-y-6 border-t border-white/10 pt-16">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block font-semibold">
            15 &mdash; CURRENTLY EXPLORING
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploringTopics.map((topic, i) => (
              <div key={i} className="p-5 bg-zinc-950 border border-zinc-800 rounded-sm hover:border-amber-400/50 shadow-sm transition-colors space-y-2">
                <h4 className="text-sm font-display font-bold uppercase text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {topic.title}
                </h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
