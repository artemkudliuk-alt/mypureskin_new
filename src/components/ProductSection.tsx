import React, { useState } from 'react';

const ACCORDION_TABS = [
  {
    id: 'benefits',
    title: 'Переваги',
    items: [
      'Відновлює колаген, пошкоджений глікацією',
      'Має потрійну антиоксидантну, протизапальну та антиглікаційну дію',
      'Захищає клітини від оксидативного стресу',
      'Детоксикує організм і шкіру',
      'Зміцнює м’язи, суглоби та зв’язки'
    ]
  },
  {
    id: 'ingredients',
    title: 'Інгредієнти',
    items: [
      'Морські колагенові пептиди <2 кДа (гідролізований колаген) — 5000 мг',
      'Гіалуронова кислота — 120 мг',
      'Екстракт ацероли — 320 мг (вітамін C — 80 мг, 100% NRV)',
      'Вітамін E — 18 мг (150% NRV)',
      'Розмаринова кислота — 50 мг',
      'Силімарин (Розторопша) — 100 мг',
      'Коензим Q10 — 30 мг'
    ]
  },
  {
    id: 'nutrition',
    title: 'Харчова цінність',
    items: [
      'Енергетична цінність — 25 ккал (на 1 стік 6,5 г)',
      'Жири — 0,14 г',
      'Вуглеводи — 0,65 г (цукри — 0,07 г)',
      'Клітковина — 0,03 г',
      'Білки — 5,42 г',
      'Сіль — 0,02 г'
    ]
  },
  {
    id: 'duration',
    title: 'Тривалість і результати',
    items: [
      '82,5% — краща гідратація та розгладження шкіри',
      '86% — відновлений тон та сяйво обличчя',
      '75% — зміцнене волосся та швидкий ріст',
      '87,5% — міцніші нігті та підтримка суглобів'
    ]
  }
];

export const ProductSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1); // 1 or 3 packs
  const [quantity, setQuantity] = useState<number>(1);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const priceSingle = 8200;
  const pricePack3 = 7380; // per pack

  const currentPrice = selectedOption === 1 ? priceSingle : pricePack3 * 3;

  return (
    <section
      id="product-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#090909',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        scrollSnapAlign: 'start',
        boxSizing: 'border-box'
      }}
    >
      {/* Full Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src="/Hero_screen_collagen.mp4" type="video/mp4" />
      </video>

      {/* Soft & Smooth Dark Gradient Overlay on the Left */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '62%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(9, 9, 9, 0.88) 0%, rgba(9, 9, 9, 0.55) 50%, rgba(9, 9, 9, 0) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: 'calc(88px + 2rem) 3.5rem 3rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: 'minmax(340px, 540px) 1fr',
          gap: '2.5rem'
        }}
      >
        {/* Left Information Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#ffffff' }}>

          {/* Stock & Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '500px' }}>
            <span
              style={{
                backgroundColor: 'rgba(5, 150, 105, 0.25)',
                color: '#34d399',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                padding: '3px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}
            >
              ● В наявності
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: '#ffffff' }}>
              <span style={{ color: '#fbbf24', textShadow: '0 0 8px rgba(251, 191, 36, 0.8)' }}>★★★★★</span>
              <span style={{ fontWeight: 700 }}>5.0</span>
              <span style={{ color: '#d1d5db' }}>(28 відгуків)</span>
            </div>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.3rem, 3.6vw, 3.2rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            MyCollagenRepair
          </h2>

          <p
            style={{
              fontSize: '13.5px',
              lineHeight: 1.55,
              color: '#d1d5db',
              fontWeight: 400,
              maxWidth: '500px',
              letterSpacing: '0.01em'
            }}
          >
            100% швейцарська натуральна формула, створена для відновлення колагену, уповільнення клітинного старіння та збереження біологічної молодості. MyCollagenRepair бореться з глікацією, підтримує мітохондріальну енергію та захищає від оксидативного стресу.
          </p>

          {/* Embedded Product Accordion Hover Popovers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', maxWidth: '500px', margin: '0.2rem 0', position: 'relative' }}>
            {ACCORDION_TABS.map((tab) => {
              const isHovered = hoveredTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => setHoveredTab(isHovered ? null : tab.id)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.2s ease'
                  }}
                  className="accordion-trigger-row"
                >
                  <span style={{ transition: 'color 0.2s ease' }}>{tab.title}</span>
                  <span
                    style={{
                      fontSize: '17px',
                      color: isHovered ? '#ffffff' : '#9ca3af',
                      transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease, color 0.2s ease'
                    }}
                  >
                    +
                  </span>

                  {/* Floating Glassmorphism Popover Card (Shows On Hover) */}
                  {isHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 90,
                        marginTop: '4px',
                        backgroundColor: 'rgba(18, 18, 22, 0.94)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px',
                        padding: '1.25rem 1.5rem',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        pointerEvents: 'none',
                        animation: 'glassScaleUp 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                      }}
                    >
                      <h4
                        className="font-serif"
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '0.75rem',
                          paddingBottom: '0.4rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {tab.title}
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: '1.1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        {tab.items.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: '12.5px',
                              lineHeight: 1.5,
                              color: 'rgba(255, 255, 255, 0.9)',
                              listStyleType: 'disc'
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Option Packs Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#d1d5db' }}>
              Оберіть зручний варіант для себе:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', maxWidth: '500px' }}>
              {/* 1 Pack Option */}
              <div
                onClick={() => setSelectedOption(1)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: selectedOption === 1 ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: selectedOption === 1 ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff' }}>1 місяць (1 упаковка)</span>
                <span style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', display: 'block', marginTop: '4px' }}>
                  8 200 ₴
                </span>
              </div>

              {/* 3 Packs Option */}
              <div
                onClick={() => setSelectedOption(3)}
                style={{
                  position: 'relative',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: selectedOption === 3 ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: selectedOption === 3 ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-9px',
                    right: '10px',
                    backgroundColor: '#ffffff',
                    color: '#090909',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '10px'
                  }}
                >
                  ЕКОНОМІЯ 10%
                </span>
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff' }}>3 місяці (3 упаковки)</span>
                <div>
                  <span style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', display: 'block', marginTop: '4px' }}>
                    22 140 ₴
                  </span>
                  <span style={{ fontSize: '11px', color: '#d1d5db' }}>
                    (7 380 ₴ / уп.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Quantity & Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '10px',
                  padding: '5px 12px',
                  gap: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ border: 'none', background: 'none', fontSize: '17px', cursor: 'pointer', fontWeight: 700, color: '#ffffff' }}
                >
                  -
                </button>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ border: 'none', background: 'none', fontSize: '17px', cursor: 'pointer', fontWeight: 700, color: '#ffffff' }}
                >
                  +
                </button>
              </div>

              <div style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>
                {(currentPrice * quantity).toLocaleString('uk-UA')} ₴
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem' }}>
              <button
                className="btn-buy"
                style={{
                  padding: '14px',
                  fontSize: '13.5px',
                  backgroundColor: '#ffffff',
                  color: '#090909',
                  border: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(255,255,255,0.2)',
                  cursor: 'pointer'
                }}
              >
                ДОДАТИ В КОШИК <span className="btn-arrow">→</span>
              </button>

              <button
                className="btn-buy"
                style={{
                  padding: '14px',
                  fontSize: '13.5px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 600,
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                КУПИТИ В 1 КЛІК <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1080px) {
          .product-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
