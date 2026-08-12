import React, { useState } from 'react';

const PRODUCT_IMAGES = [
  '/card_1.jpg',
  '/card_2.jpg',
  '/card_3.jpg',
  '/card_4.jpg'
];

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
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number>(1); // 1 or 3 packs
  const [quantity, setQuantity] = useState<number>(1);
  const [showMoreDetails, setShowMoreDetails] = useState<boolean>(false);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const priceSingle = 8200;
  const pricePack3 = 7380; // per pack

  const currentPrice = selectedOption === 1 ? priceSingle : pricePack3 * 3;

  const toggleTab = (id: string) => {
    setOpenTab(openTab === id ? null : id);
  };

  return (
    <section
      id="product-section"
      style={{
        backgroundColor: '#fbfbfb',
        background: 'linear-gradient(180deg, #ffffff 0%, #f7f7f8 100%)',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(88px + 2.5rem) 3.5rem 2.5rem 3.5rem',
        borderTop: '1px solid #eaeaea',
        scrollSnapAlign: 'start',
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4.5rem',
          alignItems: 'start'
        }}
        className="product-hero-grid"
      >
        {/* Left Column: Vertical Thumbnails + Full Frame Image Canvas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '84px 1fr',
            gap: '1.25rem',
            alignItems: 'start'
          }}
          className="product-gallery-layout reveal-on-scroll stagger-1"
        >
          {/* Vertical Thumbnail Strip on Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            {PRODUCT_IMAGES.map((img, idx) => {
              const isSelected = selectedImg === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '14px',
                    border: isSelected ? '2px solid #090909' : '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    padding: '6px',
                    boxShadow: isSelected
                      ? '0 6px 18px rgba(0,0,0,0.12)'
                      : '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isSelected ? 1 : 0.75,
                    transform: isSelected ? 'scale(1.04)' : 'scale(1)'
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Main Large Image Canvas - Picture Fills the Entire Frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              maxHeight: '580px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0
            }}
          >
            <img
              src={PRODUCT_IMAGES[selectedImg]}
              alt="MyCollagenRepair Product"
              className="animate-fade"
              key={selectedImg}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Right Column: Details, Accordions & Purchase Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="reveal-on-scroll stagger-2">

          {/* Category Tag & Rating Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6b7280'
              }}
            >
              Антивікова Формула • MyPureSkin
            </span>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                padding: '4px 12px',
                borderRadius: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <span style={{ color: '#f59e0b', fontSize: '13px' }}>★★★★★</span>
              <span style={{ fontWeight: 700, fontSize: '13.5px', color: '#111827' }}>5.0</span>
              <span style={{ color: '#9ca3af', fontSize: '12.5px' }}>(28 відгуків)</span>
            </div>
          </div>

          {/* Product Title */}
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 3.8vw, 3.2rem)',
              lineHeight: 1.12,
              color: '#090909',
              letterSpacing: '-0.01em'
            }}
          >
            MyCollagenRepair
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#4b5563',
              fontWeight: 400
            }}
          >
            100% швейцарська натуральна формула, створена для відновлення колагену, уповільнення клітинного старіння та збереження біологічної молодості. Захищає від глікації та оксидативного стресу.
          </p>

          {/* Button: Смотреть больше / Детальніше про склад та переваги */}
          <div>
            <button
              onClick={() => setShowMoreDetails(!showMoreDetails)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: '14.5px',
                fontWeight: 600,
                color: '#090909',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              <span>{showMoreDetails ? 'Сховати деталі ▲' : 'Дивитися більше (Переваги, склад та цінність) ▼'}</span>
            </button>
          </div>

          {/* Collapsible Accordions List (Hidden by default, shown when showMoreDetails is true) */}
          {showMoreDetails && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid #e5e7eb',
                marginTop: '0.25rem'
              }}
              className="animate-fade"
            >
              {ACCORDION_TABS.map((tab) => {
                const isOpen = openTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    style={{
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    <button
                      onClick={() => toggleTab(tab.id)}
                      style={{
                        width: '100%',
                        padding: '14px 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: '15.5px',
                        fontWeight: 600,
                        color: '#090909',
                        textAlign: 'left'
                      }}
                    >
                      <span>{tab.title}</span>
                      <span style={{ fontSize: '18px', fontWeight: 400, color: '#6b7280' }}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{ paddingBottom: '16px', fontSize: '14px', color: '#4b5563', lineHeight: 1.55 }}>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                          {tab.items.map((item, i) => (
                            <li key={i} style={{ marginBottom: '6px' }}>
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
          )}

          {/* Option Cards Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#374151' }}>
              Оберіть курс прийому:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Option 1: 1 Pack */}
              <div
                onClick={() => setSelectedOption(1)}
                style={{
                  padding: '16px 14px',
                  borderRadius: '14px',
                  border: selectedOption === 1 ? '2px solid #090909' : '1px solid #e5e7eb',
                  backgroundColor: selectedOption === 1 ? '#ffffff' : '#ffffff',
                  cursor: 'pointer',
                  boxShadow: selectedOption === 1
                    ? '0 6px 18px rgba(0, 0, 0, 0.08)'
                    : '0 2px 6px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#6b7280' }}>
                  1 місяць (1 упаковка)
                </span>
                <span style={{ fontSize: '19px', fontWeight: 700, color: '#090909' }}>
                  8 200 ₴
                </span>
              </div>

              {/* Option 3: 3 Packs (Save 10%) */}
              <div
                onClick={() => setSelectedOption(3)}
                style={{
                  position: 'relative',
                  padding: '16px 14px',
                  borderRadius: '14px',
                  border: selectedOption === 3 ? '2px solid #090909' : '1px solid #e5e7eb',
                  backgroundColor: selectedOption === 3 ? '#ffffff' : '#ffffff',
                  cursor: 'pointer',
                  boxShadow: selectedOption === 3
                    ? '0 6px 18px rgba(0, 0, 0, 0.08)'
                    : '0 2px 6px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '12px',
                    backgroundColor: '#515357',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}
                >
                  ЕКОНОМІЯ 10%
                </span>
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#6b7280' }}>
                  3 місяці (3 упаковки)
                </span>
                <div>
                  <span style={{ fontSize: '19px', fontWeight: 700, color: '#090909' }}>
                    22 140 ₴
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#9ca3af', display: 'block', marginTop: '1px' }}>
                    (7 380 ₴ / шт)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing, Quantity Counter & CTA Row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: '#ffffff',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Quantity Counter */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '10px',
                  padding: '4px 10px',
                  gap: '14px'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    border: 'none',
                    background: 'none',
                    fontSize: '18px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: '#374151',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#090909' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    border: 'none',
                    background: 'none',
                    fontSize: '18px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: '#374151',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  +
                </button>
              </div>

              {/* Total Calculated Price */}
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11.5px', color: '#9ca3af', display: 'block' }}>Разом до сплати</span>
                <span style={{ fontSize: '26px', fontWeight: 700, color: '#090909' }}>
                  {(currentPrice * quantity).toLocaleString('uk-UA')} ₴
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.85rem' }}>
              <button
                className="btn-buy"
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '14.5px',
                  backgroundColor: '#090909',
                  borderRadius: '30px'
                }}
              >
                ДОДАТИ В КОШИК
              </button>

              <button
                className="btn-buy"
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '14px',
                  backgroundColor: '#ffffff',
                  color: '#090909',
                  border: '1px solid #090909',
                  borderRadius: '30px',
                  boxShadow: 'none'
                }}
              >
                КУПИТИ В 1 КЛІК
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
          .product-gallery-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
