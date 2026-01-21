import { SecurityGrid } from "../components/SecurityGrid";

export const SecuritySection = () => {
  return (
    <div className="text-[oklch(0.9821_0_0)] bg-[oklch(0.331_0.0104_253.98)] box-border caret-transparent mb-[72px] py-[72px] md:mb-[120px] md:py-[120px]">
      <section className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            Battle-tested AI with enterprise-level rigor
          </h1>
          <p className="text-lg box-border caret-transparent leading-7 max-w-[547.197px] mt-8 mx-auto md:mt-10">
            Trusted by leading companies across 85+ countries
          </p>
        </header>
        <SecurityGrid />
        <div className="box-border caret-transparent flex justify-center mt-[72px]">
          <a
            href="/platform/trust/"
            className="items-center bg-[oklch(0.3956_0.0812_166.85)] box-border caret-transparent gap-x-3 flex shrink-0 justify-between leading-4 gap-y-3 w-fit pl-5 pr-1 py-1 rounded-[3.35544e+07px]"
          >
            <span className="box-border caret-transparent block">
              Learn more about Ada&#39;s trust and safety
            </span>
            <span className="items-center aspect-square bg-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent flex shrink-0 justify-center w-10 rounded-[3.35544e+07px]">
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent w-4"
              />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
