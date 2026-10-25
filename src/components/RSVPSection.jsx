import { useState } from 'react';
import { Send, Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import './RSVPSection.css';

const DEFAULT_BLESSINGS = [
  {
    name: 'Sharma Family',
    message: 'Wishing dear Ravi Prakash & Jyoti Singh a lifetime of radiant love, infinite laughter, and divine blessings!',
    date: 'Just now',
  },
  {
    name: 'Raj & Priya',
    message: 'Can’t wait to dance at the Barat and celebrate this magnificent wedding with Ravi bhaiya and bhabhi!',
    date: '1 hour ago',
  },
  {
    name: 'Mehra Parivar',
    message: 'May your bond grow stronger with each passing day. Shubh Vivaah to the most wonderful couple!',
    date: 'Yesterday',
  },
];

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    events: ['Tilak', 'Haldi', 'Barat', 'Vidai'],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [blessings, setBlessings] = useState(DEFAULT_BLESSINGS);

  const toggleEvent = (eventName) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(eventName)
        ? prev.events.filter((e) => e !== eventName)
        : [...prev.events, eventName],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (formData.message.trim()) {
      setBlessings((prev) => [
        {
          name: formData.name,
          message: formData.message,
          date: 'Just now',
        },
        ...prev,
      ]);
    }

    setSubmitted(true);
  };

  const handleWhatsAppRSVP = () => {
    const text = encodeURIComponent(
      `Namaste! I would love to RSVP for Ravi Prakash & Jyoti Singh's Wedding Celebrations.\n\nName: ${formData.name || 'Guest'}\nGuests: ${formData.guests}\nEvents: ${formData.events.join(', ')}\n\nBlessings: ${formData.message || 'Heartiest congratulations to the lovely couple!'}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-bg-overlay" aria-hidden="true" />

      <div className="rsvp-container">
        {/* Header */}
        <div className="rsvp-header">
          <p className="rsvp-pre-title">BE A PART OF OUR JOY</p>
          <h2 className="rsvp-main-title">RSVP &amp; Blessings</h2>
          <div className="rsvp-flourish" aria-hidden="true">
            <span className="r-wing" />
            <span className="r-symbol">♡</span>
            <span className="r-wing" />
          </div>
          <p className="rsvp-subtitle">
            Your gracious presence and heartfelt blessings will illuminate our celebration.
          </p>
        </div>

        <div className="rsvp-layout-grid">
          {/* Left: RSVP Form */}
          <div className="rsvp-form-card">
            {submitted ? (
              <div className="rsvp-success-view">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">Thank You, {formData.name}!</h3>
                <p className="success-text">
                  Your RSVP and heartfelt blessings have been lovingly received. We look forward to celebrating with you!
                </p>
                <button
                  type="button"
                  className="rsvp-reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Blessing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rsvp-actual-form">
                <h3 className="form-card-title">Confirm Your Attendance</h3>

                <div className="form-group">
                  <label htmlFor="guest-name">Your Full Name *</label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar & Family"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="guest-phone">Phone / WhatsApp</label>
                    <input
                      id="guest-phone"
                      type="tel"
                      placeholder="+91 98765 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guest-count">Total Guests</label>
                    <select
                      id="guest-count"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4+">Family (4+ Persons)</option>
                    </select>
                  </div>
                </div>

                {/* Event Attendance Checkboxes */}
                <div className="form-group">
                  <label className="events-label">Ceremonies You Will Grace:</label>
                  <div className="events-checkbox-pills">
                    {['Tilak', 'Haldi', 'Barat', 'Vidai'].map((ev) => (
                      <button
                        key={ev}
                        type="button"
                        className={`event-check-pill ${formData.events.includes(ev) ? 'selected' : ''}`}
                        onClick={() => toggleEvent(ev)}
                      >
                        {formData.events.includes(ev) && '✓ '}
                        {ev}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guest-message">Your Blessings for Ravi &amp; Jyoti</label>
                  <textarea
                    id="guest-message"
                    rows={3}
                    placeholder="Write your wishes and blessings for the bride and groom..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-buttons-row">
                  <button type="submit" className="submit-rsvp-btn">
                    <Send size={16} />
                    <span>Submit RSVP</span>
                  </button>

                  <button
                    type="button"
                    className="whatsapp-rsvp-btn"
                    onClick={handleWhatsAppRSVP}
                  >
                    <MessageCircle size={16} />
                    <span>RSVP via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Live Blessings Wall */}
          <div className="blessings-wall-card">
            <div className="blessings-wall-header">
              <Heart size={20} className="blessings-heart-icon" />
              <h3>Blessings for the Couple</h3>
            </div>

            <div className="blessings-scroll-list">
              {blessings.map((b, idx) => (
                <div key={idx} className="blessing-bubble">
                  <p className="blessing-text">"{b.message}"</p>
                  <div className="blessing-meta">
                    <span className="blessing-author">— {b.name}</span>
                    <span className="blessing-time">{b.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
