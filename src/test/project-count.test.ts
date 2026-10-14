import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { proofStats } from "@/data/site";

describe("portfolio project total", () => {
  it("reflects every catalog entry rather than the outdated 12", () => {
    expect(projects.length).toBeGreaterThan(12);
    expect(Number(proofStats[1].value)).toBe(projects.length);
  });
});