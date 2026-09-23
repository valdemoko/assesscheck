import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/value-notice/",
  title: "Nevada's Value Notice: How to Read It",
  description:
    "What the Nevada assessor's value notice contains, when it is mailed, how taxable value and the 35% assessed value are built, and why the notice is not a tax bill.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/nevada-property-tax/", label: "Nevada Property Tax" },
        { label: "Your value notice" },
      ]}
    >
      <h1>Nevada&rsquo;s Value Notice: How to Read It</h1>

      <p>
        The document the assessor mails you is a{" "}
        <strong>notice of proposed value</strong> for the{" "}
        <em>next</em> fiscal year. It is not a bill, it does not contain your
        rate, and it does not contain your cap level — all three of those come
        later, on the tax bill the treasurer mails. Read it as a statement of the
        assessor&rsquo;s opinion of value, because that is the only thing on it
        you can appeal.
      </p>

      <h2>When it arrives</h2>
      <p>
        The assessor&rsquo;s calendar closes the real property roll and sets the
        deadline for mailing value notices at <strong>January 1</strong>, with the
        note that under NRS 361.310 the actual mailing may occur somewhat
        earlier. In practice the notices go out when the roll is completed each
        November. Two consequences follow: the appeal window is already running
        before the calendar year turns, and a notice you did not receive does not
        invalidate the appraisal — if yours seems to be missing, it is worth
        checking the mailing address on the account.
      </p>

      <h2>The two figures on it</h2>
      <ul>
        <li>
          <strong>Taxable value</strong> — the assessor&rsquo;s determination.
          For land it is the estimate of full cash value, taking account of
          location, zoning and actual use. For buildings it is the estimated
          replacement cost less statutory depreciation. Values are reviewed
          annually, either by reappraisal or by applying factors approved at
          state level, so a taxable value that moves every year is normal rather
          than an event.
        </li>
        <li>
          <strong>Assessed value</strong> — <strong>35% of the taxable value</strong>
          . This is the figure rates are applied to.
        </li>
      </ul>
      <p>
        In Clark County the depreciation step is published in more detail than
        most owners expect: a factor of 1.5% per year applied to the effective
        age of the improvements, up to a maximum of 50 years, with replacement
        costs taken from a national cost service as the administrative code
        requires and land valued from market sales. The same county publishes the
        calculation chain from taxable value to tax, which is worth reading once
        if you want to see where your bill comes from.
      </p>

      <h2>Why the value changed</h2>
      <p>
        The counties list the causes, and they are worth separating because only
        some of them are about the market: a boundary change (parcels divided or
        combined), new construction including additions and remodelling, a change
        in use such as converting a residence to office or retail use, and
        reappraisal or factoring. A value can therefore rise because the property
        changed, not because the market did.
      </p>

      <h2>What the notice is not</h2>
      <ul>
        <li>
          <strong>It is not a bill.</strong> Tax bills are mailed by the county
          treasurer: by August 1 for the secured roll, with unsecured real
          property billed later.
        </li>
        <li>
          <strong>It does not show your cap level or your abatement.</strong> The
          abatement level is printed on the tax bill, and the amount is the
          difference between the calculated tax and the capped figure.
        </li>
        <li>
          <strong>It is not a decision about what you owe.</strong> Rates are set
          in June, after your notice, by a state body working from local budgets.
        </li>
      </ul>

      <h2>What to do with it</h2>
      <ol>
        <li>
          <strong>Check the facts, not the percentage.</strong> The physical
          description drives the replacement-cost figure: square footage,
          additions, condition and the effective age used for depreciation. On
          request the assessor&rsquo;s office will furnish a copy of the most
          recent appraisal of the property.
        </li>
        <li>
          <strong>Call before you file.</strong> The counties say openly that
          most questions are resolved on the first call or visit with an
          appraiser, which is cheaper and faster than an appeal.
        </li>
        <li>
          <strong>If it is not resolved, note the date.</strong> A value appeal
          goes to the county Board of Equalization and must be filed at the
          assessor&rsquo;s office by{" "}
          <strong>January 15</strong> (the next business day when that date falls
          on a weekend or holiday). Forms are available from the assessor during
          December. The{" "}
          <Link href="/nevada-property-tax/value-appeal/">
            value appeal page
          </Link>{" "}
          sets out what you have to prove.
        </li>
      </ol>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>
            Whether a value increase means your bill will increase by the same
            proportion.
          </strong>{" "}
          It will not. Nevada caps the change in the bill, not the change in the
          value, so a large value move can produce a small bill move — or, in a
          falling market, the reverse. See{" "}
          <Link href="/nevada-property-tax/tax-cap-abatement/">
            the partial abatement
          </Link>
          .
        </li>
        <li>
          <strong>Whether the notice is the only document you need.</strong> If
          you own a rental, a manufactured home, or property whose ownership
          document was recently recorded, there may be a separate claim form
          coming — and failing to return it changes which cap level you receive.
        </li>
        <li>
          <strong>Your county&rsquo;s exact dates.</strong> The calendar above is
          from the Washoe County Assessor; the shape is statewide, the mailing
          dates are not.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-faq",
          "nv-washoe-assessor-dates",
          "nv-clark-assessor-real-property",
          "nv-washoe-treasurer-billing",
        ]}
      />
    </PageShell>
  );
}
