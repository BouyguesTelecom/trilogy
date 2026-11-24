"use client"

import type { DocSection } from "@/lib/components"
import { InteractiveCodeExample } from "@/components/interactive-code-example"
import { MarkdownContent } from "@/components/markdown-content"

function splitExample(markdown: string) {
  const match = markdown.match(/```([\w-]*)\s*\n([\s\S]*?)\n```/)
  if (!match) return { prose: markdown.trim(), language: "tsx", source: "" }
  const prose =
    `${markdown.slice(0, match.index)}${markdown.slice((match.index ?? 0) + match[0].length)}`.trim()
  return {
    prose,
    language: match[1] || "tsx",
    source: match[2].trim(),
  }
}

export function ComponentExample({
  section,
  showDescription = true,
}: {
  section: DocSection
  showDescription?: boolean
}) {
  const { prose, language, source } = splitExample(section.markdown)
  return (
    <article className="example-card">
      {showDescription && prose && (
        <div className="example-description">
          <MarkdownContent source={prose} />
        </div>
      )}
      {source && <InteractiveCodeExample code={source} language={language} />}
    </article>
  )
}
