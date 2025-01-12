import { GamingHeader } from '@/components/GamingHeader';
import { GamingHero } from '@/components/GamingHero';
import { GamingFeatures } from '@/components/GamingFeatures';
import { GamingPricing } from '@/components/GamingPricing';
import { GamingFooter } from '@/components/GamingFooter';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <GamingHeader />
      <main>
        <GamingHero />
        <GamingFeatures />
        <GamingPricing />
      </main>
      <GamingFooter />
    </div>
  );
};

export default Home;