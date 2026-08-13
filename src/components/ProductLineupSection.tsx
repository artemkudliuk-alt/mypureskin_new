import React, { useState } from 'react';

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
    boldHeadline: 'MyCollagenLift — швейцарський морський колаген для антивікового ліфтингу та пружності шкіри',
    flavor: 'Смак: натуральні червоні ягоди',
    price: '6 150 ₴',
    rating: 5.0,
    accentColor: '#0284c7',
    image: '/1.jpg',
    activeImage: '/active_lift_kbeauty.jpg',
    bullets: ['Морський колаген 5000 мг', 'Гіалуронова кислота', 'Вітаміни C та E']
  },
  {
    id: 'glow',
    number: '02',
    name: 'MyCollagenGlow',
    boldHeadline: 'MyCollagenGlow — морський колаген зі Швейцарії для сяйва шкіри, міцного волосся та нігтів',
    flavor: 'Смак: натуральна маракуйя',
    price: '4 400 ₴',
    rating: 5.0,
    accentColor: '#16a34a',
    image: '/2.jpg',
    activeImage: '/active_glow_kbeauty.jpg',
    bullets: ['Біотин & Високий Цинк', 'Пептиди колагену', 'Галакто-олігосахариди']
  },
  {
    id: 'repair',
    number: '03',
    name: 'MyCollagenRepair',
    boldHeadline: 'MyCollagenRepair — клітинна регенерація, детокс та захист колагенових волокон від глікації',
    flavor: 'Без ароматизаторів. Без стевії.',
    price: '8 200 ₴',
    rating: 5.0,
    accentColor: '#ea580c',
    image: '/3.jpg',
    activeImage: '/active_repair_kbeauty.jpg',
    bullets: ['Коензим Q10 & Розторопша', 'Пептиди колагену', 'Антиоксиданти SOD']
  },
  {
    id: 'contour',
    number: '04',
    name: 'MyBodyContour',
    boldHeadline: 'MyBodyContour — швейцарська формула для схуднення, тонусу м’язів та зменшення целюліту',
    flavor: 'Без ароматизаторів. Без стевії.',
    price: '7 800 ₴',
    rating: 4.0,
    accentColor: '#7c3aed',
    image: '/4.jpg',
    activeImage: '/active_contour_kbeauty.jpg',
    bullets: ['Кофеїн & Зелений чай', 'SOD Антиоксиданти', 'Пептиди для тонусу']
  }
];

export const ProductLineupSection: React.FC = () => {
  // ALL columns are INACTIVE (null) by default!
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="product-lineup"
      onMouseLeave={() => setActiveId(null)} // Revert all to inactive when mouse leaves
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        scrollSnapAlign: 'start',
        boxSizing: 'border-box',
        backgroundColor: '#fafafa',
        perspective: '1200px'
      }}
    >
      {/* ================= 4 STATIC VERTICAL COLUMNS ================= */}
      {PRODUCTS.map((prod, index) => {
        const isActive = activeId === prod.id;

        return (
          <div
            key={prod.id}
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
                objectPosition: 'center top',
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
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.85) 100%)'
                  : 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)',
                transition: 'all 0.5s ease',
                pointerEvents: 'none'
              }}
            />

            {/* Column Layout Layer */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'calc(88px + 1.5rem) 1.75rem 2.25rem 1.75rem',
                boxSizing: 'border-box'
              }}
            >
              {/* TOP BAR: Tag (Left) + 5 Gold Stars Rating (Right Top) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '11.5px',
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
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>
                    {prod.rating.toFixed(1)}
                  </span>
                  <span style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '1px' }}>
                    ★★★★★
                  </span>
                </div>
              </div>

              {/* ================= INACTIVE STATE (ALL 4 ARE INACTIVE BY DEFAULT!) ================= */}
              {!isActive && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    animation: 'fadeInSlow 0.4s ease forwards'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '21px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.15
                      }}
                    >
                      {prod.name}
                    </h3>
                    <span style={{ fontSize: '19px', fontWeight: 700, color: '#ffffff' }}>
                      {prod.price}
                    </span>
                  </div>

                  {/* Flavor Badge without Fruit Icon */}
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.95)' }}>
                    {prod.flavor}
                  </span>

                  {/* Cosmetic Icon Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '0.2rem' }}>
                    {prod.bullets.map((b, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '12px',
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
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    animation: 'surfaceRise 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  }}
                >
                  {/* Title & Price Header */}
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h3
                      style={{
                        fontSize: '25px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.1
                      }}
                    >
                      {prod.name}
                    </h3>

                    <span
                      style={{
                        fontSize: '23px',
                        fontWeight: 700,
                        color: '#ffffff'
                      }}
                    >
                      {prod.price}
                    </span>
                  </div>

                  {/* Stock Status Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.65rem' }}>
                    <span style={{ color: '#22c55e', fontSize: '10px' }}>●</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff' }}>
                      В наявності
                    </span>
                  </div>

                  {/* Bold Headline Paragraph */}
                  <p
                    style={{
                      fontSize: '13px',
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
                        fontSize: '12.5px',
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
                    ПЕРЕЙТИ ДО ТОВАРУ <span className="btn-arrow">→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}

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
