import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './WelcomePage.css';

const BASE = '/bholu-bhaiya-wedding';

// A rich Indian palace image via Unsplash
const BG_IMAGE = 'https://images.unsplash.com/photo-1602503543983-b7c8ef083abe?w=1400&q=90&fit=crop&auto=format';

export default function WelcomePage({ onInteract }) {
  const navigate = useNavigate();
  const [animState, setAnimState] = useState('idle'); // idle | opening | done
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = BG_IMAGE;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // Still show content on error
  }, []);

  const handleOpen = () => {
    onInteract?.();
    setAnimState('opening');
    setTimeout(() => {
      navigate(`${BASE}/invitation`);
    }, 1400);
  };

  const handleSkip = () => {
    onInteract?.();
    navigate(`${BASE}/invitation`);
  };

  return (
    <div className={`welcome-page ${loaded ? 'loaded' : ''}`}>
      {/* Background */}
      <div
        className="welcome-bg"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        role="img"
        aria-label="Ornate Indian palace entrance"
      />
      <div className="welcome-overlay" />

      {/* Curtain panels */}
      <div className={`curtain curtain-left ${animState === 'opening' ? 'opening' : ''}`}>
        <div className="curtain-pattern" />
        <div className="curtain-ornament curtain-ornament-left">
          <div className="curtain-border-v" />
        </div>
      </div>
      <div className={`curtain curtain-right ${animState === 'opening' ? 'opening' : ''}`}>
        <div className="curtain-pattern" />
        <div className="curtain-ornament curtain-ornament-right">
          <div className="curtain-border-v" />
        </div>
      </div>

      {/* Content */}
      <div className="welcome-content">
        {/* Ganesh ornament / auspicious symbol */}
        <div className="ganesh-symbol" aria-label="Auspicious Ganesh symbol">
          <span className="ganesh-text" aria-hidden="true">ॐ</span>
          <div className="ganesh-ring" />
        </div>

        <p className="welcome-shubh animate-fade-in-up">
          ✦ शुभ विवाह ✦
        </p>

        <h1 className="welcome-title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="welcome-groom">Ravi Prakash</span>
          <span className="welcome-weds">weds</span>
          <span className="welcome-bride">Jyoti Singh</span>
        </h1>

        <div className="welcome-divider animate-fade-in-up" style={{ animationDelay: '0.35s' }} aria-hidden="true">
          <span className="divider-line" /><span className="divider-diamond">◆</span><span className="divider-line" />
        </div>

        <p className="welcome-tagline animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          Together with our families, we invite you to celebrate<br />
          the beginning of a beautiful new journey.
        </p>

        <div className="welcome-date-badge animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
          <span className="date-label">Wedding Date</span>
          <span className="date-value">21 November 2026</span>
          <span className="date-sub">Saturday · Indian Standard Time</span>
        </div>

        <button
          className="welcome-cta btn-royal animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
          onClick={handleOpen}
          disabled={animState === 'opening'}
          aria-label="Open Wedding Invitation"
          id="open-invitation-btn"
        >
          <span>✦ Open Wedding Invitation ✦</span>
        </button>

        {animState !== 'opening' && (
          <button
            className="welcome-skip animate-fade-in-up"
            style={{ animationDelay: '1s' }}
            onClick={handleSkip}
            aria-label="Skip animation and go directly to invitation"
          >
            Skip Animation
          </button>
        )}

        {animState === 'opening' && (
          <p className="opening-text animate-fade-in">Opening your invitation…</p>
        )}
      </div>

      {/* Scroll hint (only when content is fully shown) */}
      {animState === 'idle' && loaded && (
        <div className="scroll-hint" aria-hidden="true">
          <ChevronDown size={20} />
        </div>
      )}

      {/* Decorative corner ornaments */}
      <div className="corner-decor top-left" aria-hidden="true">✦</div>
      <div className="corner-decor top-right" aria-hidden="true">✦</div>
      <div className="corner-decor bottom-left" aria-hidden="true">✦</div>
      <div className="corner-decor bottom-right" aria-hidden="true">✦</div>
    </div>
  );
}
