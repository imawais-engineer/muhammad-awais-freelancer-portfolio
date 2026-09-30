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
      "Muhammad Awais is an AI Automation Engineer building n8n workflow automation and AI systems that cut 20+ hours of manual work a week for agencies, SaaS teams and small businesses.",
    ogImage: "/og/home.jpg",
    ogImageAlt:
      "Muhammad Awais, AI Automation Engineer — I build smart systems that automate work",
  },
  "/projects": {
    title: "AI Automation Projects & n8n Case Studies | Muhammad Awais",
    description:
      "Documented n8n, Make.com and AI automation projects — lead qualification, CRM pipelines, AI agents and reporting: the problem, architecture and measured results.",
    ogImage: "/og/projects.jpg",
    ogImageAlt: `${projects.length} AI automation case studies by Muhammad Awais`,
  },
  "/services": {
    title: "AI Automation Services | n8n Workflow Automation | Muhammad Awais",
    description:
      "AI automation services for agencies, SaaS teams and small businesses — n8n workflow automation, AI agents, CRM and lead automation that remove hours of manual work every week.",
    ogImage: "/og/services.jpg",
    ogImageAlt: "AI and n8n automation services by Muhammad Awais",
  },
  "/services/n8n-workflow-automation": {
    title: "n8n Workflow Automation Engineer | Muhammad Awais",
    description:
      "Freelance n8n workflow automation engineer building production workflows: API and webhook integrations, AI-assisted steps, error handling and retries, and documented business process automation.",
    ogImage: "/og/services-n8n.jpg",
    ogImageAlt: "n8n workflow automation service card",
  },
  "/services/lead-qualification-crm-automation": {
    title: "AI Lead Qualification & CRM Automation | Muhammad Awais",
    description:
      "Lead qualification automation, AI lead scoring, CRM and sales pipeline automation, lead routing and automated follow-up — built and documented by freelance AI Automation Engineer Muhammad Awais.",
    ogImage: "/og/services-lead.jpg",
    ogImageAlt: "AI lead qualification and CRM automation service card",
  },
  "/about": {
    title: "About Muhammad Awais | AI Automation Engineer & n8n Expert",
    description:
      "Background, credentials and working approach of Muhammad Awais — an AI Automation Engineer building production n8n and AI workflow automation for clients worldwide.",
    ogImage: "/og/about.jpg",
    ogImageAlt: "Portrait of Muhammad Awais, AI Automation Engineer and n8n & Make expert",
  },
  "/contact": {
    title: "Hire an AI Automation Engineer | Contact Muhammad Awais",
    description:
      "Start an AI automation project with Muhammad Awais, a freelance AI Automation Engineer. Tell him which process is still manual and get an honest scope for n8n, Make.com or AI agents.",
    ogImage: "/og/contact.jpg",
    ogImageAlt: "Start an automation project with Muhammad Awais",
  },
  "/media-kit": {
    title: "Muhammad Awais Media Kit | Brand Assets & Profile",
    description:
      "Media and partnership profile for Muhammad Awais: official bio, brand assets, professional profile and collaboration details.",
    ogImage: "/og/media-kit.jpg",
    ogImageAlt: "Muhammad Awais press and media kit card",
  },
  "/terms": {
    title: "Terms of Service | Muhammad Awais",
    description:
      "Terms of service covering website use and automation engagements with Muhammad Awais, AI Automation Engineer.",
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
          publishedTime: "2026-08-18T00:00:00Z",
          modifiedTime: "2026-09-30T00:00:00Z",
          section: p.category,
          tags: [seo?.topic ?? p.category, ...p.tools],
        },
      } satisfies RouteMeta,
    ];
  }),
);

export const routeMeta: Record<string, RouteMeta> = { ...staticRoutes, ...projectRoutes };

export const getRouteMeta = (path: string): RouteMeta | undefined => routeMeta[path];
