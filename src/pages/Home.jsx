import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextRevealSection from '../components/TextRevealSection';
import SelectedWork from '../components/SelectedWork';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Hemchand Paunikar',
      'alternateName': ['Hemchand', 'Paunikar'],
      'jobTitle': 'UI/UX Designer & Product Designer',
      'url': 'https://hemchand-portfolio.vercel.app/',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Nagpur',
        'addressCountry': 'India'
      },
      'sameAs': [
        'https://www.linkedin.com/in/hemchand-paunikar',
        'https://www.behance.net/hemchanpaunika',
        'https://www.instagram.com/hemchand.ux/'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#040507] text-white selection:bg-white selection:text-black font-sans">
      <SEOHead
        title="Hemchand Paunikar — Official Portfolio | UI/UX & Product Designer"
        description="Official portfolio of Hemchand Paunikar, UI/UX and Product Designer based in India. Specializing in user research, design systems, mobile apps, and digital products."
        path="/"
        keywords="Hemchand Paunikar, Hemchand Paunikar portfolio, Hemchand Paunikar UI UX, Hemchand Paunikar designer, UI UX Designer Nagpur, Product Designer India, Behance Hemchand Paunikar"
        jsonLd={homeSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />
      <main>
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. PHILOSOPHY STATEMENT REVEAL */}
        <TextRevealSection />

        {/* 3. SELECTED WORK */}
        <SelectedWork />

        {/* 4. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;





