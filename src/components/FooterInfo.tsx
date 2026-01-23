export const FooterInfo = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 flex flex-col col-end-[-1] col-start-1 justify-between gap-y-5 md:col-end-[span_1] md:col-start-[span_1]">
      <div className="box-border caret-transparent gap-x-5 grid grid-cols-[auto_1fr] h-full gap-y-5">
        <h2 className="text-[oklch(0.3956_0.0812_166.85)] box-border caret-transparent">
          Connect With Us
        </h2>
        <div className="text-xs self-end box-border caret-transparent gap-x-3 flex leading-4">
          <a
            href="https://www.instagram.com/dashur"
            className="box-border caret-transparent block"
          >
            Instagram
          </a>
          <a
            href="https://x.com/dashur"
            className="box-border caret-transparent block"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/company/dashur"
            className="box-border caret-transparent block"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
