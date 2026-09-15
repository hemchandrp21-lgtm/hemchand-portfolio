import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-[#040507] text-white font-sans selection:bg-[#A93207] selection:text-white">
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
