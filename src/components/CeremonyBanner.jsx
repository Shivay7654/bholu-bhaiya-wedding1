import {
  KalashIcon,
  HaldiBowlIcon,
  MehndiHandIcon,
  DholIcon,
  DoliIcon,
  CalendarBadge,
  WatchMomentsButton,
  DownChevronButton,
} from './Icons';
import './CeremonyBanner.css';

const ICON_MAP = {
  kalash: KalashIcon,
  haldi: HaldiBowlIcon,
  mehandi: MehndiHandIcon,
  barat: DholIcon,
  vidai: DoliIcon,
};

export default function CeremonyBanner({
  ceremony,
  onWatchMoments,
  onScrollNext,
}) {
  const IconComponent = ICON_MAP[ceremony.iconType] || KalashIcon;

  return (
    <div
      id={`ceremony-${ceremony.id}`}
      className={`ceremony-banner-row ceremony-theme-${ceremony.id}`}
      style={{ '--theme-color': ceremony.themeColor, '--accent-color': ceremony.accentColor }}
    >
      {/* Background Photographic Image Layer */}
      <div
        className="ceremony-banner-bg"
        style={{ backgroundImage: `url('${ceremony.image}')` }}
        role="img"
        aria-label={`${ceremony.name} celebration background`}
      />

      {/* Atmospheric Gradients for Color Tone & Contrast */}
      <div className="ceremony-banner-overlay" />

      {/* Main Banner Content */}
      <div className="ceremony-banner-inner">
        {/* Left Side: Icon, Title, Subtitle, Calendar */}
        <div className="ceremony-left-details">
          <div className="ceremony-icon-badge">
            <IconComponent size={48} color="#FFDF73" />
          </div>

          <div className="ceremony-text-meta">
            <h3 className="ceremony-title-text">{ceremony.title}</h3>
            <p className="ceremony-subtitle-text">{ceremony.subtitle}</p>

            {/* Calendar Box */}
            <div className="ceremony-cal-container">
              <CalendarBadge
                day={ceremony.day}
                date={ceremony.date}
                time={ceremony.time}
                venue={ceremony.venueName}
              />
            </div>
          </div>
        </div>

        {/* Right Side: WATCH MOMENTS [▶] Button */}
        <div className="ceremony-right-actions">
          <WatchMomentsButton onClick={() => onWatchMoments(ceremony)} />
        </div>
      </div>

      {/* Bottom Center: Circular Down Chevron button */}
      <div className="ceremony-scroll-indicator">
        <DownChevronButton
          onClick={onScrollNext}
          ariaLabel={`Scroll from ${ceremony.name} to next section`}
        />
      </div>
    </div>
  );
}
