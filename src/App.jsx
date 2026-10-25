import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/globals.css';
import './App.css';

import MainWeddingPage from './pages/MainWeddingPage';
import CeremonyDetail from './pages/CeremonyDetail';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Routes>
        {/* Main Wedding Landing Page as in picture */}
        <Route path="/" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding1/" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding1" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding/" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding" element={<MainWeddingPage />} />

        {/* Navigation shortcuts */}
        <Route path="/invitation" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding1/invitation" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding/invitation" element={<MainWeddingPage />} />
        <Route path="/ceremonies" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding1/ceremonies" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding/ceremonies" element={<MainWeddingPage />} />
        <Route path="/blessings" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding1/blessings" element={<MainWeddingPage />} />
        <Route path="/bholu-bhaiya-wedding/blessings" element={<MainWeddingPage />} />

        {/* Ceremony details */}
        <Route path="/ceremony/:id" element={<CeremonyDetail />} />
        <Route path="/bholu-bhaiya-wedding1/ceremony/:id" element={<CeremonyDetail />} />
        <Route path="/bholu-bhaiya-wedding/ceremony/:id" element={<CeremonyDetail />} />

        {/* Catch-all */}
        <Route path="*" element={<MainWeddingPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
