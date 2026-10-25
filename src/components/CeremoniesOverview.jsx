import {
  KalashIcon,
  HaldiBowlIcon,
  DholIcon,
  DoliIcon,
} from './Icons';
import './CeremoniesOverview.css';

export default function CeremoniesOverview({ onSelectCeremony }) {
  const cards = [
    {
      id: 'tilak',
      title: 'TILAK',
      subtitle: 'A BLESSING BEGINS',
      icon: <KalashIcon size={46} />,
    },
    {
      id: 'haldi',
      title: 'HALDI',
      subtitle: 'COLORS OF LOVE',
      icon: <HaldiBowlIcon size={46} />,
    },
    {
      id: 'barat',
      title: 'BARAT',
      subtitle: 'A GRAND ARRIVAL',
      icon: <DholIcon size={46} />,
    },
    {
      id: 'vidai',
      title: 'VIDAI',
      subtitle: 'A HEARTFELT FAREWELL',
      icon: <DoliIcon size={46} />,
    },
  ];

  return (
    <section id="wedding-events" className="ceremonies-overview-section">
      <div className="overview-damask-bg" aria-hidden="true" />
      <div className="overview-floral-border" aria-hidden="true" />

      <div className="overview-container">
        {/* Header matching picture */}
        <div className="overview-header">
          <p className="overview-title">✦ CELEBRATE EVERY MOMENT ✦</p>
        </div>

        {/* 4 Arched Cards (Tilak, Haldi, Barat, Vidai) */}
        <div className="arched-cards-row four-cards-grid" role="list">
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className="arched-card-btn"
              onClick={() => onSelectCeremony(card.id)}
              role="listitem"
              aria-label={`Jump to ${card.title} ceremony`}
            >
              {/* Outer Golden Arch Frame */}
              <div className="arched-card-inner">
                {/* Gold Arch Border SVG for authentic Jharokha shape */}
                <svg
                  className="arch-frame-svg"
                  viewBox="0 0 160 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  {/* Outer Arch */}
                  <path
                    d="M8 206 V75 C8 42, 45 10, 80 8 C115 10, 152 42, 152 75 V206 Z"
                    stroke="#D4AF37"
                    strokeWidth="1.6"
                    fill="rgba(55, 6, 12, 0.65)"
                  />
                  {/* Inner Fine Arch */}
                  <path
                    d="M14 202 V76 C14 47, 48 16, 80 14 C112 16, 146 47, 146 76 V202 Z"
                    stroke="rgba(212, 175, 55, 0.45)"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                    fill="none"
                  />
                  {/* Top Arch Finial */}
                  <circle cx="80" cy="8" r="2.2" fill="#FFDF73" />
                </svg>

                {/* Card Content Overlay */}
                <div className="arched-card-content">
                  <div className="arched-icon-wrap">
                    {card.icon}
                  </div>
                  <h4 className="arched-card-title">{card.title}</h4>
                  <p className="arched-card-subtitle">{card.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
