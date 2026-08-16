import React from 'react';

const ArrowIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = 'btn-arrow' }) => (
  <span className={className}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  </span>
);

export const HeroSlider: React.FC = () => {
  const scrollToB2CQuiz = () => {
    const el = document.getElementById('needs-filter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section-container"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Full Video Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src="/b2c_hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered Clean Luxury Content (No dark gradients, No heavy plaques) */}
      <div
        className="hero-content-padding"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* Swiss Tag */}
        <div className="hero-fade-layer is-active" style={{ marginBottom: '1.25rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)',
              color: '#090909',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '7px 18px',
              borderRadius: '30px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
            }}
          >
            ● SWISS CELLULAR NUTRITION
          </span>
        </div>

        {/* Headline with clean drop-shadow for 100% legibility over pure video */}
        <div className="hero-fade-layer is-active" style={{ marginBottom: '1.25rem' }}>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.12,
              color: '#ffffff',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.45), 0 1px 4px rgba(0, 0, 0, 0.35)'
            }}
          >
            КЛІТИННЕ ОМОЛОДЖЕННЯ ЗІ ШВЕЙЦАРІЇ
          </h1>
        </div>

        {/* Subtitle Paragraph */}
        <div className="hero-fade-layer is-active" style={{ marginBottom: '2.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.96)',
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 400,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.35)'
            }}
          >
            100% натуральна нутрікосметика преміум-класу для відновлення колагену, захисту від глікації та збереження біологічної молодості.
          </p>
        </div>

        {/* CTA Button */}
        <div className="hero-fade-layer is-active" style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={scrollToB2CQuiz}
            className="btn-buy hero-cta-btn"
            style={{
              backgroundColor: '#ffffff',
              color: '#090909',
              borderRadius: '35px',
              padding: '16px 42px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
          >
            ПІДІБРАТИ СВІЙ КУРС <ArrowIcon />
          </button>
        </div>

        {/* Minimal 4-Feature Line Strip (Centered, Clean Glass, No opaque plaques) */}
        <div className="hero-features-strip hero-fade-layer is-active">
          <div className="feature-line-item">
            <div className="feature-icon-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <div className="feature-title">4.7/5 Оцінка</div>
              <div className="feature-desc">96% задоволених</div>
            </div>
          </div>

          <div className="feature-line-item">
            <div className="feature-icon-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <div>
              <div className="feature-title">Swiss Made</div>
              <div className="feature-desc">100% Швейцарія</div>
            </div>
          </div>

          <div className="feature-line-item">
            <div className="feature-icon-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div>
              <div className="feature-title">Клінічно</div>
              <div className="feature-desc">Підтверджено</div>
            </div>
          </div>

          <div className="feature-line-item">
            <div className="feature-icon-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <div>
              <div className="feature-title">Науковий</div>
              <div className="feature-desc">Дерматопідхід</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
