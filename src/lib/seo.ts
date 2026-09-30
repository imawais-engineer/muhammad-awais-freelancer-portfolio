/** Canonical production origin. No trailing slash, www host (Vercel redirects apex to www), HTTPS only. */
export const SITE_URL = "https://www.imawais.engineer";

/** Turns a root-relative path into an absolute canonical URL. */
export const absoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;

/** FAQPage schema from visible on-page Q&As. Only use with FAQs rendered on the same page. */
export const faqPageJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
