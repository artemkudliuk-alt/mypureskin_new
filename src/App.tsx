import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { NeedsFilter } from './components/NeedsFilter';
import { ProductLineupSection } from './components/ProductLineupSection';
import { ProductSection } from './components/ProductSection';
import { ClinicalInfographicSection } from './components/ClinicalInfographicSection';
import { OfficialLeafletModal } from './components/OfficialLeafletModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const getInitialRoute = (): 'home' | 'product' => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    if (
      path.includes('/product') ||
      path.includes('/mycollagenrepair') ||
      hash.includes('product') ||
      params.get('page') === 'product' ||
      params.get('p') === 'mycollagenrepair'
    ) {
      return 'product';
    }
    return 'home';
  };

  const [route, setRoute] = useState<'home' | 'product'>(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (targetRoute: 'home' | 'product') => {
    document.documentElement.style.scrollBehavior = 'auto';
    setRoute(targetRoute);
    if (targetRoute === 'product') {
      window.history.pushState({ page: 'product' }, '', '?page=product');
    } else {
      window.history.pushState({ page: 'home' }, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [route]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      <Header onNavigateHome={() => navigateTo('home')} currentRoute={route} />

      <main style={{ flexGrow: 1 }}>
        {route === 'home' ? (
          <>
            {/* Screen 1: Hero Video B2C Banner */}
            <HeroSlider />

            {/* Screen 2: Adapted Visual 3-Step Procedure Selector (Histolab Style) */}
            <NeedsFilter onNavigateProduct={() => navigateTo('product')} />

            {/* Screen 3: 4-Product Lineup Grid (Clean Light Aesthetic) */}
            <ProductLineupSection onNavigateProduct={() => navigateTo('product')} />
          </>
        ) : (
          <div style={{ position: 'relative', width: '100%' }}>
            {/* Breadcrumb / Back to catalog navigation bar */}
            <div
              style={{
                maxWidth: '1360px',
                margin: '0 auto',
                padding: '1.25rem 2.5rem 0.5rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <button
                onClick={() => navigateTo('home')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7c3aed',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  backgroundColor: '#f3e8ff',
                  transition: 'all 0.2s ease'
                }}
              >
                ← Головна / Каталог
              </button>
              <span style={{ color: '#9ca3af', fontSize: '13px' }}>/</span>
              <span style={{ color: '#4b5563', fontSize: '13px', fontWeight: 600 }}>MyCollagenRepair</span>
            </div>

            {/* Dedicated Product Page: Detailed Card + Clinical Infographic */}
            <ProductSection />
            <ClinicalInfographicSection />

            {/* Floating Official Leaflet Modal Trigger in Bottom-Right Corner */}
            <OfficialLeafletModal />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
