import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingPetals from '../components/FloatingPetals';
import './BlessingsPage.css';

const BASE = '/bholu-bhaiya-wedding';

const BG = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=85&fit=crop&auto=format';

export default function BlessingsPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => contentRef.current?.classList.add('visible'), 150);
    }
  }, []);

  return (
    <div className="blessings-page">
      {/* Background */}
      <div
        className="blessings-bg"
        style={{ backgroundImage: `url('${BG}')` }}
        aria-hidden="true"
      />
      <div className="blessings-overlay" aria-hidden="true" />
      <FloatingPetals />

      <div className="blessings-container" ref={contentRef}>
        {/* Ornamental card */}
        <div className="blessings-card">
          {/* Corner ornaments */}
          <div className="bless-corner bless-corner-tl" aria-hidden="true">❧</div>
          <div className="bless-corner bless-corner-tr" aria-hidden="true">❧</div>
          <div className="bless-corner bless-corner-bl" aria-hidden="true">❧</div>
          <div className="bless-corner bless-corner-br" aria-hidden="true">❧</div>

          {/* Om symbol */}
          <div className="bless-om" aria-hidden="true">ॐ</div>

          <div className="bless-divider" aria-hidden="true">
            <span /><span>◆</span><span />
          </div>

          <h1 className="bless-heading">With Our Deepest Gratitude</h1>

          <div className="bless-divider" style={{margin:'1rem 0'}} aria-hidden="true">
            <span /><span>✦</span><span />
          </div>

          <blockquote className="bless-quote">
            "Your presence, love, and blessings are the most precious gifts we could receive."
          </blockquote>

          <div className="bless-flower-row" aria-hidden="true">
            <span>🌸</span><span>🌺</span><span>🌸</span>
          </div>

          <p className="bless-message">
            As Ravi and Jyoti begin this beautiful new journey together, surrounded by the warmth of family and the love of friends, we are filled with immense gratitude for every blessing you have shared with us.
          </p>

          <p className="bless-message">
            Your presence at our celebrations has made every moment truly unforgettable. Thank you for being a part of this joyous occasion.
          </p>

          <div className="bless-divider" style={{margin:'1.5rem 0'}} aria-hidden="true">
            <span /><span style={{color:'var(--gold)', fontSize:'0.5rem'}}>◆</span><span />
          </div>

          <div className="bless-signoff">
            <p className="bless-regards">Warm regards,</p>
            <p className="bless-family-name">Ravi Prakash &amp; Family</p>
            <p className="bless-date">21 · 11 · 2026</p>
          </div>

          <div className="bless-flower-row bless-flower-large" aria-hidden="true">
            <span>🪷</span><span>💐</span><span>🪷</span>
          </div>

          {/* CTAs */}
          <div className="bless-ctas">
            <button
              className="btn-royal bless-cta"
              onClick={() => navigate(`${BASE}/`)}
              aria-label="Return to wedding celebrations"
              id="return-to-invitation-btn"
            >
              <span>✦ Return to Wedding Celebrations ✦</span>
            </button>
            <button
              className="btn-outline-gold bless-cta-outline"
              onClick={() => navigate(`${BASE}/`)}
              aria-label="Return to website"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
