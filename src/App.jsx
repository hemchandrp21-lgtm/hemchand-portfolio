import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import StarfieldCanvas from './components/StarfieldCanvas';
import GridLinesOverlay from './components/GridLinesOverlay';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import { trackPageView } from './utils/analytics';
import { initGlobalAudioListeners } from './utils/audioEngine';

import SiteLoader from './components/SiteLoader';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/services" element={<Playground />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
