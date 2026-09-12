import { useState } from 'react';
import { personalInfo } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';
import { Mail, Copy, Check, ArrowUpRight, Radio, Sparkles } from 'lucide-react';

function ContactSection() {
  const { isFire } = useIceFire();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full py-32 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Dual Ice × Fire Glow Backdrop */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[170px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-amber-600/10' : 'bg-cyan-500/10'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[170px] pointer-events-none transition-colors duration-700 ${
        isFire ? 'bg-orange-600/10' : 'bg-emerald-600/10'
      }`} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Availability Tag */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
            <span>START A CONVERSATION</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono tracking-widest text-emerald-400 uppercase backdrop-blur-md">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>AVAILABLE FOR Q1/Q2 2026 OPPORTUNITIES</span>
          </div>
        </div>

        {/* Large Echo Vale Statement */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold uppercase tracking-tight leading-[1.08] text-white">
            LET&apos;S BUILD <br />
            SOMETHING <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>EXTRAORDINARY.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed tracking-wide max-w-xl">
            Available for full-time Product Design roles, UI/UX collaborations, design systems, and creative technology projects.
          </p>
        </div>

        {/* Direct Email Interactive Card (Echo Vale Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase block flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              DIRECT EMAIL CONTACT
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-white hover:text-amber-400 transition-colors no-underline break-all block"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-xs font-mono tracking-widest text-zinc-200 uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`px-8 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-xl no-underline flex items-center gap-2 shrink-0 ${
                isFire
                  ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
              }`}
            >
              <span>SEND MESSAGE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Social Links & Location Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all space-y-2 group no-underline"
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">LINKEDIN</span>
            <div className="flex items-center justify-between text-zinc-200 group-hover:text-white">
              <span className="font-semibold">hemchand-paunikar</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href={personalInfo.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all space-y-2 group no-underline"
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">BEHANCE</span>
            <div className="flex items-center justify-between text-zinc-200 group-hover:text-white">
              <span className="font-semibold">hemchanpaunika</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all space-y-2 group no-underline"
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">INSTAGRAM</span>
            <div className="flex items-center justify-between text-zinc-200 group-hover:text-white">
              <span className="font-semibold">@hemchand.design</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">LOCATION</span>
            <div className="text-zinc-200 font-semibold">
              Pune &bull; India (IST GMT+5:30)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

