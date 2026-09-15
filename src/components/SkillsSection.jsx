import { Wrench, Sparkles, Layers, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// Authentic Software Badge Icons matching user screenshot
function FigmaBadge() {
  return (
    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
      <svg viewBox="0 0 38 57" fill="none" className="w-5 h-5">
        <path fill="#F24E1E" d="M19 19a9.5 9.5 0 0 0 0-19H9.5a9.5 9.5 0 0 0 0 19H19z"/>
        <path fill="#A259FF" d="M9.5 38a9.5 9.5 0 0 0 9.5-9.5V19H9.5a9.5 9.5 0 0 0 0 19z"/>
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z"/>
      </svg>
    </div>
  );
}

function AdobeXdBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#470137] border border-[#FF26BE]/40 flex items-center justify-center text-[#FF26BE] font-display font-extrabold text-base shadow-md shrink-0">
      Xd
    </div>
  );
}

function IllustratorBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center text-[#FF9A00] font-display font-extrabold text-base shadow-md shrink-0">
      Ai
    </div>
  );
}

function PhotoshopBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center text-[#31A8FF] font-display font-extrabold text-base shadow-md shrink-0">
      Ps
    </div>
  );
}

function FontforgeBadge() {
  return (
    <div className="w-11 h-11 rounded-full bg-white border border-white/20 flex items-center justify-center text-black font-serif italic font-bold text-lg relative overflow-hidden shadow-md shrink-0">
      <span className="relative z-10 text-black leading-none pt-0.5">ff</span>
      <span className="absolute w-8 h-[2px] bg-[#FF5500] rotate-45" />
    </div>
  );
}

function AfterEffectsBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#00005B] border border-[#9999FF]/40 flex items-center justify-center text-[#9999FF] font-display font-extrabold text-base shadow-md shrink-0">
      Ae
    </div>
  );
}

function BlenderBadge() {
  return (
    <div className="w-11 h-11 rounded-full bg-[#141b2d] border border-white/15 flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path fill="#E87D0D" d="M12.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        <path fill="#265787" d="M6.7 9.4l4-2.3 2.1-4.7a1 1 0 0 1 1.8.8l-1.6 4.8 4.2 2.4a1 1 0 0 1-1 1.7L12 10l-4.3 2.5a1 1 0 0 1-1-1.7z"/>
        <circle cx="12.5" cy="12" r="1.8" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}

function SplineBadge() {
  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#A855F7] to-[#EC4899] flex items-center justify-center shadow-md shrink-0 border border-white/30 relative overflow-hidden">
      <div className="w-7 h-7 rounded-full bg-gradient-to-bl from-cyan-300 via-purple-400 to-pink-500 blur-[1px] opacity-90" />
    </div>
  );
}

function ShopifyBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#95BF47]/20 border border-[#95BF47]/40 flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path fill="#95BF47" d="M18.8 6.2l-2.4-.6s-1.3-1.3-1.8-1.5c-.3-.2-.7-.1-.9 0l-1 .7-.9-.7c-.2-.1-.6-.2-.9 0-.5.2-1.8 1.5-1.8 1.5L6.7 6.2c-.3.1-.4.4-.4.6l1.3 12.3c0 .3.3.5.6.5h9.2c.3 0 .5-.2.6-.5L19.2 6.8c0-.2-.1-.5-.4-.6z"/>
        <path fill="#5E8E3E" d="M12 4.2l.6.4h-1.2l.6-.4z"/>
      </svg>
    </div>
  );
}

function HtmlCssBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#E34F26]/20 border border-[#E34F26]/40 flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path fill="#E34F26" d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2z"/>
        <path fill="#EF652A" d="M12 3.8v16.4l5.9-1.6 1.3-14.8H12z"/>
        <path fill="#FFFFFF" d="M8 7.5h8l-.3 3H8.3l.3 3.3h7.1l-.5 5.5-3.2 1-3.2-1-.2-2.5H6.8l.4 4.5 4.8 1.5 4.8-1.5.9-10.8H8z"/>
      </svg>
    </div>
  );
}

function AiBadge() {
  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#A855F7]/30 to-[#06B6D4]/30 border border-[#A855F7]/50 flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path fill="url(#aiGradient)" d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/>
        <path fill="#06B6D4" d="M5 3 4 6 1 7l3 1 1 3 1-3 3-1-3-1-1-3Z"/>
        <defs>
          <linearGradient id="aiGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7"/>
            <stop offset="1" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PremiereBadge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-[#00005B] border border-[#9999FF]/40 flex items-center justify-center text-[#9999FF] font-display font-extrabold text-base shadow-md shrink-0">
      Pr
    </div>
  );
}

function SkillsSection() {
  const softwareTools = [
    { name: 'Figma', component: <FigmaBadge /> },
    { name: 'Adobe Xd', component: <AdobeXdBadge /> },
    { name: 'Illustrator', component: <IllustratorBadge /> },
    { name: 'Photoshop', component: <PhotoshopBadge /> },
    { name: 'Fontforge', component: <FontforgeBadge /> },
    { name: 'After Effects', component: <AfterEffectsBadge /> },
    { name: 'Blender', component: <BlenderBadge /> },
    { name: 'Spline', component: <SplineBadge /> },
    { name: 'Shopify', component: <ShopifyBadge /> },
    { name: 'HTML5 / CSS3', component: <HtmlCssBadge /> },
    { name: 'AI Design Tools', component: <AiBadge /> },
    { name: 'Premiere Pro', component: <PremiereBadge /> }
  ];

  const skillPillars = [
    {
      title: 'UX / PRODUCT',
      icon: Layers,
      skills: ['User Research', 'User Flows', 'Information Architecture', 'Wireframing', 'Prototyping', 'Usability Thinking']
    },
    {
      title: 'UI / VISUAL',
      icon: Sparkles,
      skills: ['Interface Design', 'Visual Design', 'Design Systems', 'Typography', 'Layout', 'Art Direction']
    },
    {
      title: 'CREATIVE & DIGITAL',
      icon: Code,
      skills: ['Graphic Design', 'Branding', '3D & Visual Experiments', 'Motion & Interaction', 'Creative Direction', 'Storytelling']
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[160px] pointer-events-none bg-white/[0.02]" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6 border-b border-white/10 pb-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white/40" />
            <span className="text-[11px] font-display tracking-[0.25em] text-white/50 uppercase">
              03 / SOFTWARE &amp; CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white leading-none">
            SOFTWARE &amp; TOOLS <br />
            <span className="text-white/60">I WORK WITH.</span>
          </h2>
        </motion.div>

        {/* CLEAN SOFTWARE LOGOS SHOWCASE (MATCHING USER SCREENSHOT) */}
        <div className="space-y-8 bg-[#080a0f] border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2 font-display text-xs text-white/50 uppercase tracking-widest border-b border-white/10 pb-4">
            <Wrench className="w-4 h-4 text-white/70" />
            <span className="font-bold text-white tracking-widest">CREATIVE SOFTWARE STACK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {softwareTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 cursor-pointer group py-1"
              >
                {tool.component}
                <span className="text-base sm:text-lg font-sans font-semibold text-white/90 group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORE DISCIPLINE CAPABILITIES STACK */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 font-display text-xs text-white/50 uppercase tracking-widest">
            <Cpu className="w-4 h-4 text-white/70" />
            <span className="font-bold text-white tracking-widest">DESIGN DISCIPLINE &amp; METHODOLOGY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-[#080a0f] border border-white/10 backdrop-blur-xl space-y-6 hover:border-white/30 transition-all cursor-pointer shadow-xl"
                >
                  <div className="flex items-center gap-2.5 font-display text-xs text-white/70 uppercase tracking-widest border-b border-white/10 pb-4">
                    <IconComp className="w-4 h-4 text-white" />
                    <span className="font-bold text-white text-sm">{pillar.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 font-display">
                    {pillar.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                        className="px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
