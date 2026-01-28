import { useEffect, useRef, useState } from "react";

export type TestimonialCardProps = {
  variant: string;
  imageUrl: string;
  imageAlt: string;
  title: React.ReactNode;
  statistic: string;
  caseStudyUrl: string;
  caseStudyText: string;
  linkVariant: string;
  quote: string;
  authorImageUrl?: string;
  authorImageAlt: string;
  authorImageVariant: string;
  authorName: string;
  authorTitle: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if card is in sticky position
        if (rect.top <= 144 && rect.bottom > windowHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`static bg-gradient-to-br from-blue-950/85 to-black/95 box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] overflow-hidden rounded-lg border-t-[16px] border-solid top-auto transition-all duration-300 md:sticky md:grid-cols-[repeat(3,minmax(0px,1fr))] md:top-36 ${props.variant} ${
        isSticky ? "shadow-2xl scale-[0.98]" : ""
      }`}
    >
      <div className="relative items-center aspect-auto box-border caret-transparent flex h-full isolate max-w-full p-10 md:aspect-square">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          sizes="(width >= 96rem) 502px, (width >= 80rem) 416px, (width >= 64rem) 331px, (width >= 48rem) 246px, (width >= 40rem) 608px, calc(100vw-32px)"
          className="absolute aspect-[auto_502_/_502] box-border caret-transparent h-full max-w-full object-cover w-full -z-10 inset-0"
        />
      </div>
      <div className="box-border caret-transparent gap-x-5 grid col-end-auto col-start-auto grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 p-5 md:col-end-[span_2] md:col-start-[span_2] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="box-border caret-transparent gap-x-6 flex flex-col col-end-auto col-start-auto h-full gap-y-6 w-full md:col-end-[span_2] md:col-start-[span_2]">
          <h1 className="text-3xl box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
            {props.title}
          </h1>
          <div className="[align-items:normal] box-border caret-transparent gap-x-6 flex flex-col justify-normal gap-y-6 mt-0 md:items-center md:flex-row md:justify-between md:mt-auto">
            <h2 className="text-lg box-border caret-transparent leading-7 md:text-2xl md:leading-8">
              {props.statistic}
            </h2>
          </div>
        </div>
        <figure className="text-sm box-border caret-transparent gap-x-1 flex flex-col leading-5 gap-y-1 pl-0 pt-5 border-l-0 border-t border-solid border-[oklch(0.8822_0_0)] md:pl-5 md:pt-0 md:border-t-0 md:border-l">
          <blockquote className="box-border caret-transparent mt-0 md:mt-auto">
            {props.quote}
          </blockquote>
          <figcaption className="box-border caret-transparent gap-x-4 flex min-h-[auto] min-w-[auto] gap-y-4 md:contents md:min-h-0 md:min-w-0">
            {props.authorImageUrl && (
              <div
                className={`box-border caret-transparent max-w-20 -order-last overflow-hidden mt-2 mb-0 rounded-lg md:max-w-36 md:mt-0 md:mb-6 ${props.authorImageVariant}`}
              >
                <img
                  src={props.authorImageUrl}
                  alt={props.authorImageAlt}
                  sizes="(width >= 80rem) 144px, 80px"
                  className="aspect-[auto_144_/_144] box-border caret-transparent max-w-full w-36"
                />
              </div>
            )}
            <div className="box-border caret-transparent mt-0 pt-0 border-t-0 border-solid border-[oklch(0.8822_0_0)] md:mt-5 md:pt-5 md:border-t">
              <div className="box-border caret-transparent">
                {props.authorName}
              </div>
              <div className="box-border caret-transparent">
                {props.authorTitle}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
