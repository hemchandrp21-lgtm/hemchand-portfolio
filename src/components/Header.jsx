import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, X, ArrowRight } from 'lucide-react';
import { toggleAudioMute, getAudioMutedState, playHoverSound, playClickSound } from '../utils/audioEngine';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => getAudioMutedState());
  const [scrolled, setScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const location = useLocation();
  const hamburgerRef = useRef(null);

  const handleSoundToggle = () => {
    playClickSound();
    const muted = toggleAudioMute();
    setIsMuted(muted);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Track live clock
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

  // Track scroll position to conditionally style sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open & listen for Escape key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sleek Floating Mobile-Responsive Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-12 py-3.5 sm:py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#040507]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#040507]/90 via-[#040507]/40 to-transparent'
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onMouseEnter={playHoverSound}
          onClick={() => { playClickSound(); if (menuOpen) closeMenu(); }}
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-white no-underline hover:text-white/80 transition-colors pointer-events-auto z-50"
        >
          Hemchand&reg;
        </Link>

        {/* Center Live Ticker (Desktop) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white/80 tracking-[0.25em] pointer-events-auto">
          <span>INDIA</span>
          <span className="font-bold text-white">{timeStr || '12:00:00'}</span>
        </div>

        {/* Right Section: Mobile Touch Actions + Mute Toggle + Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-6 pointer-events-auto">
          {/* Audio Engine Mute Toggle Button */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playHoverSound}
            title={isMuted ? "Enable sound effects" : "Mute sound effects"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="px-3 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/20 text-white/80 hover:text-white transition-all text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer min-h-[40px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-white/60 shrink-0" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            )}
            <span className="hidden sm:inline">{isMuted ? 'SOUND: OFF' : 'SOUND: ON'}</span>
          </button>

          {/* Desktop Navigation Links (Hidden on screen < 1024px) */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
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
              className="hover:text-white transition-colors no-underline text-white/80 px-4 py-2 rounded-full border border-white/20 hover:border-white text-white font-bold"
            >
              Contact
            </Link>
          </nav>

          {/* Touch-Friendly Mobile Hamburger Button */}
          <button
            ref={hamburgerRef}
            onClick={() => {
              playClickSound();
              if (menuOpen) closeMenu();
              else setMenuOpen(true);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-overlay"
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] text-white hover:text-white/80 active:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-xl bg-white/5 border border-white/10 transition-colors cursor-pointer z-50 flex items-center justify-center"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-5 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Touch-Optimized Mobile Navigation Overlay */}
      <div
        id="mobile-navigation-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMenu();
          }
        }}
        className={`fixed inset-0 z-40 bg-[#040507]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out flex flex-col justify-between px-5 sm:px-12 pt-20 pb-6 sm:py-28 overflow-y-auto h-[100dvh] ${
          menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {/* Background Overlay Graphic Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-5 w-64 h-64 border border-white rotate-12" />
          <div className="absolute bottom-1/4 right-5 w-80 h-80 border border-white -rotate-45" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/20" />
        </div>

        {/* Menu Drawer Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 font-mono text-[11px] text-white/50 tracking-[0.2em] uppercase shrink-0">
          <span>NAVIGATION MENU</span>
          <div className="flex items-center gap-3">
            <span>{timeStr || 'INDIA'}</span>
            <button
              onClick={closeMenu}
              className="p-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              title="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="relative z-10 flex flex-col space-y-2 my-auto py-4">
          {[
            { num: '01', label: 'HOME', path: '/' },
            { num: '02', label: 'ABOUT', path: '/about' },
            { num: '03', label: 'WORK', path: '/work' },
            { num: '04', label: 'PLAYGROUND', path: '/playground' },
            { num: '05', label: 'CONTACT', path: '/contact' },
          ].map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={playHoverSound}
              onClick={() => { playClickSound(); closeMenu(); }}
              style={{ transitionDelay: `${index * 40}ms` }}
              className="group flex items-center justify-between text-white hover:text-white transition-all no-underline border-b border-white/10 py-3.5 px-1 active:bg-white/5 rounded-xl"
            >
              <div className="flex items-baseline gap-3 sm:gap-6">
                <span className="font-display font-light text-sm sm:text-xl text-white/40 group-hover:text-white transition-colors tracking-widest">
                  {item.num}
                </span>
                <span className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
            </Link>
          ))}
        </nav>

        {/* Primary Mobile Call-to-Action & Contact Info */}
        <div className="relative z-10 space-y-4 pt-4 border-t border-white/10 shrink-0">
          <Link
            to="/contact"
            onMouseEnter={playHoverSound}
            onClick={() => { playClickSound(); closeMenu(); }}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-black font-display font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white/90 active:scale-[0.98] transition-all shadow-2xl no-underline min-h-[44px]"
          >
            <span>LET&apos;S WORK TOGETHER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-2 gap-3 text-white/60 font-display text-[10px] sm:text-xs tracking-[0.16em] uppercase pt-2">
            <div>
              <span className="block text-white/30 text-[9px] font-mono">LOCATION</span>
              <span className="text-white/80 font-bold">NAGPUR &amp; PUNE, INDIA</span>
            </div>
            <div>
              <span className="block text-white/30 text-[9px] font-mono">EMAIL</span>
              <a href="mailto:hemchandrp21@gmail.com" className="text-white hover:underline no-underline truncate block font-bold">
                HEMCHANDRP21@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

