import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextRevealSection from '../components/TextRevealSection';
import SelectedWork from '../components/SelectedWork';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#040507] text-white selection:bg-white selection:text-black font-sans">
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





