import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-400 selection:text-black">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-24">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
