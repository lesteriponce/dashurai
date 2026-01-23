import { FooterMain } from "../components/FooterMain";
import { FooterBottom } from "../components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
};
