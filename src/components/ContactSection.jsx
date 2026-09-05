import { useState } from 'react';
import { personalInfo } from '../data/projectsData';
import { trackEvent } from '../utils/analytics';

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', topic: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = personalInfo.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    trackEvent('copy_email', { email: emailAddress });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    trackEvent('generate_lead', {
      event_category: 'Contact',
      name: formState.name,
      topic: formState.topic || 'General'
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '', topic: '' });
    }, 4000);
  };

  const socials = [
    { name: 'LinkedIn', url: personalInfo.socials.linkedin, handle: '@hemchand-paunikar' },
    { name: 'Behance', url: personalInfo.socials.behance, handle: '@hemchanpaunika' },
    { name: 'Instagram', url: personalInfo.socials.instagram, handle: '@hemchand.design' },
    { name: 'Resume (PDF)', url: personalInfo.socials.resume, handle: 'Download CV' },
  ];

  return (
    <section id="contact" className="relative w-full min-h-screen py-32 px-6 lg:px-12 bg-[#ffffff] text-zinc-900 flex flex-col justify-between border-t border-zinc-200 select-none">
      {/* Background Subtle Light Prism Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-gradient-to-t from-amber-100 via-sky-50 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Cinematic Headline */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-600 font-semibold block mb-4">
            16 &mdash; GET IN TOUCH
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-display font-extrabold tracking-tight uppercase leading-[0.9] text-zinc-900 max-w-6xl">
            LET'S MAKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-amber-600">
              SOMETHING
            </span> <br />
            WORTH REMEMBERING.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 font-sans max-w-2xl">
            Have a project, problem or interesting idea? Let's talk.
          </p>
        </div>

        {/* Form and Direct Links Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Email & Social Profiles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block font-medium">
                Direct Email Contact
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xl sm:text-2xl font-mono text-zinc-900 hover:text-amber-600 transition-colors underline underline-offset-8 font-bold"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-xs font-mono tracking-wider uppercase text-zinc-800 transition-colors rounded-sm border border-zinc-200 font-semibold"
                >
                  {copied ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block font-medium">
                Social Profiles &amp; Resume
              </span>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-all text-sm font-mono text-zinc-800 hover:text-zinc-950 group rounded-sm"
                  >
                    <span className="font-semibold">{social.name}</span>
                    <span className="text-xs text-zinc-500 group-hover:text-amber-600 transition-colors">
                      {social.handle} &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 p-8 sm:p-12 rounded-sm shadow-sm space-y-6">
            <h3 className="text-2xl font-display font-bold uppercase text-zinc-900">
              START A CONVERSATION &rarr;
            </h3>

            {submitted ? (
              <div className="p-8 bg-amber-50 border border-amber-300 text-amber-900 font-mono text-sm space-y-2">
                <p className="font-bold">MESSAGE SENT SUCCESSFULLY!</p>
                <p className="text-xs text-zinc-600 font-sans">
                  Thank you for reaching out, Hemchand will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-600 uppercase tracking-wider block font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 transition-colors font-sans rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-600 uppercase tracking-wider block font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 transition-colors font-sans rounded-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-600 uppercase tracking-wider block font-semibold">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    placeholder="UX Redesign, Enterprise Product, Research Project..."
                    className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 transition-colors font-sans rounded-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-600 uppercase tracking-wider block font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, problem or idea..."
                    className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 transition-colors font-sans resize-none rounded-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-zinc-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center gap-2 rounded-sm"
                >
                  START A CONVERSATION &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
