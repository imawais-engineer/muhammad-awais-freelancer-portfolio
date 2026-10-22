import { routeMeta } from "@/data/routeMeta";
import xml from "../../public/sitemap.xml?raw";
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

describe("sitemap", () => {
  it("lists every indexable route on the apex, with no trailing slash", () => {
    const expected = Object.entries(routeMeta)
      .filter(([, meta]) => !meta.noindex)
      .map(([path]) => `https://imawais.engineer${path === "/" ? "/" : path}`);

    expect(locs.slice().sort()).toEqual(expected.slice().sort());
    expect(xml).not.toContain("www.imawais.engineer");
    for (const loc of locs) {
      expect(loc.endsWith("/") && loc !== "https://imawais.engineer/").toBe(false);
    }
  });
});
