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
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 selection:bg-amber-600 selection:text-white font-sans">
      <FilmOverlay />
      <CustomCursor />
      <Header />
      <main>
        {/* 1. WHO I AM */}
        <Hero />
        {/* 2. WHAT I DESIGN & WHAT I'VE WORKED ON */}
        <SelectedWork />
        {/* 3. HOW I THINK */}
        <AboutSection />
        {/* 5. WHERE I'VE WORKED */}
        <ExperienceSection />
        {/* 3. DESIGN PROCESS METHODOLOGY */}
        <ProcessSection />
        {/* 6. WHAT I'M LEARNING & AI PHILOSOPHY */}
        <AiDesignSection />
        <SkillsSection />
        {/* 7. HOW TO CONTACT ME */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
