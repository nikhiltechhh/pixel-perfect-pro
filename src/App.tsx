import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Appointment from "./pages/Appointment";
import Hearingaid from "./pages/Hearingaid";
import Health from "./components/Health";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/footer"; // ✅ Corrected import
import ScrollToTop from "./components/ScrollToTop"; // Scroll-to-top component

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Scroll to top on every route change */}
        <Routes>
          {/* Index page without Header/Footer */}
          <Route path="/" element={<Index />} />

          {/* Pages with Header/Footer */}
          <Route path="/appointment" element={<AppLayout><Appointment /></AppLayout>} />
          <Route path="/hearingaid" element={<AppLayout><Hearingaid /></AppLayout>} />
          <Route path="/health" element={<AppLayout><Health /></AppLayout>} />
          <Route path="/products" element={<AppLayout><Products /></AppLayout>} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
