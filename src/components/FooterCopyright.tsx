export const FooterCopyright = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col col-end-[-1] col-start-1 gap-y-4 md:col-end-[span_1] md:col-start-[span_1]">
      <div className="text-xs box-border caret-transparent gap-x-3 flex flex-wrap leading-4">
        <span className="box-border caret-transparent block">
          © 2026 Dashur AI. All rights reserved.
        </span>
        <a
          href="#"
          className="box-border caret-transparent block"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="box-border caret-transparent block"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="box-border caret-transparent block"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
};
