// Primary navigation, as data.
//
// Why this is not inline in the header component any more. The header listed
// every state as its own top-level link, so the seventh state would have pushed
// the nav into a fourth line, and adding a state meant remembering to edit a
// component — the kind of step that gets missed precisely when the state itself
// is being added. The list below derives the state links from
// `siteConfig.jurisdictions`, which is already the single source of truth for
// per-jurisdiction paths, so a state that is registered in site-config appears
// in the navigation without a second edit.
//
// It is also plain data in `lib/`, not a `"use client"` component, which means
// tests can import it and check that every link points at a registered route.
// A nav that links to a page that does not exist is a 404 in the most visible
// place on the site.

import { siteConfig } from "@/lib/site-config";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavGroup {
  /** The clickable label that opens the group (a native <details> summary). */
  label: string;
  /** Shown when the group is open, above its links. */
  description: string;
  links: NavLink[];
}

/** Sections that are the same regardless of state. */
export const primaryNav: NavLink[] = [
  { href: "/property-tax-checker/", label: "Assessment Checker" },
  { href: siteConfig.statesHubPath, label: "By State" },
  { href: "/evidence/property-tax-protest-evidence/", label: "Evidence" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

/**
 * The states, in the order site-config declares them. Order is therefore a
 * property of the configuration rather than of the component.
 *
 * The cross-state comparison hub is deliberately NOT repeated here. It is
 * already the top-level "By State" link, and two labels pointing at one page is
 * a redundant destination as well as a confusing one — the menu says where the
 * comparison lives instead of linking to it twice.
 */
export const stateNav: NavLink[] = Object.values(siteConfig.jurisdictions).map((j) => ({
  href: j.hubPath,
  label: j.name,
}));

export const statesNavGroup: NavGroup = {
  label: "States",
  description:
    "Each state documented from its own statutes and official sources. To compare all of them side by side, see By State.",
  links: stateNav,
};

/** The state a pathname belongs to, or undefined for shared pages. */
export function activeStateLabel(pathname: string): string | undefined {
  const match = Object.values(siteConfig.jurisdictions).find(
    (j) =>
      pathname === j.hubPath ||
      pathname.startsWith(j.hubPath) ||
      // Texas county pages live under /texas/, not /texas-property-tax/.
      (j.hubPath.startsWith("/texas-") && pathname.startsWith("/texas/"))
  );
  return match?.name;
}

/**
 * Every href the header can render. Used by the navigation test, and the reason
 * it can be exhaustive instead of sampled.
 */
export function allNavHrefs(): string[] {
  return [...primaryNav, ...stateNav].map((l) => l.href);
}
