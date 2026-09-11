import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useIceFire } from '../context/IceFireContext';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isFire } = useIceFire();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 lg:px-16 transition-all duration-500 pointer-events-auto ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          {/* Top Left Name Logo */}
          <Link
            to="/"
            className="text-zinc-100 font-semibold tracking-[0.25em] hover:text-amber-400 transition-colors no-underline text-xs flex items-center gap-2 group"
          >
            <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${isFire ? 'bg-amber-400 shadow-[0_0_10px_#FF7A18]' : 'bg-cyan-400 shadow-[0_0_10px_#3FBCE8]'}`} />
            <span>HEMCHAND P.</span>
          </Link>

          {/* Center Navigation Links (WORKS, ABOUT, CONTACT) */}
          <nav className="hidden md:flex items-center gap-12 text-[11px]">
            <a
              href="/#work"
              className="hover:text-white transition-colors py-1 relative group text-zinc-400 tracking-[0.2em]"
            >
              WORKS
              <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
            </a>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-white transition-colors py-1 relative group tracking-[0.2em] ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400'
                }`
              }
            >
              ABOUT
              <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-white transition-colors py-1 relative group tracking-[0.2em] ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400'
                }`
              }
            >
              CONTACT
              <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isFire ? 'bg-amber-400' : 'bg-cyan-400'}`} />
            </NavLink>
          </nav>

          {/* Top Right ICE / FIRE Toggle Switch */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle ICE vs FIRE visual theme"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer focus:outline-none"
            >
              <span className="text-[9px] tracking-widest text-zinc-400 group-hover:text-zinc-200">
                {isFire ? 'FIRE' : 'ICE'}
              </span>
              <div
                className={`w-8 h-4 rounded-full p-0.5 transition-colors duration-500 relative flex items-center ${
                  isFire ? 'bg-amber-500/20 border border-amber-500/40' : 'bg-cyan-500/20 border border-cyan-500/40'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-transform duration-500 shadow-md ${
                    isFire ? 'translate-x-4 bg-amber-400 shadow-amber-500/50' : 'translate-x-0 bg-cyan-400 shadow-cyan-500/50'
                  }`}
                />
              </div>
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
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden border-b border-white/10">
          <div className="flex flex-col space-y-8 font-mono">
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
              Navigation &bull; ICE &times; FIRE
            </span>
            <a
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display uppercase tracking-tight text-white hover:text-amber-400 transition-colors border-b border-white/10 pb-4"
            >
              WORKS
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display uppercase tracking-tight text-white hover:text-amber-400 transition-colors border-b border-white/10 pb-4"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display uppercase tracking-tight text-white hover:text-amber-400 transition-colors border-b border-white/10 pb-4"
            >
              CONTACT
            </Link>
          </div>

          <div className="flex flex-col space-y-2 border-t border-white/10 pt-6 font-mono text-xs text-zinc-400">
            <span className="text-zinc-200">hemchandrp21@gmail.com</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              B.Des UX Design &bull; Symbiosis Institute of Design
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
