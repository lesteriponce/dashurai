import { Hero } from "../pages/Hero";
import { LogoCarousel } from "../pages/LogoCarousel";
import { StatsSection } from "../pages/StatsSection";
import { DashuraiServicesSection } from "../pages/DashuraiServicesSection";
import { DashuraiFeaturesSection } from "../pages/DashuraiFeaturesSection";
import { BlogSection } from "../pages/BlogSection";
import { DashuraiCTASection } from "../pages/DashuraiCTASection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <Hero />
      <LogoCarousel />
      <StatsSection />
      <DashuraiServicesSection />
      <DashuraiFeaturesSection />
      <BlogSection />
      <DashuraiCTASection />
    </main>
  );
};
