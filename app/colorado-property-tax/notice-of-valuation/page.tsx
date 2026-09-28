import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/colorado-property-tax/notice-of-valuation/",
  title: "The Colorado Notice of Valuation Explained",
  description:
    "What the Colorado Notice of Valuation contains, when it arrives, why it shows two years of actual value, and how the odd-year revaluation cycle and the sales-study window shape what you are reading.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Colorado",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/colorado-property-tax/", label: "Colorado Property Tax" },
        { label: "Notice of Valuation" },
      ]}
    >
      <h1>The Colorado Notice of Valuation Explained</h1>

      <p>
        The Notice of Valuation (NOV) is the document that opens
        Colorado&rsquo;s appeal season: real property NOVs are mailed{" "}
        <strong>by May 1</strong> each year, and the protest period they
        start runs through <strong>June 8</strong>. It is also a notice that
        reads differently depending on where you are in the{" "}
        <strong>odd-year revaluation cycle</strong> — which is the part most
        often misread.
      </p>

      <h2>What is on it</h2>
      <ul>
        <li>
          <strong>The property&rsquo;s location and classification</strong> —
          the classification matters, because it selects the{" "}
          <Link href="/colorado-property-tax/assessment-rate/">
            assessment rate
          </Link>{" "}
          your property will carry.
        </li>
        <li>
          <strong>The value-relevant characteristics</strong> — size, age,
          condition and similar facts the assessor used. Errors here are
          among the easiest protests to win.
        </li>
        <li>
          <strong>Actual value for the prior and current years</strong> —
          the two-year comparison that shows the change the revaluation (or
          the intervening adjustment) produced.
        </li>
        <li>
          <strong>The protest instructions and the window dates</strong> —
          with the Division&rsquo;s caution, stated on its own pages:{" "}
          statutory dates shift when they fall on weekends or holidays, so
          the dates printed on your notice and your assessor&rsquo;s
          published dates are the ones to rely on.
        </li>
      </ul>

      <h2>Revaluation year vs. carryover year</h2>
      <p>
        Real property is revalued every <strong>odd-numbered year</strong>.
        In an odd year, your NOV carries the fresh revaluation — typically
        the year&rsquo;s big move. In an even year, the value carries over
        from the last revaluation <em>unless something changed</em> —
        construction, destruction, a change in ownership or use — in which
        case the notice reflects that adjustment. For the 2025 and 2026 tax
        years, the comparable-sales window for residential valuation is{" "}
        <strong>January 1, 2023 through June 30, 2024</strong>.
      </p>
      <p>
        <strong>What this tells you:</strong> the sales window is the
        evidentiary frame of your protest. A crash in the market since
        mid-2024 is not, by itself, evidence about the value set from the
        2023–2024 window — the protest has to argue the value{" "}
        <em>within</em> the frame, or the specific characteristics and
        conditions that distinguish your property from the window&rsquo;s
        sales.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your tax bill. The NOV
        shows actual value only — the rate and the mill levies that turn it
        into a bill are set later in the year, and the{" "}
        <Link href="/colorado-property-tax/assessment-rate/">
          rate is legislative
        </Link>
        .
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative reading with made-up numbers — not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> a NOV mailed May 1, 2026 (a carryover
          year) showing prior actual value $505,000 and current actual value
          $512,000, with a $7,000 increase attributed to an added finished
          basement.
        </li>
        <li>
          <strong>Step — read the change:</strong> a small increase in an
          even year usually means an adjustment, not a revaluation. The
          notice&rsquo;s characteristics section is where the cause lives.
        </li>
        <li>
          <strong>Step — check the trigger:</strong> if the basement was
          never finished, the characteristic is wrong — the cheapest protest
          to win, because the evidence is photographs and permits, not
          market opinions.
        </li>
        <li>
          <strong>Step — the window:</strong> file or appear by June 8;
          after the protest, the assessor&rsquo;s Notice of Determination
          arrives (see the{" "}
          <Link href="/colorado-property-tax/protest-and-appeal/">
            protest page
          </Link>
          ).
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        Business personal property declarations and their separate calendar,
        and the assessor&rsquo;s internal valuation methods for
        non-residential classes, are outside this page. The
        Division&rsquo;s Understanding Property Taxes page cited below is
        the authority for the NOV&rsquo;s contents and timing.
      </p>

      <SourceList
        sourceIds={["co-dpt-understanding", "co-dpt-property-tax-map"]}
      />
    </PageShell>
  );
}
