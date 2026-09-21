import { useState } from 'react';
import { ArrowUp, ShieldCheck, MapPin, Mail, Lock } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import LegalNoticeModal from './LegalNoticeModal';

function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-10 sm:py-16 px-4 sm:px-12 md:px-16 bg-[#040507] text-white border-t border-white/10 font-sans text-[11px] sm:text-xs z-10">
      <div className="max-w-[1280px] mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left Brand Line */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-white/60">
            <div className="w-2 h-2 bg-white rotate-45 animate-pulse shrink-0" />
            <span className="text-white font-bold tracking-[0.24em] font-display uppercase">HEMCHAND PAUNIKAR</span>
            <span className="text-white/30 hidden xs:inline">&bull;</span>
            <span className="text-white/40 block xs:inline font-sans font-medium text-[11px]">BRAND &amp; PRODUCT DESIGNER</span>
          </div>

          {/* Center Legal & DMCA Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 font-mono text-[10px]">
            <button
              onClick={() => setIsLegalModalOpen(true)}
              onMouseEnter={playHoverSound}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white underline cursor-pointer uppercase font-bold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#A93207]" />
              <span>DMCA AGENT &amp; LEGAL NOTICES</span>
            </button>
            <span className="text-white/20">&bull;</span>
            <a
              href="mailto:hemchandrp21@gmail.com?subject=Unsubscribe%20Request"
              className="text-white/60 hover:text-white underline"
            >
              UNSUBSCRIBE
            </a>
          </div>

          {/* Right Info & Back to Top */}
          <div className="flex items-center justify-center gap-4 text-white/40 font-mono">
            <span className="text-[10px] sm:text-xs">&copy; {new Date().getFullYear()} HEMCHAND PAUNIKAR</span>
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

        {/* CAN-SPAM PHYSICAL POSTAL ADDRESS & PRIVACY DISCLOSURE BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-white/40 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5">
            <MapPin className="w-3 h-3 text-[#A93207] shrink-0" />
            <span>Hemchand Paunikar Design Studio, Symbiosis Institute of Design Campus, VIP Road, Nagpur, MH 440001, India</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" /> Session Replay Off &bull; Inputs Masked
            </span>
          </div>
        </div>
      </div>

      <LegalNoticeModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </footer>
  );
}

export default Footer;
