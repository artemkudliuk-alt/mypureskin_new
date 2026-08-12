import React, { useState } from 'react';

interface B2BPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BPartnerModal: React.FC<B2BPartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    phone: '',
    email: '',
    role: 'Косметолог / Лікар'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem 3rem',
          maxWidth: '640px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        className="animate-fade"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#6b7280',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6'
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7c3aed',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              B2B Партнерство • Для клінік та лікарів
            </span>

            <h3
              className="font-serif"
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#090909',
                marginBottom: '0.75rem',
                lineHeight: 1.2
              }}
            >
              Отримайте професійні протоколи та партнерські умови
            </h3>

            <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: 1.55, marginBottom: '2rem' }}>
              Приєднуйтесь до мережі провідних естетичних клінік та дерматологічних центрів Украины. Ми надаємо спеціальні оптові умови, навчання персоналу та наукові матеріали.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                  Ваше ім'я та прізвище *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Олена Ковальчук"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '15px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                  Назва клініки або медустанови
                </label>
                <input
                  type="text"
                  placeholder="Медичний центр 'Skin Care'"
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '15px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                    Номер телефону *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 (67) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '15px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                    Ваш статус / посада
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '15px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Косметолог / Лікар">Косметолог / Лікар</option>
                    <option value="Власник клініки">Власник клініки</option>
                    <option value="Головний лікар">Головний лікар</option>
                    <option value="Дистриб'ютор">Дистриб'ютор</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-buy"
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  fontSize: '15.5px',
                  marginTop: '0.75rem',
                  borderRadius: '30px',
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.35)'
                }}
              >
                ОТРИМАТИ B2B ПРАЙС ТА ПРОТОКОЛИ
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#10b981',
                fontSize: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              ✓
            </div>
            <h3 className="font-serif" style={{ fontSize: '26px', color: '#090909', marginBottom: '0.75rem' }}>
              Дякуємо за заявку!
            </h3>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
              Наш менеджер по роботі з медичними партнерами зателефонує вам найближчим часом та надішле B2B каталог і протоколи.
            </p>
            <button
              onClick={onClose}
              className="btn-buy"
              style={{
                padding: '12px 36px',
                backgroundColor: '#090909'
              }}
            >
              ЗАКРИТИ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
