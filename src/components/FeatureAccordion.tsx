export const FeatureAccordion = () => {
  return (
    <div className="box-border caret-transparent flex flex-col">
      <div className="box-border caret-transparent flex flex-col border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] border-t border-solid">
        <button className="items-center bg-transparent caret-transparent gap-x-2 flex justify-between gap-y-2 text-left w-full px-0 py-4">
          {" "}
          Continuously improve AI agent performance{" "}
          <span className="box-border caret-transparent grid">
            <span className="box-border caret-transparent block col-start-1 row-start-1">
              -
            </span>
          </span>
        </button>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent pb-5">
            Test, analyze, and optimize AI agent performance for continuous
            improvement with tools built for the enterprise
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-col border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] border-t border-solid">
        <button className="items-center bg-transparent caret-transparent gap-x-2 flex justify-between gap-y-2 text-left w-full px-0 py-4">
          {" "}
          Deliver omnichannel, multilingual CX{" "}
          <span className="box-border caret-transparent grid">
            <span className="box-border caret-transparent block col-start-1 row-start-1">
              +
            </span>
          </span>
        </button>
        <div className="box-border caret-transparent hidden h-0 overflow-hidden">
          <div className="box-border caret-transparent pb-5">
            Deploy AI across every channel and language while preserving
            customer identity, context, and conversation continuity
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-col border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] border-t border-solid">
        <button className="items-center bg-transparent caret-transparent gap-x-2 flex justify-between gap-y-2 text-left w-full px-0 py-4">
          {" "}
          Extend ada to your enterprise workflows{" "}
          <span className="box-border caret-transparent grid">
            <span className="box-border caret-transparent block col-start-1 row-start-1">
              +
            </span>
          </span>
        </button>
        <div className="box-border caret-transparent hidden h-0 overflow-hidden">
          <div className="box-border caret-transparent pb-5">
            Integrate seamlessly into your existing tech stack and enterprise
            workflows with open APIs and SDKs built for enterprise
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex flex-col border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] border-t border-solid">
        <button className="items-center bg-transparent caret-transparent gap-x-2 flex justify-between gap-y-2 text-left w-full px-0 py-4">
          {" "}
          Smart, accurate, safe, and CX-tuned{" "}
          <span className="box-border caret-transparent grid">
            <span className="box-border caret-transparent block col-start-1 row-start-1">
              +
            </span>
          </span>
        </button>
        <div className="box-border caret-transparent hidden h-0 overflow-hidden">
          <div className="box-border caret-transparent pb-5">
            Orchestrate multiple LLMs to understand, act, and resolve complex
            inquiries with accuracy, safety, and consistency
          </div>
        </div>
      </div>
    </div>
  );
};
