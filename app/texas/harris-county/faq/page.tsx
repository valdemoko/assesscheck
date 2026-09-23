import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas/harris-county/faq/",
  title: "Harris County Property Tax FAQ",
  description:
    "Harris County property tax questions: HCAD's role, filing a protest with HCAD, homestead exemptions, and where to verify deadlines.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Harris County",
});

export default function HarrisCountyFAQPage() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { label: "Texas" },
        { href: "/texas/harris-county/", label: "Harris County" },
        { label: "FAQ" },
      ]}
    >
      <h1>Harris County Property Tax FAQ</h1>

      <section>
        <h2>Who determines my Harris County property value?</h2>
        <p>
          The Harris Central Appraisal District (HCAD), a political subdivision
          of the State of Texas, appraises roughly 1.9 million parcels for more
          than 600 taxing units. HCAD determines value; it does not set your tax
          rates or collect your taxes.
        </p>
      </section>

      <section>
        <h2>How do I file a protest in Harris County?</h2>
        <p>
          File a written notice of protest with the HCAD Appraisal Review Board
          by the deadline (May 15 or 30 days after your notice was delivered,
          whichever is later). HCAD offers online filing through its official{" "}
          <a href="https://hcad.org/hcad-online-services/ifile-protest/" target="_blank" rel="noopener noreferrer">
            iFile protest system
          </a>
          , and the form is available on{" "}
          <a href="https://hcad.org/hcad-forms/hcad-all-forms/" target="_blank" rel="noopener noreferrer">
            HCAD's forms page
          </a>
          . The process and deadline rules are described on our{" "}
          <Link href="/texas-property-tax/protest/how-to-file/">how to
          file</Link> and <Link href="/texas-property-tax/protest/deadlines/">deadlines</Link> pages.
        </p>
      </section>

      <section>
        <h2>How do I apply for a homestead exemption in Harris County?</h2>
        <p>
          File with HCAD — it accepts residential homestead applications
          electronically, including through its official mobile app. The general
          state deadline for exemption applications is before May 1. See{" "}
          <Link href="/texas-property-tax/exemptions/">exemptions</Link>.
        </p>
      </section>

      <section>
        <h2>Where can I see my property's record and value?</h2>
        <p>
          HCAD's official website provides a public property search by account,
          address, or owner name, plus a property tax database showing the
          taxes each taxing unit will impose. Start at{" "}
          <a href="https://hcad.org/" target="_blank" rel="noopener noreferrer">
            hcad.org
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Does Harris County have different protest deadlines than the rest of Texas?</h2>
        <p>
          No — the statewide statutory deadline applies. County-specific dates,
          such as when the ARB begins hearing protests, appear on your notice
          of appraised value and on HCAD's official site. We link rather than
          restate because we cannot verify a local calendar daily.
        </p>
      </section>

      <section>
        <h2>How does the 10% homestead cap work in Harris County?</h2>
        <p>
          The same as anywhere in Texas: if your property qualifies for a
          residence homestead exemption, its appraised value generally cannot
          rise more than 10% per year (plus the value of new improvements).
          In practice this means a Harris County home whose market value rose
          25% may show an appraised-value increase well below that once the
          cap applies — a large jump can also mean the cap took effect this
          year, or that improvements were added. The{" "}
          <Link href="/texas/harris-county/property-tax-checker/">
            Harris County checker
          </Link>{" "}
          screens this for you.
        </p>
      </section>

      <SourceList sourceIds={["hcad-home", "hcad-about", "hcad-ifile", "hcad-homestead"]} />
    </PageShell>
  );
}
