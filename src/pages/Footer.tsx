import { FooterNav } from "../components/FooterNav";
import { FooterBottom } from "../components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent max-w-none w-full mb-8 mx-auto px-4 md:max-w-screen-xl">
      <div className="bg-[oklch(1_0_0)] box-border caret-transparent gap-x-8 flex flex-col gap-y-8 px-10 py-8 rounded-[56px]">
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  );
};
