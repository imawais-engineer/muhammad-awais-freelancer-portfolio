/**
 * Single source of truth for per-route head metadata.
 *
 * Used both by the in-app <Seo> component and by `scripts/prerender-head.ts`,
 * which writes a static HTML file per route at build time so social scrapers
 * (WhatsApp, LinkedIn, Slack, Facebook, X) — which do not run JavaScript —
 * see the correct title, description and share image.
 *
 * Share images live in `public/og/` and are generated at exactly 1200x630 JPG.
 */
import { projects } from "./projects";
import { projectSeo } from "./projectSeo";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/** Real build dates per case study (article:published_time). */
export const projectPublished: Record<string, string> = {
  "real-estate-lead-generation-browseract-make": "2026-06-06",
  "lead-reply-sync-gohighlevel-clickup": "2026-06-08",
  "youtube-publishing-automation": "2026-06-14",
  "ai-email-labeling-agent-gmail": "2026-06-16",
  "ai-customer-support-triage": "2026-06-23",
  "multi-query-rag-supabase-openai": "2026-06-23",
  "whatsapp-ai-assistant-google-docs": "2026-06-24",
  "ai-review-management-system": "2026-06-24",
  "automated-offer-letter-response-tracking": "2026-06-24",
  "slack-reporting-pipeline-apify-n8n": "2026-06-26",
  "client-intake-onboarding-automation": "2026-06-28",
  "ai-lead-qualification-real-estate": "2026-06-30",
  "instagram-reels-outlier-telegram-n8n": "2026-08-14",
  "linkedin-job-search-automation-openai-telegram": "2026-08-18",
  "hubspot-lead-routing-gpt4-airtable": "2026-08-20",
  "ai-lead-meeting-scheduling-zoho-gemini": "2026-08-20",
  "voice-ai-appointment-booking-elevenlabs-calcom": "2026-08-20",
  "instagram-reel-recreation-gemini-minimax": "2026-10-03",
  "human-in-the-loop-proposal-swarm": "2026-10-10",
  "privacy-first-sql-mcp-analyst": "2026-10-11",
  "autonomous-cicd-code-reviewer": "2026-10-12",
  "hierarchical-support-swarm": "2026-10-12",
  "brand-governed-content-critic": "2026-10-13",
};
export const PROJECT_MODIFIED = "2026-10-13";

/** Titles kept under 60 characters where the default pattern ran long. */
const titleOverrides: Record<string, string> = {
  "/": "Muhammad Awais | AI Automation Engineer & n8n Expert",
  "/services": "AI & n8n Automation Services | Muhammad Awais",
  "/services/agentic-systems": "Agentic AI Systems & LangGraph Engineering | Muhammad Awais",
  "/services/mcp-engineering": "Custom MCP Server Engineering for AI | Muhammad Awais",
  "/services/full-stack-ai-apps": "Full-Stack AI Products & Internal Tools | Muhammad Awais",
  "/services/hybrid-automation": "Hybrid n8n & Python Automation | Muhammad Awais",
  "/projects/human-in-the-loop-proposal-swarm": "Autonomous Proposal Swarm with Human-in-the-Loop Governance",
  "/projects/privacy-first-sql-mcp-analyst": "Privacy-First SQL AI Analyst via Custom MCP Server",
  "/projects/autonomous-cicd-code-reviewer": "Autonomous CI/CD Code Reviewer & Refactoring Harness",
  "/projects/hierarchical-support-swarm": "Hierarchical L1/L2 Customer Support Swarm Orchestrator",
  "/projects/brand-governed-content-critic": "Brand-Governed AI Content Engine with Critic Loop",
  "/projects/linkedin-job-search-automation-openai-telegram": "LinkedIn Job Search Automation with OpenAI & Telegram",
  "/projects/slack-reporting-pipeline-apify-n8n": "Automated Slack Reporting with n8n & Apify | Muhammad Awais",
  "/projects/instagram-reels-outlier-telegram-n8n": "Instagram Reels Outlier Detection & Telegram Reports",
  "/projects/ai-lead-qualification-real-estate": "AI Lead Qualification for Real Estate Inquiries",
  "/projects/real-estate-lead-generation-browseract-make": "Real Estate Lead Generation & Property Monitoring",
  "/projects/ai-email-labeling-agent-gmail": "AI Email Labeling Agent for Gmail | Muhammad Awais",
  "/projects/ai-customer-support-triage": "AI Customer Support Triage System | Muhammad Awais",
  "/projects/whatsapp-ai-assistant-google-docs": "WhatsApp AI Assistant with Google Docs Knowledge Base",
  "/projects/client-intake-onboarding-automation": "Client Intake & Onboarding Automation | Muhammad Awais",
  "/projects/lead-reply-sync-gohighlevel-clickup": "Lead Reply & Follow-Up Sync: GoHighLevel + ClickUp",
  "/projects/multi-query-rag-supabase-openai": "Multi-Query RAG System with Supabase & OpenAI",
  "/projects/automated-business-kpi-analysis-growth-insights": "Automated KPI Analysis & AI Growth Insights with n8n",
  "/projects/automated-offer-letter-response-tracking": "Offer Letter & Response Tracking Automation with n8n",
  "/projects/hubspot-lead-routing-gpt4-airtable": "HubSpot Lead Routing with GPT-4, Airtable & n8n",
  "/projects/ai-lead-meeting-scheduling-zoho-gemini": "AI Meeting Scheduling with Zoho CRM & Gemini",
  "/projects/ai-review-management-system": "Google Review Monitoring & AI Reply System",
  "/projects/youtube-publishing-automation": "AI YouTube Publishing & SEO Pipeline | Muhammad Awais",
  "/projects/instagram-reel-recreation-gemini-minimax": "Instagram Reel Recreation with Gemini & MiniMax AI",
  "/projects/voice-ai-appointment-booking-elevenlabs-calcom": "Voice AI Appointment Booking: ElevenLabs & Cal.com",
};

export interface RouteMeta {
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    section: string;
    tags: string[];
  };
}

const staticRoutes: Record<string, RouteMeta> = {
  "/": {
    title: "Muhammad Awais | AI Automation Engineer & n8n Workflow Automation",
    description:
      "Muhammad Awais, AI Automation Engineer, builds n8n workflow automation, AI agents and CRM integrations that cut 20+ hours of manual work a week for teams.",
    ogImage: "/og/home.jpg",
    ogImageAlt:
      "Muhammad Awais, AI Automation Engineer — I build smart systems that automate work",
  },
  "/projects": {
    title: "AI Automation Projects & n8n Case Studies | Muhammad Awais",
    description:
      "n8n, Make.com and AI automation case studies: lead qualification, CRM pipelines, AI agents and reporting, each with the architecture and measured results.",
    ogImage: "/og/projects.jpg",
    ogImageAlt: `${projects.length} AI automation case studies by Muhammad Awais`,
  },
  "/services": {
    title: "AI Automation & Agentic Systems Services | Muhammad Awais",
    description:
      "AI automation services: n8n workflow automation, AI agents, custom MCP servers, CRM and lead qualification systems and full-stack AI tools by Muhammad Awais.",
    ogImage: "/og/services.jpg",
    ogImageAlt: "AI and agentic engineering services by Muhammad Awais",
  },
  "/services/agentic-systems": {
    title: "Agentic Systems & State Graph Architecture | Muhammad Awais",
    description:
      "Custom multi-agent workflows built on LangGraph and Python: stateful DAG execution, Actor-Critic loops, and Human-in-the-Loop review gates that never break.",
    ogImage: "/og/services-agentic.jpg",
    ogImageAlt: "Agentic Systems and State Graph Architecture service card",
  },
  "/services/mcp-engineering": {
    title: "Custom MCP Server Engineering for AI | Muhammad Awais",
    description:
      "Secure, privacy-first bridges connecting LLMs to private databases via Model Context Protocol (MCP) with read-only sandboxes and zero data leakage.",
    ogImage: "/og/services-mcp.jpg",
    ogImageAlt: "Model Context Protocol MCP engineering service card",
  },
  "/services/full-stack-ai-apps": {
    title: "Full-Stack AI Products & Internal Tools | Muhammad Awais",
    description:
      "Production Next.js 15 web applications operationalizing autonomous intelligence: real-time SSE agent monitors, Recharts BI dashboards, and review portals.",
    ogImage: "/og/services-fullstack.jpg",
    ogImageAlt: "Full-Stack AI Products and Internal Tools service card",
  },
  "/services/hybrid-automation": {
    title: "Hybrid n8n & Python Automation | Muhammad Awais",
    description:
      "Hardened infrastructure combining n8n workflow automation with custom Python microservices, Celery/Redis queues, and guaranteed at-least-once delivery.",
    ogImage: "/og/services-hybrid.jpg",
    ogImageAlt: "Deterministic Automation and Hybrid Orchestration service card",
  },
  "/services/n8n-workflow-automation": {
    title: "n8n Workflow Automation Engineer | Muhammad Awais",
    description:
      "Freelance n8n workflow automation engineer: production workflows with API and webhook integrations, AI steps, error handling, retries and documentation.",
    ogImage: "/og/services-n8n.jpg",
    ogImageAlt: "n8n workflow automation service card",
  },
  "/services/lead-qualification-crm-automation": {
    title: "AI Lead Qualification & CRM Automation | Muhammad Awais",
    description:
      "AI lead qualification and CRM automation: lead scoring, routing, sales pipeline updates and automated follow-up, built by AI Automation Engineer Muhammad Awais.",
    ogImage: "/og/services-lead.jpg",
    ogImageAlt: "AI lead qualification and CRM automation service card",
  },
  "/about": {
    title: "About Muhammad Awais | AI Automation Engineer & n8n Expert",
    description:
      "Muhammad Awais is a freelance AI automation engineer in Pakistan building n8n, Make.com and AI agent workflows for agencies and SaaS teams worldwide.",
    ogImage: "/og/about.jpg",
    ogImageAlt: "Portrait of Muhammad Awais, AI Automation Engineer and n8n & Make expert",
  },
  "/contact": {
    title: "Hire an AI Automation Engineer | Contact Muhammad Awais",
    description:
      "Hire Muhammad Awais, freelance AI automation engineer and n8n expert. Share your workflow and get a scoped automation proposal within 24 hours.",
    ogImage: "/og/contact.jpg",
    ogImageAlt: "Start an automation project with Muhammad Awais",
  },
  "/media-kit": {
    title: "Muhammad Awais Media Kit | Brand Assets & Profile",
    description:
      "Muhammad Awais media kit: official bio, brand assets, professional profile and collaboration details for press, partners and AI automation collaborations.",
    ogImage: "/og/media-kit.jpg",
    ogImageAlt: "Muhammad Awais press and media kit card",
  },
  "/terms": {
    title: "Terms of Service | Muhammad Awais",
    description:
      "Terms of service for website use, freelance automation engagements, deliverables, payments and support with Muhammad Awais, AI Automation Engineer.",
    ogImage: "/og/terms.jpg",
    ogImageAlt: "Terms of service card for imawais.engineer",
    noindex: true,
  },
};

const projectRoutes: Record<string, RouteMeta> = Object.fromEntries(
  projects.map((p) => {
    const seo = projectSeo[p.slug];
    return [
      `/projects/${p.slug}`,
      {
        title: `${seo?.title ?? `${p.name} — Case Study`} | Muhammad Awais`,
        description: seo?.description ?? p.summary.slice(0, 158),
        ogImage: `/og/projects/${p.slug}.jpg`,
        ogImageAlt: `${p.platform} workflow canvas for the ${p.name} automation — ${p.headlineResult}`,
        article: {
          publishedTime: `${projectPublished[p.slug] ?? PROJECT_MODIFIED}T00:00:00Z`,
          modifiedTime: `${PROJECT_MODIFIED}T00:00:00Z`,
          section: p.category,
          tags: [seo?.topic ?? p.category, ...p.tools],
        },
      } satisfies RouteMeta,
    ];
  }),
);

export const routeMeta: Record<string, RouteMeta> = Object.fromEntries(
  Object.entries({ ...staticRoutes, ...projectRoutes }).map(([path, m]) => [
    path,
    titleOverrides[path] ? { ...m, title: titleOverrides[path] } : m,
  ]),
);

export const getRouteMeta = (path: string): RouteMeta | undefined => routeMeta[path];
