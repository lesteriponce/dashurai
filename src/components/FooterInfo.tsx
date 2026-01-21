export const FooterInfo = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 flex flex-col col-end-[-1] col-start-1 justify-between gap-y-5 md:col-end-[span_1] md:col-start-[span_1]">
      <div className="box-border caret-transparent gap-x-5 grid grid-cols-[auto_1fr] h-full gap-y-5">
        <h2 className="text-[oklch(0.3956_0.0812_166.85)] box-border caret-transparent">
          Who we are
        </h2>
        <p className="text-xs box-border caret-transparent leading-4">
          Ada is an AI customer experience company on a mission to make customer
          service extraordinary for everyone
        </p>
        <h2 className="text-[oklch(0.3956_0.0812_166.85)] self-end box-border caret-transparent">
          Follow us
        </h2>
        <div className="text-xs self-end box-border caret-transparent gap-x-3 flex leading-4">
          <a
            href="https://www.linkedin.com/company/ada-cx/posts/?feedView=all"
            className="box-border caret-transparent block"
          >
            Linkedin
          </a>
          <a
            href="https://www.youtube.com/@ada_cx"
            className="box-border caret-transparent block"
          >
            Youtube
          </a>
          <a
            href="https://x.com/ada_cx"
            className="box-border caret-transparent block"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
