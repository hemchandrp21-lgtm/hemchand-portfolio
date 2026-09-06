import { useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const [activeImage, setActiveImage] = useState('/work1.jpg');

  const services = [
    {
      num: '01',
      title: 'Cinematic Photography',
      desc: 'High-contrast editorial, fashion stills, and portraiture crafted with analog depth.',
      img: '/work1.jpg',
    },
    {
      num: '02',
      title: 'Film & Motion',
      desc: 'Short films, music videos, and cinematic promos shot with anamorphic texture.',
      img: '/work3.jpg',
    },
    {
      num: '03',
      title: 'Creative Direction',
      desc: 'End-to-end visual identity, moodboarding, art direction, and story development.',
      img: '/work2.jpg',
    },
    {
      num: '04',
      title: 'Editorial Campaigns',
      desc: 'Bold print and digital campaigns designed for luxury and contemporary brands.',
      img: '/work4.jpg',
    },
    {
      num: '05',
      title: 'Brand Films',
      desc: 'Documentary-style and narrative short films expressing core brand philosophy.',
      img: '/hero.jpg',
    },
  ];

  return (
    <section className="relative w-full bg-[#070707] text-white py-28 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-3 block">
              02 &mdash; CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              SERVICES & DISCIPLINE
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-amber-400 transition-colors"
          >
            View capabilities detail &rarr;
          </Link>
        </div>

        {/* Services List Grid with Interactive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Services List Column */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((service) => (
              <div
                key={service.num}
                onMouseEnter={() => setActiveImage(service.img)}
                className="group py-8 px-2 flex flex-col sm:flex-row sm:items-center justify-between transition-colors duration-300 hover:bg-zinc-900/40 cursor-pointer"
                data-cursor="EXPLORE"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-sm font-mono text-zinc-500 group-hover:text-amber-400 transition-colors">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-1 max-w-md group-hover:text-zinc-300 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xs font-mono tracking-widest text-zinc-500 group-hover:text-amber-400 uppercase transition-colors">
                    [DETAILS]
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Image Hover Preview Column */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <img
                src={activeImage}
                alt="Service Preview"
                className="w-full h-full object-cover filter contrast-110 saturate-90 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-widest text-zinc-400 uppercase bg-black/80 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
                PREVIEW &mdash; EDITORIAL ARCHIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
