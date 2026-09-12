import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-amber-400 selection:text-black font-sans">
      <FilmOverlay />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;

