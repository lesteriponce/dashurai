import { ACXCards } from "../components/ACXCards";

export const ACXSection = () => {
  return (
    <div id="about" className="bg-[oklch(1_0_0)] box-border caret-transparent mt-[72px] py-[72px] md:mt-[120px] md:py-[120px]">
      <div className="box-border caret-transparent max-w-6xl w-full mx-auto px-4">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            Our Services
          </h1>
          <p className="text-lg box-border caret-transparent leading-7 max-w-[547.197px] mt-8 mx-auto md:mt-10">
            Comprehensive solutions designed to elevate your business. From cutting-edge development to strategic consulting, we deliver excellence at every step.
          </p>
        </header>
        <ACXCards />
        <div className="box-border caret-transparent flex justify-center mt-[72px]">
          <a
            href="/platform/"
            className="text-[oklch(0.9821_0_0)] items-center bg-[oklch(0.3956_0.0812_166.85)] box-border caret-transparent gap-x-3 flex shrink-0 justify-between leading-4 gap-y-3 w-fit pl-5 pr-1 py-1 rounded-[3.35544e+07px]"
          >
            <span className="box-border caret-transparent block">
              Learn more about Ada&#39;s ACX Platform
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
      </div>
    </div>
  );
};
