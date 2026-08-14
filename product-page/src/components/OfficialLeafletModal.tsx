import React, { useState, useEffect } from 'react';

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

export const OfficialLeafletModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUkrainian, setIsUkrainian] = useState<boolean>(false); // False = Official Photo Scan, True = Translated UA

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById('clinical-infographic-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      {/* FLOATING THUMBNAIL TRIGGER IN BOTTOM RIGHT CORNER (ONLY VISIBLE ON SCREEN 5 SCROLL) */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 90,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid #d4d4d8',
            padding: '4px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            outline: 'none',
            transition: 'transform 0.2s ease, boxShadow 0.2s ease'
          }}
          className="card-hover-lift"
          title="Розгорнути інструкцію"
        >
          {/* Mini Scan Thumbnail */}
          <div
            style={{
              position: 'relative',
              width: '74px',
              height: '86px',
              borderRadius: '5px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              border: '1px solid #e4e4e7'
            }}
          >
            <img
              src="/official_leaflet_scan.png?v=4"
              alt="Інструкція"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Hover Soft Blur & Centered Black/White Magnifying Glass Icon */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.25s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  color: '#090909',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  border: '1px solid #e4e4e7'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#090909" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Label (Simply Інструкція) */}
          <div
            style={{
              paddingTop: '4px',
              paddingBottom: '2px',
              fontSize: '11px',
              fontWeight: 800,
              color: '#090909',
              letterSpacing: '0.02em'
            }}
          >
            Інструкція
          </div>
        </button>
      </div>

      {/* EXPANDABLE FULLSCREEN GLASS MODAL */}
      {isOpen && (
        <div
          className="glass-modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div
            className="glass-modal-panel"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              maxHeight: '92vh',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
              overflowY: 'auto',
              border: '1px solid #e4e4e7',
              padding: '2rem 2.5rem',
              color: '#090909'
            }}
          >
            {/* MODAL HEADER WITH CONTROLS */}
            <div
              className="leaflet-modal-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e4e4e7',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem',
                position: 'sticky',
                top: 0,
                backgroundColor: '#ffffff',
                zIndex: 10
              }}
            >
              <div className="leaflet-modal-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SwissFlagIcon size={20} />
                <span className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                  MyCollagenRepair<span style={{ color: '#D52B1E' }}>.</span>
                </span>
                <span className="leaflet-gmp-badge" style={{ fontSize: '11px', fontWeight: 800, backgroundColor: '#f4f4f5', padding: '4px 10px', borderRadius: '12px', color: '#52525b' }}>
                  GMP Certified Leaflet
                </span>
              </div>

              <div className="leaflet-modal-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* TRANSLATE TOGGLE BUTTON */}
                <button
                  className="leaflet-translate-btn"
                  onClick={() => setIsUkrainian(!isUkrainian)}
                  style={{
                    backgroundColor: isUkrainian ? '#090909' : '#fafafa',
                    color: isUkrainian ? '#ffffff' : '#090909',
                    border: '1px solid #e4e4e7',
                    padding: '8px 18px',
                    borderRadius: '20px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  🌐 {isUkrainian ? 'Показати оригінал (Фото 📜)' : 'Перекласти українською 🇺🇦'}
                </button>

                {/* CLOSE BUTTON (TOP RIGHT CORNER) */}
                <button
                  className="leaflet-close-btn"
                  onClick={() => setIsOpen(false)}
                  style={{
                    backgroundColor: '#f4f4f5',
                    border: 'none',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    fontSize: '18px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#090909',
                    transition: 'background-color 0.2s ease'
                  }}
                  title="Закрити"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* MODAL CONTENT SWITCHER */}
            <div>
              {!isUkrainian ? (
                /* 1. ORIGINAL HIGH-RES PHOTO SCAN VIEW */
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '12.5px', color: '#71717a', fontWeight: 600 }}>
                    📜 Офіційний швейцарський листок-вкладиш продукції MyCollagenRepair (Оригінальне фото)
                  </div>
                  <img
                    src="/official_leaflet_scan.png?v=4"
                    alt="Official GMP Leaflet Scan"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                      border: '1px solid #e4e4e7'
                    }}
                  />
                </div>
              ) : (
                /* 2. UKRAINIAN FORMATTED TRANSLATION VIEW */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '13px', lineHeight: 1.6 }}>
                  
                  {/* Quality Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid #f4f4f5', paddingBottom: '1rem', fontWeight: 700, fontSize: '12.5px' }}>
                    <span>✓ Без глютену</span>
                    <span>✓ Без консервантів</span>
                    <span>✓ Без домішок</span>
                    <span>✓ Без цукру</span>
                  </div>

                  {/* Recommended Daily Dosage Table */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', color: '#090909' }}>
                      Рекомендована добова норма (1 стік)
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1.5px solid #090909', textAlign: 'left' }}>
                          <th style={{ padding: '8px 0', fontWeight: 800 }}>Активний інгредієнт</th>
                          <th style={{ padding: '8px 0', textAlign: 'right', fontWeight: 800 }}>Вміст у 1 стіку</th>
                          <th style={{ padding: '8px 0', textAlign: 'right', fontWeight: 800 }}>% РДН*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Гідролізат морського колагену (в т.ч. пептиди 4600 мг)</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>5000 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Гіалуронова кислота (Гіалуронат натрію)</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>120 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Екстракт чорного перцю BioPerine®</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>5 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Коензим Q10</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>100 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Екстракт ацероли (в т.ч. Вітамін C 80 мг)</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>320 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700, color: '#D52B1E' }}>100%</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Вітамін E (Суміш токоферолів)</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>18 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700, color: '#D52B1E' }}>150%</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Концентрований сік дині SOD</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>10 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Екстракт листя розмарину</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>500 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
                          <td style={{ padding: '8px 0' }}>Екстракт розторопші</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 700 }}>300 мг</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', color: '#71717a' }}>—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Composition Full Text */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '13px', marginBottom: '4px' }}>
                      Повний склад / Ingredients:
                    </div>
                    <p style={{ color: '#52525b', margin: 0 }}>
                      Гідролізований риб'ячий колаген (76%), екстракт листя розмарину (<em>Rosmarinus officinalis</em> - мальтодекстрин), екстракт плодів ацероли (<em>Malpighia glabra</em> - мальтодекстрин), гіалуронат натрію, натуральний ароматизатор, коензим Q10, суміш токоферолів (вітамін E), підсолоджувач: стевіол-глікозиди, концентрований сік дині (<em>Cucumis melo</em>), екстракт насіння чорного перцю (<em>Piper nigrum</em>).
                    </p>
                  </div>

                  {/* Instructions & Storage */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '13px', marginBottom: '4px' }}>
                      Рекомендації щодо застосування:
                    </div>
                    <p style={{ color: '#52525b', margin: 0 }}>
                      Дієтична добавка на основі рослинних екстрактів, активних речовин та вітамінів з підсолоджувачем. 
                      <strong> Спосіб застосування:</strong> Розчинити 1 стік на день у склянці води (200 мл). Зберігати у сухому, прохолодному, захищеному від світла місці.
                    </p>
                  </div>

                  {/* Warning Box */}
                  <div
                    style={{
                      backgroundColor: '#fff1f2',
                      border: '1px solid #fecdd3',
                      borderRadius: '14px',
                      padding: '1.25rem',
                      color: '#9f1239',
                      fontSize: '12.5px',
                      lineHeight: 1.55
                    }}
                  >
                    <strong style={{ display: 'block', marginBottom: '4px' }}>⚠️ Застереження щодо застосування:</strong>
                    Дієтичні добавки не повинні використовуватися як заміна повноцінного та збалансованого раціону або здорового способу життя. Не перевищувати рекомендовану добову дозу. Зберігати в недоступному для дітей місці. Вагітним та жінкам, які годують груддю, перед застосуванням необхідно проконсультуватися з лікарем.
                  </div>

                  {/* Manufacturer & Importer Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e4e4e7', paddingTop: '1rem', color: '#71717a', fontSize: '12px' }}>
                    <div>
                      <strong>SWITZERLAND:</strong> MyPURESkin S.A. | Route du Stand 74, 1260 Nyon, Suisse | info@mypureskin.ch
                    </div>
                    <div>
                      <strong>Маса нетто:</strong> 183.1 г (30 стіків х 6.1 г)
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
