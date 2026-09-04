import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/40 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left side: hemchand. brand pill box */}
        <Link 
          to="/" 
          className="bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800/90 hover:border-zinc-700 text-white font-black text-xl px-6 py-2 rounded-full shadow-lg flex items-center justify-center tracking-tight no-underline transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          hemchand<span className="text-amber-400">.</span>
        </Link>

        {/* Center: Nav component */}
        <Nav />

        {/* Right side: Book a call button */}
        <Button 
          asChild 
          className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-5 py-2 hover:bg-amber-300 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-200 shadow-md"
        >
          <a href="mailto:hemchandrp21@gmail.com">
            Book a call
          </a>
        </Button>
      </div>
    </header>
  );
}

export default Header;
