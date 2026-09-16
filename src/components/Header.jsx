import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      setScrolled(window.scrollY > 40);
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
      {/* Sleek Floating Responsive Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#040507]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#040507]/80 via-[#040507]/40 to-transparent'
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

        {/* Center Live Ticker */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white/80 tracking-[0.25em] pointer-events-auto">
          <span>INDIA</span>
          <span className="font-bold text-white">{timeStr || '12:00:00'}</span>
        </div>

        {/* Right Section: Desktop Navigation Links + Sound Toggle + Hamburger Button */}
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Audio Engine Mute Toggle Button */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playHoverSound}
            title={isMuted ? "Enable sound effects" : "Mute sound effects"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="p-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden xs:inline">{isMuted ? 'SOUND: OFF' : 'SOUND: ON'}</span>
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

          {/* Accessible Hamburger Menu Button (Visible on screens < 1024px) */}
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
            className="lg:hidden p-2.5 text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-xl bg-white/5 border border-white/10 transition-colors cursor-pointer z-50 flex items-center justify-center"
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

      {/* Fullscreen Premium Mobile Navigation Drawer / Overlay */}
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
        className={`fixed inset-0 z-40 bg-[#040507]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out flex flex-col justify-between px-6 sm:px-12 md:px-20 py-24 sm:py-28 overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {/* Background Overlay Art Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-10 w-80 h-80 border border-white rotate-12" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-white -rotate-45" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white/20" />
        </div>

        {/* Menu Drawer Header Label */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10 font-mono text-xs text-white/50 tracking-[0.25em] uppercase">
          <span>NAVIGATION MENU</span>
          <span>{timeStr || 'INDIA'}</span>
        </div>

        {/* Menu Navigation Links */}
        <nav className="relative z-10 flex flex-col space-y-4 max-w-4xl my-auto py-8">
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
              style={{ transitionDelay: `${index * 50}ms` }}
              className="group flex items-center justify-between text-white hover:text-white transition-all no-underline border-b border-white/10 pb-4 pt-2"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-display font-light text-base sm:text-xl text-white/40 group-hover:text-white transition-colors tracking-widest">
                  {item.num}
                </span>
                <span className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-wider group-hover:translate-x-3 transition-transform duration-300">
                  {item.label}
                </span>
              </div>
              <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors tracking-widest hidden xs:inline">
                &rarr;
              </span>
            </Link>
          ))}
        </nav>

        {/* Primary CTA & Contact Info */}
        <div className="relative z-10 space-y-6 pt-6 border-t border-white/10">
          <Link
            to="/contact"
            onMouseEnter={playHoverSound}
            onClick={() => { playClickSound(); closeMenu(); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-display font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white/90 transition-all shadow-2xl no-underline"
          >
            <span>LET&apos;S WORK TOGETHER</span>
            <span>&rarr;</span>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/60 font-display text-[11px] sm:text-xs tracking-[0.16em] uppercase pt-4">
            <div>
              <span className="block text-white/30 text-[10px] font-mono">LOCATION</span>
              <span>NAGPUR &amp; PUNE, INDIA</span>
            </div>
            <div>
              <span className="block text-white/30 text-[10px] font-mono">EMAIL</span>
              <a href="mailto:hemchandrp21@gmail.com" className="text-white hover:underline no-underline">
                HEMCHANDRP21@GMAIL.COM
              </a>
            </div>
            <div>
              <span className="block text-white/30 text-[10px] font-mono">DISCIPLINE</span>
              <span>UI/UX &amp; PRODUCT DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

