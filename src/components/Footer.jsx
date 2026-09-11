import { useIceFire } from '../context/IceFireContext';

function Footer() {
  const { isFire } = useIceFire();

  return (
    <footer className="w-full py-12 px-6 sm:px-10 lg:px-16 bg-[#050505] text-white border-t border-white/10 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
          <span className="text-zinc-200 font-semibold tracking-[0.2em]">HEMCHAND PAUNIKAR</span>
          <span className="text-zinc-500">&bull; UI/UX DESIGNER &amp; CREATIVE TECHNOLOGIST</span>
        </div>

        {/* Right Info */}
        <div className="text-zinc-500 text-[10px] tracking-[0.2em]">
          &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED &bull; ICE &times; FIRE PORTFOLIO
        </div>
      </div>
    </footer>
  );
}

export default Footer;
