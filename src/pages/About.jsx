import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProcessSection from '../components/ProcessSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Hemchand Paunikar',
      'jobTitle': 'UI/UX Designer & Product Designer',
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'Symbiosis Institute of Design'
      },
      'knowsAbout': [
        'User Experience Design',
        'Interaction Design',
        'Visual Design',
        'User Research',
        'Design Systems',
        'Wireframing',
        'Prototyping'
      ],
      'url': 'https://hemchand-portfolio.vercel.app/about'
    }
  };

  return (
    <div className="min-h-screen bg-[#040507] text-white font-sans selection:bg-white selection:text-black">
      <SEOHead
        title="About Hemchand Paunikar — UI/UX & Product Designer"
        description="Learn about Hemchand Paunikar, B.Des UI/UX student at Symbiosis Institute of Design. Background in UX research, e-commerce platforms, design systems, and mobile apps."
        path="/about"
        keywords="About Hemchand Paunikar, Hemchand Paunikar experience, Hemchand Paunikar education, Symbiosis Institute of Design UI UX, Hemchand Paunikar skills"
        jsonLd={aboutSchema}
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-20">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default About;
