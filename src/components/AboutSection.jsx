import { Mail, ExternalLink, GraduationCap, Briefcase, Wrench, Award, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section id="about" className="relative w-full py-24 px-6 sm:px-10 lg:px-16 bg-[#040507] text-white overflow-hidden border-t border-white/10">
      {/* Background Volumetric Glows (Consistent Obsidian Dark Palette) */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.025]" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.02]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto relative z-10 space-y-16"
      >
        {/* Main Two-Column Layout matching PDF & Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: HERO STATEMENTS & BIO ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-12">
            
            {/* 1. Primary Headline Statement */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-white/40" />
                <span className="text-[11px] font-display tracking-[0.25em] text-white/50 uppercase font-bold">
                  01 / ABOUT ME
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                I like understanding people,{' '}
                <span className="text-white/60 font-extrabold">solving messy problems</span>, and turning ideas into experiences that make sense.
              </h1>
            </div>

            {/* 2. Photo & Bio Intro Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-3xl bg-[#080a0f] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-white/20 transition-all">
              {/* Photo Container */}
              <div className="sm:col-span-4 relative group aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-xl">
                <img 
                  src="/.webp" 
                  alt="Hemchand Paunikar" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-transparent to-transparent" />
              </div>

              {/* Bio Paragraphs */}
              <div className="sm:col-span-8 space-y-4 text-sm sm:text-base font-sans text-white/80 leading-relaxed">
                <p>
                  I&apos;m <strong className="text-white font-bold">Hemchand Paunikar</strong>, a{' '}
                  <strong className="text-white">UI/UX design student</strong> at Symbiosis International University. I&apos;m interested in understanding how people think and designing digital experiences around their real needs.
                </p>
                <p className="text-white/70">
                  My work spans{' '}
                  <strong className="text-white font-medium">UX research, interaction design, visual design, and web design</strong>, with a growing passion for creating intuitive, data-backed solutions across enterprise apps, e-commerce, and community platforms.
                </p>
              </div>
            </div>

            {/* 3. Quick Contact Bar */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-display tracking-[0.25em] text-white/40 uppercase font-bold block">
                CONTACT
              </span>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-sans font-medium">
                <a 
                  href="mailto:hemchandrp21@gmail.com" 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#080a0f] border border-white/10 hover:border-white/30 hover:text-white transition-all text-white/90 shadow-lg group"
                >
                  <Mail className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                  <span>hemchandrp21@gmail.com</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/hemchand-paunikar/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#080a0f] border border-white/10 hover:border-white/30 hover:text-white transition-all text-white/90 shadow-lg group"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </div>
            </div>

            {/* 4. Secondary Highlight Statement */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-snug">
                I&apos;m curious about people, drawn to good interfaces, and{' '}
                <span className="text-white/60">always looking for simpler ways to solve a problem.</span>
              </h2>
            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN: RESUME SIDEBAR DETAILS ================= */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-10">
            
            {/* EDUCATION */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-2">
                <GraduationCap className="w-4 h-4 text-white/70" />
                <span>EDUCATION</span>
              </div>

              <div className="space-y-4 font-sans">
                <div className="grid grid-cols-12 gap-3 items-start">
                  <span className="col-span-4 text-xs font-display font-medium text-white/40 pt-1">
                    2023 — 2027
                  </span>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      B.Des. — User Experience Design
                    </h3>
                    <p className="text-xs text-white/60">
                      Symbiosis Institute of Design, Nagpur
                    </p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-[10px] font-bold font-display">
                      SID NAGPUR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LEARNING WORK EXPERIENCE */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-2">
                <Briefcase className="w-4 h-4 text-white/70" />
                <span>EXPERIENCE</span>
              </div>

              <div className="space-y-6 font-sans">
                {/* Role 1 */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  <span className="col-span-4 text-[11px] font-display font-medium text-white/40 pt-1 uppercase">
                    JAN 2025 — PRESENT
                  </span>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Freelance UI/UX Designer
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Designed web &amp; mobile apps, including an employee tracking system for <strong className="text-white">Kailash Masala</strong> (mobile app + admin dashboard) and brand identity for <strong className="text-white">Parikrushnum</strong>.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  <span className="col-span-4 text-[11px] font-display font-medium text-white/40 pt-1 uppercase">
                    SEP 2025 — FEB 2026
                  </span>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Design Intern
                    </h3>
                    <p className="text-xs text-white/80 font-medium">
                      ABIS Exports India Pvt. Ltd. (IB Group)
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Led UI/UX for 5 e-commerce platforms (Seed to Soul, Lynk Sweets, and 3 additional sites) through scalable design systems.
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  <span className="col-span-4 text-[11px] font-display font-medium text-white/40 pt-1 uppercase">
                    SEP 2025 — FEB 2026
                  </span>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      UI Design Intern
                    </h3>
                    <p className="text-xs text-white/80 font-medium">
                      Grey Platforms
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      User Interaction Designer Intern for the Apna BMS project, creating user flows and interface wireframes.
                    </p>
                  </div>
                </div>

                {/* Role 4 */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  <span className="col-span-4 text-[11px] font-display font-medium text-white/40 pt-1 uppercase">
                    JUN 2025 — SEP 2025
                  </span>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      UI/UX Intern
                    </h3>
                    <p className="text-xs text-white/80 font-medium">
                      Zidio Development
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Designed gamified learning experiences focused on engagement and intuitive interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-2">
                <Wrench className="w-4 h-4 text-white/70" />
                <span>SKILLS</span>
              </div>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                User Research &bull; Usability Testing &bull; Design Thinking &bull; Information Architecture &bull; User Flows &bull; Interaction Design &bull; Wireframing &bull; Prototyping &bull; Visual Design &bull; Design Systems &bull; Dashboard Design &bull; Branding &bull; Accessible Design &bull; AI Optimization &bull; Tech Integration &bull; Storytelling
              </p>
            </div>

            {/* TOOLS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-2">
                <Globe2 className="w-4 h-4 text-white/70" />
                <span>TOOLS &amp; SOFTWARE</span>
              </div>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Figma &bull; Illustrator &bull; Photoshop &bull; After Effects &bull; Fontforge &bull; Blender &bull; Spline &bull; Adobe Xd
              </p>
            </div>

            {/* CERTIFICATIONS & LANGUAGES */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-display text-xs text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-2">
                <Award className="w-4 h-4 text-white/70" />
                <span>CERTIFICATIONS &amp; LANGUAGES</span>
              </div>
              <div className="space-y-2 text-xs text-white/70 font-sans">
                <p>
                  <strong className="text-white">Certifications:</strong> Accenture (Digital Skills: UX), Simplilearn (Graphic Design &amp; UI/UX), LetsUpgrade (Figma Bootcamp), Tutedude (Certified UI/UX Expert).
                </p>
                <p>
                  <strong className="text-white">Languages:</strong> English (Conversational), Hindi (Native), Marathi (Native).
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
