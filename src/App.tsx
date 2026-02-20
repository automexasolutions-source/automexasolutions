import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AIAutomation from "./pages/AIAutomation";
import Portfolio from "./pages/Portfolio";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudDevOps from "./pages/CloudDevOps";
import UIDesign from "./pages/UIDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <CustomCursor />
        <WhatsAppButton />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/cloud-devops" element={<CloudDevOps />} />
            <Route path="/ui-ux-design" element={<UIDesign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
