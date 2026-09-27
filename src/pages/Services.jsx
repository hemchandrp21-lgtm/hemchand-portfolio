import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import SEOHead from '../components/SEOHead';

function Services() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'provider': {
      '@type': 'Person',
      'name': 'Hemchand Paunikar',
      'url': 'https://hemchand-portfolio.vercel.app/'
    },
    'serviceType': 'UI/UX Design, Product Design, Design Systems, UX Research',
    'areaServed': 'Worldwide',
    'url': 'https://hemchand-portfolio.vercel.app/services'
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-amber-400 selection:text-black">
      <SEOHead
        title="UI/UX & Product Design Services | Hemchand Paunikar"
        description="Discover UI/UX design services, design systems, mobile app design, UX research, and digital product strategy by Hemchand Paunikar."
        path="/services"
        keywords="Hemchand Paunikar services, UI UX design services, product design consultation, design systems, mobile app UI design"
        jsonLd={servicesSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-3 block">
            CAPABILITIES & COMMISSIONS
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            CREATIVE DISCIPLINE
          </h1>
        </div>

        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}

export default Services;

