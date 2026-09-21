import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

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
    <div className="min-h-screen bg-[#040507] text-white font-sans selection:bg-[#A93207] selection:text-white">
      <SEOHead
        title="Contact Hemchand Paunikar — UI/UX & Product Designer"
        description="Get in touch with Hemchand Paunikar for UI/UX design, product design freelance opportunities, research inquiries, or design consultations."
        path="/contact"
        keywords="Contact Hemchand Paunikar, hire Hemchand Paunikar, UI UX designer email, Hemchand Paunikar contact"
        jsonLd={contactSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-20">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
