import React, { useState } from 'react';

const PRODUCT_IMAGES = [
  'https://mypureskin.in.ua/image/cache/catalog/products/MyCollagenRepair-400x400.png',
  'https://mypureskin.in.ua/image/cache/catalog/products/mycollagenrepair/imgi_47_Repair_054ba20e-c98a-4800-a6c1-e3d4a1394106-400x400.png',
  'https://mypureskin.in.ua/image/cache/catalog/products/mycollagenrepair/imgi_48_Repair_2-400x400.png',
  'https://mypureskin.in.ua/image/cache/catalog/products/mycollagenrepair/imgi_49_4_2acb9be5-466b-4f61-bd80-a7cfc700c2da-400x400.png'
];

const INGREDIENTS = [
  {
    title: 'Гідролізований морський колаген (5000 мг)',
    desc: 'Низькомолекулярні пептиди преміального риб’ячого колагену з високою біодоступністю для відновлення щільності шкіри.'
  },
  {
    title: 'Розмаринова кислота',
    desc: 'Унікальний натуральний антиоксидант, який блокує процеси глікації колагенових волокон та запобігає передчасному старінню.'
  },
  {
    title: 'Силімарин (Екстракт розторопші)',
    desc: 'Сприяє глибинному детоксу клітин печінки та нейтралізує токсичні продукти обміну речовин.'
  },
  {
    title: 'Коензим Q10',
    desc: 'Забезпечує мітохондрії клітин енергією для активної регенерації та синтезу власного колагену.'
  },
  {
    title: 'Гіалуронова кислота',
    desc: 'Утримує воду у міжклітинному матриксі дерми, забезпечуючи інтенсивне розгладження та пружність.'
  },
  {
    title: 'Вітамінний комплекс C та E',
    desc: 'Синергетичний антиоксидантний захист клітинних мембран від оксидативного стресу та УФ-випромінювання.'
  }
];

const REVIEWS = [
  {
    author: 'Олена К.',
    city: 'Київ',
    rating: 5,
    text: 'П’ю MyCollagenRepair вже другий місяць. Шкіра стала значно щільнішою, зникла сухість, а після тренувань м’язи відновлюються набагато швидше. Дуже задоволена результатами!'
  },
  {
    author: 'Марія С.',
    city: 'Львів',
    rating: 5,
    text: 'Прекрасний швейцарський склад. Зморшки навколо очей стали менш помітними, обличчя виглядає свіжим і відпочилим навіть при високому графіку роботи.'
  },
  {
    author: 'Вікторія П.',
    city: 'Одеса',
    rating: 5,
    text: 'Швидка доставка та бездоганна якість. Помітила ліфтинг-ефект вже на 3-му тижні прийому. Рекомендую всім знайомим!'
  }
];

const FAQS = [
  {
    q: 'Як правильно приймати MyCollagenRepair?',
    a: 'Рекомендується розчинити вміст 1 саше у склянці води або улюбленого напою кімнатної температури та вживати щодня вранці за 30 хвилин до їди.'
  },
  {
    q: 'Яка тривалість рекомендованого курсу?',
    a: 'Мінімальний курс становить 28 днів (1 упаковка). Для досягнення максимального та тривалого антивікового ефекту рекомендується курс тривалістю 3 місяці.'
  },
  {
    q: 'Чи є протипоказання для прийому?',
    a: 'Продукт містить риб’ячий колаген. У разі наявності алергії на морепродукти або під час вагітності обов’язково проконсультуйтеся з лікарем.'
  },
  {
    q: 'Чим MyCollagenRepair відрізняється від інших видів колагену?',
    a: 'MyCollagenRepair містить висококонцентровану швейцарську формулу з розмариновою кислотою та силімарином, які спрямовані не лише на поповнення колагену, але й на захист від глікації та детокс.'
  }
];

export const MyCollagenRepairProduct: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number>(1); // 1 or 3 packs
  const [quantity, setQuantity] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const priceSingle = 8200;
  const pricePack3 = 7380; // per pack

  const currentPrice = selectedOption === 1 ? priceSingle : pricePack3 * 3;

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#090909', minHeight: '100vh' }}>

      {/* Breadcrumbs */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.25rem 2rem 0.5rem 2rem',
          fontSize: '13.5px',
          color: '#6b7280'
        }}
      >
        <span style={{ cursor: 'pointer' }}>Головна</span> / <span style={{ cursor: 'pointer' }}>Каталог</span> / <span style={{ color: '#090909', fontWeight: 600 }}>MyCollagenRepair</span>
      </div>

      {/* Product Fullscreen Video Hero Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '85vh',
          backgroundColor: '#090909',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Full Hero Background Video */}
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

        {/* Soft Dark Gradient Overlay on the Left for Legibility */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '65%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(9, 9, 9, 0.92) 0%, rgba(9, 9, 9, 0.75) 55%, rgba(9, 9, 9, 0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Hero Overlay Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: '3rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 580px) 1fr',
            gap: '3rem'
          }}
        >
          {/* Left Product Info Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#ffffff' }}>

            {/* Stock & Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span
                style={{
                  backgroundColor: 'rgba(5, 150, 105, 0.25)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.4)',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)'
                }}
              >
                ● В наявності
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#ffffff' }}>
                <span style={{ color: '#fbbf24', textShadow: '0 0 8px rgba(251, 191, 36, 0.8)' }}>★★★★★</span>
                <span style={{ fontWeight: 700 }}>5.0</span>
                <span style={{ color: '#d1d5db' }}>(28 відгуків)</span>
              </div>
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
              }}
            >
              MyCollagenRepair
            </h1>

            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.6,
                color: '#e5e7eb',
                fontWeight: 400,
                maxWidth: '520px'
              }}
            >
              100% швейцарська натуральна формула, створена для відновлення колагену, уповільнення клітинного старіння та збереження біологічної молодості. MyCollagenRepair бореться з глікацією, підтримує мітохондріальну енергію та захищає від оксидативного стресу.
            </p>

            {/* Option Packs Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#d1d5db' }}>
                Оберіть зручний варіант для себе:
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '520px' }}>
                {/* 1 Pack Option */}
                <div
                  onClick={() => setSelectedOption(1)}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: selectedOption === 1 ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: selectedOption === 1 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(12px)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>1 упаковка</span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', display: 'block', marginTop: '4px' }}>
                    8 200 ₴
                  </span>
                </div>

                {/* 3 Packs Option */}
                <div
                  onClick={() => setSelectedOption(3)}
                  style={{
                    position: 'relative',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: selectedOption === 3 ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: selectedOption === 3 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(12px)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '12px',
                      backgroundColor: '#ffffff',
                      color: '#090909',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}
                  >
                    ЕКОНОМІЯ 10%
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>3 упаковки</span>
                  <div>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', display: 'block', marginTop: '4px' }}>
                      22 140 ₴
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#d1d5db' }}>
                      (7 380 ₴ / уп.)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '520px', marginTop: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '10px',
                    padding: '6px 14px',
                    gap: '14px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 700, color: '#ffffff' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', fontWeight: 700, color: '#ffffff' }}
                  >
                    +
                  </button>
                </div>

                <div style={{ fontSize: '26px', fontWeight: 700, color: '#ffffff' }}>
                  {(currentPrice * quantity).toLocaleString('uk-UA')} ₴
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem' }}>
                <button
                  className="btn-buy"
                  style={{
                    padding: '16px',
                    fontSize: '15px',
                    backgroundColor: '#ffffff',
                    color: '#090909',
                    fontWeight: 700,
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(255,255,255,0.2)'
                  }}
                >
                  ДОДАТИ В КОШИК
                </button>

                <button
                  className="btn-buy"
                  style={{
                    padding: '16px',
                    fontSize: '14px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(10px)',
                    fontWeight: 600,
                    borderRadius: '12px'
                  }}
                >
                  КУПИТИ В 1 КЛІК
                </button>
              </div>
            </div>

            {/* Product Photo Gallery Thumbnails (At the Bottom of Left Content) */}
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '12.5px', color: '#9ca3af', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Галерея продукту:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {PRODUCT_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      border: selectedImg === idx ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.25)',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      padding: '4px',
                      transition: 'all 0.2s ease',
                      boxShadow: selectedImg === idx ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* User Clinical Results Statistics Bar */}
      <section style={{ backgroundColor: '#f9f8f6', padding: '4rem 2rem', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '3rem', color: '#090909' }}>
            РЕЗУЛЬТАТИ СЕРЕД КОРИСТУВАЧІВ
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}
            className="stats-grid"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 700, color: '#515357' }}>
                +94%
              </span>
              <p style={{ fontSize: '15px', color: '#4b5563', marginTop: '0.5rem', maxWidth: '300px' }}>
                Зменшення вираженості зморшок та відновлення природної пружності
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 700, color: '#515357' }}>
                +96%
              </span>
              <p style={{ fontSize: '15px', color: '#4b5563', marginTop: '0.5rem', maxWidth: '300px' }}>
                Покращення гідратації шкіри та помітний ліфтинг-ефект
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 700, color: '#515357' }}>
                +91%
              </span>
              <p style={{ fontSize: '15px', color: '#4b5563', marginTop: '0.5rem', maxWidth: '300px' }}>
                Відновлення м’язового тонусу та антиоксидантний захист
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Ingredients Section */}
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#090909', marginBottom: '0.75rem' }}>
            ЦІЛЕСПРЯМОВАНІ ІНГРЕДІЄНТИ ДЛЯ ОПТИМАЛЬНОГО КЛІТИННОГО ОНОВЛЕННЯ
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7280' }}>
            Синергетичний швейцарський склад для системної антивікової терапії
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}
          className="ingredients-grid"
        >
          {INGREDIENTS.map((ing, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#090909', lineHeight: 1.3 }}>
                {ing.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.5 }}>
                {ing.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Reviews Section */}
      <section style={{ backgroundColor: '#fafafa', padding: '5rem 2rem', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#090909' }}>
              РЕАЛЬНІ ВІДГУКИ ТИХ, ХТО ВЖЕ БАЧИТЬ РЕЗУЛЬТАТ
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}
            className="reviews-grid"
          >
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  border: '1px solid rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ color: '#fbbf24', fontSize: '16px', textShadow: '0 0 6px rgba(251, 191, 36, 0.6)' }}>★★★★★</div>
                <p style={{ fontSize: '14.5px', color: '#374151', lineHeight: 1.6, flexGrow: 1 }}>
                  “{rev.text}”
                </p>
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '14px', color: '#090909' }}>{rev.author}</span>
                  <span style={{ fontSize: '13px', color: '#9ca3af' }}>{rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem' }}>
        <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#090909', textAlign: 'center', marginBottom: '3rem' }}>
          ПОПУЛЯРНІ ЗАПИТАННЯ (FAQ)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    fontSize: '16.5px',
                    fontWeight: 600,
                    color: '#090909',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '20px', fontWeight: 400 }}>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '15px', color: '#4b5563', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Responsive Layout CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .product-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .stats-grid, .ingredients-grid, .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
