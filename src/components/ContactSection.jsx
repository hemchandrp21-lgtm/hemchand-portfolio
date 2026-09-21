import { useState } from 'react';
import { personalInfo } from '../data/projectsData';
import { ArrowUpRight, Copy, Check, ShieldCheck, Mail, MapPin, Lock, AlertCircle, FileText } from 'lucide-react';
import LegalNoticeModal from './LegalNoticeModal';

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [ageVerified, setAgeVerified] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!ageVerified) {
      alert('COPPA Compliance Notice: You must verify that you are at least 13 years of age before subscribing.');
      return;
    }
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setNameInput('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-36 px-4 sm:px-10 lg:px-16 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Volumetric Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.03]" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 relative z-10 text-center flex flex-col items-center">
        {/* Header Indicator */}
        <div className="flex items-center gap-3 justify-center">
          <span className="w-8 h-[2px] bg-white/40" />
          <span className="text-[11px] font-display tracking-[0.25em] text-white/50 uppercase font-bold">
            05 / LET&apos;S MAKE SOMETHING &bull; LEGAL AUDITED
          </span>
        </div>

        {/* Monumental Headline */}
        <div className="space-y-4 max-w-5xl">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05] text-center">
            HAVE AN IDEA? <br />
            <span className="text-white/90">LET&apos;S TURN IT INTO SOMETHING REAL.</span>
          </h2>
          <p className="text-xs sm:text-base text-white/70 font-sans leading-relaxed tracking-wide max-w-xl mx-auto pt-2 sm:pt-4">
            Whether it&apos;s a digital product, visual identity, design retainer, or custom project — I&apos;d love to hear about it.
          </p>
        </div>

        {/* Direct Email Box */}
        <div className="w-full max-w-2xl pt-2 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/20 pb-4 gap-3 sm:gap-4 text-left sm:text-left">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base xs:text-lg sm:text-2xl font-display font-bold text-white hover:text-white/70 transition-colors no-underline tracking-wide truncate max-w-full"
            >
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
              <button
                onClick={handleCopyEmail}
                className="text-xs font-display tracking-widest text-white/60 hover:text-white uppercase transition-colors flex items-center gap-1.5 cursor-pointer min-h-[40px] px-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-[0.2em] uppercase text-white hover:text-white/70 transition-all min-h-[40px]"
              >
                <span>TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <span className="text-[10px] font-display text-white/40 uppercase tracking-widest block pt-3 text-left sm:text-center">
            Open for commissions &bull; Privacy protected &bull; Session replay off.
          </span>
        </div>

        {/* ================= COMPLIANT SIGNUP & NEWSLETTER FORM WITH AGE GATE & RENEWAL TERMS ================= */}
        <div className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#080a0f] border border-white/15 shadow-2xl text-left space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                DESIGN UPDATES &amp; RETAINER SUBSCRIPTION
              </h3>
              <p className="text-xs text-white/50 font-mono">
                COPPA Age Verification &amp; Automatic Renewal Disclosures Enforced
              </p>
            </div>
            <Lock className="w-5 h-5 text-[#A93207]" />
          </div>

          <form onSubmit={handleSubscribeSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field (Masked & Protected) */}
              <div className="space-y-1.5">
                <label htmlFor="user-name-input" className="block text-[11px] font-mono uppercase text-white/70 font-bold">
                  Your Full Name
                </label>
                <input
                  id="user-name-input"
                  type="text"
                  required
                  data-mask="true"
                  data-private="true"
                  autoComplete="off"
                  placeholder="Hemchand Paunikar"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs placeholder:text-white/30 focus:outline-none focus:border-[#A93207] transition-all"
                />
              </div>

              {/* Email Field (Masked & Protected) */}
              <div className="space-y-1.5">
                <label htmlFor="user-email-input" className="block text-[11px] font-mono uppercase text-white/70 font-bold">
                  Your Email Address
                </label>
                <input
                  id="user-email-input"
                  type="email"
                  required
                  data-mask="true"
                  data-private="true"
                  autoComplete="off"
                  placeholder="name@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs placeholder:text-white/30 focus:outline-none focus:border-[#A93207] transition-all"
                />
              </div>
            </div>

            {/* MANDATORY COPPA AGE GATE CHECKBOX */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <input
                id="coppa-checkbox"
                type="checkbox"
                required
                checked={ageVerified}
                onChange={(e) => setAgeVerified(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black text-[#A93207] focus:ring-[#A93207] cursor-pointer"
              />
              <label htmlFor="coppa-checkbox" className="text-xs text-white/80 leading-snug cursor-pointer select-none">
                <strong className="text-white font-bold">COPPA Mandate Age Verification:</strong> I confirm and verify that I am at least 13 years of age (or older) in compliance with the Children&apos;s Online Privacy Protection Act.
              </label>
            </div>

            {/* SUBMIT BUTTON WITH ROSCA RENEWAL & CANCEL TERMS NEXT TO IT */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#A93207] hover:bg-[#892400] text-white font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-lg cursor-pointer shrink-0"
              >
                {subscribed ? 'SUBSCRIPTION CONFIRMED ✓' : 'SUBSCRIBE &amp; JOIN RETAINER'}
              </button>

              {/* RENEWAL TERMS & CANCEL INSTRUCTIONS NEXT TO BUTTON */}
              <div className="text-[10px] text-white/60 font-mono leading-tight space-y-1">
                <p className="flex items-center gap-1 font-bold text-white/90">
                  <AlertCircle className="w-3 h-3 text-[#A93207] shrink-0" />
                  Auto-Renewal &amp; Cancel Instructions:
                </p>
                <p>
                  Subscriptions auto-renew monthly unless cancelled. Cancel anytime with 1-click by emailing <strong className="text-white">hemchandrp21@gmail.com</strong> with subject &quot;Cancel Subscription&quot;. No cancellation fees.
                </p>
              </div>
            </div>
          </form>

          {/* CAN-SPAM PHYSICAL ADDRESS & UNSUBSCRIBE LINK */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span>Physical Mailing Address: Hemchand Paunikar Design Studio, Symbiosis Institute of Design, Nagpur, MH 440001, India</span>
            </div>
            <a
              href="mailto:hemchandrp21@gmail.com?subject=Unsubscribe%20Request"
              className="text-[#A93207] hover:underline font-bold shrink-0"
            >
              Unsubscribe Here
            </a>
          </div>
        </div>

        {/* ================= REGISTERED DMCA DESIGNATED AGENT DISCLOSURE BAR ================= */}
        <div className="w-full max-w-2xl p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-[#A93207] shrink-0" />
            <div>
              <span className="text-white font-bold block uppercase">DMCA Designated Agent Registered</span>
              <span className="text-[#A93207]">Official Copyright Officer: Hemchand Paunikar</span>
            </div>
          </div>
          <button
            onClick={() => setIsLegalModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold uppercase transition-all cursor-pointer text-[11px]"
          >
            VIEW DMCA &amp; LEGAL DISCLOSURES
          </button>
        </div>

        {/* Social Links Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full pt-4 text-left font-display text-xs">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 active:bg-white/5 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">NETWORK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              LINKEDIN &rarr;
            </span>
          </a>

          <a
            href={personalInfo.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 active:bg-white/5 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">PORTFOLIO BOARDS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              BEHANCE &rarr;
            </span>
          </a>

          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-[#080a0f] border border-white/10 space-y-2 hover:border-white/20 active:bg-white/5 transition-all no-underline group block"
          >
            <div className="flex items-center justify-between text-white/50">
              <span className="text-[10px] uppercase tracking-widest">VISUAL JOURNAL</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-white/70 transition-colors block">
              INSTAGRAM &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Render Legal & DMCA Modal */}
      <LegalNoticeModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </section>
  );
}

export default ContactSection;
