import React, { useState } from 'react';

const ArrowIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <span className="btn-arrow">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  </span>
);

const SwissFlagIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ borderRadius: '3px', flexShrink: 0, display: 'inline-block', verticalAlign: '-1px' }}
  >
    <rect width="24" height="24" rx="4" fill="#D52B1E" />
    <rect x="10.5" y="4.5" width="3" height="15" rx="0.5" fill="#FFFFFF" />
    <rect x="4.5" y="10.5" width="15" height="3" rx="0.5" fill="#FFFFFF" />
  </svg>
);

interface RichProduct {
  id: string;
  number: string;
  name: string;
  boldHeadline: string;
  flavor: string;
  price: string;
  rating: number;
  accentColor: string;
  image: string; // Original Studio Box Photo (/1.jpg - /4.jpg) - 100% Crisp & High-Res
  activeImage: string; // Active K-Beauty Model Photo (/active_lift_kbeauty.jpg - /active_contour_kbeauty.jpg)
  bullets: string[];
}

const PRODUCTS: RichProduct[] = [
  {
    id: 'lift',
    number: '01',
    name: 'MyCollagenLift',
    boldHeadline: 'СЯЙВО ТА ЛІФТИНГ',
    flavor: 'Смак стиглої малини',
    price: '7 900 ₴',
    rating: 5.0,
    accentColor: '#93c5fd',
    image: '/1.jpg',
    activeImage: '/active_lift_kbeauty.jpg',
    bullets: [
      '5000 мг швейцарського колагену',
      'Глибоке зволоження та ліфтинг',
      'Клінічно доведений результат'
    ]
  },
  {
    id: 'glow',
    number: '02',
    name: 'MyCollagenGlow',
    boldHeadline: 'ЖИВЛЕННЯ ТА БЛЕСК',
    flavor: 'Ніжний персик та ваніль',
    price: '7 500 ₴',
    rating: 5.0,
    accentColor: '#d9f99d',
    image: '/2.jpg',
    activeImage: '/active_glow_kbeauty.jpg',
    bullets: [
      'Антиоксидантний захист клітин',
      'Зміцнення волосся та нігтів',
      'Рівний тон та сяйво шкіри'
    ]
  },
  {
    id: 'repair',
    number: '03',
    name: 'MyCollagenRepair',
    boldHeadline: 'ПОТРІЙНЕ ВІДНОВЛЕННЯ',
    flavor: 'Соковитий цитрус та ягоди',
    price: '8 200 ₴',
    rating: 5.0,
    accentColor: '#fdba74',
    image: '/3.jpg',
    activeImage: '/active_repair_kbeauty.jpg',
    bullets: [
      'Захист від глікації та старіння',
      'Детокс печінки та клітин',
      'Відновлення м’язової матриці'
    ]
  },
  {
    id: 'contour',
    number: '04',
    name: 'MyBodyContour',
    boldHeadline: 'ДЕТОКС ТА ТОНУС',
    flavor: 'Освіжаючий зелений чай',
    price: '8 500 ₴',
    rating: 4.9,
    accentColor: '#ddd6fe',
    image: '/4.jpg',
    activeImage: '/active_contour_kbeauty.jpg',
    bullets: [
      'Прискорення спалювання жирів',
      'Лімфодренажний ефект',
      'Підтяжка та тонус контурів'
    ]
  }
];

export const ProductLineupSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="product-lineup-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'calc(88px + 165px) 4.5rem 0 4.5rem',
        scrollSnapAlign: 'start',
        boxSizing: 'border-box',
        backgroundColor: '#fafafa',
        perspective: '1200px'
      }}
    >
      {/* Top 2-Column Section Header (Shifted 50px right, raised 10px up for perfect centering) */}
      <div
        className="product-lineup-header"
        style={{
          position: 'absolute',
          top: 'calc(88px + 2.1rem)',
          left: 'calc(4.5rem + 50px)',
          right: '4.5rem',
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          zIndex: 20
        }}
      >
        {/* LEFT COLUMN: Vertical Line Accent + 2-Line Bold Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '1.25rem'
          }}
        >
          <div
            style={{
              width: '1.5px',
              backgroundColor: 'rgba(0, 0, 0, 0.18)',
              flexShrink: 0
            }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '2.38rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: '#090909',
              margin: 0,
              lineHeight: 1.2,
              textTransform: 'uppercase'
            }}
          >
            ПРЕМІАЛЬНІ РІШЕННЯ<br />
            ДЛЯ ВАШОГО ЗДОРОВ'Я ТА КРАСИ
          </h2>
        </div>

        {/* RIGHT COLUMN: Paragraph + Horizontal Line with Swiss Badge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 500,
              color: '#3f3f46',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '540px'
            }}
          >
            Відкрийте наші комплекти та знайдіть той, що найкраще відповідає вашим потребам: краса, комфорт, енергія або життєва сила.
          </p>

          {/* Horizontal Line with Swiss Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', width: '100%', maxWidth: '460px' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontStyle: 'italic', color: '#52525b', fontWeight: 600 }}>
              <SwissFlagIcon size={14} />
              <span>Swiss Quality for Your Skin</span>
            </div>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
          </div>
        </div>
      </div>

      {/* 4 STATIC VERTICAL COLUMNS (Flush to Bottom) */}
      <div
        className="product-lineup-grid"
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',
          boxShadow: '0 -12px 40px rgba(0, 0, 0, 0.08)',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
          borderRight: '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        {PRODUCTS.map((prod, index) => {
          const isActive = activeId === prod.id;

          return (
            <div
              key={prod.id}
              className="product-lineup-card"
              onClick={() => setActiveId(activeId === prod.id ? null : prod.id)}
              onMouseEnter={() => setActiveId(prod.id)}
              style={{
                position: 'relative',
                flex: 1, // Static equal column width
                height: '100%',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRight: index < PRODUCTS.length - 1 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                boxSizing: 'border-box'
              }}
            >
              {/* RESTING HIGH-RES STUDIO PRODUCT PHOTO (/1.jpg - /4.jpg) */}
              <img
                src={prod.image}
                alt={prod.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  filter: 'brightness(1.02) blur(0px)',
                  opacity: isActive ? 0 : 1,
                  transform: isActive ? 'scale(1.08) rotateY(12deg)' : 'scale(1) rotateY(0deg)',
                  transition: 'all 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: 'none'
                }}
              />

              {/* REVERSE ACTIVE MODEL PHOTO (Shown ONLY when hovered - 100% Light & Bright 9:16 Model Photo) */}
              <img
                src={prod.activeImage}
                alt={`${prod.name} Active`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  filter: 'brightness(0.98) blur(0px)',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.08) rotateY(-12deg)',
                  transition: 'all 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: 'none'
                }}
              />

              {/* Soft Dark Bottom Gradient Overlay for Text Legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.88) 100%)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.9) 100%)',
                  transition: 'all 0.5s ease',
                  pointerEvents: 'none'
                }}
              />

              {/* Column Layout Layer */}
              <div
                className="product-lineup-card-content"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem 1.75rem 2.25rem 1.75rem',
                  boxSizing: 'border-box'
                }}
              >
              {/* TOP BAR: Tag (Left) + 5 Gold Stars Rating (Right Top) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.85)',
                    color: isActive ? '#ffffff' : '#090909',
                    backdropFilter: 'blur(10px)',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s ease'
                  }}
                >
                  {prod.number} • {prod.name}
                </span>

                {/* Top Right Rating with 5 Gold Stars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    {prod.rating.toFixed(1)}
                  </span>
                  <span style={{ color: '#fbbf24', fontSize: '12px', letterSpacing: '1px' }}>
                    ★★★★★
                  </span>
                </div>
              </div>

              {/* ================= INACTIVE STATE (ALL 4 ARE INACTIVE BY DEFAULT!) ================= */}
              {!isActive && (
                <div
                  className="product-card-bottom-info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    animation: 'fadeInSlow 0.4s ease forwards'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '23px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.15
                      }}
                    >
                      {prod.name}
                    </h3>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
                      {prod.price}
                    </span>
                  </div>

                  {/* Flavor Badge without Fruit Icon */}
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.95)' }}>
                    {prod.flavor}
                  </span>

                  {/* Cosmetic Icon Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '0.2rem' }}>
                    {prod.bullets.map((b, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.95)'
                        }}
                      >
                        ◇ {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= ACTIVE REVERSE STATE (REVEALED ONLY ON HOVER!) ================= */}
              {isActive && (
                <div
                  className="product-card-bottom-info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginTop: 'auto',
                    animation: 'surfaceRise 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  }}
                >
                  {/* Title & Price Header */}
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h3
                      style={{
                        fontSize: '26px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.1
                      }}
                    >
                      {prod.name}
                    </h3>

                    <span
                      style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#ffffff'
                      }}
                    >
                      {prod.price}
                    </span>
                  </div>

                  {/* Stock Status Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.65rem' }}>
                    <span style={{ color: '#22c55e', fontSize: '11px' }}>●</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>
                      В наявності
                    </span>
                  </div>

                  {/* Bold Headline Paragraph */}
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '0.6rem'
                    }}
                  >
                    {prod.boldHeadline}
                  </p>

                  {/* Flavor Line */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 600,
                        fontStyle: 'italic',
                        color: 'rgba(255, 255, 255, 0.95)'
                      }}
                    >
                      {prod.flavor}
                    </span>
                  </div>

                  {/* CTA Button: 50% Width, Left-Aligned */}
                  <button
                    className="btn-buy"
                    style={{
                      width: '65%', // ~50-60% width of column
                      alignSelf: 'flex-start', // Left aligned
                      backgroundColor: prod.accentColor,
                      color: '#ffffff',
                      borderRadius: '30px',
                      padding: '12px 18px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      boxShadow: `0 6px 20px ${prod.accentColor}77`
                    }}
                  >
                    ПЕРЕЙТИ ДО ТОВАРУ <ArrowIcon />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes surfaceRise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
