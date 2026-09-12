import { useIceFire } from '../context/IceFireContext';
import { ArrowUp } from 'lucide-react';

function Footer() {
  const { isFire } = useIceFire();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 px-6 sm:px-10 lg:px-16 bg-[#050507] text-white border-t border-white/10 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-3">
          <span className={`w-2 h-2 rounded-full animate-pulse ${isFire ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
          <span className="text-zinc-200 font-semibold tracking-[0.2em]">HEMCHAND PAUNIKAR</span>
          <span className="text-zinc-500">&bull; UI/UX &amp; CREATIVE TECH</span>
        </div>

        {/* Right Info & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-zinc-500 text-[10px]">
            &copy; {new Date().getFullYear()} ECHO VALE THEME &bull; ALL RIGHTS RESERVED
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

