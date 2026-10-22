import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";

const Projects = lazy(() => import("./pages/Projects.tsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const AgenticSystems = lazy(() => import("./pages/AgenticSystems.tsx"));
const McpEngineering = lazy(() => import("./pages/McpEngineering.tsx"));
const FullStackAiApps = lazy(() => import("./pages/FullStackAiApps.tsx"));
const HybridAutomation = lazy(() => import("./pages/HybridAutomation.tsx"));
const N8nWorkflowAutomation = lazy(() => import("./pages/N8nWorkflowAutomation.tsx"));
const LeadQualificationCrmAutomation = lazy(() => import("./pages/LeadQualificationCrmAutomation.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const MediaKit = lazy(() => import("./pages/MediaKit.tsx"));

const queryClient = new QueryClient();

/** Send slash, case, .html and /index.html variants to the sitemap URL before a route renders. */
const NormalizePath = () => {
  const { pathname, search, hash } = useLocation();
  let next = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  next = next.toLowerCase();
  if (next.endsWith("/index.html")) next = next.slice(0, -"/index.html".length) || "/";
  else if (next.endsWith(".html")) next = next.slice(0, -".html".length) || "/";
  if (!next) next = "/";
  if (next !== pathname) {
    return <Navigate to={`${next}${search}${hash}`} replace />;
  }
  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<NormalizePath />}>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/agentic-systems" element={<AgenticSystems />} />
          <Route path="/services/mcp-engineering" element={<McpEngineering />} />
          <Route path="/services/full-stack-ai-apps" element={<FullStackAiApps />} />
          <Route path="/services/hybrid-automation" element={<HybridAutomation />} />
          <Route path="/services/n8n-workflow-automation" element={<N8nWorkflowAutomation />} />
          <Route path="/services/lead-qualification-crm-automation" element={<LeadQualificationCrmAutomation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/media-kit" element={<MediaKit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
