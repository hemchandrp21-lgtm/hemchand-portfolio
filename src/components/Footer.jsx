import { ArrowUp } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-10 sm:py-16 px-4 sm:px-12 md:px-16 bg-[#040507] text-white border-t border-white/10 font-display text-[11px] sm:text-xs uppercase tracking-[0.2em] z-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
        
        {/* Left Brand Line */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-white/60">
          <div className="w-2 h-2 bg-white rotate-45 animate-pulse shrink-0" />
          <span className="text-white font-bold tracking-[0.24em]">HEMCHAND PAUNIKAR</span>
          <span className="text-white/30 hidden xs:inline">&bull;</span>
          <span className="text-white/40 block xs:inline font-sans font-medium text-[11px]">BRAND &amp; PRODUCT DESIGNER</span>
        </div>

        {/* Right Info & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/40">
          <span className="text-[10px] sm:text-xs">&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-white text-white active:bg-white/10 transition-all cursor-pointer font-display text-[11px] tracking-[0.2em] uppercase min-h-[40px]"
            title="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


