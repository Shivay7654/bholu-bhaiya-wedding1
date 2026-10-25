import { useEffect, useRef } from 'react';
import { X, Calendar, Clock, MapPin, Share2, Sparkles, ArrowLeft } from 'lucide-react';
import './MomentsModal.css';

export default function MomentsModal({ ceremony, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!ceremony) return null;

  // Generate .ics calendar download
  const handleAddToCalendar = () => {
    const dateMap = {
      tilak: { start: '20261121T110000', end: '20261121T130000' },
      haldi: { start: '20261121T130000', end: '20261121T150000' },
      barat: { start: '20261121T180000', end: '20261122T020000' },
      vidai: { start: '20261122T060000', end: '20261122T090000' },
    };
    const timing = dateMap[ceremony.id] || { start: '20261121T180000', end: '20261122T020000' };

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ravi Prakash & Jyoti Singh Wedding//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Ravi Prakash & Jyoti Singh - ${ceremony.name} Ceremony`,
      `DESCRIPTION:${ceremony.description}`,
      'LOCATION:Manglam Hotel & Marriage Hall, Sasaram, Bihar, India',
      `DTSTART:${timing.start}`,
      `DTEND:${timing.end}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${ceremony.id}-ceremony-invite.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Join us for ${ceremony.name} (${ceremony.subtitle}) on ${ceremony.day}, ${ceremony.date} at Manglam Hotel, Sasaram! Wedding celebrations of Ravi Prakash weds Jyoti Singh. ✨`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="moments-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="moments-modal-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-theme': ceremony.themeColor, '--modal-accent': ceremony.accentColor }}
      >
        {/* Top-Left Back Button */}
        <button
          type="button"
          className="modal-top-back-btn"
          onClick={onClose}
          aria-label="Go back to wedding website"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Top-Right Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Video / Photo Visual Header */}
        <div className="modal-media-header">
          <video
            className="modal-video-player"
            poster={ceremony.image}
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={ceremony.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="modal-media-gradient" />
          <div className="modal-media-badge">
            <Sparkles size={14} />
            <span>Ceremony Highlights</span>
          </div>
        </div>

        {/* Modal Body Details */}
        <div className="modal-body">
          <div className="modal-title-row">
            <span className="modal-pre-title">{ceremony.subtitle}</span>
            <h2 className="modal-title">{ceremony.name}</h2>
          </div>

          {/* Quick Info Grid */}
          <div className="modal-meta-grid">
            <div className="meta-card">
              <Calendar size={18} className="meta-icon" />
              <div>
                <span className="meta-label">Date &amp; Day</span>
                <span className="meta-value">{ceremony.day}, {ceremony.date}</span>
              </div>
            </div>

            <div className="meta-card">
              <Clock size={18} className="meta-icon" />
              <div>
                <span className="meta-label">Time</span>
                <span className="meta-value">{ceremony.time}</span>
              </div>
            </div>

            <div className="meta-card">
              <MapPin size={18} className="meta-icon" />
              <div>
                <span className="meta-label">Venue</span>
                <span className="meta-value">{ceremony.venueName || 'Manglam Hotel, Sasaram'}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="modal-desc-box">
            <p>{ceremony.description}</p>
          </div>

          {/* Sacred Rituals Highlight */}
          <div className="modal-rituals-section">
            <h4 className="rituals-title">✦ Auspicious Rituals</h4>
            <ul className="rituals-list">
              {ceremony.rituals?.map((ritual, idx) => (
                <li key={idx} className="ritual-item">
                  <span className="ritual-bullet">◆</span>
                  <span>{ritual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dress Code */}
          {ceremony.dressCode && (
            <div className="modal-dress-code">
              <span className="dress-label">Suggested Attire:</span>
              <span className="dress-value">{ceremony.dressCode}</span>
            </div>
          )}

          {/* Actions */}
          <div className="modal-actions-row">
            <button
              type="button"
              className="modal-action-btn calendar-btn"
              onClick={handleAddToCalendar}
            >
              <Calendar size={16} />
              <span>Add to Calendar</span>
            </button>

            <button
              type="button"
              className="modal-action-btn whatsapp-btn"
              onClick={handleShareWhatsApp}
            >
              <Share2 size={16} />
              <span>Share Event</span>
            </button>
          </div>

          {/* Prominent Back to Celebrations Button at Bottom */}
          <div className="modal-bottom-back-row">
            <button
              type="button"
              className="modal-back-btn-bottom"
              onClick={onClose}
              aria-label="Return to all wedding celebrations"
            >
              <ArrowLeft size={18} />
              <span>Return to Wedding Events</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
