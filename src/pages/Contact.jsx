import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ContactMessageBox from '../components/ContactMessageBox';
import { Sparkles } from 'lucide-react';

function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Hemchand Paunikar',
      'email': 'hemchandrp21@gmail.com',
      'url': 'https://hemchand-portfolio.vercel.app/contact'
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#A93207] selection:text-white relative">
      <SEOHead
        title="Contact Hemchand Paunikar — UI/UX & Product Designer"
        description="Send a message or inquire about UI/UX design, product design opportunities, research projects, and design consultations with Hemchand Paunikar."
        path="/contact"
        keywords="Contact Hemchand Paunikar, hire Hemchand Paunikar, UI UX designer email, Hemchand Paunikar contact message"
        jsonLd={contactSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-24 sm:pt-32 pb-16 px-4 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Header Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] tracking-wider uppercase text-[#A93207]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S BUILD SOMETHING GREAT TOGETHER</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-display font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#A93207]">TOUCH</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-lg mx-auto leading-relaxed font-light uppercase">
              Whether you have a digital product idea, design system challenge, or freelance opportunity — drop a message below.
            </p>
          </div>

          {/* Interactive Message Box */}
          <ContactMessageBox />

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
