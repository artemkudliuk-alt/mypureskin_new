import React, { useState } from 'react';

interface CategoryTile {
  id: string;
  title: string;
  subtext: string;
  image: string;
  tags: string[];
}

const CATEGORY_TILES: CategoryTile[] = [
  {
    id: 'face_neck',
    title: 'Обличчя та шия',
    subtext: 'Зморшки, пружність, сяйво та глікація',
    image: '/quiz_face_neck.jpg',
    tags: ['Зморшки та ознаки старіння', 'Зволоження та сяйво', 'Старіння та глікація']
  },
  {
    id: 'skin_hair',
    title: 'Шкіра, волосся та нігті',
    subtext: 'Регенерація, дерматологічний догляд та УФ-захист',
    image: '/quiz_skin_hair.jpg',
    tags: ['Клітинна регенерація', 'Шкіра, волосся, нігті', 'Акне та дерматологія', 'УФ-захист']
  },
  {
    id: 'body_slimming',
    title: 'Тіло та стрункість',
    subtext: 'Схуднення, тонус м’язів та зменшення целюліту',
    image: '/quiz_body_slimming.jpg',
    tags: ['Схуднення', 'Зменшення целюліту', "Відновлення м'язів"]
  },
  {
    id: 'detox_balance',
    title: 'Детокс та самопочуття',
    subtext: 'Внутрішня рівновага, суглоби та травлення',
    image: '/quiz_detox_balance.jpg',
    tags: ['Детокс та самопочуття', 'Покращення травлення', 'Суглоби', 'Менопауза та гормональний баланс']
  }
];

const AGE_GROUPS = [
  { id: 'under30', label: 'До 30 років', desc: 'Профілактика, зволоження та захист від оксидативного стресу' },
  { id: '30_45', label: '30–45 років', desc: 'Перші ознаки старіння, стимуляція природного колагену' },
  { id: '45_55', label: '45–55 років', desc: 'Глибока регенерація, гормональний баланс та пружність' },
  { id: '55plus', label: '55+ років', desc: 'Максимальний ліфтинг, захист суглобів та клітинне відновлення' }
];

const PRODUCTS = [
  {
    id: 'lift',
    title: 'MyCollagenLift',
    subtitle: 'Антивіковий колагеновий напій преміум-класу',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenLift-430x540.png',
    matchedTileIds: ['face_neck', 'skin_hair']
  },
  {
    id: 'glow',
    title: 'MyCollagenGlow',
    subtitle: 'Формула для зволоження та природного сяйва',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenGlow-430x540.png',
    matchedTileIds: ['skin_hair', 'face_neck']
  },
  {
    id: 'repair',
    title: 'MyCollagenRepair',
    subtitle: 'Детокс, відновлення м’язів та суглобів',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenRepair-430x540.png',
    matchedTileIds: ['detox_balance', 'skin_hair']
  },
  {
    id: 'contour',
    title: 'MyBodyContour',
    subtitle: 'Формула для схуднення та зменшення целюліту',
    image: 'https://mypureskin.in.ua/image/cache/catalog/products/MyBodyContour-430x540.png',
    matchedTileIds: ['body_slimming', 'detox_balance']
  }
];

export const NeedsFilter: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedTileId, setSelectedTileId] = useState<string>('');
  const [selectedAgeId, setSelectedAgeId] = useState<string>('');

  const handleSelectTile = (tileId: string) => {
    setSelectedTileId(tileId);
    setStep(2);
  };

  const handleSelectAge = (ageId: string) => {
    setSelectedAgeId(ageId);
  };

  const handleFinishQuiz = () => {
    if (selectedAgeId) {
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedTileId('');
    setSelectedAgeId('');
  };

  // Filter matched products based on selected tile
  const recommendedProducts = PRODUCTS.filter(
    (p) => !selectedTileId || p.matchedTileIds.includes(selectedTileId)
  );

  return (
    <section
      id="needs-filter"
      style={{
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'calc(88px + 2rem) 3.5rem 2.25rem 3.5rem',
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
        {/* Header Title Section (Inspired by Aristo Studio) */}
        <div style={{ textAlign: 'center', marginBottom: '2.25rem' }} className="reveal-on-scroll">
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              lineHeight: 1.15,
              color: '#090909',
              marginBottom: '0.6rem',
              letterSpacing: '0.01em',
              fontWeight: 400
            }}
          >
            Підбір персональної формули
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#6b7280',
              letterSpacing: '0.04em'
            }}
          >
            за 2 простих кроки
          </p>
        </div>

        {/* Step Indicator Pills */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '680px',
            marginBottom: '2.75rem'
          }}
          className="reveal-on-scroll stagger-1"
        >
          <div
            onClick={() => setStep(1)}
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              backgroundColor: step === 1 ? '#7c3aed' : '#f3e8ff',
              color: step === 1 ? '#ffffff' : '#6b21a8',
              fontWeight: 600,
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: step === 1 ? '0 4px 14px rgba(124, 58, 237, 0.25)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span style={{ opacity: 0.8, fontSize: '13px', textTransform: 'uppercase' }}>Крок 1</span>
            <span>Виберіть напрямок</span>
          </div>

          <div
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              backgroundColor: step === 2 ? '#7c3aed' : '#f3e8ff',
              color: step === 2 ? '#ffffff' : '#6b21a8',
              fontWeight: 600,
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: step > 1 ? 'pointer' : 'default',
              boxShadow: step === 2 ? '0 4px 14px rgba(124, 58, 237, 0.25)' : 'none',
              opacity: step >= 2 ? 1 : 0.65,
              transition: 'all 0.25s ease'
            }}
          >
            <span style={{ opacity: 0.8, fontSize: '13px', textTransform: 'uppercase' }}>Крок 2</span>
            <span>Що вас цікавить</span>
          </div>
        </div>

        {/* ================= STEP 1: VISUAL TILES GRID ================= */}
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
            {CATEGORY_TILES.map((tile, index) => (
              <div
                key={tile.id}
                onClick={() => handleSelectTile(tile.id)}
                className={`quiz-tile-card reveal-on-scroll stagger-${index + 1}`}
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '440px',
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
                {/* Background Image with Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${tile.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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

                {/* Top Content */}
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

                {/* Bottom Subtext & Tags */}
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

        {/* ================= STEP 2: AGE SELECTION VISUAL CARDS ================= */}
        {step === 2 && (
          <div style={{ width: '100%', maxWidth: '960px' }} className="animate-fade">
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#090909',
                marginBottom: '1.75rem',
                textAlign: 'center'
              }}
            >
              Виберіть ваш віковий діапазон
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                marginBottom: '2.5rem'
              }}
            >
              {AGE_GROUPS.map((age) => {
                const isSelected = selectedAgeId === age.id;
                return (
                  <div
                    key={age.id}
                    onClick={() => handleSelectAge(age.id)}
                    style={{
                      backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                      border: isSelected ? '2px solid #7c3aed' : '1px solid #e5e7eb',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      cursor: 'pointer',
                      boxShadow: isSelected
                        ? '0 8px 24px rgba(124, 58, 237, 0.2)'
                        : '0 4px 12px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: 700, color: '#090909' }}>
                        {age.label}
                      </span>
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: isSelected ? '6px solid #7c3aed' : '2px solid #d1d5db',
                          backgroundColor: '#ffffff'
                        }}
                      />
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: 1.45 }}>
                      {age.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <button
                onClick={() => setStep(1)}
                className="btn-buy"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  border: '1px solid #333333',
                  padding: '14px 40px',
                  borderRadius: '30px'
                }}
              >
                НАЗАД
              </button>

              <button
                onClick={handleFinishQuiz}
                disabled={!selectedAgeId}
                className="btn-buy"
                style={{
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  padding: '14px 40px',
                  borderRadius: '30px',
                  opacity: selectedAgeId ? 1 : 0.5,
                  cursor: selectedAgeId ? 'pointer' : 'not-allowed',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)'
                }}
              >
                ОТРИМАТИ РЕКОМЕНДАЦІЮ
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: RECOMMENDED PRODUCTS ================= */}
        {step === 3 && (
          <div style={{ width: '100%', maxWidth: '1180px' }} className="animate-fade">
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#090909',
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              Ідеально підібрані формули для вас
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(recommendedProducts.length, 4)}, 1fr)`,
                gap: '1.5rem',
                marginBottom: '3rem'
              }}
              className="results-products-grid"
            >
              {recommendedProducts.map((prod) => (
                <div
                  key={prod.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div style={{ width: '100%', height: '210px', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      style={{ height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#090909',
                      marginBottom: '8px'
                    }}
                  >
                    {prod.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      marginBottom: '1.5rem',
                      lineHeight: 1.45,
                      flexGrow: 1
                    }}
                  >
                    {prod.subtitle}
                  </p>

                  <button
                    className="btn-buy"
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      fontSize: '13.5px',
                      backgroundColor: '#515357'
                    }}
                  >
                    ПЕРЕГЛЯНУТИ
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={handleReset}
                className="btn-buy"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  border: '1px solid #333333',
                  padding: '14px 44px'
                }}
              >
                ПРОЙТИ ЗНОВУ
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Hover Zoom & Responsive Grid CSS */}
      <style>{`
        .quiz-tile-card:hover .quiz-tile-img {
          transform: scale(1.06);
        }
        @media (max-width: 1080px) {
          .visual-tiles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .visual-tiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
