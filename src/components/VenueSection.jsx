import { MapPin, Navigation, Phone, Mail, Car, Bed } from 'lucide-react';
import { weddingInfo } from '../data/ceremonies';
import './VenueSection.css';

export default function VenueSection() {
  const { venue } = weddingInfo;

  return (
    <section id="venue" className="venue-section">
      <div className="venue-bg-gradient" aria-hidden="true" />

      <div className="venue-container">
        {/* Header */}
        <div className="venue-header">
          <p className="venue-pre-title">DESTINATION CELEBRATION</p>
          <h2 className="venue-main-title">The Royal Venue</h2>
          <div className="venue-flourish" aria-hidden="true">
            <span className="v-wing" />
            <span className="v-symbol">✦</span>
            <span className="v-wing" />
          </div>
          <p className="venue-tagline">
            Join us in the regal splendor of palatial gardens, sparkling fountains, and royal courtyards.
          </p>
        </div>

        {/* Venue Info Card & Details */}
        <div className="venue-content-grid">
          {/* Left: Venue Highlight Card */}
          <div className="venue-main-card">
            <div
              className="venue-img-banner"
              style={{ backgroundImage: `url('${venue.image}')` }}
            >
              <div className="venue-banner-overlay" />
              <div className="venue-badge-pill">
                <MapPin size={16} />
                <span>Wedding Venue &amp; Banquet</span>
              </div>
            </div>

            <div className="venue-card-body">
              <h3 className="venue-resort-name">{venue.name}</h3>
              <p className="venue-full-address">{venue.address}</p>

              <div className="venue-cta-row">
                <a
                  href={venue.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-maps-btn"
                >
                  <Navigation size={18} />
                  <span>Get Google Maps Directions</span>
                </a>
              </div>

              <div className="venue-contact-strip">
                <div className="contact-item">
                  <Phone size={15} />
                  <span>{venue.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={15} />
                  <span>{venue.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Guest Amenities & Logistics */}
          <div className="venue-amenities-col">
            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <Bed size={22} />
              </div>
              <div>
                <h4 className="amenity-title">Royal Accommodation</h4>
                <p className="amenity-desc">
                  Complimentary guest suites reserved at the Heritage Wing for outstation families and loved ones. Check-in assistance available 24/7.
                </p>
              </div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <Car size={22} />
              </div>
              <div>
                <h4 className="amenity-title">Valet & Travel Assistance</h4>
                <p className="amenity-desc">
                  Dedicated valet parking at the North Palace Gates. Airport and railway shuttle service organized on request for guests.
                </p>
              </div>
            </div>

            <div className="amenity-card dress-code-card">
              <div className="amenity-icon-wrap">
                <span>✦</span>
              </div>
              <div>
                <h4 className="amenity-title">Royal Hospitality Desk</h4>
                <p className="amenity-desc">
                  Need any assistance during your stay? Our guest concierge team is always here to ensure your celebration experience is seamless and joyous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
