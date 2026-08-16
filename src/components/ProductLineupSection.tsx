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

interface ProductLineupSectionProps {
  onNavigateProduct?: () => void;
}

export const ProductLineupSection: React.FC<ProductLineupSectionProps> = ({ onNavigateProduct }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleGoToProduct = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigateProduct) {
      onNavigateProduct();
    } else {
      window.location.hash = '#product';
    }
  };

  return (
    <section
      id="products"
      className="product-lineup-section-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'calc(88px + 1.25rem) 4rem 2rem 4rem',
        boxSizing: 'border-box',
        backgroundColor: '#f8fafc',
        perspective: '1200px'
      }}
    >
      {/* Top 2-Column Section Header */}
      <div
        className="product-lineup-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          width: '100%',
          marginBottom: '1rem',
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
              fontSize: 'clamp(1.4rem, 2.1vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '0.03em',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#52525b',
              margin: 0,
              lineHeight: 1.5,
              maxWidth: '520px'
            }}
          >
            Відкрийте наші комплекти та знайдіть той, що найкраще відповідає вашим потребам: краса, комфорт, енергія або життєва сила.
          </p>

          {/* Horizontal Line with Swiss Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', width: '100%', maxWidth: '440px' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontStyle: 'italic', color: '#52525b', fontWeight: 600 }}>
              <SwissFlagIcon size={14} />
              <span>Swiss Quality for Your Skin</span>
            </div>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
          </div>
        </div>
      </div>

      {/* 4 STATIC VERTICAL COLUMNS (Floating with rounded corners and bottom margin) */}
      <div
        className="product-lineup-grid"
        style={{
          display: 'flex',
          width: '100%',
          flex: 1,
          minHeight: 0,
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: '#ffffff'
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
                flex: 1,
                height: '100%',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRight: index < PRODUCTS.length - 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
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
                  opacity: isActive ? 0 : 1,
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: 'none'
                }}
              />

              {/* REVERSE ACTIVE MODEL PHOTO (Shown ONLY when hovered) */}
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
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.05)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
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
                  padding: '1.25rem 1.25rem 1.25rem 1.25rem',
                  boxSizing: 'border-box'
                }}
              >
                {/* TOP BAR: Tag (Left) + 5 Gold Stars Rating (Right Top) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span
                    className="product-card-top-tag"
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: '#090909',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {prod.number} • {prod.name}
                  </span>

                  {/* Top Right Rating with 5 Gold Stars */}
                  <div
                    className="product-card-top-rating"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#090909' }}>
                      {prod.rating.toFixed(1)}
                    </span>
                    <span style={{ color: '#f59e0b', fontSize: '10px', letterSpacing: '1px' }}>
                      ★★★★★
                    </span>
                  </div>
                </div>

                {/* ================= BOTTOM INFO CONTAINER (FROSTED GLASS) ================= */}
                <div
                  className="product-card-bottom-info"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '18px',
                    padding: '12px 14px',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    marginTop: 'auto',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  {!isActive ? (
                    <>
                      <div className="product-card-title-row" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <h3
                          style={{
                            margin: 0,
                            fontFamily: 'var(--font-sans)',
                            fontSize: '18px',
                            fontWeight: 700,
                            color: '#090909',
                            lineHeight: 1.15
                          }}
                        >
                          {prod.name}
                        </h3>
                        <span className="product-card-price-tag" style={{ fontSize: '16px', fontWeight: 700, color: '#090909' }}>
                          {prod.price}
                        </span>
                      </div>

                      <span className="product-card-flavor" style={{ fontSize: '11.5px', fontWeight: 600, color: '#52525b' }}>
                        {prod.flavor}
                      </span>

                      <div className="product-card-bullets" style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
                        {prod.bullets.map((b, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: '#3f3f46',
                              lineHeight: 1.3
                            }}
                          >
                            ◇ {b}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Name + Price */}
                      <div className="product-card-title-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '4px' }}>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#090909',
                            lineHeight: 1.2,
                            flex: 1
                          }}
                        >
                          {prod.name}
                        </h3>
                        <span className="product-card-price-tag" style={{ fontSize: '15px', fontWeight: 800, color: '#090909', whiteSpace: 'nowrap' }}>
                          {prod.price}
                        </span>
                      </div>

                      {/* В наявності + Flavor on one line */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap', marginTop: '4px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 600, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <span style={{ fontSize: '7px' }}>●</span> В наявності
                        </span>
                        <span style={{ color: '#e2e8f0', fontSize: '10px' }}>•</span>
                        <span style={{ fontSize: '10px', fontWeight: 500, color: '#71717a' }}>
                          {prod.flavor}
                        </span>
                      </div>

                      {/* Bold headline */}
                      <p
                        style={{
                          margin: '5px 0 8px 0',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#18181b',
                          lineHeight: 1.3,
                          letterSpacing: '0.02em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {prod.boldHeadline}
                      </p>

                      {/* CTA Button */}
                      <button
                        onClick={handleGoToProduct}
                        className="btn-buy"
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          backgroundColor: prod.accentColor,
                          color: '#ffffff',
                          borderRadius: '20px',
                          padding: '9px 12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.03em',
                          boxShadow: `0 4px 12px ${prod.accentColor}44`,
                          border: 'none',
                          cursor: 'pointer',
                          marginTop: 'auto'
                        }}
                      >
                        ПЕРЕЙТИ ДО ТОВАРУ <ArrowIcon size={11} />
                      </button>
                    </>
                  )}
                </div>
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
