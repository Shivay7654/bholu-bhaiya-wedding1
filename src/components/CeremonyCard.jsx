import { useRef, useEffect } from 'react';
import './CeremonyCard.css';

// Ceremony-specific Unsplash images — unique for each ceremony
const CEREMONY_IMAGES = {
  tilak: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85&fit=crop&auto=format',
  haldi: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=85&fit=crop&auto=format',
  baraat: 'https://images.unsplash.com/photo-1617220347026-a3d23a3dbb26?w=800&q=85&fit=crop&auto=format',
  vidai: 'https://images.unsplash.com/photo-1602503543983-b7c8ef083abe?w=800&q=85&fit=crop&auto=format',
};

// Fallback gradient backgrounds per ceremony if image fails
const CEREMONY_GRADIENTS = {
  tilak: 'linear-gradient(135deg, #6B0F1A, #8B1A28, #B8860B)',
  haldi: 'linear-gradient(135deg, #B8860B, #D4AF37, #8B6914)',
  baraat: 'linear-gradient(135deg, #1a0533, #2d0b66, #4a1a8a)',
  vidai: 'linear-gradient(135deg, #2C1810, #5C3320, #8B4513)',
};

export default function CeremonyCard({ ceremony, index, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.1}s`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const img = CEREMONY_IMAGES[ceremony.id];
  const gradient = CEREMONY_GRADIENTS[ceremony.id];

  return (
    <article
      className="ceremony-card"
      ref={cardRef}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`${ceremony.name} — ${ceremony.date} at ${ceremony.time}. View ceremony details.`}
    >
      {/* Background image */}
      <div
        className="card-bg"
        style={{
          backgroundImage: `url('${img}')`,
          background: img ? undefined : gradient,
        }}
        aria-hidden="true"
      />
      {/* Fallback gradient behind image */}
      <div
        className="card-bg-fallback"
        style={{ background: gradient }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay for readability */}
      <div className="card-overlay" aria-hidden="true" />

      {/* Gold top border accent */}
      <div className="card-top-accent" aria-hidden="true" />

      {/* Content */}
      <div className="card-content">
        <div className="card-icon" aria-hidden="true">{ceremony.icon}</div>

        <h2 className="card-name">{ceremony.name}</h2>
        <p className="card-subtitle">{ceremony.subtitle}</p>

        <div className="card-divider" aria-hidden="true">
          <span /><span className="card-divider-dot">◆</span><span />
        </div>

        <div className="card-details">
          <div className="card-detail-row">
            <span className="card-detail-icon" aria-hidden="true">📅</span>
            <div>
              <span className="card-detail-label">{ceremony.dayLabel}</span>
              <span className="card-detail-value">{ceremony.date}</span>
            </div>
          </div>
          <div className="card-detail-row">
            <span className="card-detail-icon" aria-hidden="true">⏰</span>
            <div>
              <span className="card-detail-label">Time</span>
              <span className="card-detail-value">{ceremony.time} IST</span>
            </div>
          </div>
        </div>

        <div className="card-cta-row">
          <span className="card-cta-text">View Ceremony</span>
          <span className="card-cta-arrow" aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
}
