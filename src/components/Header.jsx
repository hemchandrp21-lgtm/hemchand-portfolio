import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-8 lg:px-16 py-6 transition-all duration-500 pointer-events-auto ${
          scrolled
            ? 'bg-[#070707]/90 backdrop-blur-xl border-b border-white/10 py-5 shadow-2xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-zinc-400">
          {/* Top Left Name Logo */}
          <Link
            to="/"
            className="text-zinc-200 font-normal tracking-widest hover:text-amber-400 transition-colors no-underline text-[11px]"
          >
            HEMCHAND P.
          </Link>

          {/* Center Navigation Links matching Reference (WORKS, ABOUT) */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#work"
              className="hover:text-white transition-colors py-1 relative group text-zinc-400 text-[11px]"
            >
              WORKS
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </a>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-white transition-colors py-1 relative group text-[11px] ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`
              }
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </NavLink>
          </nav>

          {/* Top Right Pill Switch matching Reference */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setToggleState(!toggleState)}
              aria-label="Toggle Theme State"
              className="w-10 h-5 rounded-full bg-white/10 border border-white/20 p-0.5 transition-colors focus:outline-none flex items-center"
            >
              <span
                className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 ${
                  toggleState ? 'translate-x-5 bg-amber-400' : 'translate-x-0 bg-white'
                }`}
              />
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden">
          <div className="flex flex-col space-y-8 font-mono">
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
              Navigation
            </span>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display uppercase tracking-tight text-zinc-900 hover:text-amber-600 transition-colors border-b border-zinc-200 pb-4"
            >
              WORKS
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display uppercase tracking-tight text-zinc-900 hover:text-amber-600 transition-colors border-b border-zinc-200 pb-4"
            >
              ABOUT
            </Link>
          </div>

          <div className="flex flex-col space-y-2 border-t border-zinc-200 pt-6 font-mono text-xs text-zinc-600">
            <span>hemchandrp21@gmail.com</span>
            <span className="text-[10px] text-zinc-500 uppercase">
              B.Des UX Design Student &bull; Symbiosis Institute of Design
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
