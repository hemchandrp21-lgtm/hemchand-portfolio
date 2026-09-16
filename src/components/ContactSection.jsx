import { useState } from 'react';
import { personalInfo } from '../data/projectsData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full py-36 px-6 sm:px-10 lg:px-16 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.03]" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10 text-center flex flex-col items-center">
        {/* Header Red Line Indicator */}
        <div className="flex items-center gap-3 justify-center">
          <span className="w-8 h-[2px] bg-white/60" />
          <span className="text-[11px] font-display tracking-[0.25em] text-white/60 uppercase font-semibold">
            05 / LET&apos;S MAKE SOMETHING
          </span>
        </div>

        {/* Giant Monumental Headline */}
        <div className="space-y-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.02] text-center">
            HAVE AN IDEA? <br />
            <span className="text-white/90">LET&apos;S TURN IT INTO SOMETHING REAL.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed tracking-wide max-w-xl mx-auto pt-4">
            Whether it&apos;s a digital product, visual identity, website or an idea that doesn&apos;t have a shape yet — I&apos;d love to hear about it.
          </p>
        </div>

        {/* Single-Line Email Box */}
        <div className="w-full max-w-2xl pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/20 pb-4 gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg sm:text-2xl font-display font-bold text-white hover:text-white/70 transition-colors no-underline tracking-wide"
            >
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="text-xs font-display tracking-widest text-white/60 hover:text-white uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-[0.2em] uppercase text-white hover:text-white/70 transition-all"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <span className="text-[10px] font-display text-white/60 uppercase tracking-widest block pt-3">
            Open for commissions &bull; No noise.
          </span>
        </div>

        {/* Social Links Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-12 text-left font-display text-xs">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">NETWORK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              LINKEDIN &rarr;
            </span>
          </a>

          <a
            href={personalInfo.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">PORTFOLIO BOARDS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              BEHANCE &rarr;
            </span>
          </a>

          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">VISUAL JOURNAL</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              INSTAGRAM &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;


