import HeroSection from '@/components/sections/HeroSection';
import WhyHireMe from '@/components/sections/WhyHireMe';
import SkillShowcase from '@/components/SkillShowcase';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillShowcase />
      <WhyHireMe />
    </main>
  );
}
