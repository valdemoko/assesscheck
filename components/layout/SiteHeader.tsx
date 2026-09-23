"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand/BrandMark";
import { activeStateLabel, primaryNav, statesNavGroup } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const state = activeStateLabel(pathname);

  // The group stays closed. Passing `open` here would make React own the
  // element's state, and a re-render would then reopen a menu the reader just
  // closed — the control would fight the person using it. Orientation is carried
  // by the summary label instead ("States: Oregon"), which needs no interaction
  // and no height.
  const inStatesGroup = Boolean(state);

  return (
    <header className="site-header" data-home={isHome ? "true" : undefined}>
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="AssessCheck home">
          <BrandMark size={isHome ? 34 : 26} />
          <span className="site-header__title">AssessCheck</span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="site-header__group">
              {/*
                A native <details> rather than a hover menu: it works with a
                keyboard, it works without JavaScript, and it needs no focus
                trap or click-outside handler. The trade is that it opens on
                click instead of hover, which is also why it is predictable.
              */}
              <details>
                <summary
                  className="site-header__summary"
                  aria-current={inStatesGroup ? "true" : undefined}
                >
                  {state ? `States: ${state}` : statesNavGroup.label}
                </summary>
                <div className="site-header__menu">
                  <p className="site-header__menu-note">{statesNavGroup.description}</p>
                  <ul>
                    {statesNavGroup.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
