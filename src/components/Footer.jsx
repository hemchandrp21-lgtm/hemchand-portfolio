import { ArrowUp } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-6 md:px-16 bg-[#040507] text-white border-t border-white/10 font-display text-xs uppercase tracking-[0.2em] z-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Brand Line */}
        <div className="flex flex-wrap items-center gap-4 text-white/60">
          <div className="w-2 h-2 bg-white rotate-45 animate-pulse" />
          <span className="text-white font-bold tracking-[0.24em]">HEMCHAND PAUNIKAR</span>
          <span className="text-white/60">&bull; BRAND &amp; PRODUCT DESIGNER</span>
        </div>

        {/* Right Info & Back to Top */}
        <div className="flex flex-wrap items-center gap-8 text-white/70">
          <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white text-white transition-all cursor-pointer font-display text-xs tracking-[0.2em] uppercase"
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


