import { describe, it, expect } from "vitest";
import { generateMockData, getHealthBadgeColor } from "../utils";

describe("utils", () => {
  it("generateMockData returns an array of characters", () => {
    const data = generateMockData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("id");
    expect(data[0]).toHaveProperty("name");
  });

  it("getHealthBadgeColor maps health to class", () => {
    expect(getHealthBadgeColor("Healthy")).toContain("healthy");
    expect(getHealthBadgeColor("Injured")).toContain("injured");
    expect(getHealthBadgeColor("Critical")).toContain("critical");
  });
});
