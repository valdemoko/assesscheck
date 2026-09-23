import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function PageShell({
  children,
  breadcrumbs,
}: {
  children: ReactNode;
  breadcrumbs?: { href?: string; label: string }[];
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((b, i) => {
              // Only the last crumb is the page you are on. A section name in
              // the middle of a trail needs no href of its own — there may be no
              // page for it — and marking it current made trails like
              // "Texas › Harris County › FAQ" announce two current pages.
              const isCurrent = i === breadcrumbs.length - 1;
              const ariaCurrent = isCurrent ? "page" : undefined;
              return (
                <li key={`${b.label}-${i}`}>
                  {b.href ? (
                    <Link href={b.href} aria-current={ariaCurrent}>
                      {b.label}
                    </Link>
                  ) : (
                    <span aria-current={ariaCurrent}>{b.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <main id="main" className="page-main">
        {children}
      </main>

      <SiteFooter />
    </>
  );
}
