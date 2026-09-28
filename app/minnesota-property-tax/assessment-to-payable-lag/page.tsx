import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/minnesota-property-tax/assessment-to-payable-lag/",
  title: "The Minnesota Assessment-to-Payable Year Lag",
  description:
    "Why Minnesota's assessment on January 2 calculates taxes payable the following year, the three notices that structure the cycle, and what the Valuation Notice does and does not tell you.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Minnesota",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/minnesota-property-tax/", label: "Minnesota Property Tax" },
        { label: "Assessment-to-Payable Lag" },
      ]}
    >
      <h1>The Assessment-to-Payable Year Lag</h1>

      <p>
        Minnesota&rsquo;s calendar has a one-year offset that surprises
        almost everyone the first time: the value and classification set on{" "}
        <strong>January 2 of the assessment year</strong> calculate the
        taxes <strong>payable the following year</strong>. Anoka
        County&rsquo;s own page gives the worked anchor: the 2025 assessment
        drives taxes payable in 2026, and the Tax Court deadline for it is
        April 30, 2026.
      </p>

      <h2>Where the value comes from</h2>
      <p>
        The county assessor sets <strong>estimated market value (EMV)</strong>{" "}
        and <strong>classification</strong> as of January 2, using a
        statutory <strong>sales-study window of October 1 to September
        30</strong> — the same twelve months of arm&rsquo;s-length sales
        statewide. EMV then becomes{" "}
        <strong>taxable market value (TMV)</strong> after deferments,
        exclusions, and reductions (including the homestead market value
        exclusion), and the class rate is applied to TMV to produce tax
        capacity.
      </p>

      <h2>The three notices, in order</h2>
      <ol>
        <li>
          <strong>The Valuation Notice</strong> — mailed{" "}
          <strong>on or before April 1</strong> of the assessment year. It
          shows the value and classification the <em>following</em>{" "}
          year&rsquo;s taxes will use, and it is the document the{" "}
          <Link href="/minnesota-property-tax/board-appeals/">
            board appeal meetings
          </Link>{" "}
          respond to — its face carries your board meeting dates.
        </li>
        <li>
          <strong>The Truth in Taxation notice</strong> — mailed in{" "}
          <strong>November</strong>, before local governments finalize
          budgets. It shows the proposed tax for the coming payable year
          under proposed budgets — the political-season notice, with the
          public hearings attached.
        </li>
        <li>
          <strong>The property tax statement</strong> — mailed by{" "}
          <strong>March 31</strong> of the payable year, with the final
          amounts and the installment dates.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the notice to act on is the{" "}
        <em>first</em> one. By the time the November and March documents
        arrive, the value is fixed and the board meetings have already
        happened — a protest printed on the March statement is a year late.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the tax amount on the
        statement uses the <em>prior</em> year&rsquo;s value, and the
        statement figure cannot be appealed at all — only the value and
        classification that produced it, through the windows that closed
        months earlier.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up figures — your own notice
          carries your dates.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 2, 2026:</strong> EMV set at $410,000 (from the
          October 2024 – September 2025 sales study).
        </li>
        <li>
          <strong>By April 1, 2026:</strong> the Valuation Notice arrives,
          showing $410,000 and your local board&rsquo;s meeting date — say,
          April 22.
        </li>
        <li>
          <strong>April 22, 2026:</strong> the LBAE (your city council)
          hears appeals; the county board follows in June.
        </li>
        <li>
          <strong>November 2026:</strong> Truth in Taxation notice proposes
          the 2027 tax on the (possibly appealed) value.
        </li>
        <li>
          <strong>March 31, 2027:</strong> the statement arrives with the
          final amount, payable May 15 and October 15, 2027.
        </li>
        <li>
          <strong>April 30, 2027:</strong> the Tax Court deadline for the
          2026 assessment — the last door, and it opens even for owners who
          skipped the boards.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The classification definitions (homestead, agricultural, commercial
        and the special subclasses) and the deferment programs are outside
        this page. The Department of Revenue&rsquo;s pages cited below are
        the authorities for the lag and the notices.
      </p>

      <SourceList
        sourceIds={["mn-dor-understanding", "mn-anoka-appeal", "mn-dor-appealing"]}
      />
    </PageShell>
  );
}
