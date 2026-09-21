import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import StarfieldCanvas from './components/StarfieldCanvas';
import GridLinesOverlay from './components/GridLinesOverlay';
import Home from './pages/Home';
import { trackPageView } from './utils/analytics';
import { initGlobalAudioListeners } from './utils/audioEngine';

import SiteLoader from './components/SiteLoader';

const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const Playground = lazy(() => import('./pages/Playground'));
const Contact = lazy(() => import('./pages/Contact'));

import { projects } from './data/projectsData';

function RedirectToBehance() {
  const location = useLocation();
  const id = location.pathname.split('/work/')[1] || '';
  const project = projects.find((p) => p.id === id);
  const targetUrl = project?.behanceUrl || 'https://www.behance.net/hemchanpaunika';

  useEffect(() => {
    window.location.replace(targetUrl);
  }, [targetUrl]);

  return (
    <div className="min-h-screen bg-[#040507] text-white flex flex-col items-center justify-center space-y-4 font-mono">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      <p className="text-xs text-zinc-400 uppercase tracking-widest">Redirecting to Behance...</p>
    </div>
  );
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    initGlobalAudioListeners();
  }, []);

  return (
    <>
      <SiteLoader />
      <StarfieldCanvas />
      <GridLinesOverlay />
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsTracker />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<RedirectToBehance />} />
            <Route path="/work/*" element={<RedirectToBehance />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/services" element={<Playground />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
