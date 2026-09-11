import { personalInfo } from '../data/projectsData';
import { useIceFire } from '../context/IceFireContext';

function ContactSection() {
  const { isFire } = useIceFire();

  return (
    <section id="contact" className="relative w-full py-32 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Dual Ice × Fire Glow Backdrop */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-cyan-500/15 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-amber-500/15 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 text-center sm:text-left">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
          <span className={`w-1.5 h-1.5 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
          <span>START A CONVERSATION</span>
        </div>

        {/* Large Statement */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[1.08] text-white">
            LET&apos;S MAKE <br />
            SOMETHING <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>MEANINGFUL.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-mono tracking-wide max-w-xl">
            Available for full-time opportunities, UI/UX collaborations, product design projects, and creative technology inquiries.
          </p>
        </div>

        {/* Direct Email CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase block">
              DIRECT EMAIL
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xl sm:text-3xl font-mono font-medium text-white hover:text-amber-400 transition-colors no-underline break-all"
            >
              {personalInfo.email}
            </a>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className={`px-8 py-4 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl no-underline shrink-0 ${
              isFire
                ? 'bg-amber-500 text-black hover:bg-amber-400 hover:shadow-amber-500/30'
                : 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-cyan-500/30'
            }`}
          >
            SAY HELLO &rarr;
          </a>
        </div>

        {/* Social Links & Education Footer Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 font-mono text-xs text-zinc-400">
          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">LINKEDIN</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-amber-400 transition-colors no-underline block"
            >
              in/hemchand-paunikar &rarr;
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">BEHANCE</span>
            <a
              href={personalInfo.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-amber-400 transition-colors no-underline block"
            >
              behance.net/hemchanpaunika &rarr;
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">INSTAGRAM</span>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-amber-400 transition-colors no-underline block"
            >
              @hemchand.design &rarr;
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">LOCATION</span>
            <span className="text-zinc-200 block">Pune &bull; India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
