import './FloatingPetals.css';

const PETAL_COUNT = 12;

const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 8}s`,
  animationDuration: `${7 + Math.random() * 8}s`,
  size: `${10 + Math.random() * 14}px`,
  opacity: 0.6 + Math.random() * 0.4,
  rotate: `${Math.random() * 360}deg`,
}));

export default function FloatingPetals() {
  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--rotate': p.rotate,
          }}
        />
      ))}
    </div>
  );
}
