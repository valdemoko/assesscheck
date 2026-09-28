import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/indiana-property-tax/annual-adjustment/",
  title: "Indiana Annual Adjustment and the Form 11 Notice",
  description:
    "How Indiana's trending works, why there is no reassessment cycle, the two ways notice of your assessment arrives (Form 11 or the tax bill), and what each means for your 45-day appeal window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Indiana",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/indiana-property-tax/", label: "Indiana Property Tax" },
        { label: "Annual Adjustment" },
      ]}
    >
      <h1>Indiana Annual Adjustment and the Form 11 Notice</h1>

      <p>
        Indiana is the only state on this site with{" "}
        <strong>no reassessment cycle at all</strong>. Since 2002, county
        assessors apply <strong>annual adjustment</strong> —
        &ldquo;trending&rdquo; — every year, using that year&rsquo;s sales
        data to move area values toward market. There is no six-year clock
        like Ohio&rsquo;s, no eight-year ceiling like North
        Carolina&rsquo;s, and therefore no year in which a big jump can be
        dismissed as &ldquo;the reassessment.&rdquo;
      </p>

      <h2>How trending works</h2>
      <p>
        Two layers produce each year&rsquo;s value:
      </p>
      <ol>
        <li>
          <strong>Mass appraisal characteristics.</strong> The assessor&rsquo;s
          record of your property — age, grade, condition, size, features —
          produces a base value under the state&rsquo;s rules, expressed as
          market value in use.
        </li>
        <li>
          <strong>The sales study.</strong> Each year&rsquo;s arm&rsquo;s-length
          sales in your area determine whether neighborhood values should
          move toward market — upward or downward. The adjustment is applied
          area-wide, not parcel by parcel.
        </li>
      </ol>
      <p>
        Before the values are certified, the{" "}
        <strong>Department of Local Government Finance (DLGF)</strong>{" "}
        reviews and approves each county&rsquo;s{" "}
        <strong>assessment-to-sales ratio study</strong> — the statistical
        check that the county&rsquo;s assessments actually track sales. This
        state-level approval is Indiana&rsquo;s structural answer to the
        question other states answer with equalization boards and ratio
        deadlines.
      </p>

      <h2>The two notice routes — and why the difference matters</h2>
      <p>
        Notice of your assessment arrives one of two ways, and the{" "}
        <strong>45-day appeal clock attaches to either</strong>:
      </p>
      <ul>
        <li>
          <strong>Form 11 — the notice of assessment.</strong> Mailed by the
          county assessor when the law requires individual notice (new
          construction, an assessment increase of more than 5%, and other
          triggers). If you receive one, your appeal window runs 45 days from
          its date.
        </li>
        <li>
          <strong>The tax bill (TS-1) itself.</strong> Where no Form 11 is
          issued, the tax bill serves as the notice of assessment — the
          state&rsquo;s own FAQ states it plainly. The window becomes the{" "}
          <strong>later of May 10 of the tax-bill year or 45 days after the
          bill&rsquo;s date</strong>.
        </li>
      </ul>
      <p>
        The DLGF&rsquo;s Citizen&rsquo;s Guide adds the June 15 framing: contact
        the local assessor by <strong>June 15 of the year you receive a Form
        11</strong> — or <strong>June 15 of the following year</strong> when
        none was mailed. The two framings describe the same window from
        different starting points; the notice or bill you actually hold
        controls your own date.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates with made-up figures — not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> 2026 assessment $260,000 after a year in
          which the neighborhood trended up; last year $245,000 (+6.1%).
        </li>
        <li>
          <strong>Step — the notice:</strong> because the increase exceeds 5%,
          a Form 11 is mailed, dated April 10, 2027.
        </li>
        <li>
          <strong>Step — the window:</strong> 45 days from April 10 is May 25,
          2027 — that is the deadline to initiate the appeal (see the{" "}
          <Link href="/indiana-property-tax/form-130-appeal/">
            Form 130 page
          </Link>
          ).
        </li>
        <li>
          <strong>Step — the burden:</strong> because the increase exceeded 5%,
          the burden of proof at the appeal is the county&rsquo;s, not yours —
          the single most owner-favorable rule in the Indiana system.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a Form 11 in the mailbox is
        both a notice and a warning about who carries the burden — a 5%+
        increase shifts it to the county. And since trending moves values
        every year, checking whether a Form 11 arrived is an{" "}
        <em>annual</em> task, not a once-a-cycle one.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the trend was
        correctly applied to your neighborhood (a ratio-study question), or
        what your bill will be — the circuit breaker may cap it regardless
        of the assessment (see the{" "}
        <Link href="/indiana-property-tax/circuit-breaker-caps/">
          caps page
        </Link>
        ).
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The technical rules of the DLGF&rsquo;s ratio-study review and the
        real property assessment guidelines&rsquo; valuation formulas are
        outside this page. The DLGF pages cited below are the authorities for
        the cycle and the notice routes.
      </p>

      <SourceList
        sourceIds={["in-dlgf-citizens-guide", "in-faqs-appeal"]}
      />
    </PageShell>
  );
}
