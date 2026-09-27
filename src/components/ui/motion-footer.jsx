"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Mail, Download, ArrowUpRight, MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { playHoverSound, playClickSound } from "../../utils/audioEngine";
import ContactMessageBox from "../ContactMessageBox";
import { motion, AnimatePresence } from "framer-motion";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES WITH ACCENT ORANGE (#A93207)
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  --pill-bg-1: rgba(255, 255, 255, 0.05);
  --pill-bg-2: rgba(255, 255, 255, 0.02);
  --pill-shadow: rgba(0, 0, 0, 0.6);
  --pill-highlight: rgba(255, 255, 255, 0.12);
  --pill-inset-shadow: rgba(0, 0, 0, 0.8);
  --pill-border: rgba(255, 255, 255, 0.12);
  
  --pill-bg-1-hover: rgba(169, 50, 7, 0.3);
  --pill-bg-2-hover: rgba(169, 50, 7, 0.12);
  --pill-border-hover: rgba(169, 50, 7, 0.7);
  --pill-shadow-hover: rgba(169, 50, 7, 0.35);
  --pill-highlight-hover: rgba(255, 255, 255, 0.3);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.95; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(169, 50, 7, 0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 12px rgba(169, 50, 7, 0.9)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Theme-adaptive Aurora Glow with Orange Accent & #040507 matching */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(169, 50, 7, 0.16) 0%, 
    rgba(4, 5, 7, 0.6) 45%, 
    #040507 75%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #ffffff;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.15));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export const MagneticButton = React.forwardRef(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseEnter={() => playHoverSound()}
        className={cn("cursor-pointer select-none", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-4">
    <span>UI/UX &amp; PRODUCT DESIGN</span> <span className="text-[#A93207]">✦</span>
    <span>USER RESEARCH &amp; EVALUATION</span> <span className="text-white/60">✦</span>
    <span>DESIGN SYSTEMS &amp; ARCHITECTURE</span> <span className="text-[#A93207]">✦</span>
    <span>PROTOTYPING &amp; INTERACTION</span> <span className="text-white/60">✦</span>
    <span>BEHANCE SELECTED WORKS</span> <span className="text-[#A93207]">✦</span>
    <span>AI-ASSISTED DESIGN &amp; VIBE CODING</span> <span className="text-white/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef(null);
  const giantTextRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);
  const [showMessageModal, setShowMessageModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow with clip-path polygon.
      */}
      <div
        ref={wrapperRef}
        className="relative h-[90vh] sm:h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* Fixed footer underneath */}
        <footer className="fixed bottom-0 left-0 flex h-[90vh] sm:h-screen w-full flex-col justify-between overflow-hidden bg-[#040507] text-white cinematic-footer-wrapper border-t border-white/10">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            HEMCHAND
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-8 sm:top-12 left-0 w-full overflow-hidden border-y border-white/10 bg-[#040507]/85 backdrop-blur-md py-3 sm:py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-white/70 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6 mt-16 sm:mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase footer-text-glow tracking-tight mb-8 sm:mb-10 text-center leading-tight"
            >
              READY TO BUILD <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#A93207]">SOMETHING GREAT?</span>
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-4 sm:gap-6 w-full">
              {/* Primary Contact Actions */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                <MagneticButton
                  as="button"
                  onClick={() => {
                    playClickSound();
                    setShowMessageModal(true);
                  }}
                  className="footer-glass-pill px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-white font-mono font-bold text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 group cursor-pointer bg-[#A93207]/20 border-[#A93207]/50 hover:bg-[#A93207] transition-all shadow-xl shadow-[#A93207]/20"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#A93207] group-hover:text-white transition-colors" />
                  <span>SEND A MESSAGE</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="mailto:hemchandrp21@gmail.com"
                  onClick={playClickSound}
                  className="footer-glass-pill px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-white font-mono font-bold text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 group no-underline"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-[#A93207] transition-colors" />
                  <span>hemchandrp21@gmail.com</span>
                </MagneticButton>
                
                <MagneticButton
                  as="a"
                  href="https://linkedin.com/in/hemchand-paunikar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="footer-glass-pill px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-white font-mono font-bold text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 group no-underline"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-[#A93207] transition-colors fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.97 1.49 1.49 0 0 0 0-2.97Z" />
                  </svg>
                  <span>CONNECT ON LINKEDIN</span>
                </MagneticButton>
              </div>

              {/* Secondary Social & Resume Links */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full mt-1">
                <MagneticButton
                  as="a"
                  href="https://www.behance.net/hemchanpaunika"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="footer-glass-pill px-4 sm:px-6 py-2 sm:py-3 rounded-full text-zinc-400 font-mono font-medium text-[11px] sm:text-sm hover:text-white flex items-center gap-1.5 no-underline"
                >
                  <span>BEHANCE PORTFOLIO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://www.instagram.com/hemchand.ux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="footer-glass-pill px-4 sm:px-6 py-2 sm:py-3 rounded-full text-zinc-400 font-mono font-medium text-[11px] sm:text-sm hover:text-white flex items-center gap-1.5 no-underline"
                >
                  <span>INSTAGRAM @HEMCHAND.UX</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="/Hemchand_Paunikar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="footer-glass-pill px-4 sm:px-6 py-2 sm:py-3 rounded-full text-zinc-400 font-mono font-medium text-[11px] sm:text-sm hover:text-white flex items-center gap-1.5 no-underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>RESUME PDF</span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-6 sm:pb-8 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            
            {/* Copyright */}
            <div className="text-zinc-500 font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase order-2 sm:order-1 text-center sm:text-left">
              &copy; {new Date().getFullYear()} HEMCHAND PAUNIKAR. ALL RIGHTS RESERVED.
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full footer-glass-pill flex items-center justify-center text-zinc-400 hover:text-white group order-3 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" />
            </MagneticButton>

          </div>
        </footer>
      </div>

      {/* Interactive Contact Message Box Modal Overlay */}
      <AnimatePresence>
        {showMessageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowMessageModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  setShowMessageModal(false);
                }}
                onMouseEnter={playHoverSound}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer shadow-lg active:scale-95"
                title="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <ContactMessageBox isEmbedded={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CinematicFooter;
