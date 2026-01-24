import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Header } from "./pages/Header";
import { Main } from "./components/Main";
import { Footer } from "./pages/Footer";
import { ContactPage } from "./pages/ContactPage";
import { MarketsPage } from "./pages/MarketsPage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

export const App = () => {
  return (
    <Router>
      <DarkModeProvider>
        <ScrollToTopWrapper>
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
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <Footer />
        </ScrollToTopWrapper>
      </DarkModeProvider>
    </Router>
  );
};
