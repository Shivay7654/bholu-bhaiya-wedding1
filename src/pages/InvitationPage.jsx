import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Countdown from '../components/Countdown';
import FloatingPetals from '../components/FloatingPetals';
import { weddingInfo } from '../data/ceremonies';
import './InvitationPage.css';

const BASE = '/bholu-bhaiya-wedding';

// Parchment texture via Unsplash
const PATTERN_BG = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80&fit=crop&auto=format';

export default function InvitationPage() {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const { venue } = weddingInfo;

  // Intersection observer for entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="invitation-page">
      {/* Atmospheric background */}
      <div
        className="invitation-bg"
        style={{ backgroundImage: `url('${PATTERN_BG}')` }}
        aria-hidden="true"
      />
      <div className="invitation-overlay" aria-hidden="true" />

      {/* Floating petals */}
      <FloatingPetals />

      <div className="invitation-container">
        {/* Outer gold frame */}
        <div className="invitation-outer-frame" ref={cardRef}>
          {/* Corner ornaments */}
          <div className="frame-corner frame-corner-tl" aria-hidden="true">❧</div>
          <div className="frame-corner frame-corner-tr" aria-hidden="true">❧</div>
          <div className="frame-corner frame-corner-bl" aria-hidden="true">❧</div>
          <div className="frame-corner frame-corner-br" aria-hidden="true">❧</div>

          {/* Inner ivory card */}
          <div className="invitation-card">
            {/* Ganesh blessing */}
            <div className="inv-ganesh" aria-label="Ganesh blessing">
              <span className="inv-om">ॐ</span>
              <p className="inv-ganesh-text">॥ श्री गणेशाय नमः ॥</p>
            </div>

            <div className="inv-divider" aria-hidden="true">
              <span className="divider-wing">❦</span>
              <span className="divider-center">✦</span>
              <span className="divider-wing" style={{transform:'scaleX(-1)'}}>❦</span>
            </div>

            <p className="inv-label">Wedding Invitation</p>

            <p className="inv-message">
              With the blessings of the Almighty and the love of our family, we cordially invite you to join us in celebrating the auspicious wedding of
            </p>

            {/* Couple photo placeholder */}
            <div className="couple-photo-frame" aria-label="Couple photo placeholder">
              <div className="photo-inner">
                <span className="photo-placeholder-icon">👰🤵</span>
                <p className="photo-placeholder-text">Replace with your photo</p>
              </div>
            </div>

            {/* Names — visual focal point */}
            <div className="inv-names">
              <h1 className="inv-groom-name">Ravi Prakash</h1>
              <div className="inv-weds-row" aria-label="weds">
                <span className="weds-line" aria-hidden="true"/>
                <span className="weds-text">weds</span>
                <span className="weds-line" aria-hidden="true"/>
              </div>
              <p className="inv-bride-name">Jyoti Singh</p>
            </div>

            <div className="inv-divider" style={{marginTop:'1.5rem'}} aria-hidden="true">
              <span className="divider-wing">❦</span>
              <span className="divider-center">✦</span>
              <span className="divider-wing" style={{transform:'scaleX(-1)'}}>❦</span>
            </div>

            <p className="inv-blessing">
              Your gracious presence and blessings will make our celebration even more special.
            </p>

            {/* Date & Time */}
            <div className="inv-date-row">
              <div className="inv-date-item">
                <span className="inv-date-label">Date</span>
                <span className="inv-date-value">21 November 2026</span>
              </div>
              <div className="inv-date-divider" aria-hidden="true">✦</div>
              <div className="inv-date-item">
                <span className="inv-date-label">Time</span>
                <span className="inv-date-value">10:00 AM onwards</span>
              </div>
            </div>

            {/* ✅ Venue Section */}
            <div className="inv-venue-box" aria-label={`Venue: ${venue.name}, ${venue.address}`}>
              <div className="inv-venue-header">
                <MapPin size={16} className="inv-venue-pin" aria-hidden="true" />
                <span className="inv-venue-label">Venue</span>
              </div>
              <p className="inv-venue-name">{venue.name}</p>
              <p className="inv-venue-address">{venue.address}</p>
              <a
                href={venue.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inv-directions-btn"
                aria-label={`Get directions to ${venue.name}`}
              >
                📍 Get Directions
              </a>
            </div>

            <div className="inv-family">
              <p>Warmly Invited by</p>
              <p className="inv-family-name">Ravi Prakash &amp; Family</p>
            </div>

            {/* Countdown */}
            <div className="inv-countdown-wrap">
              <Countdown />
            </div>

            {/* CTA */}
            <button
              className="btn-royal inv-cta"
              onClick={() => navigate(`${BASE}/ceremonies`)}
              aria-label="Explore Wedding Ceremonies"
              id="explore-ceremonies-btn"
            >
              <span>✦ Explore Wedding Ceremonies ✦</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
