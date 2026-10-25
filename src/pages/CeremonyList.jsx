import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ceremonies } from '../data/ceremonies';
import CeremonyCard from '../components/CeremonyCard';
import './CeremonyList.css';

const BASE = '/bholu-bhaiya-wedding';

export default function CeremonyList() {
  const navigate = useNavigate();
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add('visible');
    }
  }, []);

  return (
    <div className="ceremony-list-page">
      {/* Decorative header band */}
      <div className="ceremonies-header">
        <div className="ceremonies-header-inner" ref={headingRef}>
          <p className="ceremonies-preheading">✦ CELEBRATE EVERY MOMENT ✦</p>
          <h1 className="section-title ceremonies-title">Wedding Ceremonies</h1>
          <p className="ceremonies-subtitle">
            Four beautiful celebrations bringing family and friends together
          </p>
          <div className="ornamental-divider">
            <span className="ornamental-divider-text">❦ ✦ ❦</span>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <section className="ceremonies-grid" aria-label="Wedding ceremony list">
        {ceremonies.map((ceremony, index) => (
          <CeremonyCard
            key={ceremony.id}
            ceremony={ceremony}
            index={index}
            onClick={() => navigate(`${BASE}/ceremony/${ceremony.id}`)}
          />
        ))}
      </section>

      {/* Back navigation */}
      <div className="ceremonies-footer">
        <button
          className="btn-outline-gold"
          onClick={() => navigate(`${BASE}/invitation`)}
          aria-label="Return to invitation"
        >
          ← Return to Invitation
        </button>
        <button
          className="btn-outline-gold"
          onClick={() => navigate(`${BASE}/blessings`)}
          aria-label="See blessings and farewell"
        >
          Blessings & Farewell →
        </button>
      </div>
    </div>
  );
}
