import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import FilmOverlay from '../components/FilmOverlay';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { useIceFire } from '../context/IceFireContext';
import { playHoverSound, playClickSound } from '../utils/audioEngine';
import { 
  ArrowLeft, 
  ExternalLink, 
  Maximize2, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  TrendingUp, 
  Sparkles,
  UserCheck,
  Compass,
  Monitor,
  Plus,
  Minus,
  ShieldCheck,
  Package,
  Calculator,
  Send,
  ShoppingBag,
  Sliders,
  Calendar,
  Zap,
  Watch
} from 'lucide-react';

function ProjectDetail() {
  const { id } = useParams();
  const { isFire, accentColor, glowGradient } = useIceFire();

  // Find project by ID or fallback to first project
  const project = projects.find((p) => p.id === id) || projects[0];
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Image Lightbox State
  const [lightboxImage, setLightboxImage] = useState(null);

  // Active Screen Tab State for Interactive Screen Showcase
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // SIMULATOR STATES FOR DIFFERENT PROJECTS
  // 1. NoBroker Estimate Calculator State
  const [itemCounts, setItemCounts] = useState({ sofa: 1, bed: 1, fridge: 1, tv: 1 });

  // 2. Fintech Transfer Simulator State
  const [transferAmount, setTransferAmount] = useState('500');
  const [transferSent, setTransferSent] = useState(false);

  // 3. Inkscale Size & Cart State
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartAdded, setCartAdded] = useState(false);

  // 4. Hozatra Enterprise ROI State
  const [serverCount, setServerCount] = useState(20);

  // 5. Texture Lab PBR Shader Sliders State
  const [roughness, setRoughness] = useState(35);
  const [metalness, setMetalness] = useState(80);

  // 6. Titan Watch Halo Light State
  const [watchHalo, setWatchHalo] = useState('#14B8A6');

  // 7. Resort Booking Nights State
  const [resortNights, setResortNights] = useState(3);

  // 8. Nursery School Grade Level State
  const [nurseryGrade, setNurseryGrade] = useState('Playgroup');

  const updateItemCount = (key, delta) => {
    playClickSound();
    setItemCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const calculateTotalEstimate = () => {
    const baseFare = 2500;
    const itemRates = { sofa: 800, bed: 1200, fridge: 900, tv: 500 };
    return baseFare + Object.keys(itemCounts).reduce((sum, key) => sum + itemCounts[key] * itemRates[key], 0);
  };

  const openLightbox = (imgUrl) => {
    playClickSound();
    setLightboxImage(imgUrl);
  };

  const closeLightbox = () => {
    playClickSound();
    setLightboxImage(null);
  };

  const accentBadgeBg = 'bg-[#A93207]/10 text-[#A93207] border-[#A93207]/20';
  const accentGlowBorder = 'hover:border-[#A93207]/40 hover:shadow-[0_0_30px_rgba(169,50,7,0.2)]';

  return (
    <div className="min-h-screen bg-[#040507] text-white font-sans selection:bg-white selection:text-black relative">
      <FilmOverlay />
      <CustomCursor />
      <Header />

      <main className="pt-28 pb-24 px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Top Bar: Back to All Work & Case Study Index */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <Link
              to="/work"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors no-underline uppercase tracking-[0.25em] group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO ALL WORK</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase ${accentBadgeBg}`}>
                CASE STUDY &bull; {project.num} / {projects.length.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Project Title & Subtitle Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                {project.category} &bull; {project.year}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                {project.typeTag || project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.08] text-white font-bold">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-mono tracking-wide max-w-4xl leading-relaxed">
              {project.subtitle}
            </p>

            {/* Behance Link CTA Banner (If available) */}
            {project.behanceUrl && (
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-display text-xs tracking-[0.2em] uppercase font-bold text-black transition-all duration-300 shadow-lg hover:scale-105 no-underline"
                  style={{ backgroundColor: accentColor }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>VIEW ORIGINAL CASE STUDY ON BEHANCE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">CLIENT</span>
                <span className="text-zinc-200 font-semibold">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">ROLE</span>
                <span className="text-zinc-200 font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">TIMELINE</span>
                <span className="text-zinc-200 font-semibold">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">DELIVERABLES</span>
                <span className="text-zinc-200 font-semibold">{project.typeTag || 'Product UX'}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Featured Behance Presentation Image */}
          <div 
            onClick={() => openLightbox(project.image)}
            className={`rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative group cursor-pointer transition-all duration-500 ${accentGlowBorder}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <span className="px-5 py-2.5 rounded-full bg-white text-black font-display text-xs tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-4 h-4" />
                CLICK TO VIEW FULL RESOLUTION
              </span>
            </div>
          </div>

          {/* Metrics & Usability Impact Section */}
          {project.beforeAfterMetrics && project.beforeAfterMetrics.length > 0 && (
            <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 space-y-8 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20 filter blur-[100px]"
                style={{ background: glowGradient }}
              />

              <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                  01 &bull; MEASURED METRICS &amp; USABILITY IMPACT
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold flex items-center gap-3">
                  <TrendingUp className="w-6 h-6" style={{ color: accentColor }} />
                  BEFORE VS AFTER USER TESTING RESULTS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {project.beforeAfterMetrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono hover:border-white/25 transition-colors">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">{m.metric}</span>
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: accentColor }}>
                      {m.change}
                    </div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between pt-3 border-t border-white/10">
                      <span>BEFORE: <strong className="text-zinc-300">{m.before}</strong></span>
                      <span>AFTER: <strong className="text-white">{m.after}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTERACTIVE SCREENS SHOWCASE DECK */}
          {project.interactiveScreens && project.interactiveScreens.length > 0 && (
            <div className="space-y-8 pt-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                  02 &bull; HIGH-FIDELITY SCREEN-BY-SCREEN FLOW
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold flex items-center gap-3">
                  <Monitor className="w-6 h-6" style={{ color: accentColor }} />
                  REDESIGNED USER INTERFACE SCREENS
                </h3>
              </div>

              {/* Screen Tab Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.interactiveScreens.map((sc, i) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      playClickSound();
                      setActiveScreenIndex(i);
                    }}
                    onMouseEnter={playHoverSound}
                    className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                      activeScreenIndex === i
                        ? 'bg-white text-black font-bold border-white shadow-lg'
                        : 'bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    SCREEN 0{i + 1}
                  </button>
                ))}
              </div>

              {/* Active Screen Display Box */}
              {(() => {
                const sc = project.interactiveScreens[activeScreenIndex] || project.interactiveScreens[0];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-3xl glass-card border border-white/10 items-center">
                    <div className="lg:col-span-5 space-y-5 font-mono text-xs">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white font-bold tracking-widest uppercase inline-block">
                        {sc.keyFeature}
                      </span>
                      <h4 className="text-2xl font-display text-white uppercase font-bold">
                        {sc.title}
                      </h4>
                      <p className="text-zinc-300 font-sans leading-relaxed text-sm">
                        {sc.subtitle}
                      </p>
                      <p className="text-zinc-400 font-sans leading-relaxed text-xs p-4 rounded-2xl bg-white/5 border border-white/10">
                        {sc.description}
                      </p>
                      <button
                        onClick={() => openLightbox(sc.image)}
                        onMouseEnter={playHoverSound}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-display text-xs tracking-widest uppercase font-bold transition-all cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>INSPECT FULL RESOLUTION</span>
                      </button>
                    </div>

                    <div 
                      onClick={() => openLightbox(sc.image)}
                      className={`lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 cursor-pointer relative group transition-all ${accentGlowBorder}`}
                    >
                      <img
                        src={sc.image}
                        alt={sc.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-white text-black font-display text-xs tracking-widest uppercase font-bold">
                          ZOOM SCREEN
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* USER PERSONA & FRICTION JOURNEY MAPPING */}
          {project.persona && (
            <div className="space-y-8 pt-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                  03 &bull; USER RESEARCH &amp; PERSONA MAPPING
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold flex items-center gap-3">
                  <UserCheck className="w-6 h-6" style={{ color: accentColor }} />
                  TARGET USER PERSONA &amp; EMOTIONAL JOURNEY
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Persona Profile Card */}
                <div className="lg:col-span-5 p-8 rounded-3xl glass-card border border-white/10 space-y-6 font-mono text-xs">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-xl font-bold font-display" style={{ color: accentColor }}>
                      {project.persona.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg font-display text-white font-bold uppercase">{project.persona.name}</h4>
                      <span className="text-zinc-400 text-[11px] block">{project.persona.role} &bull; Age {project.persona.age}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">GOALS</span>
                    <ul className="space-y-1.5 text-zinc-300 font-sans text-xs">
                      {project.persona.goals.map((g, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ color: accentColor }}>&bull;</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] text-[#A93207] uppercase tracking-widest block font-bold">FRUSTRATIONS</span>
                    <ul className="space-y-1.5 text-zinc-300 font-sans text-xs">
                      {project.persona.frustrations.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#A93207]">&bull;</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 italic text-zinc-200 font-sans">
                    {project.persona.quote}
                  </div>
                </div>

                {/* Emotional Journey Flow Chart */}
                {project.userJourney && (
                  <div className="lg:col-span-7 p-8 rounded-3xl glass-card border border-white/10 space-y-6">
                    <span className="text-xs font-mono tracking-widest uppercase block text-zinc-400 font-bold flex items-center gap-2">
                      <Compass className="w-4 h-4" style={{ color: accentColor }} />
                      USER FRICTION &amp; EMOTIONAL MAP
                    </span>

                    <div className="space-y-4 font-mono text-xs">
                      {project.userJourney.map((j, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white uppercase">{j.step}</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              j.score >= 4 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                              j.score === 3 ? 'bg-zinc-500/20 text-zinc-300' :
                              'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            }`}>
                              {j.emotion} ({j.friction})
                            </span>
                          </div>
                          <p className="text-zinc-300 font-sans text-xs">{j.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* DYNAMIC INTERACTIVE PROTOTYPE SIMULATOR WIDGET (PROJECT-SPECIFIC) */}
          <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 space-y-8 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                04 &bull; LIVE INTERACTIVE PROTOTYPE DEMO
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold flex items-center gap-3">
                <Calculator className="w-6 h-6" style={{ color: accentColor }} />
                TRY THE REDESIGNED INTERACTIVE FEATURE
              </h3>
            </div>

            {/* 1. NOBROKER ESTIMATOR SIMULATOR */}
            {project.id === 'nobroker-packers-movers-ux' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15">
                <div className="lg:col-span-7 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-200 font-bold flex items-center gap-2">
                      <Package className="w-4 h-4 text-cyan-400" />
                      3-SEATER SOFA (LIVING ROOM)
                    </span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateItemCount('sofa', -1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center text-sm font-bold text-white">{itemCounts.sofa}</span>
                      <button onClick={() => updateItemCount('sofa', 1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-200 font-bold flex items-center gap-2">
                      <Package className="w-4 h-4 text-amber-400" />
                      KING SIZE BED (BEDROOM)
                    </span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateItemCount('bed', -1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center text-sm font-bold text-white">{itemCounts.bed}</span>
                      <button onClick={() => updateItemCount('bed', 1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-200 font-bold flex items-center gap-2">
                      <Package className="w-4 h-4 text-emerald-400" />
                      DOUBLE DOOR FRIDGE (KITCHEN)
                    </span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateItemCount('fridge', -1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center text-sm font-bold text-white">{itemCounts.fridge}</span>
                      <button onClick={() => updateItemCount('fridge', 1)} className="w-7 h-7 rounded bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 space-y-4 font-mono text-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">INSTANT PRICE BREAKDOWN</span>
                    <div className="flex justify-between text-zinc-300 mt-2"><span>Base Vehicle Fare:</span><span className="text-white font-bold">₹2,500</span></div>
                    <div className="flex justify-between text-zinc-300 mt-1"><span>Item Subtotal:</span><span className="text-white font-bold">₹{calculateTotalEstimate() - 2500}</span></div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">ESTIMATED TOTAL FARE</span>
                    <div className="text-3xl font-bold font-display" style={{ color: accentColor }}>₹{calculateTotalEstimate().toLocaleString()}</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. FINTECH QUICK TRANSFER SIMULATOR */}
            {project.id === 'fintech-mobile-product-app' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">SELECT RECIPIENT &amp; ENTER AMOUNT</span>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">Priya Mehta</button>
                    <button className="px-4 py-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white">Rohan Sharma</button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 uppercase block">Transfer Amount ($)</label>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-lg focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <button
                    onClick={() => { playClickSound(); setTransferSent(true); setTimeout(() => setTransferSent(false), 3000); }}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> <span>Send Money Instantly</span>
                  </button>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">TRANSACTION PREVIEW</span>
                    <p className="text-zinc-300 text-sm mt-3">Recipient: <strong className="text-white">Priya Mehta</strong></p>
                    <p className="text-zinc-300 text-sm mt-1">Amount: <strong className="text-emerald-400">${transferAmount}</strong></p>
                  </div>
                  {transferSent ? (
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-center font-bold animate-fadeIn">
                      &check; Payment Completed in 0.4s!
                    </div>
                  ) : (
                    <span className="text-[10px] text-zinc-500 italic">Tap button to simulate instant FaceID biometric transfer</span>
                  )}
                </div>
              </div>
            )}

            {/* 3. INKSCALE SIZE & CART SIMULATOR */}
            {project.id === 'inkscale-ecommerce-mobile' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">SELECT OUTFIT SIZE</span>
                  <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => { playClickSound(); setSelectedSize(sz); }}
                        className={`w-12 h-12 rounded-xl font-bold transition-all cursor-pointer ${
                          selectedSize === sz ? 'bg-pink-500 text-white shadow-lg scale-105' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => { playClickSound(); setCartAdded(true); setTimeout(() => setCartAdded(false), 3000); }}
                    className="w-full py-3.5 rounded-xl bg-pink-500 text-white font-bold uppercase tracking-widest hover:bg-pink-400 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" /> <span>Add to Sticky Bag</span>
                  </button>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">SHOPPING BAG HUD</span>
                    <p className="text-zinc-300 text-sm mt-3">Item: <strong className="text-white">Inkscale Spring Hoodie</strong></p>
                    <p className="text-zinc-300 text-sm mt-1">Size Selected: <strong className="text-pink-400">{selectedSize} (Chest 40&quot;)</strong></p>
                  </div>
                  {cartAdded ? (
                    <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 text-center font-bold animate-fadeIn">
                      &check; Added to Sticky Drawer!
                    </div>
                  ) : (
                    <span className="text-[10px] text-zinc-500 italic">Select size and tap to open sticky cart drawer</span>
                  )}
                </div>
              </div>
            )}

            {/* 4. HOZATRA ENTERPRISE ROI SIMULATOR */}
            {project.id === 'hozatra-corporate-web-ui' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">ADJUST ENTERPRISE SERVER NODES</span>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={serverCount}
                    onChange={(e) => setServerCount(Number(e.target.value))}
                    className="w-full accent-green-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-zinc-300">
                    <span>Active Cloud Nodes: <strong className="text-white">{serverCount} Nodes</strong></span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">PROJECTED SAVINGS</span>
                    <div className="text-3xl font-bold font-display text-green-400 mt-2">${(serverCount * 1450).toLocaleString()} / yr</div>
                    <span className="text-[10px] text-zinc-400 block mt-1">Estimated carbon offset: {serverCount * 2.4} Tons CO2</span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. TEXTURE LAB PBR SHADER SIMULATOR */}
            {project.id === 'texture-lab-web-app' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-purple-400" /> PBR SHADER PARAMETER SLIDERS
                  </span>
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Roughness ({roughness}%)</label>
                    <input type="range" min="0" max="100" value={roughness} onChange={(e) => setRoughness(Number(e.target.value))} className="w-full accent-purple-400 cursor-pointer" />
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-400 block mb-1">Metalness ({metalness}%)</label>
                    <input type="range" min="0" max="100" value={metalness} onChange={(e) => setMetalness(Number(e.target.value))} className="w-full accent-cyan-400 cursor-pointer" />
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-white/30 shadow-2xl flex items-center justify-center font-bold text-[10px] text-zinc-300 text-center" style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255, ${1 - roughness/100}), rgba(139, 92, 246, ${metalness/100}))` }}>
                    4K PBR Sphere Render
                  </div>
                </div>
              </div>
            )}

            {/* 6. TITAN WATCH LIGHTING SIMULATOR */}
            {project.id === 'titan-watch-product-ui' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold flex items-center gap-2">
                    <Watch className="w-4 h-4 text-teal-400" /> CIRCULAR HALO ACCENT LIGHTING
                  </span>
                  <div className="flex gap-3">
                    {['#14B8A6', '#F59E0B', '#EC4899', '#3B82F6'].map((col) => (
                      <button
                        key={col}
                        onClick={() => { playClickSound(); setWatchHalo(col); }}
                        className="w-10 h-10 rounded-full border-2 border-white/30 cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: col }}
                      />
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-white/20 relative shadow-2xl" style={{ boxShadow: `0 0 40px ${watchHalo}` }}>
                    <div className="w-20 h-20 rounded-full bg-black border border-white/40 flex items-center justify-center text-[10px] font-bold text-white">
                      TITAN DIAL
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. RESORT HOSPITALITY BOOKING SIMULATOR */}
            {project.id === 'resort-hospitality-web-ui' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" /> SELECT DURATION (NIGHTS)
                  </span>
                  <div className="flex gap-3">
                    {[2, 3, 5, 7].map((n) => (
                      <button
                        key={n}
                        onClick={() => { playClickSound(); setResortNights(n); }}
                        className={`px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                          resortNights === n ? 'bg-amber-500 text-black shadow-lg' : 'bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {n} Nights
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">VILLA ESTIMATE</span>
                    <div className="text-3xl font-bold font-display text-amber-400 mt-2">${(resortNights * 850).toLocaleString()}</div>
                    <span className="text-[10px] text-zinc-400 block mt-1">Includes Private Chef &amp; Infinity Pool</span>
                  </div>
                </div>
              </div>
            )}

            {/* 8. LITTLE CRAFT NURSERY SIMULATOR */}
            {project.id === 'little-craft-nursery-school' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/15 font-mono text-xs">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" /> SELECT GRADE LEVEL
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Playgroup', 'Nursery', 'Junior KG', 'Senior KG'].map((gr) => (
                      <button
                        key={gr}
                        onClick={() => { playClickSound(); setNurseryGrade(gr); }}
                        className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                          nurseryGrade === gr ? 'bg-cyan-400 text-black shadow-lg' : 'bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {gr}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">MONTHLY TUITION</span>
                    <div className="text-3xl font-bold font-display text-cyan-400 mt-2">₹6,500 / mo</div>
                    <span className="text-[10px] text-zinc-400 block mt-1">Grade: {nurseryGrade} &bull; Includes Activity Kit</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Case Study Overview & Research Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Sidebar: Tools, Design Tokens & Key Takeaway */}
            <div className="lg:col-span-4 space-y-8 font-mono text-xs">
              {/* Tools */}
              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} />
                  TOOLS &amp; METHODOLOGY
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design System Preview (If available) */}
              {project.designSystem && (
                <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                    DESIGN SYSTEM &amp; PALETTE
                  </span>
                  
                  {/* Palette Swatches */}
                  <div className="space-y-2">
                    <span className="text-[9px] text-zinc-500 uppercase block">COLOR SWATCHES</span>
                    <div className="flex items-center gap-2">
                      {project.designSystem.colors.map((hex, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-lg border border-white/20 shadow-md relative group cursor-pointer"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        >
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black text-[9px] text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
                            {hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="space-y-1 pt-2 border-t border-white/10 text-[11px] text-zinc-300">
                    <span className="text-[9px] text-zinc-500 uppercase block">TYPOGRAPHY</span>
                    {project.designSystem.typography.map((font, i) => (
                      <div key={i} className="text-zinc-400">&bull; {font}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Takeaway Quote */}
              {project.keyTakeaway && (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest block font-bold flex items-center gap-1.5" style={{ color: accentColor }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    UX INSIGHT TAKEAWAY
                  </span>
                  <p className="text-zinc-200 text-xs italic font-sans leading-relaxed">
                    &ldquo;{project.keyTakeaway}&rdquo;
                  </p>
                </div>
              )}
            </div>

            {/* Main Detailed Content Area */}
            <div className="lg:col-span-8 space-y-10 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              
              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
                  <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold flex items-center gap-2" style={{ color: accentColor }}>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    05 &bull; PROBLEM STATEMENT &amp; USER FRICTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white font-bold">
                    THE HESITATION &amp; BOTTLENECK ANALYSIS
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-base">{project.problemStatement}</p>
                </div>
              )}

              {/* Qualitative Research Findings */}
              {project.researchFindings && project.researchFindings.length > 0 && (
                <div className="space-y-6 p-8 rounded-3xl glass-card border border-white/10">
                  <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                    06 &bull; QUALITATIVE RESEARCH &amp; USABILITY OBSERVATIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white font-bold">
                    KEY USER TESTING INSIGHTS
                  </h3>
                  <ul className="space-y-3.5 font-mono text-xs text-zinc-300">
                    {project.researchFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px] shrink-0 mt-0.5">
                          #{idx + 1}
                        </span>
                        <span className="leading-relaxed text-zinc-200">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Redesign Focus */}
              {project.redesignFocus && project.redesignFocus.length > 0 && (
                <div className="space-y-6 p-8 rounded-3xl glass-card border border-white/10">
                  <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                    07 &bull; REDESIGN STRATEGY &amp; UX SOLUTIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white font-bold">
                    KEY INTERVENTIONS IMPLEMENTED
                  </h3>
                  <div className="grid grid-cols-1 gap-4 font-mono text-xs">
                    {project.redesignFocus.map((focus, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                        <span className="leading-relaxed text-zinc-200 text-xs sm:text-sm font-sans">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview Summary */}
              {project.sections?.overview && (
                <div className="space-y-4 p-8 rounded-3xl glass-card border border-white/10">
                  <span className="text-xs font-mono tracking-[0.25em] uppercase block font-bold" style={{ color: accentColor }}>
                    08 &bull; CASE STUDY REFLECTION &amp; SUMMARY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-white font-bold">
                    FINAL DESIGN CONCLUSION
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-base">{project.sections.overview}</p>
                </div>
              )}
            </div>
          </div>

          {/* Full-Bleed Behance Gallery Visual Presentation Stack */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-10 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-display tracking-[0.25em] uppercase block text-zinc-400">
                    BEHANCE PRESENTATION &bull; VISUAL GALLERY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white font-bold">
                    FULL CASE STUDY PRESENTATION BOARDS
                  </h3>
                </div>

                <span className="text-xs font-mono text-zinc-400">
                  CLICK ANY BOARD TO ENLARGE
                </span>
              </div>

              <div className="space-y-10">
                {project.gallery.map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => openLightbox(imgUrl)}
                    className={`rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative group cursor-pointer transition-all duration-500 ${accentGlowBorder}`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} Presentation Board ${idx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <span className="px-5 py-2.5 rounded-full bg-white text-black font-display text-xs tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl">
                        <Maximize2 className="w-4 h-4" />
                        EXPAND BOARD #{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Pagination Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16 border-t border-white/10 font-mono text-xs">
            <Link
              to={`/work/${prevProject.id}`}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className={`p-8 rounded-3xl glass-card border border-white/10 space-y-3 group no-underline transition-all duration-300 ${accentGlowBorder}`}
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">&larr; PREVIOUS PROJECT</span>
              <span className="text-lg sm:text-xl font-display uppercase text-white group-hover:text-[#A93207] transition-colors block font-bold">
                {prevProject.title}
              </span>
              <span className="text-[11px] text-zinc-400 block">{prevProject.subtitle}</span>
            </Link>

            <Link
              to={`/work/${nextProject.id}`}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className={`p-8 rounded-3xl glass-card border border-white/10 space-y-3 text-right group no-underline transition-all duration-300 ${accentGlowBorder}`}
            >
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">NEXT PROJECT &rarr;</span>
              <span className="text-lg sm:text-xl font-display uppercase text-white group-hover:text-[#A93207] transition-colors block font-bold">
                {nextProject.title}
              </span>
              <span className="text-[11px] text-zinc-400 block">{nextProject.subtitle}</span>
            </Link>
          </div>
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-auto animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all z-50 cursor-pointer shadow-2xl"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-6xl max-h-[90vh] overflow-auto rounded-2xl border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Full Case Study Zoom"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
}

export default ProjectDetail;
