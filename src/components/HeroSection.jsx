import { WaxSeal, DownChevronButton } from './Icons';
import { weddingInfo } from '../data/ceremonies';
import './HeroSection.css';

export default function HeroSection({ onExploreStory, onScrollNext }) {
  return (
    <section id="home" className="hero-section">
      {/* Background with draped silk fabric & ambient lighting */}
      <div className="hero-fabric-bg" aria-hidden="true">
        <div className="hero-ambient-glow" />
        <div className="hero-petals-overlay" />
      </div>

      <div className="hero-container">
        {/* Left Side: Diya and "A New Chapter Begins..." text */}
        <div className="hero-left-col">
          {/* Lit Brass Diya */}
          <div className="brass-diya-wrap" aria-hidden="true">
            <div className="diya-glow-radial" />
            <div className="diya-flame">
              <div className="flame-inner" />
            </div>
            {/* Brass Diya Vessel */}
            <svg
              className="brass-diya-svg"
              width="110"
              height="70"
              viewBox="0 0 110 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="55" cy="46" rx="46" ry="12" fill="#7A4A0F" />
              <ellipse cx="55" cy="44" rx="44" ry="10" fill="url(#brassRim)" />
              <path
                d="M12 44 C12 60, 32 66, 55 66 C78 66, 98 60, 98 44 Z"
                fill="url(#brassBase)"
              />
              <path
                d="M55 35 C52 40, 52 44, 55 45 C58 44, 58 40, 55 35 Z"
                fill="#3A2004"
              />
              <ellipse cx="55" cy="65" rx="20" ry="4" fill="#3D2005" />
              <defs>
                <linearGradient id="brassBase" x1="12" y1="44" x2="98" y2="66">
                  <stop offset="0%" stopColor="#8C5C1A" />
                  <stop offset="35%" stopColor="#DFAD42" />
                  <stop offset="70%" stopColor="#FDE18C" />
                  <stop offset="100%" stopColor="#6C420B" />
                </linearGradient>
                <linearGradient id="brassRim" x1="11" y1="44" x2="99" y2="44">
                  <stop offset="0%" stopColor="#5B380B" />
                  <stop offset="50%" stopColor="#FFE082" />
                  <stop offset="100%" stopColor="#5B380B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Text matching picture */}
          <div className="hero-story-quote">
            <span className="quote-prefix">-A</span>
            <span className="quote-word">New</span>
            <span className="quote-word">Chapter</span>
            <span className="quote-word">Begins...</span>
            <div className="quote-divider">
              <span className="q-line" />
              <span className="q-diamond">◆</span>
              <span className="q-line" />
            </div>
          </div>
        </div>

        {/* Center: The Royal Parchment Invitation Card */}
        <div className="hero-card-col">
          <div className="invitation-parchment-card">
            {/* Wax Seal with Tassels on Top-Right Corner */}
            <div className="card-wax-seal">
              <WaxSeal size={74} />
            </div>

            {/* Inner Gold Border Frame */}
            <div className="card-inner-frame">
              {/* Corner Accents */}
              <div className="card-corner c-top-left">✦</div>
              <div className="card-corner c-bottom-left">✦</div>
              <div className="card-corner c-bottom-right">✦</div>

              {/* Header Script: "You're Invited" */}
              <h1 className="card-invited-script">You're Invited</h1>

              {/* Subtitle: "TO THE WEDDING CELEBRATIONS OF" */}
              <p className="card-sub-header">
                TO THE WEDDING CELEBRATIONS OF
              </p>

              {/* Couple Names: "Ravi Prakash weds Jyoti Singh" */}
              <div className="card-couple-names">
                <span className="name-groom">Ravi Prakash</span>
                <span className="name-heart">♡</span>
                <span className="name-bride">Jyoti Singh</span>
              </div>

              {/* Couple Portrait Photo */}
              <div className="card-couple-frame" aria-label="Ravi Prakash & Jyoti Singh">
                <img
                  src={weddingInfo.couplePhoto}
                  alt="Ravi Prakash & Jyoti Singh"
                  className="card-couple-img"
                />
              </div>

              {/* Golden Flourish Divider */}
              <div className="card-flourish-divider" aria-hidden="true">
                <svg width="180" height="18" viewBox="0 0 200 20" fill="none">
                  <path
                    d="M10 10 C40 10, 60 4, 85 10 C92 12, 96 15, 100 10 C104 15, 108 12, 115 10 C140 4, 160 10, 190 10"
                    stroke="#B8860B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="10" r="2.5" fill="#8C6209" />
                  <circle cx="92" cy="10" r="1.5" fill="#B8860B" />
                  <circle cx="108" cy="10" r="1.5" fill="#B8860B" />
                </svg>
              </div>

              {/* Emotional Description */}
              <p className="card-message-primary">
                Two families... One beautiful journey...
              </p>
              <p className="card-message-secondary">
                Join us as we celebrate love, tradition and togetherness.
              </p>

              <div className="card-event-badge">
                <span>✦ 21 November 2026 · Manglam Hotel, Sasaram ✦</span>
              </div>

              {/* CTA Button: "EXPLORE OUR STORY ↓" */}
              <div className="card-cta-wrap">
                <button
                  type="button"
                  className="card-explore-btn"
                  onClick={onExploreStory}
                >
                  <span>EXPLORE OUR STORY</span>
                  <span className="btn-down-arrow">↓</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center: Circular Down Chevron button */}
      <div className="hero-scroll-indicator">
        <DownChevronButton onClick={onScrollNext} ariaLabel="Scroll to Welcome Banner" />
      </div>
    </section>
  );
}
