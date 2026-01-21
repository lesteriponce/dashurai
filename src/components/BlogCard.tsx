export type BlogCardProps = {
  href: string;
  imageUrl: string;
  imageSizes: string;
  imageAlt: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  variant: string;
  showReadButton?: boolean;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <article
      className={`box-border caret-transparent px-0 md:px-10 ${props.variant}`}
    >
      <a
        href={props.href}
        className={`aspect-video box-border caret-transparent block overflow-hidden${props.variant === "gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0" ? "" : " w-full"}`}
      >
        <img
          src={props.imageUrl}
          sizes={props.imageSizes}
          alt={props.imageAlt}
          className="box-border caret-transparent h-full max-w-full object-cover w-full"
        />
      </a>
      <div
        className={`box-border caret-transparent${props.variant === "gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0" ? " flex flex-col" : " w-full"}`}
      >
        <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap gap-y-2 mb-4">
          <div className="text-xs bg-[oklch(0.8346_0.0735_257.42)] box-border caret-transparent flex leading-3 max-w-fit px-3 py-2 rounded-[3.35544e+07px]">
            {props.category}
          </div>
          <span className="text-xs box-border caret-transparent block leading-3">
            {props.readTime}
          </span>
        </div>
        <h1
          className={`box-border caret-transparent${props.variant === "gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0" ? " text-2xl leading-[30px] md:text-[32px] md:leading-10" : " text-sm leading-[19.25px] md:text-xl md:leading-[27.5px]"}`}
        >
          <a
            href={props.href}
            className={`box-border caret-transparent${props.variant === "gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0" ? " text-2xl leading-[30px] md:text-[32px] md:leading-10" : " text-sm leading-[19.25px] md:text-xl md:leading-[27.5px]"}`}
          >
            {props.title}
          </a>
        </h1>
        <p
          className={`box-border caret-transparent max-w-xs mt-3${props.variant === "gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0" ? " mb-auto" : " text-sm hidden leading-[19.25px] md:block"}`}
        >
          {props.description}
        </p>
        {props.showReadButton && (
          <a
            href={props.href}
            className="items-center bg-[oklch(0.9821_0_0)] box-border caret-transparent gap-x-3 hidden shrink-0 justify-between leading-4 min-h-0 min-w-0 gap-y-3 w-fit mt-4 pl-5 pr-1 py-1 rounded-[3.35544e+07px] md:flex md:min-h-[auto] md:min-w-[auto]"
          >
            <span className="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              Read
            </span>
            <span className="items-center aspect-square bg-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent flex shrink-0 justify-center min-h-0 min-w-0 w-10 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent w-4"
              />
            </span>
          </a>
        )}
      </div>
    </article>
  );
};
