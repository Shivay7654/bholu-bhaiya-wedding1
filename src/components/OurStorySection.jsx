import { weddingInfo } from '../data/ceremonies';
import './OurStorySection.css';

export default function OurStorySection() {
  const { story } = weddingInfo;

  return (
    <section id="our-story" className="our-story-section">
      <div className="story-bg-pattern" aria-hidden="true" />

      <div className="story-container">
        {/* Section Heading */}
        <div className="story-header">
          <p className="story-pre-title">A TALE OF TWO HEARTS</p>
          <h2 className="story-main-title">Our Love Story</h2>
          <div className="story-flourish" aria-hidden="true">
            <span className="story-wing" />
            <span className="story-heart">♡</span>
            <span className="story-wing" />
          </div>
          <p className="story-intro">
            Every love story is beautiful, but ours is our favorite. Here's a glimpse into the journey of how two paths crossed and decided to walk together forever.
          </p>
        </div>

        {/* Timeline */}
        <div className="story-timeline">
          {story.map((item, index) => (
            <div
              key={index}
              className={`timeline-node ${index % 2 === 0 ? 'node-left' : 'node-right'}`}
            >
              <div className="timeline-marker">
                <span className="marker-dot" />
                <span className="marker-year">{item.year}</span>
              </div>

              <div className="timeline-card">
                <h3 className="node-title">{item.title}</h3>
                <p className="node-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
