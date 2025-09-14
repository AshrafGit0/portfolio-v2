import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProjects from "./components/Portfolio/AllProjects";
import ScrollToTop from "./components/Portfolio/ScrollToTop";
import ChatBot from "./components/Portfolio/ChatBot";
import { Toaster } from "./components/ui/toaster";

const App = () => (
  <>
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<AllProjects />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>

    <ChatBot />
    <Toaster />
  </>
);

export default App;
