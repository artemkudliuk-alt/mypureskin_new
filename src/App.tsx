import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { NeedsFilter } from './components/NeedsFilter';
import { ProductSection } from './components/ProductSection';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

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
      </main>
    </div>
  );
}

export default App;
