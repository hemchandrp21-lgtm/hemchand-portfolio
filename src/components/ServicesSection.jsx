import { useState } from 'react';
import { Link } from 'react-router-dom';
import { playHoverSound, playClickSound } from '../utils/audioEngine';

function ServicesSection() {
  const [activeImage, setActiveImage] = useState('/work1.webp');

  const services = [
    {
      num: '01',
      title: 'BRAND IDENTITY',
      desc: 'Visual systems, logo direction, guidelines and campaign-ready design tokens built for brand scale.',
      img: '/nobroker_behance.webp',
    },
    {
      num: '02',
      title: 'UI/UX & PRODUCT DESIGN',
      desc: 'Interfaces, mobile app flows and product systems shaped for clarity, ergonomics and high conversion.',
      img: '/mobile_app_behance.webp',
    },
    {
      num: '03',
      title: 'DESIGN SYSTEMS',
      desc: 'Reusable visual rules, component libraries and content logic ensuring brand coherence over time.',
      img: '/inkscale_behance.webp',
    },
    {
      num: '04',
      title: 'CREATIVE DIRECTION',
      desc: 'A flexible, strategic approach that keeps digital products relevant while maintaining design excellence.',
      img: '/hozatra_behance.webp',
    },
    {
      num: '05',
      title: 'CREATIVE TECHNOLOGY & MOTION',
      desc: 'Micro-interactions, rapid prototyping, AI-driven workflows and interactive WebGL experiences.',
      img: '/texture_lab_behance.webp',
    },
  ];

  return (
    <section className="relative w-full bg-[#040507] text-white py-28 px-6 md:px-16 border-t border-white/10 overflow-hidden z-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-4">
          <div>
            <span className="text-xs font-display tracking-[0.2em] uppercase text-white/40 block mb-2">
              DESIGN SERVICES
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
              WHAT I DO / <span className="text-white/40">DISCIPLINE</span>
            </h2>
          </div>
          <Link
            to="/playground"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="text-xs font-display tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors no-underline border-b border-white/30 pb-1"
          >
            EXPLORE PLAYGROUND &rarr;
          </Link>
        </div>

        {/* Services Grid with Image Hover Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Services List Column */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((service) => (
              <div
                key={service.num}
                onMouseEnter={() => { playHoverSound(); setActiveImage(service.img); }}
                className="group py-8 px-2 flex flex-col sm:flex-row sm:items-center justify-between transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display font-light text-xl text-white/40 group-hover:text-white transition-colors">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 font-display text-sm sm:text-base mt-2 max-w-md font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xs font-display tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                    [EXPLORE]
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Image Hover Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden cyber-card">
              <img
                src={activeImage}
                alt="Service Visual Preview"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040507]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-[10px] font-display tracking-[0.2em] text-white/70 uppercase bg-[#040507]/80 backdrop-blur-md p-3 border border-white/10">
                CAPABILITY PREVIEW &bull; SELECTED CASE STUDY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

