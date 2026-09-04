import { NavLink } from 'react-router-dom';

function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full max-w-5xl mx-auto pt-6 px-4 pb-8 flex items-center justify-between">
      {/* Brand Badge */}
      <NavLink 
        to="/" 
        className="bg-zinc-900/90 border border-zinc-800 text-white font-black text-xl px-6 py-2.5 rounded-full shadow-lg flex items-center justify-center tracking-tight no-underline hover:border-zinc-700 transition-all"
      >
        poch<span className="text-amber-300">.</span>
      </NavLink>

      {/* Navigation Capsule */}
      <nav className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-full p-1.5 shadow-xl flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 no-underline inline-block ${
                isActive
                  ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Action Button */}
      <NavLink
        to="/contact"
        className="bg-[#fef08a] hover:bg-[#fde047] text-zinc-950 font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 shadow-md no-underline hidden sm:inline-block"
      >
        GET STARTED
      </NavLink>
    </header>
  );
}

export default Nav;
