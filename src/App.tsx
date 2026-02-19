import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Header } from "./pages/Header";
import { Main } from "./components/Main";
import { Footer } from "./pages/Footer";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { ChatbotAssistant } from "./components/ChatbotAssistant";
import { PageTitle } from "./components/PageTitle";

// Lazy load pages for better performance
const ContactPage = lazy(() => import("./pages/ContactPage").then(module => ({ default: module.ContactPage })));
const MarketsPage = lazy(() => import("./pages/MarketsPage").then(module => ({ default: module.MarketsPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));
const CareersPage = lazy(() => import("./pages/CareersPage").then(module => ({ default: module.CareersPage })));
const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage").then(module => ({ default: module.CapabilitiesPage })));

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
          <div className="min-h-screen bg-gradient-to-br from-[#050A1A] via-[#071634] to-[#050A1A] relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.22'%3E%3Ccircle cx='1.5' cy='1.5' r='1.1'/%3E%3Ccircle cx='13.5' cy='1.5' r='1.1'/%3E%3Ccircle cx='1.5' cy='13.5' r='1.1'/%3E%3Ccircle cx='13.5' cy='13.5' r='1.1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <PageTitle />
              <AnnouncementBanner />
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route 
                  path="/about" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <AboutPage />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <ContactPage />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/markets" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <MarketsPage />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/careers" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <CareersPage />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/capabilities" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <CapabilitiesPage />
                    </Suspense>
                  } 
                />
              </Routes>
              <Footer />
            </div>
            <ChatbotAssistant />
          </div>
        </ScrollToTopWrapper>
      </DarkModeProvider>
    </Router>
  );
};
