import RotatingCardCarousel from "../components/RotatingCardCarousel";

export const CapabilitiesPage = () => {
  return (
    <div className="text-[oklch(0.9821_0_0)] box-border caret-transparent mb-[72px] py-[240px] md:mb-[120px] md:py-[320px]">
      <section className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-5xl font-black box-border caret-transparent leading-[60px] max-w-5xl mx-auto md:text-8xl md:leading-[96px] bg-gradient-to-r from-white to-[oklch(0.9_0.05_280)] bg-clip-text text-transparent">
            Our Capabilities
          </h1>
          <p className="text-2xl font-semibold box-border caret-transparent leading-8 max-w-3xl mx-auto mt-6 text-[oklch(0.9_0.05_280)]">
            Cutting-edge technologies and expertise that power our innovative solutions
          </p>
        </header>
        
        <section className="box-border caret-transparent mt-48 mb-12">
          <header className="box-border caret-transparent text-center mb-12">
            
            <p className="text-xl font-medium box-border caret-transparent leading-7 max-w-xl mx-auto mt-72 text-[oklch(0.9821_0_0)]">
              We select technologies based on performance, scalability, and long-term system reliability — not trends.
            </p>
          </header>
          <div className="box-border caret-transparent h-[700px] relative">
            <RotatingCardCarousel />
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="box-border caret-transparent mt-16 mb-16 overflow-hidden">
          <header className="box-border caret-transparent text-center mb-8">
            <h2 className="text-3xl font-bold box-border caret-transparent leading-10 text-[oklch(0.9821_0_0)]">
              Certifications
            </h2>
          </header>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-slide-left whitespace-nowrap">
              <div className="flex items-center space-x-12 px-4">
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Ultimate AWS Cloud
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  GCP Associate Cloud
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Mac OS Terminal
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Python Intermediate
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Github / Git
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Frontend Development
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Full Stack Development
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Node JS
                </span>
                {/* Duplicate for seamless loop */}
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Ultimate AWS Cloud
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  GCP Associate Cloud
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Mac OS Terminal
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Python Intermediate
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Github / Git
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Frontend Development
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Full Stack Development
                </span>
                <span className="text-lg font-medium text-[oklch(0.9821_0_0)] flex items-center">
                  <span className="w-2 h-2 bg-[oklch(0.9_0.05_280)] rounded-full mr-3"></span>
                  Node JS
                </span>
              </div>
            </div>
          </div>
        </section>
        
        
        <section className="box-border caret-transparent mt-64 mb-16 text-center">
          <p className="text-5xl md:text-6xl font-bold box-border caret-transparent leading-tight max-w-4xl mx-auto text-[oklch(0.9821_0_0)]">
            We don't just use technologies.
            <br />
            We design systems that scale, adapt, and endure.
          </p>
        </section>
      </section>
    </div>
  );
};
