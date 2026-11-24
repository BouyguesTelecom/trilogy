"use client"

import { useEffect, useState } from "react"

export interface TocItem {
  title: string
  id: string
  level: 2 | 3
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null)
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-96px 0px -72% 0px", threshold: 0 }
    )
    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside aria-label="On this page" className="toc-rail">
      <div className="toc-sticky">
        <p className="toc-title">On this page</p>
        <nav className="toc-links">
          {items.map((item) => (
            <a
              aria-current={activeId === item.id ? "location" : undefined}
              className={`toc-link level-${item.level}${activeId === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
