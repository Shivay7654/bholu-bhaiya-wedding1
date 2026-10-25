import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './GallerySection.css';

const BASE = import.meta.env.BASE_URL || '/';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Ravi Prakash & Jyoti Singh',
    category: 'Wedding',
    image: `${BASE}images/couple.jpg`,
  },
  {
    id: 2,
    title: 'The Grand Royal Barat Procession',
    category: 'Barat',
    image: `${BASE}images/barat.jpg`,
  },
  {
    id: 3,
    title: 'Joyous Haldi Ceremony & Blessings',
    category: 'Haldi',
    image: `${BASE}images/haldi.jpg`,
  },
  {
    id: 4,
    title: 'Auspicious Tilak & Sacred Rituals',
    category: 'Tilak',
    image: `${BASE}images/tilak.jpg`,
  },
  {
    id: 5,
    title: 'Manglam Hotel & Marriage Hall, Sasaram',
    category: 'Venue',
    image: `${BASE}images/mangalam-hotel.jpg`,
  },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Wedding', 'Haldi', 'Barat', 'Tilak', 'Venue'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <p className="gallery-pre-title">CAPTURED MEMORIES</p>
          <h2 className="gallery-main-title">Moments of Joy</h2>
          <div className="gallery-flourish" aria-hidden="true">
            <span className="g-wing" />
            <span className="g-symbol">✦</span>
            <span className="g-wing" />
          </div>
          <p className="gallery-subtitle">
            Every snapshot tells a story of love, laughter, and timeless traditions of Ravi Prakash &amp; Jyoti Singh.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActivePhoto(item)}
            >
              <div
                className="gallery-img-wrap"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="gallery-card-overlay">
                <ZoomIn size={24} className="gallery-zoom-icon" />
                <h4 className="gallery-item-title">{item.title}</h4>
                <span className="gallery-item-cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="lightbox-overlay" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <div>
                <h3>{activePhoto.title}</h3>
                <p>{activePhoto.category} Celebration</p>
              </div>
              <button
                type="button"
                className="lightbox-back-btn"
                onClick={() => setActivePhoto(null)}
              >
                ← Back to Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
