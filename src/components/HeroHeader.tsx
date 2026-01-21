export const HeroHeader = () => {
  return (
    <header className="text-[oklch(0.9821_0_0)] items-center box-border caret-transparent gap-x-8 flex flex-col max-w-none gap-y-8 text-center w-full mx-auto pt-40 pb-20 px-4 md:max-w-screen-xl md:pt-60 md:pb-40">
      <h1 className="text-4xl box-border caret-transparent leading-10 max-w-4xl md:text-7xl md:leading-[72px]">
        Dashur AI: Empowering Innovation, Architecting the future.
      </h1>
      <p className="text-lg box-border caret-transparent leading-7 max-w-md">
        We are a premiere technology partner dedicated to shaping tomorrow through precision engineeering and world-class service.
      </p>
      <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3">
        <a
          href="/demo/"
          className="text-[oklch(0.1489_0.0027_248.08)] items-center bg-[oklch(0.8346_0.0735_257.42)] box-border caret-transparent gap-x-3 flex shrink-0 justify-between leading-4 gap-y-3 w-fit pl-5 pr-1 py-1 rounded-[3.35544e+07px]"
        >
          <span className="box-border caret-transparent block">
            Get started
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
    </header>
  );
};
