import { DownChevronButton } from './Icons';
import { weddingInfo } from '../data/ceremonies';
import './WelcomeSection.css';

export default function WelcomeSection({ onScrollNext }) {
  return (
    <section id="palace-welcome" className="palace-welcome-section">
      {/* Background Image Layer — Magnificent Illuminated Marriage Palace */}
      <div
        className="palace-bg-image"
        style={{ backgroundImage: `url('${weddingInfo.palaceBg}')` }}
        role="img"
        aria-label="Grand royal Indian marriage palace wedding celebration at night"
      />
      <div className="palace-overlay-gradient" />
      <div className="palace-sparkles" aria-hidden="true" />

      {/* Main Content: Right Aligned Welcome Typography */}
      <div className="palace-content-container">
        <div className="palace-typography-block">
          {/* "Welcome" Script */}
          <h2 className="palace-welcome-script">Welcome</h2>

          {/* "TO OUR" spaced small caps */}
          <p className="palace-to-our">TO OUR</p>

          {/* "Wedding Celebration" Script */}
          <h3 className="palace-wedding-script">Wedding Celebration</h3>

          {/* Elegant Gold Flourish */}
          <div className="palace-flourish" aria-hidden="true">
            <span className="flourish-wing" />
            <span className="flourish-symbol">✦</span>
            <span className="flourish-wing" />
          </div>
        </div>
      </div>

      {/* Bottom Center: Circular Down Chevron button */}
      <div className="palace-scroll-indicator">
        <DownChevronButton onClick={onScrollNext} ariaLabel="Scroll to Wedding Ceremonies" />
      </div>
    </section>
  );
}
