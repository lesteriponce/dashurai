export const DashuraiFeaturesSection = () => {
  const items = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "DevOps",
  ];

  return (
    <div id="markets" className="bg-gradient-to-bl from-slate-950 via-blue-900/30 to-slate-950 box-border caret-transparent py-[72px] md:py-[120px]">
      <section className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            Embrace Innovation,Master Tomorrow
          </h1>
          <p className="text-lg box-border caret-transparent leading-7 max-w-[547.197px] mt-8 mx-auto md:mt-10">Ready to transform your business with cutting-edge AI solutions? Get in touch and let's bring your vision to life with innovative technology and exceptional design.</p>
        </header>

        <div className="flex justify-center">
          <div className="h-[320px] w-full max-w-[720px] rounded bg-[#0f172a] flex gap-[5px] p-[0.4em] md:h-[360px] lg:h-[420px]">
            {items.map((label, idx) => (
              <div
                key={label}
                className="group h-full flex-1 overflow-hidden cursor-pointer rounded-[2px] transition-all duration-500 hover:flex-[4]"
              >
                <div className="h-full w-full rounded-[2px] bg-gradient-to-b from-[#0b1a4a] via-[#0f2a73] to-[#143b9a] p-[1px]">
                  <div className="h-full w-full rounded-[2px] bg-[#0f172a] flex items-center justify-center">
                    <div className="relative w-full px-3 flex items-center justify-center">
                      <span className="absolute inset-0 flex items-center justify-center text-center transition-all duration-300 text-gray-500 text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold opacity-40 scale-100 group-hover:opacity-0 group-hover:scale-95 blur-[2px]" style={{ WebkitTextStroke: '2px #6b7280', WebkitTextFillColor: 'transparent' }}>
                        {idx + 1}
                      </span>
                      <span className="text-center transition-all duration-300 uppercase text-[#ff568e] tracking-[0.1em] text-xs sm:text-sm md:text-base whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
