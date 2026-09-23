import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/",
  title: "Arizona Property Tax Basics",
  description:
    "How Arizona property tax works: the full cash value and the limited property value, which one the tax is levied on, the legal class assessment ratios, and why the valuation year is not the tax year.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Arizona",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Arizona Property Tax" }]}
    >
      <h1>Arizona Property Tax Basics</h1>

      <p>
        Arizona puts <strong>two values</strong> on the same property every year,
        and they do different jobs. Once that is clear, most of the confusion
        about Arizona assessments disappears — including the widely repeated idea
        that a successful appeal automatically lowers your tax bill.
      </p>

      <h2>The two values</h2>
      <ul>
        <li>
          <strong>Full cash value (FCV)</strong> — the county assessor&rsquo;s
          estimate of the property&rsquo;s market value. Since Tax Year 2015 no
          tax is levied on this value. It is, however, the value an owner
          challenges on appeal.
        </li>
        <li>
          <strong>Limited property value (LPV)</strong> — a value set by a
          statutory formula: the preceding valuation year&rsquo;s LPV{" "}
          <em>plus 5%</em>, and it may never exceed the current full
          cash value. Since Tax Year 2015 the tax is levied on the LPV — it is
          the value used to calculate the property tax bill.
        </li>
      </ul>
      <p>
        The LPV is not a discretionary judgement by the assessor; Arizona law
        defines it as a calculation from the prior year&rsquo;s LPV and the new
        full cash value, and the county assessors describe it that way. That is
        why an LPV that rises by more than 5% normally points to one
        of the statutory re-establishment situations rather than to an error —{" "}
        <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
          that list is here
        </Link>
        .
      </p>

      <h2>The third figure: assessed value</h2>
      <p>
        Tax rates are not applied to the FCV or to the LPV directly. They are
        applied to the <strong>assessed value</strong> — the assessment ratio for
        the property&rsquo;s legal class, applied to the limited property value.
      </p>
      <ul>
        <li>
          <strong>Class three</strong> is residential property occupied by the
          owner as the owner&rsquo;s <strong>primary residence</strong> (the
          statute also covers a residence occupied by a relative, and an
          owner-occupied home with lodgers), assessed at{" "}
          <strong>10%</strong>. It receives a state aid to education reduction on
          the bill.
        </li>
        <li>
          <strong>Class four</strong> is the residential class that catches what
          the others do not — including residential property that is solely
          leased or rented. Second and vacation homes sit here rather than in
          class three. Class four is also assessed at <strong>10%</strong>, but
          without the class three reduction.
        </li>
        <li>
          Other classes carry different, statutorily changing ratios — the class
          one ratio, for example, phases down to 15% after December 31, 2026.
        </li>
      </ul>
      <p>
        The class question is a factual one an owner can test, and it is worth
        testing: a misclassified property pays the wrong amount, and the statute
        defines the classes rather than leaving them to practice.
      </p>

      <h2>Valuation year, tax year</h2>
      <p>
        The valuation year is not the tax year. Values are set in the year{" "}
        <em>before</em> the year they are taxed: the valuation set as of January
        1 of one year appears on the tax bill for the following year, and it is
        built from sales data up to that January 1. Market changes that happen
        after the valuation date are not evidence about a valuation set as of
        that date — a point that decides a lot of appeals.
      </p>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> values the property each year,
          issues the notice of valuation, decides an owner&rsquo;s petition for
          review, and reports the net assessed valuation to the taxing
          jurisdictions. The assessor is not a taxing authority and cannot levy
          taxes.
        </li>
        <li>
          <strong>The taxing jurisdictions</strong> (county, cities, school
          districts and others) set the rates. The rates are applied to the net
          assessed valuation to produce the bill.
        </li>
        <li>
          <strong>The county Board of Equalization</strong> hears an appeal after
          the assessor has decided. In <strong>Maricopa and Pima counties
          only</strong>, an appeal can continue to the{" "}
          <strong>State Board of Equalization</strong>.
        </li>
        <li>
          <strong>The Tax Court</strong> — all Arizona tax court appeals are
          heard at Maricopa Superior Court.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only — not a valuation, not your property, and not
          a prediction. Rates in particular are different in every jurisdiction
          and are set in August.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the assessor&rsquo;s full cash value for the
          valuation year is $400,000. Last year&rsquo;s limited property value
          was $300,000.
        </li>
        <li>
          <strong>Step — the LPV formula:</strong> $300,000 plus 5% is
          $315,000, and that is below the $400,000 full cash value, so the
          limited property value is <strong>$315,000</strong>.
        </li>
        <li>
          <strong>Step — the ratio:</strong> for a class three residence, ten per
          cent of $315,000 gives an assessed value of{" "}
          <strong>$31,500</strong>.
        </li>
        <li>
          <strong>Step — the rates:</strong> if the combined rate for the
          jurisdictions that apply were $12 per $100 of assessed value
          (illustrative only), the tax on this property would be about{" "}
          <strong>$3,780</strong>. Note that the $400,000 full cash value played
          no part in that arithmetic.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> your tax base is the{" "}
        <em>limited</em> value. If your LPV sits well below your FCV — which is
        common after several years of ownership — then the FCV is not what your
        bill is built on.
      </p>
      <p>
        <strong>What it does not tell you:</strong> that appealing the full cash
        value is pointless. Correcting the FCV still matters when an error has
        pushed it below your LPV, when the classification is wrong, or when the
        property record itself is wrong. What follows from the statute is
        narrower and worth stating plainly: a successful reduction of the FCV
        alone changes the tax base only if the corrected FCV falls below the LPV
        that the formula produces.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
            Full cash value vs limited property value
          </Link>{" "}
          — the 5% formula and every statutory exception that overrides it.
        </li>
        <li>
          <Link href="/arizona-property-tax/notice-of-valuation/">
            The notice of valuation
          </Link>{" "}
          — what arrives before March 1, and what an amended notice changes.
        </li>
        <li>
          <Link href="/arizona-property-tax/petition-for-review/">
            The petition for review
          </Link>{" "}
          — the 60-day window, the form, and the two appeal routes.
        </li>
        <li>
          <Link href="/arizona-property-tax/appeal-evidence/">
            Evidence for an Arizona appeal
          </Link>{" "}
          — what the statute requires the petition to contain.
        </li>
        <li>
          <Link href="/arizona-property-tax/deadlines/">
            Arizona property tax deadlines
          </Link>{" "}
          — valuation date, notice, petition, decision, board, court and the two
          payment halves.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "az-const-art9-s18",
          "az-ars-42-13301",
          "az-ars-42-12003",
          "az-ars-42-12004",
          "az-ars-42-15003",
          "az-cochise-assessor-faq",
          "az-pima-treasurer-info",
        ]}
      />
    </PageShell>
  );
}
