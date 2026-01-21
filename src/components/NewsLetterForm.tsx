export const NewsletterForm = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col col-end-[-1] col-start-1 gap-y-4 md:col-end-[span_1] md:col-start-[span_1]">
      <h2 className="text-[oklch(0.3956_0.0812_166.85)] box-border caret-transparent">
        Newsletter
      </h2>
      <div className="box-border caret-transparent">
        <form className="box-border caret-transparent gap-x-4 flex gap-y-4">
          <div className="box-border caret-transparent gap-x-0 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent"></span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="email"
                placeholder="Business Email Address*"
                type="email"
                value=""
                className="text-sm bg-transparent box-border caret-transparent h-full leading-[14px] min-h-10 w-full border px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklch(0.8822_0_0)]"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">cq_action</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_action"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">
                cq_email_verdict
              </span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_email_verdict"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">
                cq_phone_verdict
              </span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_phone_verdict"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">cq_req_id</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_req_id"
                type="hidden"
                value="982296d4dfa5cbc648b0461e9c7fecb5"
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">cq_tag_hash</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_tag_hash"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">
                cq_threat_type
              </span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="cq_threat_type"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">GCLID</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="gclid"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">Client_ID</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="client_id"
                type="hidden"
                value="1445133526.1768582711"
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">utm_term</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="utm_term"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">utm_source</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="utm_source"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">utm_medium</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="utm_medium"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">utm_content</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="utm_content"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 hidden grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-0 w-full">
            <label className="text-sm box-border caret-transparent hidden leading-[14px]">
              <span className="box-border caret-transparent">utm_campaign</span>
            </label>
            <div className="box-border caret-transparent">
              <input
                name="utm_campaign"
                type="hidden"
                value=""
                className="bg-transparent box-border caret-transparent hidden p-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent hidden w-full"></div>
            <div className="box-border caret-transparent">
              <button className="text-[oklch(0.9821_0_0)] items-center bg-[oklch(0.3956_0.0812_166.85)] caret-transparent gap-x-3 inline-flex shrink-0 justify-between leading-4 gap-y-3 text-center w-fit pl-5 pr-1 py-1 rounded-[3.35544e+07px]">
                <span className="box-border caret-transparent block">
                  Subscribe
                </span>
                <span className="items-center aspect-square bg-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent flex shrink-0 justify-center w-10 rounded-[3.35544e+07px]">
                  <img
                    src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-4.svg"
                    alt="Icon"
                    className="box-border caret-transparent w-4"
                  />
                </span>
              </button>
            </div>
          </div>
          <input
            name="hs_context"
            type="hidden"
            className="bg-transparent box-border caret-transparent hidden p-0"
          />
          <iframe
            name="target_iframe_7b9b0061-5189-4ebc-90fb-e6f6ec5788db"
            className="box-border caret-transparent hidden"
          ></iframe>
        </form>
      </div>
      <div className="text-xs box-border caret-transparent gap-x-3 flex flex-wrap leading-4 mt-auto">
        <span className="box-border caret-transparent block">
          Terms
        </span>
        <span className="box-border caret-transparent block">
          Privacy
        </span>
        <a
          href="https://security.ada.cx/"
          className="box-border caret-transparent block"
        >
          Security
        </a>
        <span className="box-border caret-transparent block">
          Accessibility
        </span>
        <a
          href="https://status.ada.support/?__hstc=62733299.039898adc3280b8fc6bd525306d18b70.1768582711895.1768582711895.1768582711895.1&__hssc=62733299.1.1768582711895&__hsfp=87a5e87148e82459d00dc60a58b9abc0"
          className="box-border caret-transparent block"
        >
          Status
        </a>
      </div>
    </div>
  );
};
