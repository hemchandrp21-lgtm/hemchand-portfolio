import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import InfiniteImageField from '../components/ui/infinite-image-field';

function Playground() {
  return (
    <div className="relative w-full max-w-full h-screen overflow-hidden bg-[#040507] text-white selection:bg-[#A93207] selection:text-white">
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
