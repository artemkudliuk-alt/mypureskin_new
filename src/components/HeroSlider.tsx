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

      {/* Clean Luxury Content */}
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
          boxSizing: 'border-box',
          height: '100%',
          padding: 'calc(88px + 2rem) 2rem 2.5rem 2rem'
        }}
      >
        {/* Title directly above the button */}
        <div className="hero-fade-layer is-active hero-title-wrapper" style={{ marginBottom: '1.5rem' }}>
          <h1
            className="font-serif hero-single-title"
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
              lineHeight: 1.2,
              color: '#ffffff',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.02em',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.6), 0 1px 6px rgba(0, 0, 0, 0.5)'
            }}
          >
            КЛІТИННЕ ОМОЛОДЖЕННЯ ЗІ ШВЕЙЦАРІЇ
          </h1>
        </div>

        {/* CTA Button */}
        <div className="hero-fade-layer is-active hero-btn-wrapper" style={{ marginBottom: '2rem' }}>
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
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
          >
            ПІДІБРАТИ СВІЙ КУРС <ArrowIcon />
          </button>
        </div>

        {/* 4 Feature Line Strip / 2x2 Grid */}
        <div className="hero-features-strip hero-fade-layer is-active">
          <div className="feature-line-item">
            <div className="feature-icon-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="feature-text-block">
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
            <div className="feature-text-block">
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
            <div className="feature-text-block">
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
            <div className="feature-text-block">
              <div className="feature-title">Науковий</div>
              <div className="feature-desc">Дерматопідхід</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
