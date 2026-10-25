import { useState, useEffect } from 'react';
import { Menu, X, Music, VolumeX } from 'lucide-react';
import { CrestLogo } from './Icons';
import './SiteNavigation.css';

export default function SiteNavigation({ isPlaying, onToggleMusic }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['home', 'our-story', 'wedding-events', 'gallery', 'venue', 'rsvp'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'wedding-events', label: 'Wedding Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'venue', label: 'Venue' },
    { id: 'rsvp', label: 'RSVP' },
  ];

  return (
    <header className={`royal-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="royal-header-inner">
        {/* Left: Couple Monogram Crest */}
        <button
          type="button"
          className="header-logo-btn"
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
        >
          <CrestLogo size={36} />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-items-list">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link-btn ${activeSection === id ? 'active' : ''}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                  {activeSection === id && <span className="active-indicator" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Music Toggle and Hamburger Menu */}
        <div className="header-right-actions">
          {/* Music Button with Circular Outline */}
          <button
            type="button"
            className={`nav-music-btn ${isPlaying ? 'playing' : ''}`}
            onClick={onToggleMusic}
            aria-label={isPlaying ? 'Pause song: Kudmayi' : 'Play song: Kudmayi'}
            title={isPlaying ? 'Pause: Kudmayi' : 'Play: Kudmayi'}
          >
            {isPlaying ? (
              <span className="music-playing-visual">
                <Music size={16} />
                <span className="pulse-ring" />
              </span>
            ) : (
              <VolumeX size={16} />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <CrestLogo size={32} />
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`mobile-nav-btn ${activeSection === id ? 'active' : ''}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="drawer-music-btn"
              onClick={onToggleMusic}
            >
              {isPlaying ? <Music size={18} /> : <VolumeX size={18} />}
              <span>{isPlaying ? 'Playing: Kudmayi ♫' : 'Play Song: Kudmayi'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
