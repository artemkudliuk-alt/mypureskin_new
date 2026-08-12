import React, { useState, useRef, useCallback } from 'react';
import { B2BPartnerModal } from './B2BPartnerModal';

const BENEFITS = [
  {
    id: 1,
    icon: '/benefits-1.png',
    title: '4,7/5 Задоволеність клієнтів',
    text: 'Понад 96% наших клієнтів бачать видиме покращення та задоволені результатами.'
  },
  {
    id: 2,
    icon: '/benefits-2.png',
    title: 'Swiss Made',
    text: 'Бездоганна швейцарська якість, розроблена та виготовлена у Швейцарії.'
  },
  {
    id: 3,
    icon: '/benefits-3.png',
    title: 'Клінічно підтверджено',
    text: 'Формули розроблені за високими науковими стандартами та дослідженнями.'
  },
  {
    id: 4,
    icon: '/benefits-4.png',
    title: 'Передова наука про шкіру',
    text: 'Дослідження спираються на досягнення клітинної дерматології.'
  }
];

export const HeroSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isB2BModalOpen, setIsB2BModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  // Global window listeners when dragging is active for continuous smooth dragging
  React.useEffect(() => {
    if (!isDragging) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updateSliderPosition(e.clientX);
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
    window.addEventListener('touchmove', handleWindowTouchMove);
    window.addEventListener('touchend', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      window.removeEventListener('touchmove', handleWindowTouchMove);
      window.removeEventListener('touchend', handleWindowMouseUp);
    };
  }, [isDragging, updateSliderPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const scrollToB2CQuiz = () => {
    const el = document.getElementById('needs-filter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ================= ATTACHED LOCKSTEP SHIFT CALCULATIONS =================
  const leftShiftVw = sliderPos < 50 ? sliderPos - 50 : 0;
  const rightShiftVw = sliderPos > 50 ? sliderPos - 50 : 0;

  return (
    <>
      <section
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 88px)',
        minHeight: '660px',
        backgroundColor: '#000000',
        overflow: 'hidden',
        cursor: isDragging ? 'ew-resize' : 'default',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
    >
        {/* ================= LAYER 1 (B2C CIRCUIT - LEFT SIDE) ================= */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/banner_b2c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        >
          {/* Light Overlay Gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.1) 80%)'
            }}
          />

          {/* Layer 1 Content Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              maxWidth: '1560px',
              margin: '0 auto',
              padding: '2.5rem 3.5rem 2rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Top Main Text Area (B2C) */}
            <div
              style={{
                maxWidth: '640px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                transform: `translateX(${leftShiftVw}vw)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                willChange: 'transform',
                marginTop: 'auto',
                marginBottom: '2rem'
              }}
            >
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#515357',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  textAlign: 'left',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                ДЛЯ ПРИВАТНИХ КЛІЄНТІВ
              </span>

              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
                  lineHeight: 1.12,
                  color: '#000000',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.01em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textAlign: 'left'
                }}
              >
                ПЕРСОНАЛЬНИЙ АНТИВІКОВИЙ ДОГЛЯД ТА МОЛОДІСТЬ ШКІРИ
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                  color: '#111111',
                  lineHeight: 1.5,
                  marginBottom: '2rem',
                  fontWeight: 500,
                  maxWidth: '520px',
                  textAlign: 'left'
                }}
              >
                Преміальна нутрицевтика зі Швейцарії для підтримки природної краси, пружності та внутрішнього здоров'я.
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                <button onClick={scrollToB2CQuiz} className="btn-buy">
                  ПІДБРАТИ ДОГЛЯД
                </button>
              </div>
            </div>

            {/* Bottom 4 Compact Benefit Cards (Layer 1) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                width: '100%',
                maxWidth: '1080px',
                margin: 'auto auto 0 auto'
              }}
              className="benefit-cards-grid"
            >
              {BENEFITS.map((b) => (
                <div
                  key={b.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                    padding: '10px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <img
                    src={b.icon}
                    alt={b.title}
                    className={`animate-icon-${b.id}`}
                    style={{
                      width: '22px',
                      height: '22px',
                      objectFit: 'contain',
                      marginBottom: '6px'
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '3px',
                      lineHeight: 1.25
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10.5px',
                      fontWeight: 400,
                      color: '#4b5563',
                      lineHeight: 1.35,
                      margin: 0
                    }}
                  >
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= LAYER 2 (B2B CIRCUIT - RIGHT SIDE) ================= */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/banner_b2b.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
            zIndex: 2,
            transition: isDragging ? 'none' : 'clip-path 0.05s linear'
          }}
        >
          {/* Dark subtle contrast gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(270deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)'
            }}
          />

          {/* Layer 2 Content Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              height: '100%',
              maxWidth: '1560px',
              margin: '0 auto',
              padding: '2.5rem 3.5rem 2rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Top Main Text Area (B2B) */}
            <div
              style={{
                maxWidth: '640px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                transform: `translateX(${rightShiftVw}vw)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                willChange: 'transform',
                marginLeft: 'auto',
                marginTop: 'auto',
                marginBottom: '2rem'
              }}
            >
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  textAlign: 'right',
                  backgroundColor: 'rgba(124, 58, 237, 0.7)',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(6px)'
                }}
              >
                ДЛЯ КЛІНІК ТА ЛІКАРІВ-КОСМЕТОЛОГІВ
              </span>

              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
                  lineHeight: 1.12,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.01em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  textAlign: 'right'
                }}
              >
                ПРОФЕСІЙНІ НУТРИЦЕВТИЧНІ РІШЕННЯ ДЛЯ ЕСТЕТИЧНОЇ МЕДИЦИНИ
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                  color: '#f3f4f6',
                  lineHeight: 1.5,
                  marginBottom: '2rem',
                  fontWeight: 500,
                  maxWidth: '520px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  textAlign: 'right'
                }}
              >
                Швейцарські клінічні протоколи відновлення для медичних центрів, естетичних клінік та лікарів-косметологів.
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <button
                  onClick={() => setIsB2BModalOpen(true)}
                  className="btn-buy"
                  style={{
                    backgroundColor: '#7c3aed',
                    color: '#ffffff',
                    borderRadius: '30px',
                    boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)'
                  }}
                >
                  УМОВИ СПІВПРАЦІ
                </button>
              </div>
            </div>

            {/* Bottom 4 Compact Benefit Cards (Layer 2) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                width: '100%',
                maxWidth: '1080px',
                margin: 'auto auto 0 auto'
              }}
              className="benefit-cards-grid"
            >
              {BENEFITS.map((b) => (
                <div
                  key={b.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                    padding: '10px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <img
                    src={b.icon}
                    alt={b.title}
                    className={`animate-icon-${b.id}`}
                    style={{
                      width: '22px',
                      height: '22px',
                      objectFit: 'contain',
                      marginBottom: '6px'
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '3px',
                      lineHeight: 1.25
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10.5px',
                      fontWeight: 400,
                      color: '#4b5563',
                      lineHeight: 1.35,
                      margin: 0
                    }}
                  >
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= VERTICAL DIVIDER LINE & HANDLE ================= */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            transform: 'translateX(-50%)',
            width: '3px',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 16px rgba(0,0,0,0.5)',
            zIndex: 10,
            cursor: 'ew-resize',
            pointerEvents: 'none'
          }}
        >
          {/* Circular Handle with Circuit Indicators */}
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '56px',
              height: '56px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 4px 22px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              fontWeight: 700,
              fontSize: '18px',
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 6L2 12L8 18"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6L22 12L16 18"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Left Circuit Hint Badge */}
            <div
              className="animate-badge-left"
              style={{
                position: 'absolute',
                right: '64px',
                whiteSpace: 'nowrap',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                pointerEvents: 'none'
              }}
            >
              ◄ Для клієнтів
            </div>

            {/* Right Circuit Hint Badge */}
            <div
              className="animate-badge-right"
              style={{
                position: 'absolute',
                left: '64px',
                whiteSpace: 'nowrap',
                backgroundColor: 'rgba(124, 58, 237, 0.85)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                pointerEvents: 'none'
              }}
            >
              Для клінік ►
            </div>
          </div>
        </div>

        {/* Mobile Responsive Grid Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .benefit-cards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .benefit-cards-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* B2B Partner Contact Modal */}
      <B2BPartnerModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
      />
    </>
  );
};
