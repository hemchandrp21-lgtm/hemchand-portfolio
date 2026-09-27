import { Mail, GraduationCap, Briefcase, FileText, Download, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all fill-current" viewBox="0 0 24 24">
      <path d="M22 7h-7V5h7v2zm-1.7 5.2c0-2.3-1.6-4.2-4.1-4.2-2.7 0-4.4 2-4.4 4.5 0 2.7 1.8 4.5 4.5 4.5 2.1 0 3.7-1.1 4.2-2.7h-2.2c-.3.7-1.1 1.1-2 1.1-1.3 0-2.2-.8-2.3-2.1h6.3c.0-.2.0-.4.0-.6zm-6.2-1.1c.1-1 1-1.7 2-1.7s1.8.7 1.9 1.7h-3.9zm-4.3 1.9c.7.5 1.2 1.3 1.2 2.3 0 1.9-1.5 3.2-4.1 3.2H0V4.5h6.6c2.4 0 3.8 1.2 3.8 2.8 0 1.1-.6 2-1.6 2.4zM3 7.1v2.5h3.2c.9 0 1.5-.4 1.5-1.2 0-.9-.6-1.3-1.5-1.3H3zm0 4.6v3h3.5c1 0 1.7-.5 1.7-1.5 0-1-.7-1.5-1.7-1.5H3z"/>
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
    <section id="about" className="relative w-full py-10 sm:py-14 px-4 sm:px-10 lg:px-16 bg-transparent text-white overflow-hidden border-t border-white/10">
      {/* Background Volumetric Ambient Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.03]" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full filter blur-[180px] pointer-events-none bg-[#A93207]/[0.08]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-14"
      >
        {/* =========================================================================
            HERO SPLIT SECTION: IMAGE ON ONE SIDE, NAME & DETAILS ON THE OTHER
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: PORTRAIT IMAGE FRAME & VISUAL BADGES */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-2xl group">
              
              {/* Inner Portrait Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#080a0f] border border-white/10">
                <img 
                  src="/hero_portrait_suit.webp" 
                  alt="Hemchand Paunikar - UI/UX & Product Designer" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/hero_portrait_suit.jpg';
                  }}
                />
                
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A93207]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Status Pill Badge */}
              <div className="absolute top-7 right-7 px-3.5 py-1.5 rounded-full bg-[#040507]/90 backdrop-blur-md border border-white/20 text-[11px] font-sans font-semibold text-white/90 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Projects</span>
              </div>

              {/* Floating Profile Accent Badge at bottom */}
              <div className="absolute -bottom-4 left-6 right-6 p-4 rounded-2xl bg-[#080a0f]/95 backdrop-blur-xl border border-white/15 shadow-2xl">
                <div>
                  <h4 className="text-xs font-display font-extrabold text-white uppercase tracking-wider">
                    Hemchand Paunikar
                  </h4>
                  <p className="text-[11px] font-sans text-white/60">
                    Symbiosis Institute of Design
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE: NAME, DESIGNATION, BIO & QUICK DETAILS */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#A93207]" />
              <span className="text-[11px] font-display tracking-[0.25em] text-white/60 uppercase font-bold">
                01 / ABOUT ME
              </span>
            </div>

            {/* Name & Title Header */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hemchand <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">Paunikar</span>
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-[#A93207] tracking-wide">
                UI/UX Designer &amp; Product Designer
              </p>
            </div>

            {/* Headline Bio */}
            <p className="text-base sm:text-xl font-sans font-medium text-white/90 leading-relaxed">
              I like understanding people, <span className="text-white font-bold underline decoration-[#A93207]/60 underline-offset-4">solving messy problems</span>, and turning complex ideas into intuitive digital experiences.
            </p>

            {/* Extended Bio Text */}
            <div className="space-y-3 text-xs sm:text-sm font-sans text-white/75 leading-relaxed border-l-2 border-white/15 pl-4 sm:pl-5">
              <p>
                I&apos;m a B.Des student in User Experience Design at <strong className="text-white font-semibold">Symbiosis International University</strong> (Nagpur). My work spans UX research, interaction design, visual design, and web architecture.
              </p>
              <p>
                From building employee management apps to designing scalable e-commerce design systems and gamified platforms, I focus on data-backed, human-centered solutions that deliver real impact.
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#080a0f] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-display text-white/50 uppercase tracking-wider font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#A93207]" />
                  <span>Location</span>
                </div>
                <p className="text-xs font-bold text-white">Nagpur, India</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#080a0f] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-display text-white/50 uppercase tracking-wider font-bold">
                  <GraduationCap className="w-3.5 h-3.5 text-[#A93207]" />
                  <span>Education</span>
                </div>
                <p className="text-xs font-bold text-white">B.Des UI/UX (2023-27)</p>
              </div>

              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('experience');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="p-3.5 rounded-xl bg-[#080a0f] border border-white/10 hover:border-[#A93207]/60 hover:bg-[#A93207]/10 transition-all cursor-pointer group/exp space-y-1 col-span-2 sm:col-span-1 block no-underline"
                title="Jump to Experience Timeline (Section 03)"
              >
                <div className="flex items-center justify-between text-[10px] font-display text-white/50 uppercase tracking-wider font-bold">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#A93207]" />
                    <span>Experience</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover/exp:text-[#A93207] group-hover/exp:translate-x-0.5 group-hover/exp:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs font-bold text-white group-hover/exp:text-[#A93207] transition-colors">
                  1.5+ Years (4+ Roles)
                </p>
              </a>
            </div>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a 
                href="/Hemchand_Paunikar_Resume.pdf"
                download="Hemchand_Paunikar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#A93207] hover:bg-[#A93207]/85 active:scale-95 transition-all text-white font-bold text-xs shadow-xl group min-h-[46px] no-underline"
              >
                <FileText className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>DOWNLOAD RESUME</span>
                <Download className="w-3.5 h-3.5 text-white/80" />
              </a>

              <a 
                href="mailto:hemchandrp21@gmail.com" 
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#080a0f] border border-white/10 hover:border-white/30 hover:text-white active:bg-white/10 transition-all text-white/90 text-xs font-semibold shadow-lg group min-h-[46px] no-underline"
              >
                <Mail className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all shrink-0" />
                <span>hemchandrp21@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/hemchand-paunikar/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#080a0f] border border-white/10 hover:border-white/30 hover:text-white active:bg-white/10 transition-all text-white/90 shadow-lg group flex items-center justify-center min-h-[46px] min-w-[46px] no-underline"
                title="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>

              <a 
                href="https://www.behance.net/hemchanpaunika" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#080a0f] border border-white/10 hover:border-white/30 hover:text-white active:bg-white/10 transition-all text-white/90 shadow-lg group flex items-center justify-center min-h-[46px] min-w-[46px] no-underline"
                title="Behance Portfolio"
              >
                <BehanceIcon />
              </a>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
