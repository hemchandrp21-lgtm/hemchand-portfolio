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
    <section id="about" className="relative w-full py-32 px-6 lg:px-12 bg-[#f8f9fa] text-zinc-900">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 03: Primary About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Portrait Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100">
              <CinematicHeroEffect imageSrc="/hero_portrait_suit.jpg" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-600 uppercase font-medium">
              <span>HEMCHAND PAUNIKAR</span>
              <span className="text-amber-600 font-semibold">SYMBIOSIS INSTITUTE OF DESIGN</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 block mb-2 font-semibold">
                03 &mdash; ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight uppercase leading-[0.95] text-zinc-900">
                CURIOUS UX DESIGNER SIMPLIFYING COMPLEX EXPERIENCES.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
              <p>
                I’m a curious UX designer who enjoys understanding people and simplifying complex experiences. My work combines user-centered thinking with visual design, interaction and technology to create digital experiences that are clear, useful and engaging.
              </p>
              <p>
                From e-commerce platforms and enterprise systems to community experiences, research projects and experimental interfaces, I like exploring how design can make complicated things feel simple.
              </p>
              <p className="text-sm text-zinc-600">
                I’m also interested in how AI and emerging technologies are changing the way designers think, create and build.
              </p>
            </div>

            {/* Core Identity Stack */}
            <div className="p-6 bg-white border border-zinc-200 shadow-sm space-y-2 text-xs font-mono text-zinc-700">
              <span className="text-amber-700 uppercase block font-bold mb-1">CORE POSITIONING STACK:</span>
              <p className="text-sm text-zinc-900 font-display uppercase tracking-wider font-bold">
                UX THINKING + VISUAL DESIGN + RESEARCH + TECHNOLOGY + EXPERIMENTATION
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-amber-600 transition-colors shadow-sm"
              >
                Read Full Story &amp; Certifications &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Section 04: Design Philosophy */}
        <div className="p-8 sm:p-14 bg-white border border-zinc-200 shadow-sm rounded-sm space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 block font-semibold">
              04 &mdash; DESIGN PHILOSOPHY
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-zinc-900 leading-tight">
              GOOD DESIGN STARTS BEFORE THE SCREEN.
            </h3>
            <p className="text-base text-zinc-700 font-sans leading-relaxed">
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
              <div key={i} className="p-4 bg-zinc-50 border border-zinc-200 space-y-2">
                <span className="text-xs font-mono text-amber-600 font-bold block">QUESTION 0{i + 1}</span>
                <p className="text-xs text-zinc-700 font-sans leading-snug font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: The Designer I'm Becoming & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-200 pt-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 block font-semibold">
              10 &mdash; VISION
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-zinc-900">
              THE DESIGNER I'M BECOMING.
            </h3>
            <p className="text-base text-zinc-700 font-sans leading-relaxed">
              I want to grow into a designer who can move comfortably between UX research, product thinking, visual systems and emerging technology.
            </p>
            <p className="text-sm text-zinc-600 font-sans leading-relaxed">
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
                <div key={i} className="p-3 bg-zinc-100 border border-zinc-200 text-[11px] font-mono text-amber-800 font-semibold uppercase">
                  &bull; {item}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-5 space-y-6 bg-white border border-zinc-200 p-8 rounded-sm shadow-sm">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 block font-semibold">
              11 &amp; 12 &mdash; EDUCATION &amp; CERTIFICATIONS
            </span>
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block font-medium">EDUCATION</span>
              <h4 className="text-lg font-display font-bold uppercase text-zinc-900 mt-1">
                {personalInfo.education.degree}
              </h4>
              <p className="text-xs font-mono text-amber-700 font-semibold">
                {personalInfo.education.institution} &bull; {personalInfo.education.period}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 font-medium">CERTIFICATIONS</span>
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono text-zinc-800 py-1 border-b border-zinc-100 font-medium">
                  <span>{cert.title}</span>
                  <span className="text-zinc-500 text-[10px]">{cert.provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 15: Currently Exploring */}
        <div className="space-y-6 border-t border-zinc-200 pt-16">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 block font-semibold">
            15 &mdash; CURRENTLY EXPLORING
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploringTopics.map((topic, i) => (
              <div key={i} className="p-5 bg-white border border-zinc-200 rounded-sm hover:border-amber-500 shadow-sm transition-colors space-y-2">
                <h4 className="text-sm font-display font-bold uppercase text-zinc-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  {topic.title}
                </h4>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
