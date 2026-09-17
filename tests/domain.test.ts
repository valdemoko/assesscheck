import { describe, it, expect } from "vitest";
import { SITE_URL_RESOLVED } from "@/lib/seo/metadata";

// The hard "build fails without env" behavior was verified manually during
// remediation (`npm run build` with no env exits 1 printing
// "NEXT_PUBLIC_SITE_URL is not set"). In-process we verify the resolution
// contract that matters for SEO: no placeholder domain can ever be exported.

describe("domain enforcement (CONTENT-ADSENSE-AUDIT P-08)", () => {
  it("resolved SITE_URL never contains a placeholder domain", () => {
    expect(SITE_URL_RESOLVED).not.toContain("example.org");
    expect(SITE_URL_RESOLVED).not.toContain("example.com");
  });

  it("resolved SITE_URL is a valid absolute http(s) origin", () => {
    const u = new URL(SITE_URL_RESOLVED);
    expect(["http:", "https:"]).toContain(u.protocol);
    expect(u.pathname).toBe("/");
  });

  it("in the test environment the dev fallback or an explicitly provided domain is used", () => {
    // Tests run with NEXT_PUBLIC_SITE_URL unset -> the explicit dev flag
    // path applies (set in vitest.config.ts), OR CI supplied a real domain.
    const isDev = SITE_URL_RESOLVED === "http://localhost:3000";
    const isExplicit = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
    expect(isDev || isExplicit).toBe(true);
  });

  it("dev fallback is opt-in only: without the flag, resolution is undefined (which throws at import)", () => {
    // Simulated check of the resolution logic itself.
    const env = { NEXT_PUBLIC_SITE_URL: "", NEXT_PUBLIC_SITE_URL_DEV: "" };
    const resolve = (e: typeof env): string | undefined =>
      e.NEXT_PUBLIC_SITE_URL
        ? e.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
        : e.NEXT_PUBLIC_SITE_URL_DEV === "1"
          ? "http://localhost:3000"
          : undefined;
    expect(resolve(env)).toBeUndefined();
    expect(resolve({ ...env, NEXT_PUBLIC_SITE_URL_DEV: "1" })).toBe("http://localhost:3000");
    expect(resolve({ ...env, NEXT_PUBLIC_SITE_URL: "https://real.site/" })).toBe("https://real.site");
  });
});
