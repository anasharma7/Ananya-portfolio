import HeroSection from '@/components/sections/HeroSection';
import WhyHireMe from '@/components/sections/WhyHireMe';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyHireMe />
      <FeaturedProjects />
    </main>
  );
}
