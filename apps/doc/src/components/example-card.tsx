"use client"

import type { DocSection } from "@/lib/components"
import { LiveExample } from "@/components/live-example"
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

export function ExampleCard({ section }: { section: DocSection }) {
  const { prose, language, source } = splitExample(section.markdown)
  return (
    <article className="example-card">
      {prose && (
        <div className="example-description">
          <MarkdownContent source={prose} />
        </div>
      )}
      {source && <LiveExample code={source} language={language} />}
    </article>
  )
}
