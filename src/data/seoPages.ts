/**
 * On-page SEO source of truth: target keywords, visible <h1> and internal-link targets
 * per page. Client-intent targets follow the Oct 22, 2026 SEO audit, cross-checked with Google
 * autocomplete + SERP checks;
 * no search volumes are claimed. Titles/descriptions live in `routeMeta.ts`.
 *
 * Kept free of FAQ copy so it stays tiny in the home-page entry chunk.
 * Alias-free and asset-free on purpose so build scripts (e.g. scripts/prerender-head.ts
 * `staticH1`) can import `pageH1` instead of duplicating headings.
 */
import type { Project } from "./projects";

export interface KeywordTarget {
  primary: string;
  secondary: string[];
}

export interface ServiceSeo {
  path: string;
  /** Short label for nav / breadcrumbs / internal links. */
  label: string;
  h1: string;
  keywords: KeywordTarget;
  /** schema.org Service fields. */
  schema: { name: string; serviceType: string; description: string };
  /** Case studies this service page links to (and that link back to it). */
  caseStudies: string[];
}

export const POSITIONING = "AI Automation Engineer & n8n Expert";

export const servicePages: ServiceSeo[] = [
  {
    path: "/services/n8n-workflow-automation",
    label: "n8n workflow automation",
    h1: "Hire an n8n Expert for Workflow Automation",
    keywords: {
      primary: "hire n8n expert",
      secondary: ["n8n automation freelancer", "n8n developer for hire", "fix broken n8n workflow", "self-hosted n8n setup service"],
    },
    schema: {
      name: "n8n Workflow Automation",
      serviceType: "n8n workflow automation",
      description:
        "Design, build, rescue and documentation of production n8n workflows: webhook and API integrations, AI steps, error handling, retries, sub-workflows and logging.",
    },
    caseStudies: [
      "slack-reporting-pipeline-apify-n8n",
      "ai-customer-support-triage",
      "client-intake-onboarding-automation",
      "ai-email-labeling-agent-gmail",
      "lead-reply-sync-gohighlevel-clickup",
      "ai-review-management-system",
      "multi-query-rag-supabase-openai",
      "instagram-reels-outlier-telegram-n8n",
    ],
  },
  {
    path: "/services/lead-qualification-crm-automation",
    label: "AI lead qualification & CRM automation",
    h1: "AI Lead Qualification Automation & CRM Routing",
    keywords: {
      primary: "AI lead qualification automation",
      secondary: ["lead scoring automation n8n", "HubSpot lead routing automation", "GoHighLevel automation expert", "CRM automation specialist"],
    },
    schema: {
      name: "AI Lead Qualification & CRM Automation",
      serviceType: "Lead qualification automation",
      description:
        "Lead capture, AI lead qualification and scoring, lead routing, CRM and sales pipeline automation and automated follow-up, built on n8n and Make.com.",
    },
    caseStudies: [
      "ai-lead-qualification-real-estate",
      "lead-reply-sync-gohighlevel-clickup",
      "client-intake-onboarding-automation",
      "real-estate-lead-generation-browseract-make",
      "hubspot-lead-routing-gpt4-airtable",
    ],
  },
  {
    path: "/services/mcp-engineering",
    label: "Custom MCP server development",
    h1: "Custom MCP Server Development",
    keywords: {
      primary: "custom MCP server development",
      secondary: ["MCP server developer", "hire MCP developer", "MCP server for Postgres database", "connect Claude to internal database"],
    },
    schema: {
      name: "Custom MCP Server Development",
      serviceType: "Model Context Protocol (MCP) server development",
      description:
        "Custom Model Context Protocol servers in Python and TypeScript that connect Claude, ChatGPT and Cursor to private databases and APIs through read-only, permission-scoped tools.",
    },
    caseStudies: [
      "privacy-first-sql-mcp-analyst",
      "autonomous-cicd-code-reviewer",
      "hierarchical-support-swarm",
    ],
  },
  {
    path: "/services/agentic-systems",
    label: "LangGraph & multi-agent systems",
    h1: "LangGraph & Multi-Agent System Developer",
    keywords: {
      primary: "LangGraph developer for hire",
      secondary: ["multi-agent system developer", "AI agent development freelancer", "human-in-the-loop AI agent"],
    },
    schema: {
      name: "Multi-Agent System Development",
      serviceType: "Agentic AI system development",
      description:
        "Stateful multi-agent AI systems built with LangGraph and Python: critic loops, structured outputs and human-in-the-loop approval gates for production use.",
    },
    caseStudies: [
      "human-in-the-loop-proposal-swarm",
      "hierarchical-support-swarm",
      "brand-governed-content-critic",
    ],
  },
  {
    path: "/services/hybrid-automation",
    label: "Zapier/Make to n8n migration + Python",
    h1: "Migrate Zapier & Make.com to n8n, Extended with Python",
    keywords: {
      primary: "migrate Zapier to n8n",
      secondary: ["Make.com to n8n migration", "n8n Python integration developer", "self-hosted n8n Docker setup"],
    },
    schema: {
      name: "Hybrid n8n + Python Automation",
      serviceType: "Workflow automation engineering",
      description:
        "n8n workflow automation combined with Python microservices and Redis/Celery queues for high-volume, retry-safe pipelines on self-hosted infrastructure.",
    },
    caseStudies: [
      "slack-reporting-pipeline-apify-n8n",
      "client-intake-onboarding-automation",
      "ai-customer-support-triage",
    ],
  },
  {
    path: "/services/full-stack-ai-apps",
    label: "AI internal tools & Next.js apps",
    h1: "AI Internal Tools & Next.js AI App Development",
    keywords: {
      primary: "AI internal tools developer",
      secondary: ["Next.js AI app developer", "AI agent dashboard development", "custom AI web app freelancer"],
    },
    schema: {
      name: "Full-Stack AI Apps & Internal Tools",
      serviceType: "AI web application development",
      description:
        "Full-stack AI web apps and internal tools in Next.js and React: streaming agent monitors, review portals and BI dashboards on top of automation back ends.",
    },
    caseStudies: [
      "human-in-the-loop-proposal-swarm",
      "privacy-first-sql-mcp-analyst",
      "brand-governed-content-critic",
    ],
  },
];

export const getServicePage = (path: string): ServiceSeo => {
  const s = servicePages.find((x) => x.path === path);
  if (!s) throw new Error(`No service SEO entry for ${path}`);
  return s;
};

/** Fallback service per project category when a case study isn't listed on any service page. */
const categoryService: Record<string, string> = {
  "Agentic AI": "/services/agentic-systems",
  "Lead & CRM": "/services/lead-qualification-crm-automation",
};

/** The service page a case study should link back to (case study -> service -> CTA). */
export const serviceForProject = (p: Pick<Project, "slug" | "category">): ServiceSeo =>
  servicePages.find((s) => s.caseStudies.includes(p.slug)) ??
  getServicePage(categoryService[p.category] ?? "/services/n8n-workflow-automation");

/** Static pages: visible <h1> + keyword targets. */
export const staticPageSeo: Record<string, { h1: string; keywords: KeywordTarget }> = {
  "/": {
    h1: "Muhammad Awais, AI Automation Engineer & n8n Expert",
    keywords: {
      primary: "freelance AI automation engineer",
      secondary: ["AI automation engineer for hire", "n8n expert for hire", "Muhammad Awais AI automation"],
    },
  },
  "/projects": {
    h1: "n8n Workflow Examples & AI Automation Case Studies",
    keywords: {
      primary: "n8n workflow automation examples",
      secondary: ["AI automation case studies", "Supabase pgvector RAG with n8n", "n8n Slack reporting automation"],
    },
  },
  "/services": {
    h1: "AI Workflow Automation & n8n Services",
    keywords: {
      primary: "AI workflow automation services",
      secondary: ["AI automation services for small business", "business process automation freelancer"],
    },
  },
  "/about": {
    h1: "About Muhammad Awais, AI Automation Engineer & n8n Expert",
    keywords: {
      primary: "Muhammad Awais AI automation engineer",
      secondary: ["n8n expert Pakistan", "freelance automation engineer"],
    },
  },
  "/contact": {
    h1: "Hire an n8n & AI Automation Engineer",
    keywords: {
      primary: "hire n8n automation engineer",
      secondary: ["hire AI automation freelancer"],
    },
  },
};

/** Visible <h1> per static route, for build-time HTML fallbacks. */
export const pageH1: Record<string, string> = {
  ...Object.fromEntries(Object.entries(staticPageSeo).map(([k, v]) => [k, v.h1])),
  ...Object.fromEntries(servicePages.map((s) => [s.path, s.h1])),
};
