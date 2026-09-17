import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/accessibility/",
  title: "Accessibility",
  description:
    "The accessibility measures built into AssessCheck, what we do not yet claim, and how to report a barrier.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "About",
});

export default function AccessibilityPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "About" }, { label: "Accessibility" }]}
    >
      <h1>Accessibility</h1>
      <p>
        Last updated:{" "}
        <time dateTime={siteConfig.legal.lastUpdated.accessibility}>
          {siteConfig.legal.lastUpdated.accessibility}
        </time>
      </p>

      <h2>What this site does</h2>
      <p>
        {siteConfig.name} is built with accessibility as a structural
        requirement rather than a final polish. Concrete measures in the
        current implementation:
      </p>
      <ul>
        <li>
          semantic HTML landmarks (header, navigation, main, footer) on every
          page;
        </li>
        <li>
          a visible &ldquo;skip to main content&rdquo; link as the first
          focusable element;
        </li>
        <li>
          form fields with programmatically associated <code>label</code>{" "}
          elements and grouped fieldsets;
        </li>
        <li>
          keyboard-operable everything — no interaction requires a mouse, and
          focus states are always visible;
        </li>
        <li>
          checker results announced via <code>aria-live</code> so screen
          readers hear them when they render;
        </li>
        <li>
          data tables with captions and scoped column headers;
        </li>
        <li>
          color contrast built from token pairs chosen to meet WCAG AA for
          body text;
        </li>
        <li>
          motion respects the <code>prefers-reduced-motion</code> system
          setting;
        </li>
        <li>
          responsive layouts tested down to narrow phone widths, with no
          horizontal-scroll traps.
        </li>
      </ul>

      <h2>What we do not claim</h2>
      <p>
        We have not commissioned a formal WCAG conformance audit and we do not
        display a certification badge. Saying &ldquo;accessible&rdquo; without
        evidence would be the kind of overclaim this site avoids elsewhere, so
        the honest statement is: the measures above are implemented in code,
        and barriers may still exist.
      </p>

      <h2>Report a barrier</h2>
      <p>
        If something on this site is hard or impossible for you to use, tell us
        via the <a href="/contact/">contact page</a>, including the page
        address and what went wrong. Accessibility reports are treated as
        defects and prioritized alongside factual corrections.
      </p>
    </PageShell>
  );
}
