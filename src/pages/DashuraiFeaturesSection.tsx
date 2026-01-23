import { FeatureAccordion } from "../components/FeatureAccordion";

export const DashuraiFeaturesSection = () => {
  return (
    <div id="markets" className="bg-[oklch(1_0_0)] box-border caret-transparent py-[72px] md:py-[120px]">
      <section className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            Dashurai AI Platform Features
          </h1>
           <p className="text-lg box-border caret-transparent leading-7 max-w-[547.197px] mt-8 mx-auto md:mt-10">Ready to transform your business with cutting-edge AI solutions? Get in touch and let's bring your vision to life with innovative technology and exceptional design.</p>
          
        </header>
        <div className="bg-[oklch(0.9821_0_0)] box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-screen-lg gap-y-5 mx-auto p-5 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <FeatureAccordion />
          <div className="bg-[oklch(0.9821_0_0)] box-border caret-transparent grid col-end-auto col-start-auto -order-last md:col-end-[span_2] md:col-start-[span_2] md:order-none">
            <div className="relative items-center box-border caret-transparent flex col-start-1 row-start-1 isolate justify-center overflow-hidden">
              <div className="items-center aspect-[4_/_3] box-border caret-transparent flex h-full justify-center w-full p-5 md:p-10">
                <img
                  src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800.png"
                  alt=""
                  className="aspect-[auto_800_/_1041] box-border caret-transparent max-h-full max-w-full"
                />
              </div>
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800,h=600.jpg"
                alt=""
                sizes="(width >= 80rem) 649px, (width >= 64rem) 628px, (width >= 48rem) 457px, (width >= 40rem) 568px, calc(100vw-72px)"
                className="absolute aspect-[auto_800_/_600] box-border caret-transparent h-full max-w-full object-cover w-full -z-10"
              />
            </div>
            <div className="relative items-center box-border caret-transparent flex col-start-1 row-start-1 isolate justify-center overflow-hidden">
              <div className="items-center aspect-[4_/_3] box-border caret-transparent hidden h-full justify-center w-full p-5 md:p-10">
                <img
                  src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800-1.png"
                  alt=""
                  className="aspect-[auto_800_/_1328] box-border caret-transparent max-h-full max-w-full"
                />
              </div>
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800,h=600-1.jpg"
                alt=""
                sizes="(width >= 80rem) 649px, (width >= 64rem) 628px, (width >= 48rem) 457px, (width >= 40rem) 568px, calc(100vw-72px)"
                className="absolute aspect-[auto_800_/_600] box-border caret-transparent hidden h-full max-w-full object-cover w-full -z-10"
              />
            </div>
            <div className="relative items-center box-border caret-transparent flex col-start-1 row-start-1 isolate justify-center overflow-hidden">
              <div className="items-center aspect-[4_/_3] box-border caret-transparent hidden h-full justify-center w-full p-5 md:p-10">
                <img
                  src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800-2.png"
                  alt=""
                  className="aspect-[auto_800_/_523] box-border caret-transparent max-h-full max-w-full"
                />
              </div>
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800,h=600-2.jpg"
                alt=""
                sizes="(width >= 80rem) 649px, (width >= 64rem) 628px, (width >= 48rem) 457px, (width >= 40rem) 568px, calc(100vw-72px)"
                className="absolute aspect-[auto_800_/_600] box-border caret-transparent hidden h-full max-w-full object-cover w-full -z-10"
              />
            </div>
            <div className="relative items-center box-border caret-transparent flex col-start-1 row-start-1 isolate justify-center overflow-hidden">
              <div className="items-center aspect-[4_/_3] box-border caret-transparent hidden h-full justify-center w-full p-5 md:p-10">
                <img
                  src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800-3.png"
                  alt=""
                  className="aspect-[auto_800_/_1117] box-border caret-transparent max-h-full max-w-full"
                />
              </div>
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=800,h=600.png"
                alt=""
                sizes="(width >= 80rem) 649px, (width >= 64rem) 628px, (width >= 48rem) 457px, (width >= 40rem) 568px, calc(100vw-72px)"
                className="absolute aspect-[auto_800_/_600] box-border caret-transparent hidden h-full max-w-full object-cover w-full -z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
