import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/indiana-property-tax/",
  title: "Indiana Property Tax",
  description:
    "How Indiana property tax works: annual adjustment instead of periodic reassessment, the Form 11 notice and 45-day Form 130 appeal with a 5% burden shift, the PTABOA and Indiana Board of Tax Review ladder, and the 1%/2%/3% circuit breaker caps on the bill.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Indiana",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Indiana Property Tax" }]}
    >
      <h1>Indiana Property Tax</h1>

      <p>
        Indiana has no periodic reassessment to wait for: since 2002 the
        county assessors apply <strong>annual adjustment</strong> — or{" "}
        <strong>&ldquo;trending&rdquo;</strong> — using each year&rsquo;s
        sales data to move values toward market. The state caps the{" "}
        <strong>bill</strong> rather than the value with its constitutional{" "}
        <strong>circuit breaker</strong>: no owner pays more than{" "}
        <strong>1%, 2%, or 3% of gross assessed value</strong> depending on
        the property class. The appeal starts with a{" "}
        <strong>Form 130</strong> within <strong>45 days</strong> of the
        notice — and if the assessment rose more than 5%, the{" "}
        <strong>burden of proof is on the county</strong>.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/indiana-property-tax/annual-adjustment/">
            Annual adjustment and the Form 11 notice
          </Link>{" "}
          — how trending replaced the reassessment clock, and what the two
          notice routes mean for your deadline.
        </li>
        <li>
          <Link href="/indiana-property-tax/form-130-appeal/">
            The Form 130 appeal and the 5% burden shift
          </Link>{" "}
          — the process, the evidence rules, and what happens when the county
          has to prove its own number.
        </li>
        <li>
          <Link href="/indiana-property-tax/circuit-breaker-caps/">
            The 1%/2%/3% circuit breaker caps
          </Link>{" "}
          — what the caps are measured against, the per-class credit, and the
          referendum carve-outs.
        </li>
        <li>
          <Link href="/indiana-property-tax/deadlines/">
            Indiana property tax deadlines
          </Link>{" "}
          — the trending cycle, the 45-day window, the PTABOA timeline and
          the May 10 / November 10 installments.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county and township assessors</strong> value property by
          mass appraisal and apply the annual adjustment.
        </li>
        <li>
          <strong>The Property Tax Assessment Board of Appeals
          (PTABOA)</strong> — the county-level board — hears appeals that the
          informal meeting does not resolve.
        </li>
        <li>
          <strong>The Department of Local Government Finance (DLGF)</strong>{" "}
          reviews and approves each county&rsquo;s ratio study, prescribes the
          appeal forms, and sets the tax rates from local budgets.
        </li>
        <li>
          <strong>The Indiana Board of Tax Review (IBTR)</strong> is the state
          appeal board, followed by the Indiana Tax Court.
        </li>
      </ul>

      <h2>Annual adjustment, not a reassessment clock</h2>
      <p>
        Most states on this site reassess every few years, and the big
        single-year value jumps that follow are a constant source of
        confusion. Indiana removed the cycle itself: every year, the
        assessor&rsquo;s sales data decides whether neighborhood values
        should move toward market, layered over the mass-appraisal
        characteristics (age, grade, condition) of each property. The DLGF
        reviews each county&rsquo;s assessment-to-sales ratio study before
        the values are certified — so the &ldquo;did they trend us too
        far?&rdquo; question is answered county-wide, by a state agency,
        before individual values even go out.
      </p>
      <p>
        The consequence for an owner: there is no off-year. A value can move
        every year, which makes the annual notice — and its 45-day appeal
        window — a fixture of every calendar, not a once-every-few-years
        event. The{" "}
        <Link href="/indiana-property-tax/annual-adjustment/">
          annual adjustment page
        </Link>{" "}
        explains the two notice routes and what each means for your deadline.
      </p>

      <h2>The bill is capped, not the value</h2>
      <p>
        The circuit breaker is Indiana&rsquo;s signature, and it works on the
        other side of the ledger from every percentage cap described on this
        site&rsquo;s Texas or Florida pages: budgets set rates, the rate is
        applied to your assessed value, and only then does the cap check the
        result — 1% of gross assessed value for homesteads, 2% for other
        residential and agricultural land, 3% for everything else. An
        assessment can rise by any percentage lawfully; what is bounded is
        what you can be made to pay. The{" "}
        <Link href="/indiana-property-tax/circuit-breaker-caps/">
          caps page
        </Link>{" "}
        works the arithmetic end to end, including the referendum
        carve-outs.
      </p>

      <h2>Finding your property</h2>
      <p>
        Indiana property records are county-run — each county assessor (or
        township assessor, in the counties that have them) maintains the
        parcels, and the county treasurer&rsquo;s site is where bills and
        payments live. The DLGF&rsquo;s statewide dashboard publishes
        county-level levy, rate, and cap-credit data if you want the
        system-wide picture of your county.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Township-level variation in assessing practice, business personal
        property, and the nonprofit and agricultural land classifications are
        not covered here. AssessCheck has no data connection to any Indiana
        county or the DLGF.
      </p>

      <SourceList
        sourceIds={[
          "in-dlgf-tax-bill-101",
          "in-dlgf-citizens-guide",
          "in-faqs-appeal",
          "in-dlgf-form130-flowchart",
        ]}
      />
    </PageShell>
  );
}
