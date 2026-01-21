import { IndustryTabs } from "../components/IndustryTabs";
import { IndustryCarousel } from "../components/IndustryCarousel";
import { IndustryStats } from "../components/IndustryStats";

export const IndustrySection = () => {
  return (
    <div className="text-[oklch(0.9821_0_0)] bg-[oklch(0.3125_0.0278_328.73)] box-border caret-transparent mb-[72px] py-[72px] md:mb-[120px] md:py-[120px]">
      <section className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            AI purpose-built for your industry’s toughest challenges
          </h1>
        </header>
        <div className="text-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent gap-x-5 grid grid-cols-[repeat(12,minmax(0px,1fr))] gap-y-5">
          <IndustryTabs />
          <div className="box-border caret-transparent col-end-[-1] col-start-1 md:col-end-[span_7] md:col-start-[span_7]">
            <IndustryCarousel />
          </div>
          <IndustryStats />
        </div>
      </section>
    </div>
  );
};
