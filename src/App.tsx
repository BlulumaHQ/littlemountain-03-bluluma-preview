import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { RouteScrollToTop } from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { NormalizePath } from "@/components/RedirectTo";
import Index from "./pages/Index";
import Services from "./pages/Services";
import DentalImplants from "./pages/DentalImplants";
import Faq from "./pages/Faq";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <I18nProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NormalizePath />
            <LoadingScreen />
            <RouteScrollToTop />
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/dental-implants" element={<DentalImplants />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<InsightArticle />} />

                {/* SEO redirects — clean canonical URLs land on the right place */}
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                <Route path="/index.html" element={<Navigate to="/" replace />} />
                <Route path="/our-office" element={<Navigate to="/#welcome-section" replace />} />
                <Route path="/our-team" element={<Navigate to="/#our-team" replace />} />
                <Route path="/contact" element={<Navigate to="/#contact-section" replace />} />
                <Route path="/contact-us" element={<Navigate to="/#contact-section" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <StickyBookNow />
          </BrowserRouter>
        </I18nProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
