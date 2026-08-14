import React, { useState } from 'react';

const ArrowIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <span className="btn-arrow">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  </span>
);

interface SubCategory {
  id: string;
  title: string;
  subtext: string;
  image: string;
}

interface MacroCategory {
  id: string;
  title: string;
  subtext: string;
  image: string;
  subCategories: SubCategory[];
}

// 15 Exact Categories mapped directly from the official website screenshot
const MACRO_CATEGORIES: MacroCategory[] = [
  {
    id: 'face_neck',
    title: 'Обличчя та шия',
    subtext: 'Зморшки, пружність, сяйво та анти-глікація',
    image: '/quiz_face_creative.jpg',
    subCategories: [
      {
        id: 'face_wrinkles',
        title: 'Зморшки та ознаки старіння',
        subtext: 'Розгладження мімічних зморшок та відновлення овалу обличчя',
        image: '/sub_face_wrinkles.jpg'
      },
      {
        id: 'face_glow',
        title: 'Зволоження та сяйво',
        subtext: 'Глибоке зволоження гиалуроновою кислотою та усунення тьмяності',
        image: '/sub_face_glow.jpg'
      },
      {
        id: 'face_glycation',
        title: 'Старіння та глікація',
        subtext: 'Захист волокон колагену від цукрового руйнування та втрати пружності',
        image: '/sub_face_glycation.jpg'
      },
      {
        id: 'face_stress',
        title: 'Зменшення оксидативного стресу',
        subtext: 'Антиоксидантний захист клітин від вільних радикалів та екології',
        image: '/sub_face_stress.jpg'
      }
    ]
  },
  {
    id: 'skin_hair',
    title: 'Шкіра, волосся та нігті',
    subtext: 'Регенерація, дерматологічний догляд та УФ-захист',
    image: '/quiz_hair_creative.jpg',
    subCategories: [
      {
        id: 'skin_regen',
        title: 'Клітинна регенерація',
        subtext: 'Прискорене відновлення епідермісу та стимуляція власного колагену',
        image: '/sub_skin_regen.jpg'
      },
      {
        id: 'hair_nails',
        title: 'Шкіра, волосся, нігті',
        subtext: 'Формула з біотином, цинком та біодоступними пептидами для сили',
        image: '/sub_hair_nails.jpg'
      },
      {
        id: 'dermo_acne',
        title: 'Акне та дерматологія',
        subtext: 'Зменшення запалень, загоєння постакне та нормалізація себуму',
        image: '/sub_dermo_acne.jpg'
      },
      {
        id: 'dermo_uv',
        title: 'УФ-захист',
        subtext: 'Захист клітин від сонячного випромінювання та пігментації',
        image: '/sub_dermo_uv.jpg'
      }
    ]
  },
  {
    id: 'body_slimming',
    title: 'Тіло та стрункість',
    subtext: 'Схуднення, тонус м’язів та зменшення целюліту',
    image: '/quiz_body_creative.jpg',
    subCategories: [
      {
        id: 'body_weight',
        title: 'Схуднення',
        subtext: 'Активація метаболізму, спалення жирових відкладень та енергія',
        image: '/sub_body_weight.jpg'
      },
      {
        id: 'body_cellulite',
        title: 'Зменшення целюліту',
        subtext: 'Виведення зайвої рідини, разгладження рельєфу та лімфодренаж',
        image: '/sub_body_cellulite.jpg'
      },
      {
        id: 'body_muscle',
        title: 'Відновлення м’язів',
        subtext: 'Підтримка м’язового корсета під час тренувань та схуднення',
        image: '/sub_body_muscle.jpg'
      }
    ]
  },
  {
    id: 'detox_balance',
    title: 'Детокс та самопочуття',
    subtext: 'Внутрішня рівновага, суглоби та травлення',
    image: '/quiz_detox_balance.jpg',
    subCategories: [
      {
        id: 'detox_general',
        title: 'Детокс та самопочуття',
        subtext: 'Очищення від токсинів з розторопшею та антиоксидантами',
        image: '/sub_detox_general.jpg'
      },
      {
        id: 'detox_digestion',
        title: 'Покращення травлення',
        subtext: 'Підтримка здорової флори кишечника та засвоєння нутрієнтів',
        image: '/sub_detox_digestion.jpg'
      },
      {
        id: 'detox_joints',
        title: 'Суглоби',
        subtext: 'Гнучкість суглобів, відновлення хрящової тканини та зв’язок',
        image: '/sub_detox_joints.jpg'
      },
      {
        id: 'detox_hormones',
        title: 'Менопауза та гормональний баланс',
        subtext: 'Комфортний гормональний фон, підтримка шкіри та суглобів в період змін',
        image: '/sub_detox_hormones.jpg'
      }
    ]
  }
];

const AGE_GROUPS_VISUAL = [
  {
    id: 'under30',
    label: 'До 30 років',
    subtext: 'Профілактика, зволоження та захист від оксидативного стресу',
    image: '/age_under30.jpg'
  },
  {
    id: '30_45',
    label: '30–45 років',
    subtext: 'Перші ознаки старіння, стимуляція природного колагену',
    image: '/age_30_45.jpg'
  },
  {
    id: '45_55',
    label: '45–55 років',
    subtext: 'Глибока регенерація, гормональний баланс та пружність',
    image: '/age_45_55.jpg'
  },
  {
    id: '55plus',
    label: '55+ років',
    subtext: 'Максимальний ліфтинг, захист суглобів та клітинне відновлення',
    image: '/age_55plus.jpg'
  }
];

const PRODUCTS = [
  {
    id: 'lift',
    title: 'MyCollagenLift',
    subtitle: 'Антивіковий колагеновий напій преміум-класу',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenLift-430x540.png',
    matchedIds: ['face_neck', 'skin_hair', 'face_wrinkles', 'face_glow', 'face_stress', 'skin_regen']
  },
  {
    id: 'glow',
    title: 'MyCollagenGlow',
    subtitle: 'Формула для зволоження та природного сяйва',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenGlow-430x540.png',
    matchedIds: ['skin_hair', 'face_neck', 'hair_nails', 'face_glow', 'dermo_acne', 'dermo_uv']
  },
  {
    id: 'repair',
    title: 'MyCollagenRepair',
    subtitle: 'Формула клітинного відновлення та антиоксидантного захисту',
    image: '/card_1.jpg',
    matchedIds: ['detox_balance', 'face_neck', 'face_glycation', 'detox_general', 'detox_joints', 'detox_hormones']
  },
  {
    id: 'contour',
    title: 'MyBodyContour',
    subtitle: 'Формула для стрункості, тонусу та зменшення целюліту',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyBodyContour-430x540.png',
    matchedIds: ['body_slimming', 'body_weight', 'body_cellulite', 'body_muscle']
  }
];

export const NeedsFilter: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedMacroId, setSelectedMacroId] = useState<string>('');
  const [selectedSubId, setSelectedSubId] = useState<string>('');
  const [selectedAgeId, setSelectedAgeId] = useState<string>('');

  const activeMacro = MACRO_CATEGORIES.find((m) => m.id === selectedMacroId) || MACRO_CATEGORIES[0];

  const handleSelectMacro = (id: string) => {
    setSelectedMacroId(id);
    setSelectedSubId('');
    setStep(2);
  };

  const handleSelectSub = (id: string) => {
    setSelectedSubId(id);
    setStep(3);
  };

  const handleSelectAge = (id: string) => {
    setSelectedAgeId(id);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedMacroId('');
    setSelectedSubId('');
    setSelectedAgeId('');
  };

  const recommendedProducts = PRODUCTS.filter((p) => {
    if (!selectedMacroId && !selectedSubId && !selectedAgeId) return true;
    return (
      (selectedMacroId && p.matchedIds.includes(selectedMacroId)) ||
      (selectedSubId && p.matchedIds.includes(selectedSubId))
    );
  });

  return (
    <section
      id="needs-filter"
      style={{
        backgroundColor: '#fafafa',
        minHeight: 'calc(100vh - 88px)',
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'calc(88px + 1rem) 3.5rem 2.5rem 3.5rem',
        borderTop: '1px solid #eaeaea',
        borderBottom: '1px solid #eaeaea',
        scrollSnapAlign: 'start',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Header Title Section - Clean & Minimal */}
        <div style={{ textAlign: 'center', marginBottom: '0.85rem' }} className="reveal-on-scroll is-revealed">
          <h2
            className="font-serif quiz-main-title"
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              lineHeight: 1.15,
              color: '#090909',
              margin: '0',
              fontWeight: 600
            }}
          >
            Підбір персональної формули
          </h2>
        </div>

        {/* 3-Step Indicator Pills - Compact */}
        <div
          style={{
            display: 'flex',
            gap: '0.65rem',
            width: '100%',
            maxWidth: '640px',
            marginBottom: '1.25rem'
          }}
          className="reveal-on-scroll is-revealed step-bar-mobile"
        >
          <div
            onClick={() => setStep(1)}
            className="step-pill-item"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '20px',
              backgroundColor: step === 1 ? '#7c3aed' : '#f3e8ff',
              color: step === 1 ? '#ffffff' : '#6b21a8',
              fontWeight: 700,
              fontSize: '12.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: 'pointer',
              boxShadow: step === 1 ? '0 3px 10px rgba(124, 58, 237, 0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span>1. Напрямок</span>
          </div>

          <div
            onClick={() => selectedMacroId && setStep(2)}
            className="step-pill-item"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '20px',
              backgroundColor: step === 2 ? '#7c3aed' : '#f3e8ff',
              color: step === 2 ? '#ffffff' : '#6b21a8',
              fontWeight: 700,
              fontSize: '12.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: selectedMacroId ? 'pointer' : 'default',
              opacity: selectedMacroId ? 1 : 0.5,
              boxShadow: step === 2 ? '0 3px 10px rgba(124, 58, 237, 0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span>2. Потреба</span>
          </div>

          <div
            onClick={() => selectedSubId && setStep(3)}
            className="step-pill-item"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '20px',
              backgroundColor: step === 3 ? '#7c3aed' : '#f3e8ff',
              color: step === 3 ? '#ffffff' : '#6b21a8',
              fontWeight: 700,
              fontSize: '12.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: selectedSubId ? 'pointer' : 'default',
              opacity: selectedSubId ? 1 : 0.5,
              boxShadow: step === 3 ? '0 3px 10px rgba(124, 58, 237, 0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span>3. Вік</span>
          </div>
        </div>

        {/* ================= STEP 1: 4 MACRO DIRECTION CREATIVE CARDS ================= */}
        {step === 1 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
              width: '100%',
              flex: 1,
              minHeight: 0
            }}
            className="animate-fade visual-tiles-grid"
          >
            {MACRO_CATEGORIES.map((tile, index) => (
              <div
                key={tile.id}
                onClick={() => handleSelectMacro(tile.id)}
                className={`quiz-tile-card reveal-on-scroll is-revealed stagger-${index + 1}`}
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '430px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem 1.75rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="quiz-tile-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.65) 100%)'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.25,
                      textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  >
                    {tile.title}
                  </h3>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '18px',
                      fontWeight: 700
                    }}
                  >
                    →
                  </div>
                </div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.95)',
                      lineHeight: 1.4,
                      fontWeight: 500,
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {tile.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= STEP 2: CREATIVE SUB-CATEGORY CARDS ================= */}
        {step === 2 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              flex: 1,
              minHeight: 0
            }}
            className="animate-fade"
          >
            <div style={{ marginBottom: '0.85rem', width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setStep(1)}
                className="quiz-inline-back-btn"
                style={{
                  backgroundColor: '#f3e8ff',
                  border: 'none',
                  color: '#7c3aed',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  fontWeight: 700,
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
                title="Назад"
              >
                ←
              </button>
              <h3 className="quiz-step-title" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#090909', margin: 0, lineHeight: 1.25 }}>
                Оберіть потребу: <span style={{ color: '#7c3aed' }}>{activeMacro.title}</span>
              </h3>
            </div>

            <div
              className="sub-categories-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${activeMacro.subCategories.length}, 1fr)`,
                gap: '1.25rem',
                width: '100%',
                flex: 1,
                minHeight: 0
              }}
            >
              {activeMacro.subCategories.map((sub, index) => (
                <div
                  key={sub.id}
                  onClick={() => handleSelectSub(sub.id)}
                  className={`quiz-tile-card reveal-on-scroll is-revealed stagger-${index + 1}`}
                  style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '380px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem 1.5rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <img
                    src={sub.image}
                    alt={sub.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="quiz-tile-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.7) 100%)'
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.25,
                        textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                      }}
                    >
                      {sub.title}
                    </h4>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '15px',
                        fontWeight: 700
                      }}
                    >
                      →
                    </div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: 1.4,
                        fontWeight: 400,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {sub.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 3: CREATIVE AGE GROUP CARDS ================= */}
        {step === 3 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              flex: 1,
              minHeight: 0
            }}
            className="animate-fade"
          >
            <div style={{ marginBottom: '0.85rem', width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setStep(2)}
                className="quiz-inline-back-btn"
                style={{
                  backgroundColor: '#f3e8ff',
                  border: 'none',
                  color: '#7c3aed',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  fontWeight: 700,
                  flexShrink: 0,
                  transition: 'all 0.25s ease'
                }}
                title="Назад"
              >
                ←
              </button>
              <h3 className="quiz-step-title" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#090909', margin: 0, lineHeight: 1.25 }}>
                Оберіть ваш віковий діапазон
              </h3>
            </div>

            <div
              className="age-groups-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
                width: '100%',
                flex: 1,
                minHeight: 0
              }}
            >
              {AGE_GROUPS_VISUAL.map((age, index) => (
                <div
                  key={age.id}
                  onClick={() => handleSelectAge(age.id)}
                  className={`quiz-tile-card reveal-on-scroll is-revealed stagger-${index + 1}`}
                  style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '380px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem 1.75rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <img
                    src={age.image}
                    alt={age.label}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="quiz-tile-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.7) 100%)'
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                      }}
                    >
                      {age.label}
                    </h4>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: 700
                      }}
                    >
                      ✓
                    </div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: 1.45,
                        fontWeight: 400,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {age.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 4: RECOMMENDATION RESULT ================= */}
        {step === 4 && (
          <div
            className="animate-fade quiz-result-container"
            style={{
              width: '100%',
              maxWidth: '920px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '1.75rem 2.25rem',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #eaeaea',
              textAlign: 'center',
              margin: '0 auto',
              boxSizing: 'border-box'
            }}
          >
            <span
              className="quiz-result-badge"
              style={{
                backgroundColor: '#f3e8ff',
                color: '#7c3aed',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '5px 14px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-block'
              }}
            >
              Персональний підбір завершено ✦
            </span>

            <h3 className="quiz-result-title" style={{ fontSize: '22px', fontWeight: 700, color: '#090909', marginBottom: '0.35rem' }}>
              Ваша рекомендована формула MyPureSkin
            </h3>

            <p className="quiz-result-subtitle" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '1.25rem' }}>
              Підібрано ідеальний нутрицевтичний комплекс для ваших потреб:
            </p>

            <div
              className="quiz-recommended-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${recommendedProducts.length}, 1fr)`,
                gap: '1.25rem',
                marginBottom: '1.25rem'
              }}
            >
              {recommendedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="quiz-recommended-card"
                  style={{
                    border: '1px solid #f0f0f0',
                    borderRadius: '18px',
                    padding: '1.25rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fafafa'
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{ maxHeight: '130px', objectFit: 'contain', marginBottom: '0.75rem' }}
                  />
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#090909', marginBottom: '0.25rem' }}>
                    {prod.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#6b7280', marginBottom: '0.85rem', lineHeight: 1.4 }}>
                    {prod.subtitle}
                  </p>
                  <button
                    className="btn-buy"
                    style={{
                      backgroundColor: '#7c3aed',
                      color: '#ffffff',
                      borderRadius: '30px',
                      padding: '9px 22px',
                      fontSize: '12.5px'
                    }}
                  >
                    ПЕРЕГЛЯНУТИ <ArrowIcon />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="btn-buy"
              style={{
                backgroundColor: '#ffffff',
                color: '#333333',
                border: '1px solid #333333',
                padding: '11px 36px',
                borderRadius: '30px',
                fontSize: '13px'
              }}
            >
              ПРОЙТИ ЗНОВУ ↻
            </button>
          </div>
        )}

      </div>

      {/* Hover Zoom CSS */}
      <style>{`
        .quiz-tile-card:hover .quiz-tile-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
