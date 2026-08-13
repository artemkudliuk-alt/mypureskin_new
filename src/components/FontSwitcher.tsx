import React, { useState, useEffect } from 'react';

interface FontPreset {
  id: string;
  name: string;
  serif: string;
  sans: string;
  desc: string;
}

const PRESETS: FontPreset[] = [
  {
    id: 'cormorant',
    name: '1. Cormorant Garamond + Plus Jakarta Sans',
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Plus Jakarta Sans', sans-serif",
    desc: 'Преміальний швейцарський серіф (як на упаковці) + легкий невагомий санс'
  },
  {
    id: 'bodoni',
    name: '2. Bodoni Moda + Inter',
    serif: "'Bodoni Moda', Georgia, serif",
    sans: "'Inter', sans-serif",
    desc: 'Глянцевий високий контраст моди (Vogue style) + напрацьована читабельність'
  },
  {
    id: 'lora',
    name: '3. Lora + Raleway',
    serif: "'Lora', Georgia, serif",
    sans: "'Raleway', sans-serif",
    desc: 'Сучасний збалансований серіф + елегантна утончена геометрія'
  },
  {
    id: 'playfair',
    name: '4. Playfair Display + Manrope',
    serif: "'Playfair Display', Georgia, serif",
    sans: "'Manrope', sans-serif",
    desc: 'Класичний журнальний стиль + витончений чіткий текст'
  },
  {
    id: 'prata',
    name: '5. Prata + Fira Sans',
    serif: "'Prata', Georgia, serif",
    sans: "'Fira Sans', sans-serif",
    desc: 'Вінтажний швейцарський люкс + висока чіткість найдрібніших букв'
  },
  {
    id: 'montserrat',
    name: '6. Montserrat + Outfit',
    serif: "'Montserrat', sans-serif",
    sans: "'Outfit', sans-serif",
    desc: 'Подіумна сучасна геометрія (ALL CAPS) + м’який біо-текст'
  },
  {
    id: 'urbanist',
    name: '7. Urbanist + Plus Jakarta Sans',
    serif: "'Urbanist', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif",
    desc: 'Мінімалістичний ультра-модерн санс з великим інтервалом'
  },
  {
    id: 'nunito',
    name: '8. Nunito Sans + Manrope',
    serif: "'Nunito Sans', sans-serif",
    sans: "'Manrope', sans-serif",
    desc: 'М’які округлі лінії, дружній преміум та комфортне читання'
  },
  {
    id: 'inter',
    name: '9. Inter Display + Outfit',
    serif: "'Inter', sans-serif",
    sans: "'Outfit', sans-serif",
    desc: 'Лабораторна технологічна лаконічність без зайвих деталей'
  },
  {
    id: 'raleway',
    name: '10. Raleway + Fira Sans',
    serif: "'Raleway', sans-serif",
    sans: "'Fira Sans', sans-serif",
    desc: 'Ультратонкий повітряний заголовок + надлегке читання'
  }
];

export const FontSwitcher: React.FC = () => {
  const [activePreset, setActivePreset] = useState<string>('nunito');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const selected = PRESETS.find(p => p.id === activePreset);
    if (selected) {
      document.documentElement.style.setProperty('--font-serif', selected.serif);
      document.documentElement.style.setProperty('--font-sans', selected.sans);
    }
  }, [activePreset]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        padding: isOpen ? '16px 20px' : '10px 16px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: 'all 0.3s ease',
        maxWidth: '390px',
        maxHeight: isOpen ? '520px' : 'auto',
        overflowY: 'auto'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isOpen ? '12px' : 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px' }}>🔤</span>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#090909', letterSpacing: '0.02em' }}>
            ТЕСТУВАННЯ ШРИФТІВ (10 ВАРІАНТІВ)
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: 'none',
            background: 'none',
            fontSize: '12px',
            color: '#71717a',
            cursor: 'pointer',
            fontWeight: 700,
            padding: '2px 6px'
          }}
        >
          {isOpen ? 'Сховати ▲' : 'Показати ▼'}
        </button>
      </div>

      {isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {PRESETS.map((preset) => {
            const isSelected = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset.id)}
                style={{
                  textAlign: 'left',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: isSelected ? '1.5px solid #090909' : '1px solid #e4e4e7',
                  backgroundColor: isSelected ? '#f4f4f5' : '#fafafa',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: isSelected ? 800 : 700, color: '#090909' }}>
                  {preset.name}
                </div>
                <div style={{ fontSize: '11px', color: '#71717a', marginTop: '2px', lineHeight: 1.3 }}>
                  {preset.desc}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
