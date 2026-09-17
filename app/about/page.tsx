import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/about/",
  title: "About This Site",
  description:
    "What this site does, why it exists, how sources are selected and reviewed, and what it does not do.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "About",
});

export default function AboutPage() {
  return (
    <PageShell breadcrumbs={[{ label: "About" }]}>
      <h1>About This Site</h1>

      <h2>What this website does</h2>
      <p>
        This site helps Texas property owners understand their property tax
        assessment: who determines it, what it is based on, whether it may
        warrant a closer look, what evidence can be relevant, how the official
        protest process works, and what deadlines apply. The first local
        edition covers Harris County, Texas.
      </p>

      <h2>Why it exists</h2>
      <p>
        Property tax information in Texas is public and authoritative, but it is
        spread across statutes, state agency pages, and dozens of local
        appraisal district websites. A homeowner trying to decide whether an
        assessment deserves attention has to assemble that picture themselves.
        This site organizes reliable public information into an understandable
        sequence and is explicit about what it cannot determine.
      </p>

      <h2>What information it uses</h2>
      <p>
        We use public, official sources first: the Texas Comptroller of Public
        Accounts, Texas statutes, and official appraisal district materials such
        as the Harris Central Appraisal District (HCAD). Each important factual
        claim is linked to its source on the page where it appears, with the
        date we last verified it. Our <a href="/methodology/">methodology page</a>{" "}
        explains how sources are selected and ranked.
      </p>

      <h2>How information is reviewed</h2>
      <p>
        Pages are researched against primary sources before publication. Deadlines
        and procedures are recorded with their source and verification date, and
        pages that have not completed that process are not indexed or promoted.
        We do not publish a page until its factual basis is documented. When
        something cannot be verified, we say so rather than guessing.
      </p>

      <h2>What this site does not do</h2>
      <ul>
        <li>
          It does not provide individualized legal, tax, appraisal, or financial
          advice. See our <a href="/disclaimer/">disclaimer</a>.
        </li>
        <li>
          It does not represent property owners or file protests on their
          behalf.
        </li>
        <li>
          It does not guarantee or predict protest outcomes, and it does not
          promise savings.
        </li>
        <li>
          It does not determine the legally correct value of any property. The
          appraisal district, the Appraisal Review Board, and the courts do that
          under Texas law.
        </li>
      </ul>

      <h2>Editorial process and authorship</h2>
      <p>
        The site is created and maintained by{" "}
        <a href="/about/author/">{siteConfig.author.name}</a> — see{" "}
        <a href="/about/author/">about the author</a> for responsibility and
        contact context. We do not claim professional legal or appraisal
        credentials we do not have. The editorial and research process is
        described on our <a href="/editorial-policy/">editorial policy</a>{" "}
        page, and errors can be reported through our{" "}
        <a href="/corrections/">corrections process</a>.
      </p>

      <h2>Contact</h2>
      <p>
        To report an error, a broken official link, or a data problem, use the{" "}
        <a href="/contact/">contact page</a>.
      </p>
    </PageShell>
  );
}
