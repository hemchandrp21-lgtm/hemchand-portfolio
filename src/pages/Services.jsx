import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

function Services() {
  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-amber-400 selection:text-black">
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
