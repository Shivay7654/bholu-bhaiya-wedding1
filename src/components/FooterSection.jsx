import { CrestLogo } from './Icons';
import Countdown from './Countdown';
import { weddingInfo } from '../data/ceremonies';
import './FooterSection.css';

export default function FooterSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="royal-footer">
      <div className="footer-gradient-overlay" aria-hidden="true" />

      <div className="footer-container">
        {/* Countdown Box */}
        <div className="footer-countdown-wrap">
          <Countdown />
        </div>

        {/* Monogram Crest & Couple Names */}
        <div className="footer-brand">
          <div className="footer-crest-wrap">
            <CrestLogo size={48} />
          </div>
          <h2 className="footer-couple-title">{weddingInfo.coupleTitle}</h2>
          <p className="footer-dates-venue">
            {weddingInfo.weddingDatesSpan} · {weddingInfo.venue.name}
          </p>
        </div>

        {/* Sanskrit Auspicious Blessing */}
        <div className="footer-shloka-box">
          <p className="footer-shloka">॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥</p>
          <p className="footer-shloka-sub">॥ मङ्गलम् पुण्डरीकाक्षो मङ्गलाय तनो हरिः ॥</p>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-nav-links">
          <button type="button" onClick={() => scrollTo('home')}>Home</button>
          <button type="button" onClick={() => scrollTo('our-story')}>Our Story</button>
          <button type="button" onClick={() => scrollTo('wedding-events')}>Wedding Events</button>
          <button type="button" onClick={() => scrollTo('gallery')}>Gallery</button>
          <button type="button" onClick={() => scrollTo('venue')}>Venue</button>
          <button type="button" onClick={() => scrollTo('rsvp')}>RSVP</button>
        </div>

        {/* Copyright & Warm Wishes */}
        <div className="footer-bottom-bar">
          <p className="footer-warm-msg">
            Crafted with deep love, blessings &amp; warmth for the wedding of Ravi Prakash &amp; Jyoti Singh.
          </p>
          <p className="footer-copyright">
            © 2026 Ravi Prakash &amp; Jyoti Singh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
