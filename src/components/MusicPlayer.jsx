import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import './MusicPlayer.css';

// ============================================================
// MUSIC PLAYER
// Replace AUDIO_SRC with your own audio file URL
// You can place an mp3 in /public/audio/ and reference it as:
//   const AUDIO_SRC = '/bholu-bhaiya-wedding/audio/wedding-music.mp3';
// ============================================================
const AUDIO_SRC = `${import.meta.env.BASE_URL || '/'}audio/wedding-song.mp3`;

export default function MusicPlayer({ onInteract }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    onInteract?.();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        aria-hidden="true"
      />
      {isVisible && (
        <button
          className={`music-toggle ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play wedding music'}
          title={isPlaying ? 'Pause music' : 'Play wedding music'}
        >
          {isPlaying ? (
            <>
              <Music size={18} />
              <span className="music-bars">
                <span /><span /><span /><span />
              </span>
            </>
          ) : (
            <>
              <VolumeX size={18} />
              <span className="music-label">♫</span>
            </>
          )}
        </button>
      )}
    </>
  );
}
