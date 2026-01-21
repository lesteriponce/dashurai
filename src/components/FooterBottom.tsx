import { FooterBrand } from "./FooterBrand";
import { FooterInfo } from "./FooterInfo";
import { NewsletterForm } from "./NewsLetterForm";

export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-8 pt-8 border-t border-solid border-[oklch(0.8822_0_0)] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <FooterBrand />
      <FooterInfo />
      <NewsletterForm />
    </div>
  );
};
