import { Hero } from "../pages/Hero";
import { LogoCarousel } from "../pages/LogoCarousel";
import { StatsSection } from "../pages/StatsSection";
import { ACXSection } from "../pages/ACXSection";
import { IndustrySection } from "../pages/IndustrySection";
import { TestimonialsSection } from "../pages/TestimonialsSection";
import { PlatformFeaturesSection } from "../pages/PlatformFeaturesSection";
import { SecuritySection } from "../pages/SecuritySection";
import { BlogSection } from "../pages/BlogSection";
import { CTASection } from "../pages/CTASection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <Hero />
      <LogoCarousel />
      <StatsSection />
      <ACXSection />
      <IndustrySection />
      <TestimonialsSection />
      <PlatformFeaturesSection />
      <SecuritySection />
      <BlogSection />
      <CTASection />
    </main>
  );
};
