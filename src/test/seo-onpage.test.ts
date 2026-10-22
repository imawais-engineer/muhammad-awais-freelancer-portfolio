import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { routeMeta } from "@/data/routeMeta";
import { pageH1, servicePages, serviceForProject } from "@/data/seoPages";
import { getPageJsonLd } from "@/data/structuredData";

const types = (path: string) =>
  (getPageJsonLd(path)?.["@graph"] ?? []).map((n) => n["@type"] as string);

describe("on-page SEO", () => {
  it("keeps static and service titles <= 60 chars and descriptions <= 155", () => {
    for (const path of Object.keys(pageH1)) {
      const m = routeMeta[path];
      expect(m, path).toBeDefined();
      expect(m.title.length, `${path} title: ${m.title}`).toBeLessThanOrEqual(60);
      expect(m.description.length, `${path} description`).toBeLessThanOrEqual(155);
    }
  });

  it("keeps every case study description <= 160 chars", () => {
    for (const p of projects) {
      const m = routeMeta[`/projects/${p.slug}`];
      expect(m.description.length, p.slug).toBeLessThanOrEqual(160);
    }
  });

  it("links every service page to case studies that exist", () => {
    for (const s of servicePages) {
      expect(s.caseStudies.length, s.path).toBeGreaterThan(0);
      for (const slug of s.caseStudies) expect(projects.some((p) => p.slug === slug), `${s.path} -> ${slug}`).toBe(true);
    }
  });

  it("maps every case study back to a service page", () => {
    for (const p of projects) expect(servicePages).toContain(serviceForProject(p));
  });

  it("emits the expected JSON-LD entities", () => {
    expect(types("/")).toEqual(expect.arrayContaining(["WebSite", "Person", "ProfessionalService", "FAQPage"]));
    expect(types("/about")).toEqual(expect.arrayContaining(["ProfilePage", "Person", "BreadcrumbList"]));
    expect(types("/contact")).toEqual(expect.arrayContaining(["ContactPage", "BreadcrumbList", "FAQPage"]));
    const person = getPageJsonLd("/")!["@graph"].find((n) => n["@type"] === "Person")!;
    expect(person.sameAs).toEqual(
      expect.arrayContaining(["https://github.com/imawais-engineer", "https://contra.com/imawais_eningeer"]),
    );
    for (const s of servicePages) {
      expect(types(s.path), s.path).toEqual(expect.arrayContaining(["Service", "BreadcrumbList", "FAQPage"]));
    }
    for (const p of projects) {
      expect(types(`/projects/${p.slug}`), p.slug).toEqual(
        expect.arrayContaining(["BlogPosting", "CreativeWork", "BreadcrumbList"]),
      );
    }
  });
});
