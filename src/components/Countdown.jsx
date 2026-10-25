import { useState, useEffect } from 'react';
import { weddingInfo } from '../data/ceremonies';
import './Countdown.css';

const TARGET = new Date(weddingInfo.countdownTarget);

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET - now;

  if (diff <= 0) return null;

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <div className="countdown-wrapper">
        <p className="countdown-over">🎉 The Wedding Celebrations Have Begun! 🎉</p>
      </div>
    );
  }

  const units = [
    { label: 'Days',    value: timeLeft.days },
    { label: 'Hours',   value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown-wrapper" aria-live="polite" aria-label="Countdown to wedding">
      <p className="countdown-heading">✦ COUNTING DOWN TO FOREVER ✦</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-box">
            <span className="countdown-number">
              {String(value).padStart(2, '0')}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
