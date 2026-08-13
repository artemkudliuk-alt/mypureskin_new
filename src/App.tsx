import { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { NeedsFilter } from './components/NeedsFilter';
import { ProductSection } from './components/ProductSection';
import { ProductLineupSection } from './components/ProductLineupSection';
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
        {/* Screen 1: Hero Banner Slider with Split Curtain & 4 Benefit Cards */}
        <HeroSlider />

        {/* Screen 2: Adapted Visual 2-Step Procedure Selector (Aristo Style) */}
        <NeedsFilter />

        {/* Screen 3: Product Purchase Card Block (MyCollagenRepair Hero Section) */}
        <ProductSection />

        {/* Screen 4: 4-Product Lineup Grid cloned from mypureskin.in.ua */}
        <ProductLineupSection />
      </main>
    </div>
  );
}

export default App;
