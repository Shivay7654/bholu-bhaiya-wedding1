import { useState, useRef, useEffect } from 'react';
import SiteNavigation from '../components/SiteNavigation';
import FloatingPetals from '../components/FloatingPetals';
import WhatsAppShare from '../components/WhatsAppShare';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import CeremoniesOverview from '../components/CeremoniesOverview';
import CeremonyBanner from '../components/CeremonyBanner';
import MomentsModal from '../components/MomentsModal';
import OurStorySection from '../components/OurStorySection';
import GallerySection from '../components/GallerySection';
import VenueSection from '../components/VenueSection';
import RSVPSection from '../components/RSVPSection';
import FooterSection from '../components/FooterSection';
import { ceremonies } from '../data/ceremonies';

const BASE = import.meta.env.BASE_URL || '/';
const WEDDING_SONG = `${BASE}audio/wedding-song.mp3`;

export default function MainWeddingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeModalCeremony, setActiveModalCeremony] = useState(null);
  const audioRef = useRef(null);

  // Smooth scroll helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 65;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Toggle background music
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser blocked autoplay, attempt next source
          setIsPlaying(false);
        });
    }
  };

  // Auto-play attempt on first user click anywhere on page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  return (
    <div className="main-wedding-page">
      {/* Background Wedding Audio — Kudmayi (User's Chosen Song) */}
      <audio
        ref={audioRef}
        src={WEDDING_SONG}
        loop
        preload="auto"
        aria-hidden="true"
      />

      {/* Floating Rose Petals across the screen */}
      <FloatingPetals />

      {/* Sticky Royal Header with Monogram, Nav Links, Music & Hamburger */}
      <SiteNavigation isPlaying={isPlaying} onToggleMusic={toggleMusic} />

      {/* Floating WhatsApp Share Button */}
      <WhatsAppShare />

      {/* 1. HERO SECTION: "You're Invited" + Diya + Red Silk Backdrop */}
      <HeroSection
        onExploreStory={() => scrollTo('our-story')}
        onScrollNext={() => scrollTo('palace-welcome')}
      />

      {/* 2. WELCOME BANNER: Palace at night with fireworks + "Welcome to our Wedding Celebration" */}
      <WelcomeSection
        onScrollNext={() => scrollTo('wedding-events')}
      />

      {/* 3. OVERVIEW: "✦ CELEBRATE EVERY MOMENT ✦" + 5 Arched Cards */}
      <CeremoniesOverview
        onSelectCeremony={(id) => scrollTo(`ceremony-${id}`)}
      />

      {/* 4. THE 5 FULL-WIDTH CINEMATIC CEREMONY BANNERS */}
      <div className="ceremonies-stacked-banners">
        {ceremonies.map((ceremony, idx) => {
          const nextCeremony = ceremonies[idx + 1];
          const nextTargetId = nextCeremony
            ? `ceremony-${nextCeremony.id}`
            : 'our-story';

          return (
            <CeremonyBanner
              key={ceremony.id}
              ceremony={ceremony}
              onWatchMoments={(c) => setActiveModalCeremony(c)}
              onScrollNext={() => scrollTo(nextTargetId)}
            />
          );
        })}
      </div>

      {/* 5. OUR STORY SECTION */}
      <OurStorySection />

      {/* 6. PHOTO GALLERY SECTION */}
      <GallerySection />

      {/* 7. VENUE & LOGISTICS SECTION */}
      <VenueSection />

      {/* 8. RSVP & BLESSINGS WALL SECTION */}
      <RSVPSection />

      {/* 9. ROYAL FOOTER with COUNTDOWN TIMER */}
      <FooterSection />

      {/* Ceremony Video / Highlights Modal */}
      {activeModalCeremony && (
        <MomentsModal
          ceremony={activeModalCeremony}
          onClose={() => setActiveModalCeremony(null)}
        />
      )}
    </div>
  );
}
