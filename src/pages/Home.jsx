import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextRevealSection from '../components/TextRevealSection';
import SelectedWork from '../components/SelectedWork';
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
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black font-sans">
      <SEOHead
        title="Hemchand Paunikar | Official Website & UI/UX Product Designer"
        description="Hemchand Paunikar is an Indian UI/UX & Product Designer based in Nagpur, India. Official portfolio showcasing UX research, design systems, mobile apps, and product case studies."
        path="/"
        keywords="Hemchand Paunikar, Hemchand Paunikar portfolio, Hemchand Paunikar UI UX, Hemchand Paunikar designer, Hemchand Paunikar official website, UI UX Designer Nagpur, Product Designer India, Behance Hemchand Paunikar"
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
      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;





