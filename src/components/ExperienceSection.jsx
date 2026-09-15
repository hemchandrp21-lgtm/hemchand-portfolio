import { Calendar, GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

function ExperienceSection() {
  const realExperiences = [
    {
      company: 'ABIS FOODS & PROTEINS',
      role: 'DESIGN INTERN',
      period: 'MAY 2026 – PRESENT',
      location: 'Rajnandgaon, Chhattisgarh',
      isPresent: true,
      summary: 'Leading design internship initiatives for product branding, interface assets, and visual design solutions.',
      focus: ['PRODUCT DESIGN', 'VISUAL DESIGN', 'BRANDING', 'INTERFACE ASSETS']
    },
    {
      company: 'FREELANCE',
      role: 'FREELANCE UI/UX DESIGNER',
      period: 'JAN 2025 – PRESENT',
      location: 'Remote',
      isPresent: true,
      summary: 'Designing end-to-end digital experiences, responsive web interfaces, brand identity systems, and custom client product prototypes.',
      focus: ['UI/UX DESIGN', 'WEB EXPERIENCES', 'BRANDING', 'CLIENT WORK']
    },
    {
      company: 'GREY PLATFORMS',
      role: 'USER INTERACTION DESIGN INTERN',
      period: 'APR 2026 – MAY 2026',
      location: 'Remote',
      isPresent: false,
      summary: 'Worked on UI/UX design tasks for the Apna BMS project, improving user flows, wireframing, interface usability, and design thinking in Figma.',
      focus: ['APNA BMS', 'USER FLOWS', 'WIREFRAMING', 'USABILITY', 'FIGMA']
    },
    {
      company: 'ABIS EXPORTS / IB GROUP',
      role: 'LEAD UI/UX DESIGN INTERN',
      period: 'SEP 2025 – FEB 2026',
      location: 'Remote / Rajnandgaon',
      isPresent: false,
      summary: 'Independently led UI/UX design across multiple digital products. Designed and delivered 5 end-to-end e-commerce websites (including Seed to Soul & Lynk Sweets) from research and wireframing to high-fidelity UI and developer handoff.',
      focus: ['SEED TO SOUL', 'LYNK SWEETS', '5 E-COMMERCE SITES', 'DESIGN SYSTEMS', 'DEVELOPER HANDOFF']
    },
    {
      company: 'ZIDIO DEVELOPMENT',
      role: 'UI/UX INTERN',
      period: 'JUN 2025 – SEP 2025',
      location: 'Remote',
      isPresent: false,
      summary: 'Designed and refined gamified learning experiences, creating interactive screens, engaging user flows, and analytics dashboards.',
      focus: ['GAMIFICATION', 'INTERACTIVE DASHBOARDS', 'USER FLOWS', 'PROTOTYPING']
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] rounded-full filter blur-[160px] pointer-events-none bg-white/[0.02]" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
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
              02 / EXPERIENCE JOURNEY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            MY CAREER &amp; DESIGN <br />
            <span className="text-white/60">JOURNEY TIMELINE.</span>
          </h2>
        </motion.div>

        {/* Vertical Connected Journey Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-12">
          
          {/* Continuous Glowing Vertical Spine */}
          <div className="absolute left-2 sm:left-4 md:left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/60 via-white/20 to-white/10" />

          {realExperiences.map((exp, idx) => {
            const stepNum = (idx + 1).toString().padStart(2, '0');
            return (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Milestone Glowing Dot Node */}
                <div className="absolute -left-[23px] sm:-left-[31px] md:-left-[35px] top-6 w-5 h-5 rounded-full border-2 border-white bg-[#040507] shadow-[0_0_15px_rgba(255,255,255,0.9)] flex items-center justify-center z-10">
                  {exp.isPresent && (
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  )}
                </div>

                {/* Experience Milestone Card */}
                <motion.article
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-3xl bg-[#080a0f] border border-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Accent Side Line */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20 group-hover:bg-white transition-colors duration-500" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Number, Period & Role */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display text-white font-bold tracking-widest uppercase">
                          MILESTONE {stepNum}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-display text-white/60 uppercase tracking-widest flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-white/40" />
                          {exp.period}
                        </span>
                        {exp.isPresent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-display text-[9px] font-bold tracking-widest uppercase shadow-md">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white group-hover:text-white transition-colors pt-1">
                        {exp.company}
                      </h3>

                      <div className="space-y-1.5">
                        <p className="text-xs font-display text-white/80 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-white/50" />
                          {exp.role}
                        </p>
                        {exp.location && (
                          <span className="text-[10px] font-display text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-white/40" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Summary & Focus Tags */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-sm text-white/80 font-sans leading-relaxed">
                        {exp.summary}
                      </p>

                      {exp.focus && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 font-display text-[10px]">
                          {exp.focus.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            );
          })}

          {/* EDUCATION MILESTONE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative pt-4"
          >
            {/* Education Node */}
            <div className="absolute -left-[23px] sm:-left-[31px] md:-left-[35px] top-10 w-5 h-5 rounded-full border-2 border-white/60 bg-[#040507] shadow-[0_0_15px_rgba(255,255,255,0.6)] flex items-center justify-center z-10">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>

            <div className="p-8 rounded-3xl bg-[#080a0f] border border-white/10 backdrop-blur-xl text-xs space-y-4 hover:border-white/25 transition-all">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-display text-white font-bold tracking-widest uppercase">
                ACADEMIC FOUNDATION
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/60 border-b border-white/10 pb-4">
                <span className="font-semibold text-white flex items-center gap-2 text-sm font-sans">
                  <GraduationCap className="w-4 h-4 text-white" />
                  Symbiosis Institute of Design (SID), Nagpur
                </span>
                <span className="font-display font-bold text-white tracking-wider">2023 &ndash; 2027</span>
              </div>
              <div>
                <p className="text-lg text-white font-semibold font-sans">
                  B.Des in User Experience Design
                </p>
                <p className="text-xs text-white/60 pt-1 font-sans leading-relaxed">
                  Focus on UX Research, Information Architecture, Interactive Prototyping, Usability Testing &amp; Product Design Systems.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;


