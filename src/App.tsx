import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import ScrollToTopButton, { RouteScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Office from "./pages/Office";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteScrollToTop />
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/office" element={<Office />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <StickyBookNow />
          <ScrollToTopButton />
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
