import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyOakwood from "./pages/CaseStudyOakwood";
import CaseStudyJenzabar from "./pages/CaseStudyJenzabar";
import CaseStudyiPad from "./pages/CaseStudyiPad";
import CaseStudyZoomRoom from "./pages/CaseStudyZoomRoom";
import AccessControl from "./pages/AccessControl";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/oakwood-adventist-academy" element={<CaseStudyOakwood />} />
          <Route path="/case-studies/jenzabar-data-interface" element={<CaseStudyJenzabar />} />
          <Route path="/case-studies/ipad-classroom-scheduler" element={<CaseStudyiPad />} />
          <Route path="/case-studies/alexa-zoom-room" element={<CaseStudyZoomRoom />} />
          <Route path="/access-control" element={<AccessControl />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
