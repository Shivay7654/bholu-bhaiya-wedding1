export function CrestLogo({ className = '', size = 38 }) {
  return (
    <svg
      width={size * 2.8}
      height={size}
      viewBox="0 0 140 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ravi & Jyoti Monogram"
    >
      {/* Left Laurel Branch */}
      <path
        d="M32 25 C30 18, 24 14, 16 12 C20 18, 22 24, 25 28 C20 28, 14 26, 8 22 C12 28, 17 32, 24 33 C18 36, 12 36, 6 34 C12 40, 20 40, 28 36 C24 41, 18 43, 12 44 C20 46, 30 42, 34 32"
        stroke="#D4AF37"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="rgba(212, 175, 55, 0.25)"
      />
      {/* Right Laurel Branch */}
      <path
        d="M108 25 C110 18, 116 14, 124 12 C120 18, 118 24, 115 28 C120 28, 126 26, 132 22 C128 28, 123 32, 116 33 C122 36, 128 36, 134 34 C128 40, 120 40, 112 36 C116 41, 122 43, 128 44 C120 46, 110 42, 106 32"
        stroke="#D4AF37"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="rgba(212, 175, 55, 0.25)"
      />
      {/* Lotus / Crown flourish top */}
      <path
        d="M70 6 C67 10, 63 12, 59 13 C64 15, 68 15, 70 17 C72 15, 76 15, 81 13 C77 12, 73 10, 70 6 Z"
        fill="#E6CA65"
      />
      <circle cx="70" cy="5" r="1.5" fill="#FFF2B2" />
      {/* Monogram Text: R ♡ J */}
      <text
        x="48"
        y="33"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="21"
        fontWeight="700"
        fill="url(#goldGradient)"
        letterSpacing="1"
      >
        R
      </text>
      {/* Heart */}
      <path
        d="M70 23 C68 20, 64 20, 63 23 C62 26, 65 29, 70 33 C75 29, 78 26, 77 23 C76 20, 72 20, 70 23 Z"
        fill="#E85D75"
        stroke="#D4AF37"
        strokeWidth="0.8"
      />
      <text
        x="76"
        y="33"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="21"
        fontWeight="700"
        fill="url(#goldGradient)"
        letterSpacing="1"
      >
        J
      </text>
      {/* Bottom Flourish */}
      <path
        d="M50 39 C60 42, 80 42, 90 39 M65 41 C68 43, 72 43, 75 41"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="70" cy="41" r="1.2" fill="#D4AF37" />

      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA820A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 1. TILAK ICON: Kalash with coconut and mango leaves
export function KalashIcon({ size = 44, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Coconut on top */}
      <ellipse cx="32" cy="18" rx="8" ry="11" fill="none" stroke={color} strokeWidth="2" />
      <path d="M29 11 L32 7 L35 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 14 C32 17, 32 20, 31 23 M34 14 C33 17, 33 20, 34 23" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Mango leaves radiating */}
      <path d="M32 24 C24 19, 14 20, 11 26 C17 27, 24 26, 32 24 Z" stroke={color} strokeWidth="1.6" fill="rgba(212,175,55,0.15)" />
      <path d="M32 24 C40 19, 50 20, 53 26 C47 27, 40 26, 32 24 Z" stroke={color} strokeWidth="1.6" fill="rgba(212,175,55,0.15)" />
      <path d="M32 24 C27 15, 20 13, 18 16 C22 20, 27 22, 32 24 Z" stroke={color} strokeWidth="1.4" fill="rgba(212,175,55,0.15)" />
      <path d="M32 24 C37 15, 44 13, 46 16 C42 20, 37 22, 32 24 Z" stroke={color} strokeWidth="1.4" fill="rgba(212,175,55,0.15)" />
      {/* Kalash Neck */}
      <path d="M24 25 C24 25, 22 29, 21 32 L43 32 C42 29, 40 25, 40 25 Z" stroke={color} strokeWidth="1.8" />
      {/* Neck Band / Bead line */}
      <line x1="20" y1="32" x2="44" y2="32" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Kalash Pot Belly */}
      <path
        d="M21 32 C14 36, 13 46, 20 52 C24 55, 40 55, 44 52 C51 46, 50 36, 43 32"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.1)"
      />
      {/* Swastik / Sacred symbol on pot */}
      <path
        d="M32 37 V47 M27 42 H37 M27 37 H32 M32 47 H37 M27 42 V47 M37 37 V42"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base */}
      <path d="M24 54 L22 58 H42 L40 54" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="20" y1="58" x2="44" y2="58" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 2. HALDI ICON: Decorative bowl of turmeric paste (Urli / Katori)
export function HaldiBowlIcon({ size = 44, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Turmeric mound in bowl */}
      <path
        d="M18 31 C19 22, 27 18, 32 18 C37 18, 45 22, 46 31 Z"
        fill="rgba(245, 197, 24, 0.35)"
        stroke={color}
        strokeWidth="1.6"
      />
      <circle cx="32" cy="18" r="2.5" fill={color} />
      {/* Flower petals / sprig decoration */}
      <path d="M32 23 C30 20, 26 21, 28 24 C30 24, 32 23, 32 23 Z" fill={color} />
      <path d="M32 23 C34 20, 38 21, 36 24 C34 24, 32 23, 32 23 Z" fill={color} />
      {/* Bowl Rim */}
      <ellipse cx="32" cy="31" rx="22" ry="5.5" stroke={color} strokeWidth="2.2" fill="rgba(212,175,55,0.15)" />
      {/* Beads / ornamental edge around rim */}
      <circle cx="12" cy="31" r="1.4" fill={color} />
      <circle cx="17" cy="34" r="1.4" fill={color} />
      <circle cx="24" cy="36" r="1.4" fill={color} />
      <circle cx="32" cy="36.5" r="1.4" fill={color} />
      <circle cx="40" cy="36" r="1.4" fill={color} />
      <circle cx="47" cy="34" r="1.4" fill={color} />
      <circle cx="52" cy="31" r="1.4" fill={color} />
      {/* Bowl Body */}
      <path
        d="M11 31 C11 44, 20 51, 32 51 C44 51, 53 44, 53 31"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.1)"
      />
      {/* Decorative filigree on bowl */}
      <path
        d="M19 40 C24 45, 40 45, 45 40"
        stroke={color}
        strokeWidth="1.4"
        strokeDasharray="2 3"
      />
      {/* Pedestal / Base */}
      <path d="M26 51 L24 57 H40 L38 51" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="22" y1="57" x2="42" y2="57" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 3. MEHANDI ICON: Henna patterned open palm hand
export function MehndiHandIcon({ size = 44, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hand Outline */}
      <path
        d="M21 56 L21 44 C20 42, 14 38, 14 32 C14 28, 17 28, 19 32 L22 37
           L22 23 C22 19, 25 19, 25 23 L25 35
           L26 18 C26 14, 29 14, 29 18 L29 35
           L30 15 C30 11, 33 11, 33 15 L33 35
           L34 20 C34 16, 37 16, 37 20 L37 36
           L38 27 C38 23, 41 23, 41 27 L41 42
           C41 47, 43 51, 43 56 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="rgba(212,175,55,0.08)"
      />
      {/* Central Mandala on Palm */}
      <circle cx="31" cy="42" r="5.5" stroke={color} strokeWidth="1.4" />
      <circle cx="31" cy="42" r="2.2" fill={color} />
      {/* Small Mandala petals */}
      <circle cx="31" cy="34" r="1.2" fill={color} />
      <circle cx="37" cy="38" r="1.2" fill={color} />
      <circle cx="37" cy="46" r="1.2" fill={color} />
      <circle cx="31" cy="50" r="1.2" fill={color} />
      <circle cx="25" cy="46" r="1.2" fill={color} />
      <circle cx="25" cy="38" r="1.2" fill={color} />
      {/* Finger Henna Caps */}
      <path d="M26 21 Q27.5 19 29 21" stroke={color} strokeWidth="1.2" />
      <path d="M30 18 Q31.5 16 33 18" stroke={color} strokeWidth="1.2" />
      <path d="M34 23 Q35.5 21 37 23" stroke={color} strokeWidth="1.2" />
      <path d="M38 30 Q39.5 28 41 30" stroke={color} strokeWidth="1.2" />
      {/* Wrist Bangle lines */}
      <line x1="21" y1="52" x2="43" y2="52" stroke={color} strokeWidth="1.6" />
      <line x1="20" y1="55" x2="44" y2="55" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

// 4. BARAT ICON: Traditional Dhol drum with sticks
export function DholIcon({ size = 44, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Drum Body in Perspective */}
      {/* Left Drum Head */}
      <ellipse cx="18" cy="32" rx="4.5" ry="12" stroke={color} strokeWidth="2.2" fill="rgba(212,175,55,0.2)" />
      {/* Right Drum Head */}
      <ellipse cx="46" cy="32" rx="4.5" ry="12" stroke={color} strokeWidth="2.2" fill="rgba(212,175,55,0.2)" />
      {/* Barrel Curve */}
      <path
        d="M18 20 C28 17, 36 17, 46 20
           L46 44 C36 47, 28 47, 18 44 Z"
        stroke={color}
        strokeWidth="2"
        fill="rgba(212,175,55,0.08)"
      />
      {/* Zigzag Ropes / Cording on Barrel */}
      <path
        d="M18 20 L27 46 L36 18 L46 44 M18 44 L27 18 L36 46 L46 20"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Tuning Rings / Belt */}
      <path d="M31 18 C33 18, 33 46, 31 46" stroke={color} strokeWidth="1.5" strokeDasharray="1 2" />
      {/* Drum Beater / Curved Stick (Dagga) */}
      <path
        d="M10 18 C14 22, 15 28, 17 32"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="18" r="2.5" fill={color} />
      {/* Straight Stick (Tilli) on other side */}
      <line x1="55" y1="20" x2="46" y2="33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="55" cy="20" r="1.8" fill={color} />
    </svg>
  );
}

// 5. VIDAI ICON: Traditional bridal palanquin (Doli)
export function DoliIcon({ size = 44, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Horizontal Carrying Pole */}
      <line x1="4" y1="34" x2="60" y2="34" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      {/* Top Finial / Kalash on Dome */}
      <circle cx="32" cy="12" r="2" fill={color} />
      <path d="M32 14 L32 17" stroke={color} strokeWidth="1.8" />
      {/* Ornate Curved Dome */}
      <path
        d="M20 25 C20 18, 25 17, 32 17 C39 17, 44 18, 44 25 Z"
        stroke={color}
        strokeWidth="2"
        fill="rgba(212,175,55,0.15)"
      />
      {/* Dome eaves / scallop */}
      <path d="M18 25 C22 27, 28 27, 32 25 C36 27, 42 27, 46 25" stroke={color} strokeWidth="1.5" />
      {/* Main Carriage Box */}
      <rect x="20" y="25" width="24" height="24" rx="2" stroke={color} strokeWidth="2" fill="rgba(212,175,55,0.06)" />
      {/* Arch Window / Draped Curtains */}
      <path
        d="M24 49 V35 C24 30, 40 30, 40 35 V49"
        stroke={color}
        strokeWidth="1.8"
      />
      {/* Curtain folds */}
      <path d="M24 35 C27 40, 27 45, 24 49" stroke={color} strokeWidth="1.2" />
      <path d="M40 35 C37 40, 37 45, 40 49" stroke={color} strokeWidth="1.2" />
      {/* Bottom base rail */}
      <line x1="18" y1="49" x2="46" y2="49" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Hanging bells / tassels */}
      <circle cx="10" cy="38" r="1.5" fill={color} />
      <circle cx="54" cy="38" r="1.5" fill={color} />
    </svg>
  );
}

// 6. WAX SEAL COMPONENT: 3D Crimson seal with "R ♡ S" and hanging tassels
export function WaxSeal({ size = 80, className = '' }) {
  return (
    <div
      className={`wax-seal-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size * 1.5,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.55)) drop-shadow(0 2px 4px rgba(110,10,20,0.6))',
        }}
      >
        <defs>
          <radialGradient id="waxBase" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#C92A3E" />
            <stop offset="45%" stopColor="#961726" />
            <stop offset="85%" stopColor="#630B17" />
            <stop offset="100%" stopColor="#3E040C" />
          </radialGradient>
          <radialGradient id="waxRim" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FF4D63" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#A81D2E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3E040C" stopOpacity="0.9" />
          </radialGradient>
          <filter id="innerBevel" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset dx="-1.5" dy="-1.5" result="offset" />
            <feComposite in="SourceGraphic" in2="offset" operator="over" />
          </filter>
        </defs>

        {/* Organic irregular wax edges */}
        <path
          d="M50 4 C64 3, 76 9, 87 18 C96 28, 98 42, 96 55 C93 70, 87 82, 74 91 C61 99, 44 98, 30 94 C17 89, 7 78, 4 64 C1 50, 4 36, 12 24 C21 11, 35 4, 50 4 Z"
          fill="url(#waxBase)"
        />
        {/* Raised Outer Rim */}
        <path
          d="M50 8 C62 7, 73 12, 82 20 C90 28, 92 40, 90 51 C88 64, 82 74, 71 82 C60 89, 45 88, 33 85 C22 81, 13 72, 10 60 C7 48, 10 36, 17 26 C25 15, 37 8, 50 8 Z"
          fill="none"
          stroke="url(#waxRim)"
          strokeWidth="3.5"
        />

        {/* Stamped Inner Ring */}
        <circle cx="50" cy="50" r="33" stroke="rgba(255, 180, 190, 0.45)" strokeWidth="1.8" fill="rgba(0,0,0,0.12)" />
        <circle cx="50" cy="50" r="30" stroke="rgba(60, 4, 10, 0.7)" strokeWidth="1.2" />

        {/* Embossed Monogram */}
        {/* Crown / Lotus flourish at top of seal */}
        <path
          d="M50 25 C47 28, 43 29, 40 30 C45 31, 48 31, 50 33 C52 31, 55 31, 60 30 C57 29, 53 28, 50 25 Z"
          fill="#FFB6C1"
          opacity="0.8"
        />

        {/* Embossed Text R ♡ J with 3D highlight */}
        <g filter="url(#innerBevel)">
          {/* Shadow layer */}
          <text
            x="32"
            y="56"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="22"
            fontWeight="bold"
            fill="#300308"
            letterSpacing="0.5"
          >
            R
          </text>
          <path
            d="M50 46 C48 43, 44 43, 43 46 C42 49, 45 52, 50 56 C55 52, 58 49, 57 46 C56 43, 52 43, 50 46 Z"
            fill="#300308"
          />
          <text
            x="57"
            y="56"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="22"
            fontWeight="bold"
            fill="#300308"
            letterSpacing="0.5"
          >
            J
          </text>

          {/* Highlight layer */}
          <text
            x="31"
            y="55"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="22"
            fontWeight="bold"
            fill="#FFC9D2"
            letterSpacing="0.5"
          >
            R
          </text>
          <path
            d="M49 45 C47 42, 43 42, 42 45 C41 48, 44 51, 49 55 C54 51, 57 48, 56 45 C55 42, 51 42, 49 45 Z"
            fill="#FF8095"
          />
          <text
            x="56"
            y="55"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="22"
            fontWeight="bold"
            fill="#FFC9D2"
            letterSpacing="0.5"
          >
            J
          </text>
        </g>

        {/* Subtle decorative stars */}
        <circle cx="50" cy="65" r="1.5" fill="#FFB6C1" opacity="0.85" />
        <path d="M42 63 C46 65, 54 65, 58 63" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>

      {/* Hanging Silk & Gold Tassels underneath the seal */}
      <div
        className="wax-tassels"
        style={{
          position: 'absolute',
          top: size * 0.78,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Braided Cord */}
        <div
          style={{
            width: '4px',
            height: '18px',
            background: 'linear-gradient(to bottom, #AA1C2E, #D4AF37, #8B0000)',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        />
        {/* Gold Bead Ring */}
        <div
          style={{
            width: '14px',
            height: '6px',
            background: 'linear-gradient(135deg, #FFF099, #D4AF37, #997A15)',
            borderRadius: '4px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
          }}
        />
        {/* Silk Tassel Fringe */}
        <div
          style={{
            width: '18px',
            height: '38px',
            background: 'linear-gradient(to bottom, #8B0018 0%, #A51D2F 50%, #680A15 100%)',
            clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* Gold strands inside tassel */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '42%',
              width: '2px',
              background: '#E6CA65',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '60%',
              width: '1px',
              background: '#FFD700',
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// 7. DOWN CHEVRON BUTTON (Matching the circular badge in picture)
export function DownChevronButton({ onClick, ariaLabel = 'Scroll to next section' }) {
  return (
    <button
      type="button"
      className="section-scroll-down-btn"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

// 8. WATCH MOMENTS PLAY BUTTON (Matching the right side button in picture)
export function WatchMomentsButton({ onClick }) {
  return (
    <button
      type="button"
      className="watch-moments-btn"
      onClick={onClick}
      aria-label="Watch ceremony moments"
    >
      <span className="watch-moments-text">WATCH MOMENTS</span>
      <span className="watch-moments-icon-wrap">
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16.5" stroke="currentColor" strokeWidth="1.8" />
          <polygon points="15,12 25,18 15,24" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}

// 9. CALENDAR BADGE (Matching THURSDAY | 15 FEB 2026 or 21 NOV 2026)
export function CalendarBadge({ day, date, time, venue }) {
  return (
    <div className="ceremony-calendar-badge">
      <div className="cal-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="15" r="1" fill="currentColor" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
      </div>
      <div className="cal-text-wrap">
        <span className="cal-day">
          {day} {time ? `· ${time}` : ''}
        </span>
        <span className="cal-date">{date}</span>
        {venue && <span className="cal-venue-tag">{venue}</span>}
      </div>
    </div>
  );
}
