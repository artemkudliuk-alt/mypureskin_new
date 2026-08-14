import { useEffect } from 'react';
import { Header } from './components/Header';
import { ProductSection } from './components/ProductSection';
import { ClinicalInfographicSection } from './components/ClinicalInfographicSection';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        {/* Product Purchase Card Block (MyCollagenRepair Hero Section) */}
        <ProductSection />

        {/* Interactive Clinical & 9-Ingredient Infographic Dashboard */}
        <ClinicalInfographicSection />
      </main>
    </div>
  );
}

export default App;
