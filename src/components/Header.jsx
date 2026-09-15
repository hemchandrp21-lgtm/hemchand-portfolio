import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toggleAudioMute, getAudioMutedState, playHoverSound, playClickSound } from '../utils/audioEngine';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => getAudioMutedState());
  const [scrolled, setScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleSoundToggle = () => {
    playClickSound();
    const muted = toggleAudioMute();
    setIsMuted(muted);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Track live clock for subpages
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}:${secs}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll position to conditionally show sticky nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  // On home page, hero handles top nav when scrolled to top. Only show sticky subpage header when scrolled on Home or when on subpages.
  if (isHomePage && !scrolled && !menuOpen) {
    return null;
  }

  return (
    <>
      {/* Sleek Floating Header matching reference aesthetic */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-[#040507]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        {/* Brand Logo */}
        <Link
          to="/"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-white no-underline hover:text-white/80 transition-colors pointer-events-auto"
        >
          Hemchand&reg;
        </Link>

        {/* Center Live Ticker (Subpages) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white/80 tracking-[0.25em] pointer-events-auto">
          <span>INDIA</span>
          <span className="font-bold text-white">{timeStr || '12:00:00'}</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase pointer-events-auto">
          <Link
            to="/about"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            About
          </Link>
          <Link
            to="/work"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Work
          </Link>
          <Link
            to="/playground"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Playground
          </Link>
          <Link
            to="/contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hover:text-white transition-colors no-underline text-white/80"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Fullscreen Claudiu Angheloni Style Cyber Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-[#040507]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between px-8 md:px-24 py-28 overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay Art Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-10 w-96 h-96 border border-white rotate-12" />
          <div className="absolute bottom-1/4 right-20 w-[500px] h-[500px] border border-white -rotate-45" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/20" />
        </div>

        {/* Menu Navigation Links */}
        <nav className="relative z-10 flex flex-col space-y-4 max-w-4xl">
          {[
            { num: '01', label: 'HOME', path: '/' },
            { num: '02', label: 'ABOUT ME', path: '/about' },
            { num: '03', label: 'WORK', path: '/work' },
            { num: '04', label: 'PLAYGROUND', path: '/playground' },
            { num: '05', label: 'CONTACT', path: '/contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={playHoverSound}
              onClick={() => { playClickSound(); setMenuOpen(false); }}
              className="group flex items-baseline gap-6 text-[#040507] hover:text-white transition-colors no-underline border-b border-white/10 pb-4"
            >
              <span className="font-display font-light text-xl md:text-2xl text-white/40 group-hover:text-white transition-colors tracking-widest">
                {item.num}
              </span>
              <span className="font-display font-bold text-4xl md:text-7xl text-white tracking-wider group-hover:translate-x-4 transition-transform duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Menu Drawer Footer Info */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-white/60 font-display text-xs tracking-[0.16em] uppercase">
          <div>
            <span className="block text-white/30 text-[10px]">LOCATION</span>
            <span>PUNE & MUMBAI, INDIA</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px]">DIRECT INQUIRIES</span>
            <a href="mailto:hemchandrp21@gmail.com" className="text-white hover:underline">
              HEMCHANDRP21@GMAIL.COM
            </a>
          </div>
          <div>
            <span className="block text-white/30 text-[10px]">DISCIPLINE</span>
            <span>UI/UX, BRAND IDENTITY & DESIGN SYSTEMS</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

