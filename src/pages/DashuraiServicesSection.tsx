import { DashuraiServiceCards } from "../components/DashuraiServiceCards";

export const DashuraiServicesSection = () => {
  return (
    <div id="about" className="bg-[oklch(1_0_0)] box-border caret-transparent mt-[72px] py-[72px] md:mt-[120px] md:py-[120px]">
      <div className="box-border caret-transparent max-w-6xl w-full mx-auto px-4">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            Dashurai AI Services
          </h1>
          <p className="text-lg box-border caret-transparent leading-7 max-w-[547.197px] mt-8 mx-auto md:mt-10">
            Advanced AI-powered solutions designed to transform your business. From intelligent automation to strategic AI consulting, we deliver cutting-edge innovation at every step.
          </p>
        </header>
        <DashuraiServiceCards />
      </div>
    </div>
  );
};
