import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProcessSection from '../components/ProcessSection';
import AiDesignSection from '../components/AiDesignSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-400 selection:text-black font-sans">
      <FilmOverlay />
      <CustomCursor />
      <Header />
      <main>
        {/* 1. HERO SECTION (100% Intact) */}
        <Hero />
        {/* 2. ECHO VALE THEMED SECTIONS */}
        <SelectedWork />
        <AboutSection />
        <ExperienceSection />
        <ProcessSection />
        <AiDesignSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;



