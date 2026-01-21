import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Header } from "./pages/Header";
import { Main } from "./components/Main";
import { Footer } from "./pages/Footer";

export const App = () => {
  return (
    <>
      <a
        href="#"
        className="absolute box-border caret-transparent block h-[22px] opacity-[0.01] w-[54px] z-[-999]"
      >
        ___
      </a>
      <div className="absolute box-border caret-transparent h-[22px] opacity-[0.01] w-[54px] z-[-1000]"></div>
      <div className="relative box-border caret-transparent hidden overflow-hidden"></div>
      <AnnouncementBanner />
      <Header />
      <Main />
      <Footer />
    </>
  );
};
