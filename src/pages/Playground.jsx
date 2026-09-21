import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import InfiniteImageField from '../components/ui/infinite-image-field';
import SEOHead from '../components/SEOHead';

function Playground() {
  return (
    <div className="relative w-full max-w-full h-screen overflow-hidden bg-[#040507] text-white selection:bg-[#A93207] selection:text-white">
      <SEOHead
        title="Design Playground & Experiments | Hemchand Paunikar"
        description="Interactive visual experiments, creative coding labs, shaders, and UI prototypes by Hemchand Paunikar."
        path="/playground"
        keywords="Hemchand Paunikar experiments, Hemchand Paunikar creative tech, shader lab, interactive design playground"
      />
      <FilmOverlay />
      <CustomCursor />
      <Header />

      {/* Full Screen Infinite Image Field Canvas */}
      <main className="w-full h-full">
        <InfiniteImageField />
      </main>
    </div>
  );
}

export default Playground;
