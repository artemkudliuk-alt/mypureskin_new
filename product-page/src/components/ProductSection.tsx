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

const GALLERY_ITEMS = [
  { id: '1', type: 'video', src: '/Hero_screen_collagen.mp4', title: 'Відео-презентація розчинення та текстури' },
  { id: '2', type: 'image', src: '/3.jpg', title: 'Офіційне упакування MyCollagenRepair' },
  { id: '3', type: 'image', src: '/active_repair_kbeauty.jpg', title: 'Швейцарська естетика прийому стіка' },
  { id: '4', type: 'image', src: '/repair_active_model.jpg', title: 'Результат сяйва та відновлення шкіри' },
  { id: '5', type: 'image', src: '/repair_lifestyle_box_sticks.jpg?v=15', title: 'Упаковка та розсипані стіки MyCollagenRepair' },
  { id: '6', type: 'image', src: '/repair_lifestyle_glass_stick.jpg?v=5', title: 'Склянка чистої води зі стіком MyCollagenRepair' },
  { id: '7', type: 'image', src: '/storyboard_repair/shot_3_sachet.jpg', title: 'Приготування напою молодості' },
  { id: '8', type: 'image', src: '/storyboard_repair/shot_4_packshot.jpg', title: 'Преміальний набір MyPureSkin' }
];

const ACCORDION_TABS = [
  {
    id: 'nutrition',
    title: 'Харчова та енергетична цінність',
    items: [
      'Енергетична цінність — 25 ккал (на 1 стік 6,5 г)',
      'Білки (гідролізований білок) — 5,42 г',
      'Вуглеводи — 0,65 г (з них цукри — 0,07 г)',
      'Жири — 0,14 г (з них насичені — 0,02 г)',
      'Харчова клітковина — 0,03 г, Сіль — 0,02 г'
    ]
  },
  {
    id: 'duration',
    title: 'Клінічні результати (28-90 днів)',
    items: [
      '82,5% — значне зволоження та зменшення глибини зморшок',
      '86% — покращення пружності та сяйва шкіри',
      '75% — зміцнення волосся, зменшення ламкості нігтів',
      '87,5% — зниження оксидативного стресу та підтримка суглобів'
    ]
  },
  {
    id: 'standards',
    title: 'Швейцарська сертифікація та якість',
    items: [
      '100% виготовлено в Швейцарії (GMP Лозанна, ISO 22000)',
      'Без цукру, стевії, глютену, консервантів та ГМО',
      'Сертифікований халяльний та кошерний морський колаген'
    ]
  }
];

export const ProductSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1); // 1 or 3 packs
  const [quantity, setQuantity] = useState<number>(1);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const priceSingle = 8200;
  const pricePack3 = 7380; // per pack

  const currentPrice = selectedOption === 1 ? priceSingle : pricePack3 * 3;
  const activeMedia = GALLERY_ITEMS[activeMediaIndex];

  return (
    <section
      id="product-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#090909',
        padding: '0.75rem 2.5rem 3rem 2.5rem',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="product-hero-grid"
      >
        {/* ========================================================================= */}
        {/* LEFT COLUMN: COMPACT PHOTO & VIDEO GALLERY (BOOKING BENTO)                */}
        {/* ========================================================================= */}
        <div className="product-gallery-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          
          {/* UPPER BLOCK: 1 Horizontal 16:9 Video (Left 2fr) + 2 Stacked Photos (Right 1fr) */}
          <div
            className="product-upper-bento"
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '10px',
              height: '350px',
              maxHeight: '350px',
              minHeight: 0
            }}
          >
            {/* Main Featured Horizontal 16:9 Viewer */}
            <div
              className="product-main-viewer"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxHeight: '350px',
                minHeight: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            >
              {activeMedia.type === 'video' ? (
                <video
                  key={activeMedia.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  src={activeMedia.src}
                />
              ) : (
                <img
                  key={activeMedia.src}
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              )}

              {/* Top Tag on Main Media */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(9, 9, 9, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  pointerEvents: 'none'
                }}
              >
                {activeMedia.type === 'video' ? '▶ Відео-огляд' : '✦ Фото огляд'}
              </div>
            </div>

            {/* Right Stacked 2 Photos (1:1 Ratio) */}
            <div
              className="product-side-stack"
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gap: '10px',
                height: '100%',
                maxHeight: '350px',
                minHeight: 0
              }}
            >
              {/* Photo 2 (Box Packshot) */}
              <div
                onClick={() => setActiveMediaIndex(1)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeMediaIndex === 1 ? '2px solid #090909' : '1px solid rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#ffffff'
                }}
                className="gallery-thumb-interactive"
              >
                <img
                  src={GALLERY_ITEMS[1].src}
                  alt={GALLERY_ITEMS[1].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Photo 3 (Aesthetic Model) */}
              <div
                onClick={() => setActiveMediaIndex(2)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeMediaIndex === 2 ? '2px solid #090909' : '1px solid rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#ffffff'
                }}
                className="gallery-thumb-interactive"
              >
                <img
                  src={GALLERY_ITEMS[2].src}
                  alt={GALLERY_ITEMS[2].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* LOWER BLOCK: 5 Bottom Thumbnails in 1 Row */}
          <div
            className="product-lower-bento"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px',
              height: '74px'
            }}
          >
            {GALLERY_ITEMS.slice(3, 8).map((item, idx) => {
              const actualIndex = idx + 3;
              const isSelected = activeMediaIndex === actualIndex;
              const isLast = idx === 4;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMediaIndex(actualIndex)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #090909' : '1px solid rgba(0, 0, 0, 0.08)',
                    backgroundColor: '#ffffff'
                  }}
                  className="gallery-thumb-interactive"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {isLast && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(9, 9, 9, 0.65)',
                        backdropFilter: 'blur(2px)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: '2px'
                      }}
                    >
                      +8 фото та відео
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Key Advantages Tags (Under Gallery) */}
          <div
            className="product-quick-specs"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.75rem',
              paddingTop: '1.25rem',
              marginTop: '0.5rem',
              borderTop: '1px solid #e4e4e7',
              fontSize: '13px',
              color: '#3f3f46'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontWeight: 800, color: '#090909', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Ідеально для
              </span>
              <span style={{ lineHeight: 1.45 }}>• Клітинне довголіття & детокс</span>
              <span style={{ lineHeight: 1.45 }}>• Захист від глікації (цукрового стресу)</span>
              <span style={{ lineHeight: 1.45 }}>• Глибоке зволоження та пружність</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontWeight: 800, color: '#090909', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Стандарти якості
              </span>
              <span style={{ lineHeight: 1.45 }}>• 100% Swiss Made (GMP Лозанна)</span>
              <span style={{ lineHeight: 1.45 }}>• Без цукру, стевії, ГМО та барвників</span>
              <span style={{ lineHeight: 1.45 }}>• Сертифікований халяль та кошер</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: COMPACT PRODUCT DETAILS & BUY ACTIONS (NO SCROLL NEEDED)    */}
        {/* ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingLeft: '0.5rem'
          }}
          className="product-details-container"
        >
          {/* ── 1. TOP HEADER: Badges + Product Headline (ORDER 1 on Mobile) ── */}
          <div className="product-title-header" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div className="product-badges-rating-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <div className="product-badges-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span
                  className="product-badge-stock"
                  style={{
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    color: '#047857',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ fontSize: '8px', color: '#16a34a' }}>●</span> В наявності
                </span>
                <span
                  className="product-badge-swiss"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    color: '#090909',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <SwissFlagIcon size={12} /> Swiss Made
                </span>
              </div>

              <div className="product-rating-group" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ color: '#f59e0b' }}>★★★★★</span>
                <span style={{ fontWeight: 700, color: '#090909' }}>5.0</span>
                <span style={{ color: '#71717a' }}>(28 відгуків)</span>
              </div>
            </div>

            {/* Product Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: '2.35rem',
                fontWeight: 700,
                color: '#090909',
                margin: '0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
            >
              MyCollagenRepair
            </h1>
          </div>

          {/* ── 2. SUBTITLE & KEY BENEFITS (ORDER 3 on Mobile) ── */}
          <div className="product-desc-block" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <p
              style={{
                fontSize: '13.5px',
                lineHeight: 1.5,
                color: '#52525b',
                margin: 0
              }}
            >
              100% швейцарська натуральна формула потрійного відновлення: нейтралізує глікацію, підтримує мітохондріальну енергію та захищає колагенову матрицю.
            </p>

            {/* Key Benefits Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
              <span style={{ backgroundColor: '#f4f4f5', color: '#3f3f46', fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '12px' }}>
                ✦ 5000 мг морських пептидів &lt;2 кДа
              </span>
              <span style={{ backgroundColor: '#f4f4f5', color: '#3f3f46', fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '12px' }}>
                ✦ Екстракт розмарину & силімарин
              </span>
              <span style={{ backgroundColor: '#f4f4f5', color: '#3f3f46', fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '12px' }}>
                ✦ Коензим Q10 + SOD
              </span>
            </div>
          </div>

          {/* ── 3. COMPACT ACCORDIONS (ORDER 4 on Mobile) ── */}
          <div className="product-accordions-block" style={{ display: 'flex', flexDirection: 'column', gap: '2px', borderTop: '1px solid #f4f4f5', paddingTop: '6px', marginTop: '4px' }}>
            {ACCORDION_TABS.map((tab) => {
              const isOpen = openAccordionId === tab.id;
              return (
                <div
                  key={tab.id}
                  style={{
                    borderBottom: '1px solid #f4f4f5',
                    paddingBottom: '3px'
                  }}
                >
                  <div
                    onClick={() => setOpenAccordionId(isOpen ? null : tab.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      padding: '3px 0',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: isOpen ? '#090909' : '#3f3f46',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span>{tab.title}</span>
                    <span
                      style={{
                        fontSize: '15px',
                        color: isOpen ? '#090909' : '#a1a1aa',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      +
                    </span>
                  </div>

                  {isOpen && (
                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        animation: 'fadeInSlow 0.25s ease forwards'
                      }}
                    >
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: '1.15rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '3px',
                          fontSize: '11.5px',
                          lineHeight: 1.45,
                          color: '#52525b'
                        }}
                      >
                        {tab.items.map((item, idx) => (
                          <li key={idx} style={{ listStyleType: 'disc' }}>
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

          {/* ── 4. BUY BLOCK: Pack selector + Qty + Buttons (ORDER 5 on Mobile) ── */}
          <div className="product-buy-block" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid #e4e4e7', paddingTop: '0.75rem' }}>

            {/* Pack Options Selector (1 Month vs 3 Months) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#090909' }}>
                Оберіть курс прийому:
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {/* 1 Pack Option */}
                <div
                  onClick={() => setSelectedOption(1)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: selectedOption === 1 ? '2px solid #090909' : '1px solid #e4e4e7',
                    backgroundColor: selectedOption === 1 ? '#ffffff' : '#fafafa',
                    boxShadow: selectedOption === 1 ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>1 місяць (1 упаковка)</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#090909', display: 'block', marginTop: '2px' }}>
                    8 200 ₴
                  </span>
                </div>

                {/* 3 Packs Option */}
                <div
                  onClick={() => setSelectedOption(3)}
                  style={{
                    position: 'relative',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: selectedOption === 3 ? '2px solid #090909' : '1px solid #e4e4e7',
                    backgroundColor: selectedOption === 3 ? '#ffffff' : '#fafafa',
                    boxShadow: selectedOption === 3 ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '8px',
                      backgroundColor: '#090909',
                      color: '#ffffff',
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '8px'
                    }}
                  >
                    -10% ЕКОНОМІЯ
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>3 місяці (3 упаковки)</span>
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#090909', display: 'block', marginTop: '2px' }}>
                      22 140 ₴
                    </span>
                    <span style={{ fontSize: '10px', color: '#71717a' }}>
                      (7 380 ₴ / уп.)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Quantity Counter */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f4f4f5', paddingTop: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #e4e4e7',
                  borderRadius: '10px',
                  padding: '5px 12px',
                  gap: '12px',
                  backgroundColor: '#fafafa'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ border: 'none', background: 'none', fontSize: '16px', cursor: 'pointer', fontWeight: 700, color: '#090909' }}
                >
                  -
                </button>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#090909' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ border: 'none', background: 'none', fontSize: '16px', cursor: 'pointer', fontWeight: 700, color: '#090909' }}
                >
                  +
                </button>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#71717a', display: 'block' }}>Сума замовлення:</span>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#090909' }}>
                  {(currentPrice * quantity).toLocaleString('uk-UA')} ₴
                </span>
              </div>
            </div>

            {/* Primary Buy Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', marginTop: '2px' }}>
              <button
                className="btn-buy"
                style={{
                  padding: '13px',
                  fontSize: '13px',
                  backgroundColor: '#090909',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.14)',
                  cursor: 'pointer'
                }}
              >
                ДОДАТИ В КОШИК <ArrowIcon />
              </button>

              <button
                className="btn-buy"
                style={{
                  padding: '13px',
                  fontSize: '13px',
                  backgroundColor: '#fafafa',
                  color: '#090909',
                  border: '1px solid #e4e4e7',
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                КУПИТИ В 1 КЛІК <ArrowIcon />
              </button>
            </div>

            {/* Micro Trust Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.65rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid #f4f4f5'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🚚</span>
                <div style={{ fontSize: '11px', color: '#52525b', lineHeight: 1.3 }}>
                  <strong style={{ color: '#090909', display: 'block' }}>Безкоштовна доставка</strong>
                  Нова Пошта (1-2 дні)
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🛡️</span>
                <div style={{ fontSize: '11px', color: '#52525b', lineHeight: 1.3 }}>
                  <strong style={{ color: '#090909', display: 'block' }}>100% Swiss Quality</strong>
                  Оригінальний сертифікат
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
