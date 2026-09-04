import { NavLink } from 'react-router-dom';

function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
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
  );
}

export default Nav;
