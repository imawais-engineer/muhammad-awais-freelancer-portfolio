/**
 * Page-level JSON-LD per route. Used by pages at runtime (via <Seo jsonLd>) and by
 * `scripts/prerender-head.ts`, which bakes the same graph into each static HTML
 * file so non-JS crawlers and validators see it. Keep this module free of
 * asset imports and "@/" aliases so the build script can load it.
 *
 * Entities share stable @ids so Google can merge them across pages:
 *   /#person (Person) · /#business (ProfessionalService) · /#website (WebSite)
 *   <service path>#service (Service) · /projects/<slug>#case-study (BlogPosting) + #work (CreativeWork)
 * FAQPage is only emitted on pages that render the same Q&As visibly.
 */
import { faqPageJsonLd } from "../lib/seo";
import { contactFaqs } from "./contactContent";
import { projectFaqs } from "./faqs";
import { identity } from "./identity";
import {
  type Graph,
  abs,
  businessNode,
  businessRef,
  crumbs,
  graph,
  homeJsonLd,
  personNode,
  personRef,
  webPage,
  websiteRef,
} from "./jsonLdCore";
import { projects } from "./projects";
import { projectSeo } from "./projectSeo";
import { routeMeta } from "./routeMeta";
import { servicePages, serviceForProject, staticPageSeo } from "./seoPages";
import {
  agenticFaqs,
  fullStackFaqs,
  hybridFaqs,
  leadFaqs,
  mcpFaqs,
  n8nFaqs,
  servicesFaqs,
} from "./serviceContent";

/** Visible FAQ per service page (FAQPage is only emitted where the Q&As are rendered). */
const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "/services/n8n-workflow-automation": n8nFaqs,
  "/services/lead-qualification-crm-automation": leadFaqs,
  "/services/mcp-engineering": mcpFaqs,
  "/services/agentic-systems": agenticFaqs,
  "/services/hybrid-automation": hybridFaqs,
  "/services/full-stack-ai-apps": fullStackFaqs,
};

const servicePageGraph = (s: (typeof servicePages)[number]): Graph =>
  graph([
    webPage(s.path, "WebPage", { mainEntity: { "@id": abs(`${s.path}#service`) } }),
    crumbs(s.path, [["Home", "/"], ["Services", "/services"], [s.label, s.path]]),
    {
      "@type": "Service",
      "@id": abs(`${s.path}#service`),
      url: abs(s.path),
      name: s.schema.name,
      serviceType: s.schema.serviceType,
      description: s.schema.description,
      provider: businessRef,
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "Agencies, SaaS teams and small businesses" },
      subjectOf: s.caseStudies
        .filter((slug) => projects.some((p) => p.slug === slug))
        .map((slug) => ({ "@id": abs(`/projects/${slug}#case-study`) })),
    },
    ...(serviceFaqs[s.path]?.length ? [faqPageJsonLd(serviceFaqs[s.path])] : []),
  ]);

const staticGraphs: Record<string, Graph> = {
  "/": homeJsonLd(),
  "/about": graph([
    webPage("/about", "ProfilePage", { mainEntity: personRef }),
    crumbs("/about", [["Home", "/"], ["About", "/about"]]),
    personNode,
  ]),
  "/contact": graph([
    webPage("/contact", "ContactPage", { mainEntity: businessRef }),
    crumbs("/contact", [["Home", "/"], ["Contact", "/contact"]]),
    faqPageJsonLd(contactFaqs),
  ]),
  "/projects": graph([
    {
      "@type": "CollectionPage",
      "@id": abs("/projects#webpage"),
      url: abs("/projects"),
      name: staticPageSeo["/projects"].h1,
      description: routeMeta["/projects"]?.description,
      isPartOf: websiteRef,
      author: personRef,
      breadcrumb: { "@id": abs("/projects#breadcrumb") },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: abs(`/projects/${p.slug}`),
          name: p.name,
        })),
      },
    },
    crumbs("/projects", [["Home", "/"], ["Projects", "/projects"]]),
  ]),
  "/services": graph([
    webPage("/services", "WebPage", { mainEntity: businessRef }),
    crumbs("/services", [["Home", "/"], ["Services", "/services"]]),
    businessNode,
    faqPageJsonLd(servicesFaqs),
  ]),
  ...Object.fromEntries(servicePages.map((s) => [s.path, servicePageGraph(s)])),
};

const projectGraph = (slug: string): Graph | undefined => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return undefined;
  const seo = projectSeo[slug];
  const path = `/projects/${slug}`;
  const route = routeMeta[path];
  const topic = seo?.topic ?? p.category.toLowerCase();
  const url = abs(path);
  const image = abs(route?.ogImage ?? "/og/projects.jpg");
  const service = serviceForProject(p);
  return graph([
    {
      "@type": "BlogPosting",
      "@id": `${url}#case-study`,
      url,
      headline: seo?.h1 ?? p.name,
      name: route?.title ?? p.name,
      description: route?.description ?? p.summary,
      abstract: p.summary,
      about: { "@id": `${url}#work` },
      articleSection: p.category,
      inLanguage: "en",
      datePublished: route?.article?.publishedTime,
      dateModified: route?.article?.modifiedTime,
      isPartOf: websiteRef,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { ...personRef, "@type": "Person", name: identity.name, url: abs("/") },
      publisher: personRef,
      keywords: [topic, ...p.tools].join(", "),
      image,
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "CreativeWork",
      "@id": `${url}#work`,
      name: p.name,
      description: p.summary,
      genre: p.category,
      creator: personRef,
      image,
      keywords: p.tools.join(", "),
      mentions: { "@id": abs(`${service.path}#service`) },
    },
    crumbs(path, [["Home", "/"], ["Projects", "/projects"], [seo?.h1 ?? p.name, path]]),
    faqPageJsonLd(projectFaqs(p)),
  ]);
};

export const getPageJsonLd = (path: string): Graph | undefined =>
  staticGraphs[path] ?? (path.startsWith("/projects/") ? projectGraph(path.slice("/projects/".length)) : undefined);
