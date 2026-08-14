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
    id: 'benefits',
    title: 'Переваги та дія',
    items: [
      'Відновлює колагенову матрицю, пошкоджену процесами глікації',
      'Потрійна антиоксидантна, протизапальна та антиглікаційна функція',
      'Захищає клітини шкіри від оксидативного стресу та фотостаріння',
      'Детоксикує печінку, організм і відновлює рівний тон обличчя',
      'Зміцнює м’язи, суглоби, зв’язки та волосяні фолікули'
    ]
  },
  {
    id: 'ingredients',
    title: 'Склад та інгредієнти',
    items: [
      'Морські колагенові пептиди <2 кДа (гідролізований колаген) — 5000 мг',
      'Гіалуронова кислота низькомолекулярна — 120 мг',
      'Екстракт ацероли (натуральний вітамін C) — 320 мг (80 мг, 100% NRV)',
      'Натуральний вітамін E — 18 мг (150% NRV)',
      'Екстракт розмарину (розмаринова кислота) — 50 мг',
      'Екстракт розторопші (силімарин) — 100 мг',
      'Коензим Q10 (убіхінон) — 30 мг'
    ]
  },
  {
    id: 'usage',
    title: 'Спосіб застосування та дозування',
    items: [
      '1 стік на день, розчинений у 150-200 мл води кімнатної температури',
      'Рекомендовано приймати вранці під час або після сніданку',
      'Мінімальний курс: 28 днів (1 упаковка) для появи перших результатів',
      'Оптимальний антивіковий курс: 3 місяці (3 упаковки) для закріплення ефекту'
    ]
  },
  {
    id: 'nutrition',
    title: 'Харчова та енергетична цінність',
    items: [
      'Енергетична цінність — 25 ккал (на 1 стік 6,5 г)',
      'Білки (гідролізований білок) — 5,42 г',
      'Вуглеводи — 0,65 г (з них цукри — 0,07 г)',
      'Жири — 0,14 г (з них насичені — 0,02 г)',
      'Харчова клітковина — 0,03 г',
      'Сіль — 0,02 г'
    ]
  },
  {
    id: 'duration',
    title: 'Клінічні результати (28-90 днів)',
    items: [
      '82,5% випробуваних — значне зволоження та зменшення глибини зморшок',
      '86% — покращення пружності, відновлення сяйва та гладкості шкіри',
      '75% — зміцнення волосся, зменшення ламкості нігтів',
      '87,5% — зниження оксидативного стресу та підтримка рухливості суглобів'
    ]
  },
  {
    id: 'standards',
    title: 'Швейцарська сертифікація та якість',
    items: [
      '100% виготовлено в Швейцарії (Swiss Made Quality Certificate)',
      'Відповідає фармацевтичним стандартам GMP та ISO 22000',
      'Без ГМО, глютену, консервантів, штучних ароматизаторів та стевії',
      'Сертифікований халяльний та кошерний морський колаген високої очистки'
    ]
  }
];

export const ProductSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1); // 1 or 3 packs
  const [quantity, setQuantity] = useState<number>(1);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0); // Default ALWAYS 0 (Video)
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

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
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#090909',
        padding: 'calc(88px + 1.25rem) 1.75rem 3.5rem 1.75rem',
        boxSizing: 'border-box',
        scrollSnapAlign: 'start'
      }}
    >
      <div
        style={{
          maxWidth: '1680px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="product-hero-grid"
      >
        {/* ========================================================================= */}
        {/* LEFT COLUMN: BOOKING.COM 1:1 PHOTO GRID LAYOUT (CLEAN WHITE TEXT ITEMS)   */}
        {/* ========================================================================= */}
        <div className="product-gallery-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          
          {/* UPPER BLOCK: 1 Horizontal 16:9 Video (Left 2fr) + 2 Stacked Photos (Right 1fr) */}
          <div
            className="product-upper-bento"
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '10px',
              height: '400px',
              maxHeight: '400px',
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
                maxHeight: '400px',
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
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                >
                  <source src={activeMedia.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />
              )}
            </div>

            {/* 2 Stacked Horizontal Photos (Right Column) */}
            <div
              className="product-bento-side-column"
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gap: '10px',
                height: '100%',
                maxHeight: '400px',
                minHeight: 0
              }}
            >
              {GALLERY_ITEMS.slice(1, 3).map((item, idx) => {
                const globalIdx = idx + 1;
                const isSelected = activeMediaIndex === globalIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveMediaIndex(globalIdx)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      maxHeight: '195px',
                      minHeight: 0,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: '#f4f4f5',
                      cursor: 'pointer',
                      border: isSelected ? '2px solid #090909' : '1px solid rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '195px',
                        objectFit: 'cover',
                        display: 'block',
                        opacity: isSelected ? 1 : 0.88,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* LOWER BLOCK: Clean Row of Preview Tiles */}
          <div
            className="product-lower-bento"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px',
              height: '110px',
              maxHeight: '110px',
              minHeight: 0,
              marginTop: '2px'
            }}
          >
            {GALLERY_ITEMS.slice(3, 8).map((item, idx) => {
              const globalIdx = idx + 3;
              const isSelected = activeMediaIndex === globalIdx;
              const isLast = idx === 4; // 5th tile in lower row

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMediaIndex(globalIdx)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    maxHeight: '110px',
                    minHeight: 0,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    backgroundColor: '#f4f4f5',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #090909' : '1px solid rgba(0, 0, 0, 0.08)',
                    opacity: isSelected ? 1 : 0.88,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '110px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* 5th Tile Glass Overlay "+8 фото та відео" / Animated Arrow on Mobile */}
                  {isLast && (
                    <div
                      className="gallery-last-tile-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(9, 9, 9, 0.65)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: '4px'
                      }}
                    >
                      <span className="gallery-last-tile-text">+8 фото та відео</span>
                      <span className="gallery-last-tile-arrow">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-bounce">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Lower Left 2-Column IDEAL FOR List (Pure White, No Pill Bubbles, No Borders) */}
          <div
            style={{
              marginTop: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
              padding: '0.2rem 0'
            }}
          >
            {/* Category Label */}
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#71717a', textTransform: 'uppercase' }}>
              ІДЕАЛЬНО ДЛЯ / IDEAL FOR
            </div>

            {/* 2-Column Bullet List: Column 1 (5 items), Column 2 (4 items) */}
            <div
              className="product-ideal-for-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 1fr',
                gap: '0.55rem 2.25rem',
                fontSize: '13px',
                color: '#18181b',
                lineHeight: 1.5
              }}
            >
              {/* COLUMN 1: 5 items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'Клітинне довголіття',
                  'Захист від глікації',
                  'Контроль запалень',
                  'Протизапальна дія',
                  'Відновлення після стресу'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#52525b', flexShrink: 0, display: 'inline-block' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* COLUMN 2: 4 items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'Профілактика клітинного старіння',
                  'Мітохондріальна енергія',
                  'Відновлення м’язів та суглобів',
                  'Клітинне перезавантаження'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#52525b', flexShrink: 0, display: 'inline-block' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulation & Recommendation Footer Bar */}
            <div
              className="product-formula-footer"
              style={{
                marginTop: '0.85rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid #f4f4f5',
                display: 'grid',
                gridTemplateColumns: '1.15fr 1fr',
                gap: '2.25rem',
                alignItems: 'center',
                fontSize: '12.5px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#a1a1aa', fontWeight: 800, fontSize: '11px', letterSpacing: '0.05em' }}>ФОРМУЛА:</span>
                <span style={{ fontWeight: 700, color: '#090909' }}>Без ароматизаторів · Без цукру та стевії</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#a1a1aa', fontWeight: 800, fontSize: '11px', letterSpacing: '0.05em' }}>РЕКОМЕНДОВАНО:</span>
                <span style={{ fontWeight: 700, color: '#090909' }}>
                  лікарями та швейцарськими експертами
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: STICKY SCROLLABLE PRODUCT DETAILS (WHITE CLEAN THEME)      */}
        {/* ========================================================================= */}
        <div
          style={{
            position: 'sticky',
            top: 'calc(88px + 1.25rem)',
            maxHeight: 'calc(100vh - 110px)',
            overflowY: 'auto',
            paddingRight: '0.75rem',
            paddingBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            scrollBehavior: 'smooth',
            overscrollBehavior: 'contain'
          }}
          className="product-details-scrollable"
        >

          {/* ── TOP BLOCK: Badges + Title + Accordions ── */}
          <div className="product-info-top" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Top Badges & Ratings */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  backgroundColor: 'rgba(5, 150, 105, 0.1)',
                  color: '#047857',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11.5px',
                  fontWeight: 700
                }}
              >
                ● В наявності
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  color: '#090909',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 700
                }}
              >
                <SwissFlagIcon size={14} /> Swiss Made
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14.5px' }}>
              <span style={{ color: '#f59e0b' }}>★★★★★</span>
              <span style={{ fontWeight: 700, color: '#090909' }}>5.0</span>
              <span style={{ color: '#71717a' }}>(28 відгуків)</span>
            </div>
          </div>

          {/* Product Headline + Expandable Description */}
          <div>
            <h1
              className="font-serif"
              style={{
                fontSize: '2.65rem',
                fontWeight: 700,
                color: '#090909',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
            >
              MyCollagenRepair
            </h1>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#52525b',
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: isDescExpanded ? 'unset' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: isDescExpanded ? 'visible' : 'hidden',
                transition: 'all 0.3s ease'
              } as React.CSSProperties}
            >
              100% швейцарська натуральна формула, створена для відновлення колагену, уповільнення клітинного старіння та збереження біологічної молодості. Пригнічує глікацію, підтримує мітохондріальну енергію та захищає від оксидативного стресу.
            </p>
            {/* Mobile-only expand toggle */}
            <button
              className="desc-toggle-btn"
              onClick={() => setIsDescExpanded(prev => !prev)}
              style={{
                display: 'none', // shown only on mobile via CSS
                background: 'none',
                border: 'none',
                padding: '4px 0 0 0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#090909',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px'
              }}
            >
              {isDescExpanded ? 'Згорнути ▲' : 'Читати більше ▼'}
            </button>
          </div>

          {/* Expandable Product Specs & Accordions */}
          <div className="product-accordions-grid" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid #e4e4e7', paddingTop: '1rem' }}>
            {ACCORDION_TABS.map((tab) => {
              const isOpen = openAccordionId === tab.id;
              return (
                <div
                  key={tab.id}
                  style={{
                    borderBottom: '1px solid #f4f4f5',
                    paddingBottom: '0.65rem'
                  }}
                >
                  <div
                    onClick={() => setOpenAccordionId(isOpen ? null : tab.id)}
                    className="product-accordion-title"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      padding: '0.4rem 0',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: isOpen ? '#090909' : '#3f3f46',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span>{tab.title}</span>
                    <span
                      style={{
                        fontSize: '18px',
                        color: isOpen ? '#090909' : '#a1a1aa',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      +
                    </span>
                  </div>

                  {isOpen && (
                    <div
                      style={{
                        paddingTop: '0.5rem',
                        animation: 'fadeInSlow 0.3s ease forwards'
                      }}
                    >
                      <ul
                        className="product-accordion-items"
                        style={{
                          margin: 0,
                          paddingLeft: '1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem',
                          fontSize: '12.5px',
                          lineHeight: 1.55,
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

          </div> {/* END product-info-top */}

          {/* ── BUY BLOCK: Pack selector + Qty + Buttons + Trust ── */}
          <div className="product-buy-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Pack Options Selector (1 Month vs 3 Months) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span className="product-pack-label" style={{ fontSize: '13px', fontWeight: 700, color: '#090909' }}>
              Оберіть зручний варіант для себе:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              {/* 1 Pack Option */}
              <div
                onClick={() => setSelectedOption(1)}
                className="product-pack-option"
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: selectedOption === 1 ? '2px solid #090909' : '1px solid #e4e4e7',
                  backgroundColor: selectedOption === 1 ? '#ffffff' : '#fafafa',
                  boxShadow: selectedOption === 1 ? '0 4px 14px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#090909' }}>1 місяць (1 упаковка)</span>
                <span className="product-pack-price" style={{ fontSize: '17px', fontWeight: 800, color: '#090909', display: 'block', marginTop: '4px' }}>
                  8 200 ₴
                </span>
              </div>

              {/* 3 Packs Option */}
              <div
                onClick={() => setSelectedOption(3)}
                className="product-pack-option"
                style={{
                  position: 'relative',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: selectedOption === 3 ? '2px solid #090909' : '1px solid #e4e4e7',
                  backgroundColor: selectedOption === 3 ? '#ffffff' : '#fafafa',
                  boxShadow: selectedOption === 3 ? '0 4px 14px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-9px',
                    right: '10px',
                    backgroundColor: '#090909',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}
                >
                  ЕКОНОМІЯ 10%
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#090909' }}>3 місяці (3 упаковки)</span>
                <div>
                  <span style={{ fontSize: '17px', fontWeight: 800, color: '#090909', display: 'block', marginTop: '4px' }}>
                    22 140 ₴
                  </span>
                  <span style={{ fontSize: '11px', color: '#71717a' }}>
                    (7 380 ₴ / уп.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Quantity Counter */}
          <div className="product-qty-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e4e4e7', paddingTop: '1rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e4e4e7',
                borderRadius: '10px',
                padding: '6px 14px',
                gap: '14px',
                backgroundColor: '#fafafa'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 700, color: '#090909' }}
              >
                -
              </button>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#090909' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 700, color: '#090909' }}
              >
                +
              </button>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '12px', color: '#71717a', display: 'block' }}>Загальна вартість:</span>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#090909' }}>
                {(currentPrice * quantity).toLocaleString('uk-UA')} ₴
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.85rem' }}>
            <button
              className="btn-buy"
              style={{
                padding: '14px',
                fontSize: '13.5px',
                backgroundColor: '#090909',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                cursor: 'pointer'
              }}
            >
              ДОДАТИ В КОШИК <ArrowIcon />
            </button>

            <button
              className="btn-buy"
              style={{
                padding: '14px',
                fontSize: '13.5px',
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

          {/* Trust Guarantees Block (Re-placed under Buy Buttons with ample scroll space) */}
          <div
            style={{
              marginTop: '0.85rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.85rem',
              paddingTop: '1rem',
              borderTop: '1px solid #f4f4f5'
            }}
          >
            {/* Card 1: Delivery */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#fafafa', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#090909" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-1">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>
                  Безкоштовна доставка
                </div>
                <div style={{ fontSize: '11px', color: '#71717a', lineHeight: 1.35 }}>
                  По всій Україні (1-2 дні)
                </div>
              </div>
            </div>

            {/* Card 2: Swiss Original */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#fafafa', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
                <SwissFlagIcon size={18} />
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>
                  100% Swiss Original
                </div>
                <div style={{ fontSize: '11px', color: '#71717a', lineHeight: 1.35 }}>
                  Сертифікат з Лозанни
                </div>
              </div>
            </div>

            {/* Card 3: Certificate */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#fafafa', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#090909" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-3">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>
                  Гарантія GMP & ISO
                </div>
                <div style={{ fontSize: '11px', color: '#71717a', lineHeight: 1.35 }}>
                  Халяль та Кошер колаген
                </div>
              </div>
            </div>

            {/* Card 4: Secure Payment */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: '#fafafa', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#090909" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="animate-icon-4">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#090909' }}>
                  Безпечна оплата
                </div>
                <div style={{ fontSize: '11px', color: '#71717a', lineHeight: 1.35 }}>
                  Офіційний фіскальний чек
                </div>
              </div>
            </div>
          </div> {/* END trust grid */}
          </div> {/* END product-buy-bottom */}
        </div> {/* END product-details-scrollable */}
      </div> {/* END product-hero-grid */}
    </section>
  );
};
