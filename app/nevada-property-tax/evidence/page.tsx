import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/evidence/",
  title: "Evidence in a Nevada Property Value Appeal",
  description:
    "What a Nevada value appeal argues against: the cost method behind taxable value, the burden of proof on the owner, and why the abatement track is a separate case.",
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
        { label: "Evidence" },
      ]}
    >
      <h1>Evidence in a Nevada value appeal</h1>

      <p>
        Two facts shape what evidence is worth in Nevada, and neither is about
        how much documentation you can carry into a hearing. The first is that
        the <strong>burden of proof is on the taxpayer</strong>. The second is
        that the figure you are appealing is not an appraiser&rsquo;s opinion of
        your house — it is the output of a formula, and a formula is argued
        against at its inputs.
      </p>

      <h2>The burden is yours, and the counties say so</h2>
      <p>
        The county assessor&rsquo;s own material states the position plainly: on
        a value appeal to the County Board of Equalization, the burden of proof
        rests with the taxpayer. That is a practical instruction rather than a
        formality. A hearing is not the assessor walking you through how the
        figure was built; it is you showing why a specific element of it is
        wrong.
      </p>
      <p>
        It also sets the order of work. The notice has to reach you before the
        appeal window opens — value notices are to be sent by January 1, the
        date the assessment roll closes — and the forms are available in
        December, before that window opens. Reading the notice and asking the
        assessor&rsquo;s office for the record card behind it are both things
        you do inside that window, not after it.
      </p>

      <h2>What the figure is made of</h2>
      <p>
        Nevada taxable value is not derived from sales prices the way a market
        comparison is. The county assesses land at market value and improvements
        at their current replacement cost less statutory depreciation — 1.5% per
        year, capped at 50 years — with the cost data updated annually and the
        depreciation basis set out in the administrative code. The 35% assessment
        ratio is then applied to that taxable value to reach the assessed value
        the tax rate is charged against.
      </p>
      <p>
        That structure tells you what there is to argue about. Each of these is
        an input, and each can be wrong on its own:
      </p>
      <ul>
        <li>
          <strong>The land figure.</strong> Land is valued at market, so the
          evidence that speaks to it is land sales in the same area, not sales of
          finished houses.
        </li>
        <li>
          <strong>The replacement cost of the structure.</strong> Annual cost
          data is a table, and a table can be applied to the wrong class of
          building or the wrong square footage.
        </li>
        <li>
          <strong>The depreciation applied.</strong> The 1.5% per year and the
          50-year ceiling are fixed, so what can be wrong here is the age or the
          effective age the county has on record.
        </li>
        <li>
          <strong>The property characteristics.</strong> Living area, year built,
          class and condition are the facts the whole computation rests on, and
          they are the cheapest thing to check — the record card is the
          document to ask for.
        </li>
      </ul>
      <p>
        Where condition matters, what documents it is photographs and repair
        estimates: a structure with a failing roof is not the same structure the
        cost table describes, and the appeal is the place to say so with
        something in hand.
      </p>

      <h2>Where it goes, and when</h2>
      <ol>
        <li>
          <strong>The County Board of Equalization</strong> hears value appeals,
          with a filing deadline of <strong>January 15</strong> and the forms
          available the month before.
        </li>
        <li>
          <strong>The State Board of Equalization</strong> is the next step if
          the county board&rsquo;s decision is not the one you wanted; the
          counties publish the date for that filing, which falls in March.
        </li>
        <li>
          <strong>District Court</strong> comes after that.
        </li>
      </ol>
      <p>
        The dates above are the ones the county material states; the mechanics of
        filing are county-specific, so confirm the form and the address with the
        county that assessed you.
      </p>

      <h2>The abatement track is a separate case</h2>
      <p>
        If what you object to is the <em>bill</em> rather than the value, that is
        a different proceeding with a different deadline: a petition to review
        the partial abatement, filed with the assessor by <strong>June 30</strong>,
        which the office must acknowledge within 15 days and decide within 30,
        with an appeal to the Nevada Tax Commission within 30 days of that
        decision.
      </p>
      <p>
        Keeping the two apart matters because of what Nevada caps. The
        limitation here is on the amount the tax bill may increase, not on the
        taxable value — so winning a value appeal does not by itself reduce a
        bill that the abatement is already holding down, and a bill can rise
        while values fall. The{" "}
        <Link href="/nevada-property-tax/value-appeal/">appeal page</Link> covers
        the two tracks together, and the{" "}
        <Link href="/nevada-property-tax/tax-cap-abatement/">abatement page</Link>{" "}
        explains what the cap does to the amount due.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/nevada-property-tax/value-appeal/">
            Appealing your value
          </Link>{" "}
          — the January 15 track at the county board and the June 30 abatement
          track.
        </li>
        <li>
          <Link href="/nevada-property-tax/value-notice/">
            Your value notice
          </Link>{" "}
          — what the assessor sends, when, and what it does not include.
        </li>
        <li>
          <Link href="/nevada-property-tax/tax-cap-abatement/">
            The partial abatement
          </Link>{" "}
          — what is capped, what is not, and why a bill can rise when a value
          falls.
        </li>
        <li>
          <Link href="/nevada-property-tax/deadlines/">
            Nevada property tax deadlines
          </Link>{" "}
          — the lien date, both appeal windows and the four installments.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-faq",
          "nv-clark-assessor-real-property",
          "nv-washoe-abatement-appeal",
          "nv-washoe-assessor-dates",
        ]}
      />
    </PageShell>
  );
}
