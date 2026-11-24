"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import type { ComponentFamily, ComponentNavItem } from "@/lib/components"

function isCurrentItem(item: ComponentNavItem, pathname: string): boolean {
  return (
    pathname === `/components/${item.slug}` ||
    item.children.some((child) => isCurrentItem(child, pathname))
  )
}

function ComponentLink({
  item,
  pathname,
  level = 0,
  onNavigate,
}: {
  item: ComponentNavItem
  pathname: string
  level?: number
  onNavigate: () => void
}) {
  const active = pathname === `/components/${item.slug}`
  const expanded =
    active || item.children.some((child) => isCurrentItem(child, pathname))

  return (
    <div className="nav-tree-item">
      <Link
        aria-current={active ? "page" : undefined}
        className={`component-nav-link${active ? " is-active" : ""}`}
        href={`/components/${item.slug}`}
        onClick={onNavigate}
        style={{ paddingLeft: `${12 + level * 14}px` }}
      >
        <span className="nav-item-dot" />
        <span>{item.name}</span>
      </Link>
      {expanded && item.children.length > 0 && (
        <div className="nav-subtree">
          {item.children.map((child) => (
            <ComponentLink
              item={child}
              key={child.slug}
              level={level + 1}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsShell({
  families,
  children,
}: {
  families: ComponentFamily[]
  children: ReactNode
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobileNav = () => setMobileOpen(false)

  return (
    <div className="docs-app">
      <header className="topbar">
        <button
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className="mobile-menu-button"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
        <Link className="brand" href="/components" onClick={closeMobileNav}>
          <span aria-hidden="true" className="brand-mark">
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>Trilogy</strong>
            <span>Design system</span>
          </span>
        </Link>
        <div className="topbar-spacer" />
        <div className="topbar-status">
          <span className="status-indicator" />
          React components
        </div>
        <a
          className="topbar-link"
          href="https://github.com"
          rel="noreferrer"
          target="_blank"
        >
          <span className="github-mark" aria-hidden="true">
            ⌘
          </span>
          Source
          <span aria-hidden="true" className="external-mark">
            ↗
          </span>
        </a>
      </header>

      <div className="docs-body">
        {mobileOpen && (
          <button
            aria-label="Close navigation"
            className="mobile-backdrop"
            onClick={closeMobileNav}
            type="button"
          />
        )}
        <aside
          aria-label="Component navigation"
          className={`sidebar${mobileOpen ? " is-open" : ""}`}
        >
          <div className="sidebar-section-heading">LIBRARY</div>
          <Link
            aria-current={pathname === "/components" ? "page" : undefined}
            className={`components-home-link${pathname === "/components" ? " is-active" : ""}`}
            href="/components"
            onClick={closeMobileNav}
          >
            <span className="grid-icon" aria-hidden="true">
              <i /> <i /> <i /> <i />
            </span>
            <span>Components</span>
          </Link>

          <nav className="family-navigation">
            {families.map((family) => (
              <section className="family-section" key={family.name}>
                <Link
                  aria-current={
                    pathname === `/components/families/${family.slug}`
                      ? "page"
                      : undefined
                  }
                  className={`family-heading-link${pathname === `/components/families/${family.slug}` ? " is-active" : ""}`}
                  href={`/components/families/${family.slug}`}
                  onClick={closeMobileNav}
                >
                  {family.name}
                </Link>
                <div className="family-items">
                  {family.components.map((item) => (
                    <ComponentLink
                      item={item}
                      key={item.slug}
                      pathname={pathname}
                      onNavigate={closeMobileNav}
                    />
                  ))}
                </div>
              </section>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="footer-avatar">T</div>
            <div className="footer-copy">
              <strong>Trilogy UI</strong>
              <span>React · Web &amp; Native</span>
            </div>
            <span className="footer-version">v5</span>
          </div>
        </aside>

        <main className="docs-main">{children}</main>
      </div>
    </div>
  )
}
