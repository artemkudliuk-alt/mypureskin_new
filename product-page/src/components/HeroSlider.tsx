import React, { useState } from 'react';
import { B2BPartnerModal } from './B2BPartnerModal';

const ArrowIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className = 'btn-arrow' }) => (
  <span className={className}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  </span>
);

export const HeroSlider: React.FC = () => {
  // activeSide: 'b2c' = left side 70%, right side 30% (Default on load)
  // activeSide: 'b2b' = right side 70%, left side 30%
  const [activeSide, setActiveSide] = useState<'b2c' | 'b2b'>('b2c');
  const [isB2BModalOpen, setIsB2BModalOpen] = useState<boolean>(false);

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
    >
      {/* Mobile Top Segmented Tab Switcher */}
      <div className="hero-mobile-toggle-bar">
        <button
          type="button"
          onClick={() => setActiveSide('b2c')}
          className={activeSide === 'b2c' ? 'active' : ''}
        >
          👤 Для клієнтів
        </button>
        <button
          type="button"
          onClick={() => setActiveSide('b2b')}
          className={activeSide === 'b2b' ? 'active' : ''}
        >
          🩺 Клінікам & B2B
        </button>
      </div>

      {/* ========================================================================= */}
      {/* LEFT COLUMN: B2C (PRIVATE CLIENTS) - 70% when active, 30% when inactive   */}
      {/* ========================================================================= */}
      <div
        className={`hero-column hero-column-b2c ${activeSide === 'b2c' ? 'is-active' : 'is-inactive'}`}
        onClick={() => {
          if (activeSide !== 'b2c') setActiveSide('b2c');
        }}
        style={{
          position: 'relative',
          width: activeSide === 'b2c' ? '70%' : '30%',
          height: '100%',
          transition: 'width 1.05s cubic-bezier(0.22, 1, 0.36, 1)',
          overflow: 'hidden',
          cursor: activeSide === 'b2c' ? 'default' : 'pointer'
        }}
      >
        {/* Full Active Hero Background Video for B2C */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: activeSide === 'b2c' ? 1 : 0,
            transition: 'opacity 1.0s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: 'none',
            overflow: 'hidden'
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

        {/* Soft Dark Gradient Overlay Under Text for Readability (B2C) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(9, 9, 9, 0.82) 0%, rgba(9, 9, 9, 0.45) 50%, rgba(9, 9, 9, 0) 100%)',
            opacity: activeSide === 'b2c' ? 1 : 0,
            transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: 'none'
          }}
        />

        {/* Active Hero Text & Buttons Content (Staggered Cinematic Entrance) */}
        <div
          className="hero-content-padding"
          style={{
            pointerEvents: activeSide === 'b2c' ? 'auto' : 'none'
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '680px',
              textAlign: 'left',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          >
            {/* Tag */}
            <div className={`hero-fade-layer hero-stagger-1 ${activeSide === 'b2c' ? 'is-active' : ''}`}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#090909',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  padding: '7px 18px',
                  borderRadius: '30px',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)'
                }}
              >
                ДЛЯ ПРИВАТНИХ КЛІЄНТІВ
              </span>
            </div>

            {/* Headline */}
            <div className={`hero-fade-layer hero-stagger-2 ${activeSide === 'b2c' ? 'is-active' : ''}`}>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.5rem, 4.4vw, 3.8rem)',
                  lineHeight: 1.12,
                  color: '#ffffff',
                  fontWeight: 500,
                  marginBottom: '1.25rem',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)'
                }}
              >
                ПЕРСОНАЛЬНИЙ АНТИВІКОВИЙ ДОГЛЯД ТА МОЛОДІСТЬ ШКІРИ
              </h1>
            </div>

            {/* Subtitle Paragraph */}
            <div className={`hero-fade-layer hero-stagger-3 ${activeSide === 'b2c' ? 'is-active' : ''}`}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16.5px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.92)',
                  marginBottom: '2.25rem',
                  fontWeight: 300,
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                Преміальна нутрицевтика зі Швейцарії для підтримки природної краси, пружності та внутрішнього здоров'я.
              </p>
            </div>

            {/* CTA Button */}
            <div className={`hero-fade-layer hero-stagger-4 ${activeSide === 'b2c' ? 'is-active' : ''}`}>
              <button
                onClick={scrollToB2CQuiz}
                className="btn-buy"
                style={{
                  backgroundColor: '#515357',
                  color: '#ffffff',
                  borderRadius: '30px',
                  padding: '16px 38px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em'
                }}
              >
                ПІДБРАТИ ДОГЛЯД <ArrowIcon />
              </button>
            </div>

            {/* Minimalist 4 Feature Line Strip (No Frames, Clean Lines) */}
            <div className={`hero-features-strip hero-fade-layer hero-stagger-4 ${activeSide === 'b2c' ? 'is-active' : ''}`}>
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
                  <div className="feature-desc">Швейцарія</div>
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
        </div>

        {/* 30% Inactive Full-Bleed Preview Panel (Cinematic Smooth Entrance/Exit) */}
        <div
          className={`hero-preview-layer ${activeSide === 'b2b' ? 'is-active' : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: activeSide === 'b2b' ? 'auto' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '3rem 1.5rem 8.5rem 1.5rem',
            boxSizing: 'border-box',
            textAlign: 'center'
          }}
        >
          {/* Full-Bleed Background Image */}
          <img
            className="preview-img-target"
            src="/b2c.jpeg"
            alt="MyPureSkin B2C Client Preview"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />

          {/* Dark Overlay Tint for 30% Preview (Fades Out On Hover) */}
          <div
            className="preview-tint-target"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(9, 9, 9, 0.45)',
              pointerEvents: 'none'
            }}
          />

          {/* Bottom Gradient Vignette for Crisp Contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Bottom Info Overlay (Title & Button) */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div className="preview-text-animated">
              <h3
                className="font-serif"
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  margin: 0,
                  textAlign: 'center',
                  textShadow: '0 2px 14px rgba(0,0,0,0.85)',
                  letterSpacing: '0.02em'
                }}
              >
                Персональний<br />антивіковий догляд
              </h3>
              <div className="preview-click-badge">
                <span className="pulse-dot">●</span> КАТАЛОГ <ArrowIcon className="badge-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ELEGANT SEPARATOR LINE                                                    */}
      {/* ========================================================================= */}
      <div
        style={{
          width: '2px',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />

      {/* ========================================================================= */}
      {/* RIGHT COLUMN: B2B (CLINICS & PHYSICIANS) - 70% when active, 30% inactive */}
      {/* ========================================================================= */}
      <div
        className={`hero-column hero-column-b2b ${activeSide === 'b2b' ? 'is-active' : 'is-inactive'}`}
        onClick={() => {
          if (activeSide !== 'b2b') setActiveSide('b2b');
        }}
        style={{
          position: 'relative',
          width: activeSide === 'b2b' ? '70%' : '30%',
          height: '100%',
          transition: 'width 1.05s cubic-bezier(0.22, 1, 0.36, 1)',
          overflow: 'hidden',
          cursor: activeSide === 'b2b' ? 'default' : 'pointer'
        }}
      >
        {/* Full Active Hero Background Video for B2B */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: activeSide === 'b2b' ? 1 : 0,
            transition: 'opacity 1.0s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: 'none',
            overflow: 'hidden'
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
            <source src="/b2b_hero_video_banner.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Soft Dark Gradient Overlay Under Text for Readability (B2B) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(9, 9, 9, 0.85) 0%, rgba(9, 9, 9, 0.5) 50%, rgba(9, 9, 9, 0) 100%)',
            opacity: activeSide === 'b2b' ? 1 : 0,
            transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: 'none'
          }}
        />

        {/* Active Hero Text & Buttons Content (Staggered Cinematic Entrance) */}
        <div
          className="hero-content-padding"
          style={{
            pointerEvents: activeSide === 'b2b' ? 'auto' : 'none'
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '680px',
              textAlign: 'left',
              marginTop: 'auto',
              marginBottom: 'auto'
            }}
          >
            {/* Tag */}
            <div className={`hero-fade-layer hero-stagger-1 ${activeSide === 'b2b' ? 'is-active' : ''}`}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(124, 58, 237, 0.85)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  padding: '7px 18px',
                  borderRadius: '30px',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)'
                }}
              >
                ДЛЯ КЛІНІК ТА ЛІКАРІВ-КОСМЕТОЛОГІВ
              </span>
            </div>

            {/* Headline */}
            <div className={`hero-fade-layer hero-stagger-2 ${activeSide === 'b2b' ? 'is-active' : ''}`}>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  fontWeight: 500,
                  marginBottom: '1.25rem',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)'
                }}
              >
                ВИ З КЛІЄНТАМИ ОБИРАЄТЕ ПЕРЕВІРЕНІ ЗАСОБИ ДЛЯ КРАСИ Й ЗДОРОВ'Я?
              </h1>
            </div>

            {/* Subtitle Paragraph */}
            <div className={`hero-fade-layer hero-stagger-3 ${activeSide === 'b2b' ? 'is-active' : ''}`}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  lineHeight: 1.5,
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '1.75rem',
                  fontWeight: 400,
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                Приєднуйтесь до клубу професіоналів <strong style={{ fontWeight: 700 }}>MyPureSkin</strong>
              </p>
            </div>

            {/* CTA Button */}
            <div className={`hero-fade-layer hero-stagger-4 ${activeSide === 'b2b' ? 'is-active' : ''}`}>
              <button
                onClick={() => setIsB2BModalOpen(true)}
                className="btn-buy"
                style={{
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  borderRadius: '30px',
                  padding: '16px 38px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.45)'
                }}
              >
                ОТРИМАТИ ПРОФ ПРЕЗЕНТАЦІЮ <ArrowIcon />
              </button>
            </div>

            {/* Minimalist 4 Feature Line Strip (No Frames, Clean Lines) */}
            <div className={`hero-features-strip hero-fade-layer hero-stagger-4 ${activeSide === 'b2b' ? 'is-active' : ''}`}>
              <div className="feature-line-item">
                <div className="feature-icon-box">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Для клінік</div>
                  <div className="feature-desc">Протоколи B2B</div>
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
                  <div className="feature-desc">Якість 100%</div>
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
                  <div className="feature-title">Сертифікація</div>
                  <div className="feature-desc">Клінічний тест</div>
                </div>
              </div>

              <div className="feature-line-item">
                <div className="feature-icon-box">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Клуб B2B</div>
                  <div className="feature-desc">Умови та опт</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 30% Inactive Full-Bleed Preview Panel (Cinematic Smooth Entrance/Exit) */}
        <div
          className={`hero-preview-layer ${activeSide === 'b2c' ? 'is-active' : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: activeSide === 'b2c' ? 'auto' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '3rem 1.5rem 8.5rem 1.5rem',
            boxSizing: 'border-box',
            textAlign: 'center'
          }}
        >
          {/* Full-Bleed Background Image */}
          <img
            className="preview-img-target"
            src="/b2b.jpeg"
            alt="MyPureSkin B2B Doctors Preview"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
          />

          {/* Dark Overlay Tint for 30% Preview (Fades Out On Hover) */}
          <div
            className="preview-tint-target"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(9, 9, 9, 0.45)',
              pointerEvents: 'none'
            }}
          />

          {/* Bottom Gradient Vignette for Crisp Contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Very Top Tagline: EXCLUSIVE B2B PARTNERSHIP with Green Star */}
          <div style={{ position: 'absolute', top: '2.5rem', left: 0, right: 0, textAlign: 'center', zIndex: 2 }}>
            <span className="poster-tagline" style={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
              <span style={{ color: '#22c55e', fontSize: '13px', marginRight: '5px' }}>✦</span>
              EXCLUSIVE B2B PARTNERSHIP
            </span>
          </div>

          {/* Bottom Info Overlay (Title & Button at Bottom) */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div className="preview-text-animated">
              <h3
                className="font-serif"
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  margin: 0,
                  textAlign: 'center',
                  textShadow: '0 2px 14px rgba(0,0,0,0.85)',
                  letterSpacing: '0.02em'
                }}
              >
                Приєднуйтесь до клубу<br />професіоналів MyPureSkin
              </h3>
              <div className="preview-click-badge">
                <span className="pulse-dot">●</span> ДЛЯ КЛІНІК ТА ЛІКАРІВ <ArrowIcon className="badge-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B2B Partner Inquiry Modal */}
      {isB2BModalOpen && (
        <B2BPartnerModal isOpen={isB2BModalOpen} onClose={() => setIsB2BModalOpen(false)} />
      )}
    </section>
  );
};
