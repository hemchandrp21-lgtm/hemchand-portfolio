import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

function ExperienceSection() {
  const [activeId, setActiveId] = useState(0);

  const experiences = [
    {
      num: '01',
      title: 'FREELANCE UI/UX DESIGNER',
      role: 'Freelance UI/UX Designer',
      period: 'Jan 2025 – Present',
      location: 'Remote / India',
      status: 'ACTIVE',
      summary: 'Designed Web/Mobile Applications, Illustrations, Logos, And Brand Identities, Creating User-Focused Digital Products And Engaging Visual Solutions.',
      highlights: ['Web & Mobile App Design', 'Brand Identity & Systems', 'User-Centered Visual Solutions'],
      tags: ['Product Design', 'Visual Design', 'Branding', 'Interface Assets']
    },
    {
      num: '02',
      title: 'ABIS EXPORTS INDIA PVT. LTD. (IB GROUP)',
      role: 'Design Intern',
      period: 'Sep 2025 – Present',
      location: 'Rajnandgaon, Chhattisgarh',
      status: 'ACTIVE',
      summary: 'Led UI/UX For 5 E-Commerce Websites, From Wireframes To Final UI And Developer Handoff. Worked On Seed To Soul, Lynk Sweets, And Other Digital Products.',
      highlights: ['5 E-Commerce Digital Products', 'Seed To Soul & Lynk Sweets', 'Wireframe To Dev Handoff'],
      tags: ['E-Commerce', 'UI/UX Design', 'Wireframes', 'Product Design']
    },
    {
      num: '03',
      title: 'SUMMER INTERNSHIP',
      role: 'Frontend & Vibe Coding Intern',
      period: 'May 2026 – July 2026',
      location: 'Remote',
      status: '',
      summary: 'Built Responsive Websites Using Shopify, Claude, Codex & Vibe Coding, Collaborating On Frontend Development And Deployment.',
      highlights: ['Shopify Store Development', 'AI-Powered Vibe Coding', 'Frontend Build & Deployment'],
      tags: ['Shopify', 'Frontend Dev', 'Claude & Codex', 'Vibe Coding']
    },
    {
      num: '04',
      title: 'GREY PLATFORMS',
      role: 'UI Design Intern',
      period: 'Apr 2026 – May 2026',
      location: 'India',
      status: '',
      summary: 'User Interaction Designer Intern, Contributing To The Apna BMS Project While Gaining Hands-On Experience In UI/UX Design, Wireframing, And User-Centered Design.',
      highlights: ['Apna BMS Project UI', 'Interaction Design Workflows', 'Hands-On Usability Testing'],
      tags: ['Apna BMS', 'Interaction Design', 'Wireframing', 'User Research']
    },
    {
      num: '05',
      title: 'ZIDIO DEVELOPMENT',
      role: 'UI/UX Intern',
      period: 'June 2025 – Sept 2025',
      location: 'Remote / India',
      status: '',
      summary: 'Designed Gamified Learning Experiences, Focusing On User Engagement, Intuitive Interfaces, And Creative Problem-Solving.',
      highlights: ['Gamified UX Engagement', 'Intuitive Interface Design', 'Interactive Prototypes'],
      tags: ['Gamification', 'UI/UX Design', 'Interaction Design', 'Prototyping']
    },
    {
      num: '06',
      title: 'SYMBIOSIS INSTITUTE OF DESIGN (SID)',
      role: 'B.Des in User Experience Design',
      period: '2023 – 2027',
      location: 'Nagpur, Maharashtra',
      status: 'PURSUING',
      summary: 'Focus on UX Research, Information Architecture, Interactive Prototyping, Usability Testing & Product Design Systems.',
      highlights: ['B.Des UX Specialization', 'Design Systems & IA', 'Usability Research & Labs'],
      tags: ['UX Research', 'Information Architecture', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <section id="experience" className="relative w-full py-16 sm:py-24 px-4 sm:px-10 lg:px-16 bg-transparent text-white border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header with Portfolio Typography & Overall Experience in Years */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
        >
          <div className="space-y-3">
            {/* Orange Dot + MY JOURNEY */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#A93207] shadow-[0_0_8px_#A93207]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#A93207] uppercase font-bold">
                03 / MY JOURNEY
              </span>
            </div>

            {/* Main Title WORK EXPERIENCE in Portfolio Display Typography */}
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase leading-none">
              WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#A93207]">EXPERIENCE</span>
            </h2>
          </div>

          {/* Overall Experience in Years Stat Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider shrink-0 w-fit">
            <Clock className="w-3.5 h-3.5 text-[#A93207]" />
            <span>1.5+ YEARS INDUSTRY EXP.</span>
          </div>
        </motion.div>

        {/* Minimalist Vertical Timeline List matching reference screenshot */}
        <div className="relative pl-6 sm:pl-8 pt-2">
          
          {/* Solid Orange Bar for Active/Present Experiences (Top Section - No Glow) */}
          <div className="absolute left-1.5 sm:left-2 top-3 h-[145px] w-[2px] bg-[#A93207] z-10" />

          {/* Continuous Left Vertical Timeline Track Line */}
          <div className="absolute left-1.5 sm:left-2 top-3 bottom-6 w-[1px] bg-white/15" />

          <div className="space-y-4 sm:space-y-5">
            {experiences.map((exp, idx) => {
              const isActive = activeId === idx;
              const isPresentRole = exp.status === 'ACTIVE';

              return (
                <motion.div
                  key={exp.num + idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Clean Node Dot on Timeline Line */}
                  <div className="absolute -left-[23px] sm:-left-[29px] top-4 z-20 flex items-center justify-center">
                    {isPresentRole || isActive ? (
                      <div className="w-3 h-3 rounded-full bg-[#A93207] border-2 border-[#040507]" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 border border-zinc-500 group-hover:bg-zinc-300 group-hover:border-white transition-colors" />
                    )}
                  </div>

                  {/* Main Clickable Row with Timeline Date Visible Before Clicking */}
                  <div
                    onClick={() => {
                      playClickSound();
                      setActiveId(isActive ? -1 : idx);
                    }}
                    onMouseEnter={() => {
                      playHoverSound();
                    }}
                    className={`flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl cursor-pointer transition-all duration-300 select-none ${
                      isActive 
                        ? 'bg-white/5 border border-[#A93207]/50 text-white' 
                        : isPresentRole
                        ? 'bg-white/[0.03] border border-[#A93207]/30 text-white hover:border-[#A93207]/60'
                        : 'hover:bg-white/[0.02] text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 flex-1 min-w-0">
                      {/* Number 01, 02... */}
                      <span className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
                        isPresentRole || isActive ? 'text-[#A93207]' : 'text-zinc-500'
                      }`}>
                        {exp.num}
                      </span>

                      {/* Title / Company in Portfolio Display Font */}
                      <h3 className={`text-sm sm:text-lg font-display font-extrabold uppercase tracking-tight leading-snug break-words ${
                        isPresentRole || isActive ? 'text-white' : 'text-zinc-200 group-hover:text-white'
                      }`}>
                        {exp.title}
                      </h3>

                      {/* Timeline Date Period visible before clicking */}
                      <span className={`font-mono text-[11px] sm:text-xs font-medium whitespace-nowrap ${
                        isPresentRole ? 'text-[#A93207]/80 font-bold' : 'text-zinc-500'
                      }`}>
                        ({exp.period})
                      </span>
                    </div>

                    {/* Right ACTIVE / PURSUING Badge & Chevron */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      {exp.status === 'ACTIVE' ? (
                        <span className="px-2.5 py-0.5 rounded-full border-2 border-[#A93207] bg-transparent text-zinc-200 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A93207]" />
                          <span>ACTIVE</span>
                        </span>
                      ) : exp.status ? (
                        <span className="px-2 sm:px-2.5 py-0.5 rounded border border-white/20 bg-white/5 text-zinc-300 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                          {exp.status}
                        </span>
                      ) : null}
                      <ChevronRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-[#A93207]' : isPresentRole ? 'text-[#A93207]/70' : 'text-zinc-500 group-hover:translate-x-0.5'
                      }`} />
                    </div>
                  </div>

                  {/* Full Rich Details Card when Expanded */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 mb-3 ml-3 sm:ml-4 p-4 sm:p-6 rounded-xl bg-[#080a0f] border border-white/10 space-y-4 font-sans shadow-xl">
                          
                          {/* Role & Period Header Bar */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                              <Briefcase className="w-4 h-4 text-[#A93207]" />
                              <span>{exp.role}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                {exp.location}
                              </span>
                            </div>
                          </div>

                          {/* OVERVIEW SECTION */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#A93207]" />
                              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#A93207]">
                                OVERVIEW
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                              {exp.summary}
                            </p>
                          </div>

                          {/* KEY HIGHLIGHTS */}
                          <div className="space-y-2 pt-1 border-t border-white/5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                              KEY HIGHLIGHTS
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {exp.highlights.map((item) => (
                                <div key={item} className="flex items-center gap-1.5 text-xs text-zinc-300 bg-white/[0.03] border border-white/5 px-2.5 py-1.5 rounded-lg">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* TOOL & DOMAIN TAGS */}
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px] uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;











