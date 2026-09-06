import { Link } from 'react-router-dom';
import { personalInfo } from '../data/projectsData';

function Footer() {
  const socials = [
    { name: 'LinkedIn', url: personalInfo.socials.linkedin },
    { name: 'Behance', url: personalInfo.socials.behance },
    { name: 'Instagram', url: personalInfo.socials.instagram },
  ];

  return (
    <footer className="w-full bg-[#070707] text-white border-t border-white/10 py-12 px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Signature */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link to="/" className="text-base font-display font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors">
            HEMCHAND P.
          </Link>
          <span className="hidden sm:inline text-zinc-600">&bull;</span>
          <span className="text-xs font-mono text-zinc-400 font-medium">
            {personalInfo.education.degree} &bull; {personalInfo.education.institution}
          </span>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider font-semibold"
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Right Copyright */}
        <div className="text-xs font-mono text-zinc-500 font-medium">
          &copy; 2026 ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}

export default Footer;
