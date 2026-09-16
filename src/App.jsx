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
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Playground = lazy(() => import('./pages/Playground'));
const Contact = lazy(() => import('./pages/Contact'));

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
            <Route path="/work/:id" element={<ProjectDetail />} />
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
