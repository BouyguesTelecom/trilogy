import Link from "next/link"

import type {
  ComponentDoc,
  ComponentFamily,
  DocSection,
  FamilyDoc,
} from "@/lib/components"
import {
  getComponentFamilies,
  slugifyHeading,
  splitDocumentSections,
} from "@/lib/components"
import { ApiReference } from "@/components/api-reference"
import { ExampleCard } from "@/components/example-card"
import { MarkdownContent } from "@/components/markdown-content"
import { TableOfContents, type TocItem } from "@/components/table-of-contents"

function getToc(sections: DocSection[]): TocItem[] {
  return sections
    .filter((section) => section.id !== "examples")
    .map(({ title, id, level }) => ({ title, id, level }))
}

export function ComponentArticle({ doc }: { doc: ComponentDoc }) {
  const sections = splitDocumentSections(doc.markdown)
  const toc = getToc(sections)

  return (
    <div className="article-layout">
      <article className="component-article">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/components">Components</Link>
          <span aria-hidden="true">/</span>
          <span>{doc.family}</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{doc.name}</span>
        </nav>

        <header className="article-header">
          <div className="article-eyebrow">
            <span className="eyebrow-line" />
            {doc.family}
            <span className="eyebrow-dot">•</span>
            React
          </div>
          <h1>{doc.name}</h1>
          <p className="article-description">{doc.description}</p>
          <div className="article-header-meta">
            <span className="stable-pill">
              <i /> Stable
            </span>
            <span className="meta-divider" />
            <span>Web + Native</span>
          </div>
        </header>

        <div className="article-sections">
          {sections.map((section) =>
            section.id === "examples" ? null : (
              <section
                className={`doc-section level-${section.level}`}
                id={section.id}
                key={section.id}
              >
                {section.level === 2 ? (
                  <h2>{section.title}</h2>
                ) : (
                  <h3>{section.title}</h3>
                )}
                {section.level === 3 ? (
                  <ExampleCard section={section} />
                ) : section.id === "api-reference" ? (
                  <ApiReference markdown={section.markdown} />
                ) : (
                  <MarkdownContent source={section.markdown} />
                )}
              </section>
            )
          )}
        </div>
        <footer className="article-footer">
          <span>Part of the Trilogy design system</span>
          <span>React documentation</span>
        </footer>
      </article>
      <TableOfContents items={toc} />
    </div>
  )
}

export function ComponentsIndex({ families }: { families: ComponentFamily[] }) {
  const indexHeadingId = slugifyHeading("Explore the library")
  const toc = families.map((family) => ({
    title: family.name,
    id: slugifyHeading(family.name),
    level: 2 as const,
  }))
  return (
    <div className="article-layout index-layout">
      <article className="component-article">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <span>Trilogy</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Components</span>
        </nav>
        <header className="article-header">
          <div className="article-eyebrow">
            <span className="eyebrow-line" /> COMPONENT LIBRARY
          </div>
          <h1>Components</h1>
          <p className="article-description">
            Production-ready building blocks for consistent interfaces across
            React Web and React Native.
          </p>
          <div className="article-header-meta">
            <span className="stable-pill">
              <i /> Component catalog
            </span>
            <span className="meta-divider" />
            <span>Web + Native</span>
          </div>
        </header>
        <section className="doc-section" id={indexHeadingId}>
          <h2>Explore the library</h2>
          <p>
            Choose a component from the navigation or browse the families below.
            The navigation is generated from Markdown documentation stored next
            to each component in the React package.
          </p>
          {families.map((family) => (
            <section
              className="family-catalog-section"
              id={slugifyHeading(family.name)}
              key={family.name}
            >
              <h3>{family.name}</h3>
              <div className="family-card-grid">
                <Link
                  className="component-card family-card"
                  href={`/components/families/${family.slug}`}
                >
                  <div className="component-card-top">
                    <span className="component-card-icon">
                      {family.name.slice(0, 1)}
                    </span>
                    <span className="component-card-arrow">↗</span>
                  </div>
                  <span className="component-card-family">
                    Component family
                  </span>
                  <strong>{family.name}</strong>
                  <span className="component-card-description">
                    {family.description}
                  </span>
                </Link>
              </div>
            </section>
          ))}
        </section>
      </article>
      <TableOfContents items={toc} />
    </div>
  )
}

export function FamilyArticle({ family }: { family: FamilyDoc }) {
  const sections = splitDocumentSections(family.markdown)
  const familyComponents =
    getComponentFamilies().find((entry) => entry.slug === family.slug)
      ?.components ?? []
  return (
    <div className="article-layout">
      <article className="component-article">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/components">Components</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{family.name}</span>
        </nav>
        <header className="article-header">
          <div className="article-eyebrow">
            <span className="eyebrow-line" /> COMPONENT FAMILY
          </div>
          <h1>{family.name}</h1>
          <p className="article-description">{family.description}</p>
          <div className="article-header-meta">
            <span className="stable-pill">
              <i /> Component family
            </span>
            <span className="meta-divider" />
            <span>Web + Native</span>
          </div>
        </header>
        <div className="article-sections">
          {sections.map((section) =>
            section.level === 3 ? null : (
              <section
                className={`doc-section level-${section.level}`}
                id={section.id}
                key={section.id}
              >
                <h2>{section.title}</h2>
                {section.id !== "components" && (
                  <MarkdownContent source={section.markdown} />
                )}
                {section.id === "components" && (
                  <div className="family-component-list">
                    {familyComponents.map((item) => (
                      <Link
                        className="family-component-link"
                        href={`/components/${item.slug}`}
                        key={item.slug}
                      >
                        <span className="component-card-icon">
                          {item.name.slice(0, 1)}
                        </span>
                        <span className="family-component-copy">
                          <strong>{item.name}</strong>
                        </span>
                        <span className="component-card-arrow">↗</span>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            )
          )}
        </div>
        <footer className="article-footer">
          <span>Part of the Trilogy design system</span>
          <span>Component family</span>
        </footer>
      </article>
      <TableOfContents
        items={getToc(sections.filter((section) => section.level === 2))}
      />
    </div>
  )
}
