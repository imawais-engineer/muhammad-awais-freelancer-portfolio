/**
 * Single source of truth for per-route head metadata.
 *
 * Used both by the in-app <Seo> component and by `scripts/prerender-head.ts`,
 * which writes a static HTML file per route at build time so social scrapers
 * (WhatsApp, LinkedIn, Slack, Facebook, X) — which do not run JavaScript —
 * see the correct title, description and share image.
 *
 * Share images live in `public/og/` and are generated at 2400x1260 JPG (2x HD, under 350KB).
 */
import { projects } from "./projects";
import { projectSeo } from "./projectSeo";

export const OG_WIDTH = 2400;
export const OG_HEIGHT = 1260;

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
  "/": "Muhammad Awais – AI Automation Engineer & n8n Expert",
  "/services": "AI Workflow Automation Services | Muhammad Awais",
  "/services/agentic-systems": "LangGraph & Multi-Agent System Developer | Muhammad Awais",
  "/services/mcp-engineering": "Custom MCP Server Development | Muhammad Awais",
  "/services/full-stack-ai-apps": "AI Internal Tools & Next.js AI Apps | Muhammad Awais",
  "/services/hybrid-automation": "Zapier & Make to n8n Migration + Python | Muhammad Awais",
  "/projects/human-in-the-loop-proposal-swarm": "Autonomous Proposal Swarm with Human-in-the-Loop Governance",
  "/projects/privacy-first-sql-mcp-analyst": "Custom MCP Server for SQL: Private AI Data Analyst",
  "/projects/autonomous-cicd-code-reviewer": "Autonomous CI/CD Code Reviewer & Refactoring Harness",
  "/projects/hierarchical-support-swarm": "Hierarchical L1/L2 Customer Support Swarm Orchestrator",
  "/projects/brand-governed-content-critic": "Brand-Governed AI Content Engine with Critic Loop",
  "/projects/linkedin-job-search-automation-openai-telegram": "LinkedIn Job Search Automation with OpenAI & Telegram",
  "/projects/slack-reporting-pipeline-apify-n8n": "Apify + n8n Slack Reporting Automation (Case Study)",
  "/projects/instagram-reels-outlier-telegram-n8n": "Instagram Reels Analytics with n8n & Telegram Alerts",
  "/projects/ai-lead-qualification-real-estate": "n8n AI Lead Qualification for Real Estate (Case Study)",
  "/projects/real-estate-lead-generation-browseract-make": "Real Estate Lead Generation & Property Monitoring",
  "/projects/ai-email-labeling-agent-gmail": "AI Email Labeling Agent for Gmail | Muhammad Awais",
  "/projects/ai-customer-support-triage": "n8n AI Customer Support Triage (Case Study)",
  "/projects/whatsapp-ai-assistant-google-docs": "n8n WhatsApp AI Chatbot with a Google Docs Knowledge Base",
  "/projects/client-intake-onboarding-automation": "Client Intake & Onboarding Automation | Muhammad Awais",
  "/projects/lead-reply-sync-gohighlevel-clickup": "Lead Reply & Follow-Up Sync: GoHighLevel + ClickUp",
  "/projects/multi-query-rag-supabase-openai": "Supabase pgvector RAG Agent with n8n (Case Study)",
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
    title: "Muhammad Awais – AI Automation Engineer & n8n Expert",
    description:
      "Freelance AI automation engineer and n8n expert for hire: production n8n workflows, AI agents and CRM automation for agencies, SaaS and small businesses.",
    ogImage: "/og/home.jpg",
    ogImageAlt:
      "Muhammad Awais, AI Automation Engineer — I build smart systems that automate work",
  },
  "/projects": {
    title: "n8n & AI Automation Case Studies | Muhammad Awais",
    description:
      "n8n workflow examples and AI agent case studies: lead qualification, CRM routing, RAG, WhatsApp bots and reporting, each with architecture and results.",
    ogImage: "/og/projects.jpg",
    ogImageAlt: `${projects.length} AI automation case studies by Muhammad Awais`,
  },
  "/services": {
    title: "AI Workflow Automation Services | Muhammad Awais",
    description:
      "AI workflow automation services for small businesses, agencies and SaaS: n8n workflows, AI lead qualification, CRM automation, AI agents and MCP servers.",
    ogImage: "/og/services.jpg",
    ogImageAlt: "AI and agentic engineering services by Muhammad Awais",
  },
  "/services/agentic-systems": {
    title: "LangGraph & Multi-Agent System Developer | Muhammad Awais",
    description:
      "LangGraph developer for hire: multi-agent AI systems in Python with stateful agents, critic loops and human-in-the-loop approvals built for production.",
    ogImage: "/og/services-agentic.jpg",
    ogImageAlt: "Agentic Systems and State Graph Architecture service card",
  },
  "/services/mcp-engineering": {
    title: "Custom MCP Server Development | Muhammad Awais",
    description:
      "MCP server developer for hire: custom MCP servers in Python and TypeScript that connect Claude and ChatGPT to your Postgres database and internal APIs.",
    ogImage: "/og/services-mcp.jpg",
    ogImageAlt: "Model Context Protocol MCP engineering service card",
  },
  "/services/full-stack-ai-apps": {
    title: "AI Internal Tools & Next.js AI Apps | Muhammad Awais",
    description:
      "AI internal tools and Next.js AI apps: agent dashboards with streaming updates, review portals and BI charts, built full stack on top of your automations.",
    ogImage: "/og/services-fullstack.jpg",
    ogImageAlt: "Full-Stack AI Products and Internal Tools service card",
  },
  "/services/hybrid-automation": {
    title: "Zapier & Make to n8n Migration + Python | Muhammad Awais",
    description:
      "Migrate Zapier and Make.com workflows to n8n and extend them with Python services, Redis queues, retries and self-hosted n8n on Docker for high volume.",
    ogImage: "/og/services-hybrid.jpg",
    ogImageAlt: "Deterministic Automation and Hybrid Orchestration service card",
  },
  "/services/n8n-workflow-automation": {
    title: "Hire an n8n Expert & Automation Freelancer | Muhammad Awais",
    description:
      "Hire a freelance n8n expert to build, fix or self-host production workflows: API and webhook integrations, AI steps, error handling, retries and docs.",
    ogImage: "/og/services-n8n.jpg",
    ogImageAlt: "n8n workflow automation service card",
  },
  "/services/lead-qualification-crm-automation": {
    title: "AI Lead Qualification & CRM Automation | Muhammad Awais",
    description:
      "AI lead qualification automation in n8n: lead scoring, HubSpot lead routing, GoHighLevel automation, CRM pipeline updates and instant follow-up.",
    ogImage: "/og/services-lead.jpg",
    ogImageAlt: "AI lead qualification and CRM automation service card",
  },
  "/about": {
    title: "About Muhammad Awais | AI Automation Engineer & n8n Expert",
    description:
      "Muhammad Awais is an AI automation engineer and n8n expert in Pakistan and a software engineering student, building n8n and AI agent systems worldwide.",
    ogImage: "/og/about.jpg",
    ogImageAlt: "Portrait of Muhammad Awais, AI Automation Engineer and n8n & Make expert",
  },
  "/contact": {
    title: "Hire an n8n & AI Automation Engineer | Muhammad Awais",
    description:
      "Hire an n8n and AI automation engineer. Share your workflow and get a scoped proposal and fixed quote within 24 hours. Engagement options, timelines, FAQ.",
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
