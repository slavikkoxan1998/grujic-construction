import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import CallButton from "./components/CallButton";

// Vite's BASE_URL reflects whatever `base` is set in vite.config.ts
// (here "/grujic-construction/" to match the GitHub Pages project path).
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CallButton />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
