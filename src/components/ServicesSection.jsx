import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIceFire } from '../context/IceFireContext';

function ServicesSection() {
  const [activeImage, setActiveImage] = useState('/work1.jpg');
  const { isFire } = useIceFire();

  const services = [
    {
      num: '01',
      title: 'UI/UX & Product Design',
      desc: 'User research, usability testing, information architecture, wireframing, and design systems.',
      img: '/nobroker_behance.jpg',
    },
    {
      num: '02',
      title: 'Mobile App Experience',
      desc: 'Tactile dark-mode financial mobile UI, ergonomic thumb zones, and seamless screen flows.',
      img: '/mobile_app_behance.jpg',
    },
    {
      num: '03',
      title: 'E-Commerce & Brand Systems',
      desc: 'High-converting mobile shopping experiences, brand design tokens, and friction-free checkout.',
      img: '/inkscale_behance.jpg',
    },
    {
      num: '04',
      title: 'Corporate Web UI & Dashboards',
      desc: 'Dark obsidian web architecture, global impact dashboards, and enterprise solution portals.',
      img: '/hozatra_behance.jpg',
    },
    {
      num: '05',
      title: 'Creative Technology & Motion',
      desc: 'AI-augmented design workflows, micro-interactions, rapid prototyping, and dynamic web motion.',
      img: '/texture_lab_behance.jpg',
    },
  ];

  return (
    <section className="relative w-full bg-[#050505] text-white py-28 px-6 sm:px-10 lg:px-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className={`text-xs font-mono tracking-[0.3em] uppercase mb-3 block ${isFire ? 'text-amber-400' : 'text-cyan-400'}`}>
              02 &mdash; CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white">
              SERVICES &amp; <span className={isFire ? 'gradient-text-fire' : 'gradient-text-ice'}>DISCIPLINE</span>
            </h2>
          </div>
          <Link
            to="/about"
            className={`mt-4 md:mt-0 text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
              isFire ? 'text-amber-400 hover:text-amber-300' : 'text-cyan-400 hover:text-cyan-300'
            }`}
          >
            VIEW FULL ABOUT &amp; SKILLS &rarr;
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
                className="group py-8 px-2 flex flex-col sm:flex-row sm:items-center justify-between transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer"
                data-cursor="EXPLORE"
              >
                <div className="flex items-baseline gap-6">
                  <span className={`text-sm font-mono transition-colors ${isFire ? 'group-hover:text-amber-400 text-zinc-500' : 'group-hover:text-cyan-400 text-zinc-500'}`}>
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-zinc-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-md group-hover:text-zinc-300 transition-colors font-sans">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                  <span className={`text-xs font-mono tracking-widest uppercase transition-colors ${isFire ? 'group-hover:text-amber-400 text-zinc-500' : 'group-hover:text-cyan-400 text-zinc-500'}`}>
                    [EXPLORE]
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Image Hover Preview Column */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-card">
              <img
                src={activeImage}
                alt="Service Preview"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono tracking-widest text-zinc-300 uppercase bg-[#050505]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                PREVIEW &mdash; SELECTED CASE STUDY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

