export const StatsSection = () => {
  return (
    <section className="box-border caret-transparent max-w-6xl w-full mx-auto my-[72px] px-4 md:my-[120px]">
      <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
        <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
          Your Vision,
          <br />
          Dashur AI's Innovation
        </h1>
        <p className="text-9x1 box-border caret-transparent leading-7 max-w-md mx-auto">
          Building cutting-edge software solutions that transform businesses. We deliver scalable, efficient, and innovative applications tailored to your needs.
        </p>
      </header>
      <div className="box-border caret-transparent gap-x-5 flex flex-wrap justify-center gap-y-5">
        <div className="aspect-square bg-gradient-to-br from-blue-950/85 to-black/95 box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-[calc(50%_-_10px)] gap-y-8 w-full p-4 rounded-lg border-l-8 border-solid border-blue-900 md:max-w-[calc(25%_-_15px)] md:p-8 md:border-l-[16px]">
          <div className="text-3xl box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
            10X
          </div>
          <div className="text-sm box-border caret-transparent leading-5 md:text-xl md:leading-7">
            more productive
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-blue-950/85 to-black/95 box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-[calc(50%_-_10px)] gap-y-8 w-full p-4 rounded-lg border-l-8 border-solid border-blue-900 md:max-w-[calc(25%_-_15px)] md:p-8 md:border-l-[16px]"></div>
        <div className="aspect-square bg-gradient-to-br from-blue-950/85 to-black/95 box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-[calc(50%_-_10px)] gap-y-8 w-full p-4 rounded-lg border-l-8 border-solid border-blue-900 md:max-w-[calc(25%_-_15px)] md:p-8 md:border-l-[16px]">
          <div className="text-3xl box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
            420%
          </div>
          <div className="text-sm box-border caret-transparent leading-5 md:text-xl md:leading-7">
            ROI on AI investment
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-blue-950/85 to-black/95 box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-[calc(50%_-_10px)] gap-y-8 w-full p-4 rounded-lg border-l-8 border-solid border-blue-900 md:max-w-[calc(25%_-_15px)] md:p-8 md:border-l-[16px]">
          <div className="text-3xl box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
            95%
          </div>
          <div className="text-sm box-border caret-transparent leading-5 md:text-xl md:leading-7">
            resolution rate
          </div>
        </div>
      </div>
    </section>
  );
};
