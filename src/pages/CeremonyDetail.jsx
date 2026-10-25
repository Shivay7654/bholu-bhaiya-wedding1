import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { getCeremonyById, getAdjacentCeremonies } from '../data/ceremonies';
import FloatingPetals from '../components/FloatingPetals';
import './CeremonyDetail.css';

const BASE = '/bholu-bhaiya-wedding';

// Full-bleed images per ceremony
const DETAIL_IMAGES = {
  tilak:   'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=90&fit=crop&auto=format',
  haldi:   'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=1400&q=90&fit=crop&auto=format',
  mehandi: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1400&q=90&fit=crop&auto=format',
  barat:   'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=90&fit=crop&auto=format',
  baraat:  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=90&fit=crop&auto=format',
  vidai:   'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=90&fit=crop&auto=format',
};

export default function CeremonyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const ceremony = getCeremonyById(id);
  const { prev, next } = getAdjacentCeremonies(id);

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => contentRef.current?.classList.add('visible'), 100);
    }
  }, [id]);

  if (!ceremony) {
    return (
      <div className="ceremony-not-found">
        <h1>Ceremony not found</h1>
        <Link to={`${BASE}/ceremonies`} className="btn-outline-gold">← Back to Ceremonies</Link>
      </div>
    );
  }

  const bgImage = DETAIL_IMAGES[ceremony.id];

  return (
    <div className="ceremony-detail-page">
      {/* Hero section */}
      <div className="detail-hero">
        <div
          className="detail-hero-bg"
          style={{ backgroundImage: `url('${bgImage}')` }}
          role="img"
          aria-label={`${ceremony.name} background`}
        />
        <div className="detail-hero-overlay" />
        <FloatingPetals />

        {/* Hero content */}
        <div className="detail-hero-content">
          <p className="detail-preheading" aria-label="Back to ceremonies">
            <button
              className="detail-back-btn"
              onClick={() => navigate(`${BASE}/`)}
              aria-label="Go back to wedding website"
            >
              ← Back to Wedding Celebrations
            </button>
          </p>

          <div className="detail-icon" aria-hidden="true">{ceremony.icon}</div>
          <h1 className="detail-ceremony-name">{ceremony.name}</h1>
          <p className="detail-ceremony-subtitle">{ceremony.subtitle}</p>

          <div className="detail-divider" aria-hidden="true">
            <span /><span className="detail-divider-gem">◆</span><span />
          </div>

          {/* Quick info chips */}
          <div className="detail-chips">
            <div className="detail-chip">
              <Calendar size={14} aria-hidden="true" />
              <span>{ceremony.dayLabel}, {ceremony.date}</span>
            </div>
            <div className="detail-chip">
              <Clock size={14} aria-hidden="true" />
              <span>{ceremony.time} IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details card */}
      <div className="detail-content-section" ref={contentRef}>
        <div className="detail-card">
          {/* Ornamental corners */}
          <div className="detail-card-corner detail-card-corner-tl" aria-hidden="true">✦</div>
          <div className="detail-card-corner detail-card-corner-tr" aria-hidden="true">✦</div>
          <div className="detail-card-corner detail-card-corner-bl" aria-hidden="true">✦</div>
          <div className="detail-card-corner detail-card-corner-br" aria-hidden="true">✦</div>

          <h2 className="detail-card-heading">About This Ceremony</h2>

          <div className="detail-divider-subtle" aria-hidden="true">
            <span className="detail-divider-subtle-line" />
            <span style={{color:'var(--gold)', fontSize:'0.5rem'}}>◆</span>
            <span className="detail-divider-subtle-line" />
          </div>

          <p className="detail-description">{ceremony.longDescription}</p>

          {/* Venue box */}
          <div className="detail-venue-box">
            <MapPin size={16} aria-hidden="true" className="venue-icon" />
            <div className="venue-info">
              <p className="venue-name">{ceremony.venue.name}</p>
              <p className="venue-address">{ceremony.venue.address}</p>
              <a
                href={ceremony.venue.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="venue-directions-link"
                aria-label={`Get directions to ${ceremony.venue.name}`}
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Family invite note */}
          <div className="detail-invite-note">
            <p>You are warmly invited by</p>
            <p className="detail-family-name">Ravi Prakash &amp; Family</p>
          </div>

          {/* Back CTA */}
          <button
            className="btn-royal detail-main-cta"
            onClick={() => navigate(`${BASE}/`)}
            aria-label="Return to wedding celebrations"
            id={`back-to-ceremonies-${ceremony.id}`}
          >
            <span>← Back to Wedding Celebrations</span>
          </button>
        </div>

        {/* Prev / Next navigation */}
        <nav className="detail-prev-next" aria-label="Ceremony navigation">
          {prev ? (
            <button
              className="detail-nav-btn detail-nav-prev"
              onClick={() => navigate(`${BASE}/ceremony/${prev.id}`)}
              aria-label={`Previous: ${prev.name}`}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <div className="detail-nav-info">
                <span className="detail-nav-label">Previous</span>
                <span className="detail-nav-name">{prev.name}</span>
              </div>
            </button>
          ) : <div />}

          {next ? (
            <button
              className="detail-nav-btn detail-nav-next"
              onClick={() => navigate(`${BASE}/ceremony/${next.id}`)}
              aria-label={`Next: ${next.name}`}
            >
              <div className="detail-nav-info">
                <span className="detail-nav-label">Next</span>
                <span className="detail-nav-name">{next.name}</span>
              </div>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : <div />}
        </nav>
      </div>
    </div>
  );
}
