import React, { useState } from 'react';
import { OfficialLeafletModal } from './OfficialLeafletModal';
import { AnimatedNumber } from './AnimatedNumber';

const SwissFlagIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <span className="swiss-flag-animated">
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
  </span>
);

const STAGES = [
  {
    month: 1,
    periodTag: '1 МІСЯЦЬ',
    title: 'Активна регенерація',
    subtitle: 'Початок виведення токсинів та глибоке зволоження',
    description: 'Активація внутрішньоклітинного обміну. Шкіра отримує першу порцію пептидів колагену та гіалуронової кислоти, повертається нормальний гідроліпідний баланс.',
    stats: [
      { label: 'Зволоження шкіри', value: '+35%' },
      { label: 'Гладкість рельєфу', value: '+22%' }
    ]
  },
  {
    month: 2,
    periodTag: '2 МІСЯЦІ',
    title: 'Глибока реструктуризація',
    subtitle: 'Пригнічення глікації та зміцнення волокон',
    description: 'Екстракт розмарину блокує цукрове руйнування колагену. Зменшується глибина мімічних зморшок, підтягується овал обличчя та покращується колір шкіри.',
    stats: [
      { label: 'Зменшення зморшок', value: '-28%' },
      { label: 'Пружність тканин', value: '+54%' }
    ]
  },
  {
    month: 3,
    periodTag: '3+ МІСЯЦІ',
    title: 'Повне клітинне омолодження',
    subtitle: 'Максимальна щільність та тривалий анти-ейдж захист',
    description: 'Повне оновлення епідермісу та глибокої дерми. Формується стійкий захисний бар’єр від оксидативного стресу та фотостаріння.',
    stats: [
      { label: 'Скорочення зморшок', value: '-43%' },
      { label: 'Загальний тонус', value: '+86%' }
    ]
  }
];

const INGREDIENTS_LIST = [
  {
    id: 'collagen',
    name: 'Гідролізований морський колаген',
    dose: '5000 мг',
    desc: 'Морські пептиди I та III типу для відновлення пружності та щільності шкіри.',
    bgImg: '/ing_collagen.jpg'
  },
  {
    id: 'hyaluronic',
    name: 'Гіалуронова кислота',
    dose: '120 мг',
    desc: 'Глибоко зволожує, розгладжує рельєф та усуває мікрозморшки зсередини.',
    bgImg: '/ing_hyaluronic.jpg'
  },
  {
    id: 'acerola',
    name: 'Ацерола (Вітамін C)',
    dose: '320 мг (100% C)',
    desc: 'Потужний каталізатор природного синтезу власного колагену та сяйва.',
    bgImg: '/ing_acerola.jpg'
  },
  {
    id: 'pepper',
    name: 'Чорний перець (BioPerine®)',
    dose: '5 мг',
    desc: 'Запатентна формула для підвищення біодоступності нутрієнтів у 2 рази.',
    bgImg: '/ing_pepper.jpg'
  },
  {
    id: 'rosemary',
    name: 'Екстракт Розмарину',
    dose: '500 мг',
    desc: 'Захищає волокна колагену від цукрового руйнування та глікації.',
    bgImg: '/ing_rosemary.jpg'
  },
  {
    id: 'q10',
    name: 'Коензим Q10',
    dose: '100 мг',
    desc: 'Відновлює мітохондріальну енергію та захищає клітинний тонус.',
    bgImg: '/ing_q10.jpg'
  },
  {
    id: 'vite',
    name: 'Вітамін E (Токоферол)',
    dose: '18 мг (150%)',
    desc: 'Захищає та заспокоює клітинні мембрани від оксидативного стресу.',
    bgImg: '/ing_vite.jpg'
  },
  {
    id: 'thistle',
    name: 'Екстракт Розторопші',
    dose: '300 мг',
    desc: 'Глибока детоксикація печінки та клітинний розпад токсинів.',
    bgImg: '/ing_thistle.jpg'
  },
  {
    id: 'sod',
    name: 'SOD (Екстракт дині)',
    dose: '10 мг',
    desc: 'Супероксиддисмутаза для високої нейтралізації вільних радикалів.',
    bgImg: '/ing_sod.jpg'
  }
];

export const ClinicalInfographicSection: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(2); // Default 3+ months
  const [sliderPos, setSliderPos] = useState<number>(50); // Split slider 0-100%

  const activeStage = STAGES[currentMonthIndex];

  return (
    <section
      id="clinical-infographic-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#090909',
        padding: 'calc(88px + 2rem) 2.5rem 5rem 2.5rem',
        boxSizing: 'border-box',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '5rem'
      }}
    >
      {/* COMPACT MINIMALIST CONTAINER (MAX-WIDTH 1280PX) */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        
        {/* TOP HEADER BLOCK WITH CLEAN MINIMALIST SPACING */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#fafafa',
              border: '1px solid #e4e4e7',
              padding: '6px 18px',
              borderRadius: '30px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#090909',
              marginBottom: '1.25rem'
            }}
          >
            <SwissFlagIcon size={14} /> 90 ДНІВ КЛІНІЧНИХ ВИПРОБУВАНЬ
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: '#090909',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase'
            }}
          >
            ПОБАЧТЕ РЕАЛЬНИЙ, ДОВЕДЕНИЙ РЕЗУЛЬТАТ
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15.5px',
              lineHeight: 1.75,
              color: '#52525b',
              margin: 0,
              fontWeight: 500
            }}
          >
            Усього за декілька тижнів шкіра стає щільнішою, стійкішою до зовнішніх чинників та захищеною від оксидативного стресу.
          </p>
        </div>

        {/* MAIN 50/50 TWO-COLUMN INTERACTIVE SPLIT LAYOUT (BEFORE/AFTER SLIDER) */}
        <div
          className="clinical-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          
          {/* LEFT COLUMN: MINIMALIST INTERACTIVE BEFORE / AFTER IMAGE SLIDER */}
          <div className="clinical-photo-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Image Slider Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '380px',
                borderRadius: '16px',
                overflow: 'hidden',
                userSelect: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Image "AFTER" (Month 3 Result) */}
              <img
                src="/skin_stage_month3.jpg"
                alt="After treatment 90 days"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Image "BEFORE" (Month 1 Initial) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden',
                  borderRight: '2px solid #ffffff',
                  boxShadow: '2px 0 10px rgba(0,0,0,0.2)'
                }}
              >
                <img
                  src="/skin_stage_month1.jpg"
                  alt="Before treatment"
                  style={{
                    height: '100%',
                    maxWidth: 'none',
                    objectFit: 'cover',
                    width: `calc(100% * 100 / ${Math.max(sliderPos, 1)})`
                  }}
                />
              </div>

              {/* Slider Floating Drag Handle Button */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${sliderPos}%`,
                  transform: 'translateX(-50%)',
                  width: '3px',
                  backgroundColor: '#ffffff',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#090909',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                  }}
                >
                  ↔
                </div>
              </div>

              {/* Range Drag Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'ew-resize',
                  zIndex: 10
                }}
              />

              {/* Corner Badges */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(9,9,9,0.75)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 700, pointerEvents: 'none' }}>
                ДО ПОЧАТКУ КУРСУ
              </div>
              <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(9,9,9,0.75)', backdropFilter: 'blur(6px)', color: '#ffffff', padding: '4px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 700, pointerEvents: 'none' }}>
                ПІСЛЯ 90 ДНІВ
              </div>
            </div>

            {/* Subtle Tooltip */}
            <div style={{ textAlign: 'center', fontSize: '12.5px', color: '#71717a', fontWeight: 500 }}>
              👆 Потягніть ползунок ліворуч-праворуч для порівняння
            </div>
          </div>

          {/* RIGHT COLUMN: CLEAN MINIMALIST TIMELINE CONTROLS */}
          <div className="clinical-info-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {/* Minimalist Tab Selector */}
            <div className="clinical-tabs-block">
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '1rem' }}>
                ОБЕРІТЬ ТРИВАЛІСТЬ КУРСУ / TIMELINE
              </div>

              <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #e4e4e7', paddingBottom: '0.5rem' }}>
                {STAGES.map((stg, idx) => {
                  const isActive = currentMonthIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentMonthIndex(idx);
                        if (idx === 0) setSliderPos(85);
                        if (idx === 1) setSliderPos(50);
                        if (idx === 2) setSliderPos(15);
                      }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: isActive ? '#090909' : 'transparent',
                        color: isActive ? '#ffffff' : '#71717a',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {stg.month} {stg.month === 1 ? 'МІСЯЦЬ' : stg.month === 2 ? 'МІСЯЦІ' : '+ МІСЯЦІ'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Description */}
            <div className="clinical-text-block" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 800, color: '#D52B1E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D52B1E', display: 'inline-block' }} />
                  {activeStage.subtitle}
                </div>

                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#090909', margin: 0, lineHeight: 1.25 }}>
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#52525b', margin: 0, fontWeight: 500 }}>
                {activeStage.description}
              </p>

              {/* Enhanced Stat Cards with Count-Up Animations */}
              <div className="clinical-stats-block" style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f4f4f5' }}>
                {activeStage.stats.map((st, i) => (
                  <div key={i} style={{ backgroundColor: '#fafafa', border: '1px solid #f4f4f5', padding: '12px 20px', borderRadius: '14px', flex: 1 }}>
                    <AnimatedNumber
                      value={st.value}
                      className="font-serif"
                      style={{ fontSize: '2.4rem', fontWeight: 800, color: '#090909', lineHeight: 1, marginBottom: '4px' }}
                    />
                    <div style={{ fontSize: '12.5px', color: '#71717a', fontWeight: 600 }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Swiss Laboratory Subtitle */}
            <div className="clinical-swiss-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#a1a1aa', fontWeight: 600 }}>
              <SwissFlagIcon size={13} /> MyPURESkin Laboratory (Nyon, Switzerland) • Дослідження 12 тижнів
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* OPTIMAL CELL REGENERATION — EXACT 50/50 SPLIT FROM REFERENCE LAYOUT       */}
        {/* ========================================================================= */}
        <div
          className="clinical-regen-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '6rem',
            backgroundColor: '#ffffff'
          }}
        >
          {/* LEFT COLUMN: CENTERED/STRUCTURED TEXT + 2X2 STATS GRID */}
          <div className="clinical-regen-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', paddingLeft: '50px' }}>
            <div className="clinical-regen-title">
              <h3 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0b192c', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                Оптимальна<br />клітинна регенерація
              </h3>
              <div style={{ fontSize: '1.3rem', color: '#52525b', fontWeight: 400 }}>
                Клінічно доведено
              </div>
            </div>

            {/* 2x2 Grid of 4 Stats */}
            <div
              className="clinical-regen-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto auto',
                gap: '1.5rem',
                paddingTop: '0.5rem'
              }}
            >
              {/* Stat 1: -43% Wrinkle reduction */}
              <div className="clinical-regen-stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
                <div className="icon-circle-float" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', marginBottom: '0.65rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12c3-4 6-4 9 0s6 4 9 0"/><path d="M2 17c3-4 6-4 9 0s6 4 9 0"/></svg>
                </div>
                <AnimatedNumber
                  value="-43%"
                  className="font-serif"
                  style={{ fontSize: '2.4rem', fontWeight: 800, color: '#090909', lineHeight: 1, marginBottom: '4px' }}
                />
                <div style={{ fontSize: '13px', color: '#71717a', fontWeight: 600 }}>
                  Зменшення зморшок
                </div>
              </div>

              {/* Stat 2: +84% Skin hydration */}
              <div className="clinical-regen-stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
                <div className="icon-circle-float" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', marginBottom: '0.65rem', animationDelay: '0.4s' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                </div>
                <AnimatedNumber
                  value="+84%"
                  className="font-serif"
                  style={{ fontSize: '2.4rem', fontWeight: 800, color: '#090909', lineHeight: 1, marginBottom: '4px' }}
                />
                <div style={{ fontSize: '13px', color: '#71717a', fontWeight: 600 }}>
                  Зволоження шкіри
                </div>
              </div>

              {/* Stat 3: 86% Better firmness */}
              <div className="clinical-regen-stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
                <div className="icon-circle-float" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', marginBottom: '0.65rem', animationDelay: '0.8s' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/></svg>
                </div>
                <AnimatedNumber
                  value="86%"
                  className="font-serif"
                  style={{ fontSize: '2.4rem', fontWeight: 800, color: '#090909', lineHeight: 1, marginBottom: '4px' }}
                />
                <div style={{ fontSize: '13px', color: '#71717a', fontWeight: 600 }}>
                  Пружність та тонус
                </div>
              </div>

              {/* Stat 4: 87.5% General well-being */}
              <div className="clinical-regen-stat-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
                <div className="icon-circle-float" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', marginBottom: '0.65rem', animationDelay: '1.2s' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <AnimatedNumber
                  value="87.5%"
                  className="font-serif"
                  style={{ fontSize: '2.4rem', fontWeight: 800, color: '#090909', lineHeight: 1, marginBottom: '4px' }}
                />
                <div style={{ fontSize: '13px', color: '#71717a', fontWeight: 600 }}>
                  Загальне самопочуття
                </div>
              </div>
            </div>

            {/* Paragraph Text below 2x2 Grid */}
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#52525b', margin: 0, paddingTop: '1rem', borderTop: '1px solid #f4f4f5' }}>
              12-тижневе клінічне оцінювання, проведене у нашій швейцарській клініці. Дослідження аналізувало зміни зволоження шкіри, пружності, зменшення зморшок та загального самопочуття пацієнтів.
            </p>
          </div>

          {/* RIGHT COLUMN: HIGH-RES MYCOLLAGENREPAIR BOX IMAGE */}
          <div className="clinical-regen-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/collagen_repair_box_3d.png"
              alt="MyCollagenRepair Box and Sachet Stick"
              style={{
                maxWidth: '100%',
                maxHeight: '480px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* 9 INGREDIENTS 3-COLUMN GRID */}
        <div className="ingredients-section" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
          
          {/* Centered Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#fafafa',
                border: '1px solid #e4e4e7',
                padding: '6px 18px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#090909',
                marginBottom: '1rem'
              }}
            >
              <SwissFlagIcon size={14} /> ФАРМАЦЕВТИЧНА ФОРМУЛА • 9 АКТИВІВ
            </div>
            <h3 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#090909', margin: '0 0 0.75rem 0', lineHeight: 1.2 }}>
              9 Активних Інгредієнтів в 1 Стіку
            </h3>
            <p style={{ fontSize: '15.5px', color: '#52525b', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Висока концентрація швейцарських активних компонентів для синергетичної дії.
            </p>
          </div>

          {/* 9-Photo Grid */}
          <div
            className="ingredients-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
              width: '100%'
            }}
          >
            {INGREDIENTS_LIST.map((ing) => (
              <div
                key={ing.id}
                className="glossy-sheen-card"
                style={{
                  position: 'relative',
                  aspectRatio: '21 / 9',
                  width: '100%',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                {/* High-Res Background Image */}
                <img
                  src={`${ing.bgImg}?v=2`}
                  alt={ing.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Dark Vignette Overlay for Crisp White Text Readability */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
                    zIndex: 1
                  }}
                />

                {/* Dosage Badge */}
                <div
                  className="ingredient-dose-badge"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: '#090909',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  {ing.dose}
                </div>

                {/* White Text Overlay Content */}
                <div
                  className="ingredient-text-overlay"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    padding: '1.15rem 1.35rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '4px',
                    color: '#ffffff',
                    maxWidth: '75%'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.25,
                      textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  >
                    {ing.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.92)',
                      margin: 0,
                      lineHeight: 1.4,
                      fontWeight: 500,
                      textShadow: '0 1px 4px rgba(0,0,0,0.4)'
                    }}
                  >
                    {ing.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Floating Official GMP Insert & Translation Modal Trigger */}
      <OfficialLeafletModal />
    </section>
  );
};
