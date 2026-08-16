import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
  currentRoute?: 'home' | 'product';
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, currentRoute = 'home' }) => {
  const [lang, setLang] = useState<'Ru' | 'Ua'>('Ru');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNav = (e: React.MouseEvent, sectionId: string) => {
    if (currentRoute === 'product' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#ffffff',
        height: '88px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1560px',
          margin: '0 auto',
          padding: '0 3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }} className="nav-desktop">
          <a
            href="#products"
            onClick={(e) => handleNav(e, 'products')}
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease'
            }}
          >
            Лінійка продуктів
          </a>
          <a
            href="#about"
            onClick={(e) => handleNav(e, 'about')}
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease'
            }}
          >
            Про MyPureSkin
          </a>
        </nav>

        {/* Center Logo */}
        <a
          href="#"
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src="https://mypureskin.in.ua/catalog/view/theme/historilab/assets/img/logo.svg"
            alt="MyPureSkin"
            style={{ height: '38px', objectFit: 'contain' }}
          />
        </a>

        {/* Right Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }} className="nav-desktop">
          <a
            href="#needs-filter"
            onClick={(e) => handleNav(e, 'needs-filter')}
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease'
            }}
          >
            Підбір формули
          </a>

          <a
            href="tel:+380937205277"
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Phone size={22} style={{ color: '#000000' }} />
            Допомога
          </a>

          {/* Language Selector */}
          <button
            onClick={() => setLang(lang === 'Ru' ? 'Ua' : 'Ru')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#000000',
              padding: '4px 6px'
            }}
          >
            {lang}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#000000',
            display: 'none'
          }}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '88px',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            zIndex: 49
          }}
        >
          <a
            href="#products"
            onClick={(e) => {
              setIsMobileOpen(false);
              handleNav(e, 'products');
            }}
            style={{ textDecoration: 'none', color: '#000000', fontSize: '1.25rem', fontWeight: 600 }}
          >
            Лінійка продуктів
          </a>
          <a
            href="#about"
            onClick={(e) => {
              setIsMobileOpen(false);
              handleNav(e, 'about');
            }}
            style={{ textDecoration: 'none', color: '#000000', fontSize: '1.25rem', fontWeight: 600 }}
          >
            Про MyPureSkin
          </a>
          <a
            href="#needs-filter"
            onClick={(e) => {
              setIsMobileOpen(false);
              handleNav(e, 'needs-filter');
            }}
            style={{ textDecoration: 'none', color: '#000000', fontSize: '1.25rem', fontWeight: 600 }}
          >
            Підбір формули
          </a>
          <a href="tel:+380937205277" style={{ textDecoration: 'none', color: '#000000', fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={22} /> Допомога
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
