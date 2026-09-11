import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import SelectedWork from '../components/SelectedWork';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Work() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-400 selection:text-black">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-20">
        <SelectedWork />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Work;
