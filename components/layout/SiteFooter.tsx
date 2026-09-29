import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Single reusable footer for every page (rendered by PageShell). Four link
// groups + bottom bar with dynamic year and author attribution. Every href
// is verified by tests/footer-links.test.ts — never add a link here without
// creating the target page in the same change.

type FooterLink = { href: string; label: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Assess",
    links: [
      { href: "/property-tax-checker/", label: "Assessment checker" },
      { href: "/property-value-estimator/", label: "Property value estimator" },
      { href: "/texas-property-tax/property-value-estimator/", label: "Texas estimator" },
      { href: "/florida-property-tax/property-value-estimator/", label: "Florida estimator" },
      { href: "/ohio-property-tax/property-value-estimator/", label: "Ohio estimator" },
      { href: "/georgia-property-tax/property-value-estimator/", label: "Georgia estimator" },
      { href: "/arizona-property-tax/property-value-estimator/", label: "Arizona estimator" },
      { href: "/nevada-property-tax/property-value-estimator/", label: "Nevada estimator" },
      { href: "/michigan-property-tax/property-value-estimator/", label: "Michigan estimator" },
      { href: "/texas/harris-county/property-tax-checker/", label: "Harris County checker" },
      { href: "/texas-property-tax/protest/deadlines/", label: "Texas deadlines" },
      { href: "/florida-property-tax/deadlines/", label: "Florida deadlines" },
      { href: "/texas-property-tax/protest/how-to-file/", label: "Texas: how to file" },
      { href: "/florida-property-tax/vab-petition/", label: "Florida: VAB petition" },
      { href: "/california-property-tax/deadlines/", label: "California deadlines" },
      { href: "/california-property-tax/assessment-appeal/", label: "California: appeal" },
      { href: "/arizona-property-tax/deadlines/", label: "Arizona deadlines" },
      { href: "/arizona-property-tax/petition-for-review/", label: "Arizona: petition" },
      { href: "/nevada-property-tax/deadlines/", label: "Nevada deadlines" },
      { href: "/nevada-property-tax/tax-cap-abatement/", label: "Nevada tax cap" },
      { href: "/oregon-property-tax/deadlines/", label: "Oregon deadlines" },
      { href: "/oregon-property-tax/measure-50-mav/", label: "Oregon: MAV limit" },
      { href: "/michigan-property-tax/deadlines/", label: "Michigan deadlines" },
      { href: "/michigan-property-tax/taxable-value/", label: "Michigan: taxable value" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/property-tax-by-state/", label: "Property tax by state" },
      { href: "/texas-property-tax/", label: "Texas property tax" },
      { href: "/florida-property-tax/", label: "Florida property tax" },
      { href: "/california-property-tax/", label: "California property tax" },
      { href: "/arizona-property-tax/", label: "Arizona property tax" },
      { href: "/nevada-property-tax/", label: "Nevada property tax" },
      { href: "/oregon-property-tax/", label: "Oregon property tax" },
      { href: "/colorado-property-tax/", label: "Colorado property tax" },
      { href: "/ohio-property-tax/", label: "Ohio property tax" },
      { href: "/north-carolina-property-tax/", label: "North Carolina property tax" },
      { href: "/massachusetts-property-tax/", label: "Massachusetts property tax" },
      { href: "/virginia-property-tax/", label: "Virginia property tax" },
      { href: "/new-york-property-tax/", label: "New York property tax" },
      { href: "/georgia-property-tax/", label: "Georgia property tax" },
      { href: "/maryland-property-tax/", label: "Maryland property tax" },
      { href: "/indiana-property-tax/", label: "Indiana property tax" },
      { href: "/washington-property-tax/", label: "Washington property tax" },
      { href: "/new-jersey-property-tax/", label: "New Jersey property tax" },
      { href: "/minnesota-property-tax/", label: "Minnesota property tax" },
      { href: "/michigan-property-tax/", label: "Michigan property tax" },
      { href: "/arizona-property-tax/full-cash-vs-limited-value/", label: "Arizona: LPV limit" },
      { href: "/texas-property-tax/protest/", label: "Protest process (TX)" },
      { href: "/texas-property-tax/faq/", label: "Texas FAQ" },
      { href: "/evidence/property-tax-protest-evidence/", label: "Evidence guide" },
      { href: "/comparables/", label: "Comparable properties" },
      { href: "/texas/harris-county/", label: "Harris County" },
  { href: "/texas/dallas-county/", label: "Dallas County" },
      { href: "/resources/", label: "Official resources" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about/", label: "About AssessCheck" },
      { href: "/about/author/", label: "About the author" },
      { href: "/methodology/", label: "Methodology" },
      { href: "/editorial-policy/", label: "Editorial policy" },
      { href: "/corrections/", label: "Corrections" },
      { href: "/accessibility/", label: "Accessibility" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy/", label: "Privacy policy" },
      { href: "/cookie-policy/", label: "Cookie policy" },
      { href: "/terms/", label: "Terms of use" },
      { href: "/disclaimer/", label: "Disclaimer" },
      { href: "/advertising-disclosure/", label: "Advertising disclosure" },
      { href: "/consent-preferences/", label: "Consent preferences" },
    ],
  },
];

const BOTTOM_LINKS: FooterLink[] = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/cookie-policy/", label: "Cookies" },
  { href: "/terms/", label: "Terms" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/contact/", label: "Contact" },
  { href: "/consent-preferences/", label: "Consent preferences" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{siteConfig.name}</p>
          <p className="site-footer__desc">{siteConfig.description}</p>
          <p className="site-footer__author">
            Created and maintained by{" "}
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.author.name}
            </a>
            .
          </p>
        </div>

        <nav className="site-footer__columns" aria-label="Footer">
          {COLUMNS.map((col) => (
            <section key={col.heading} className="site-footer__col">
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="site-footer__bottom-links">
            {BOTTOM_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="site-footer__disclaimer">
          {siteConfig.name} provides general educational information about
          property tax assessments and the review process — Texas, Florida,
          California, Arizona, Nevada, Oregon, Michigan, Colorado, Ohio,
          North Carolina, Massachusetts, Virginia, New York, Georgia,
          Maryland and Indiana. It is not legal, tax, appraisal, or financial
          advice, and it is not affiliated with any appraisal district, property
          appraiser, or government agency. Verify current deadlines and
          procedures with the applicable authority and official sources.
        </p>
      </div>
    </footer>
  );
}
