import { motion } from 'framer-motion';
import ThumbnailCarousel from './ui/thumbnail-carousel';
import { Camera, Layers } from 'lucide-react';

const personalImages = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo6.jpg',
  '/gallery/photo10.jpg',
  '/gallery/photo11.jpg',
  '/gallery/photo8.jpg',
  '/gallery/photo7.jpg',
  '/gallery/photo5.jpg',
];

const personalCaptions = [
  {
    tag: 'VARANASI / PERSPECTIVE',
    title: 'Ghats & Riverfront',
    desc: 'Chasing stillness and perspective along the water, watching life unfold on the historic steps.',
  },
  {
    tag: 'NIGHT ARCHITECTURE',
    title: 'Heritage & Structure',
    desc: 'Studying proportions, balance, and classic symmetry across grand stone staircases at night.',
  },
  {
    tag: 'EXPLORATION',
    title: 'Observation & Curiosity',
    desc: 'Capturing moments of quiet reflection and details in raw, authentic surroundings.',
  },
  {
    tag: 'OPEN WATERS / SUNSET',
    title: 'Riverfront Breeze',
    desc: 'Soaking in ambient warmth and open horizon views from the wooden boat deck.',
  },
  {
    tag: 'EVENING ARCHITECTURE',
    title: 'Balcony & Vintage Tones',
    desc: 'Studying classic urban architectural balconies under warm twilight street lighting.',
    fit: 'contain',
  },
  {
    tag: 'MIRROR REFLECTION',
    title: 'Geometric Perspective',
    desc: 'Capturing infinite wooden mirror reflections, symmetry, and architectural depth in an elevator.',
    fit: 'contain',
  },
  {
    tag: 'OPEN WATERS / HORIZON',
    title: 'Sun Flare & Bow Standing',
    desc: 'Standing on the bow of a wooden boat in the open lake under a brilliant sun flare.',
    fit: 'contain',
  },
  {
    tag: 'CHIAROSCURO PORTRAIT',
    title: 'Shadow & Form',
    desc: 'Dramatic contrast portrait exploring strong directional light, depth, and silhouette.',
    fit: 'contain',
  },
  {
    tag: 'GYM & ATHLETICS',
    title: 'Studio Focus & Discipline',
    desc: 'Full gym environment shot under geometric ceiling lights, pursuing consistency and fitness.',
    fit: 'contain',
  },
];

function PersonalGallerySection() {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#040507] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Background Blur Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[180px] pointer-events-none bg-white/[0.02]" />
      <div className="absolute top-10 right-[-10%] w-[450px] h-[450px] rounded-full filter blur-[160px] pointer-events-none bg-[#A93207]/[0.08]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 space-y-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10 pb-6"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#A93207]" />
              <span className="text-[11px] font-display tracking-[0.25em] text-white/60 uppercase font-bold">
                02 / LIFE BEYOND THE SCREEN
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
              PERSONAL <span className="text-white/60">SNAP-JOURNAL</span>
            </h2>
          </div>
        </motion.div>

        {/* Clean Photo Carousel Component */}
        <div className="w-full py-4">
          <ThumbnailCarousel images={personalImages} captions={personalCaptions} />
        </div>
      </div>
    </section>
  );
}

export default PersonalGallerySection;
