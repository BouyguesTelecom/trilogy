"use client"

import { useId, useState, type ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

function formatHtml(markup: string): string {
  const tokens =
    markup.match(/<!--[\s\S]*?-->|<![^>]*>|<\/?[^>]+>|[^<]+/g) ?? []
  const voidTags = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ])

  function formatNode(index: number, depth: number): [string[], number] {
    const token = tokens[index]?.trim()
    if (!token) return [[], index + 1]
    const indent = "  ".repeat(depth)
    if (!token.startsWith("<")) return [[`${indent}${token}`], index + 1]
    if (/^<!|^<\//.test(token) || /\/\s*>$/.test(token))
      return [[`${indent}${token}`], index + 1]

    const tagName = token.match(/^<\s*([^\s/>]+)/)?.[1]?.toLowerCase()
    if (!tagName || voidTags.has(tagName))
      return [[`${indent}${token}`], index + 1]

    const closingTag = `</${tagName}>`
    const text = tokens[index + 1]?.trim()
    if (text && tokens[index + 2]?.toLowerCase() === closingTag) {
      return [[`${indent}${token}${text}${tokens[index + 2]}`], index + 3]
    }

    const lines = [`${indent}${token}`]
    let nextIndex = index + 1
    while (nextIndex < tokens.length) {
      if (tokens[nextIndex]?.trim().toLowerCase() === closingTag) {
        lines.push(`${indent}${tokens[nextIndex]}`)
        return [lines, nextIndex + 1]
      }
      const [childLines, afterChild] = formatNode(nextIndex, depth + 1)
      lines.push(...childLines)
      nextIndex = afterChild
    }
    return [lines, nextIndex]
  }

  const lines: string[] = []
  let index = 0
  while (index < tokens.length) {
    const [nodeLines, afterNode] = formatNode(index, 0)
    lines.push(...nodeLines)
    index = afterNode
  }
  return lines.join("\n")
}

export function CodeBlock({
  code,
  htmlCode,
  language,
  preview,
}: {
  code: string
  htmlCode?: string
  language: string
  preview?: ReactNode
}) {
  const [format, setFormat] = useState<"react" | "html">("react")
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const codeId = useId()
  const hasHtmlVersion = htmlCode !== undefined
  const displayedCode =
    format === "html" && htmlCode ? formatHtml(htmlCode) : code
  const displayedLanguage = format === "html" ? "html" : language

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(displayedCode)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={`code-block${hasHtmlVersion ? " code-block-example" : ""}`}>
      {hasHtmlVersion && (
        <div
          aria-label="Code format"
          className="code-format-tabs"
          role="tablist"
        >
          <button
            aria-controls={codeId}
            aria-selected={format === "react"}
            className={format === "react" ? "is-active" : ""}
            onClick={() => {
              setFormat("react")
              setCopied(false)
            }}
            role="tab"
            type="button"
          >
            React
          </button>
          <button
            aria-controls={codeId}
            aria-selected={format === "html"}
            className={format === "html" ? "is-active" : ""}
            onClick={() => {
              setFormat("html")
              setCopied(false)
            }}
            role="tab"
            type="button"
          >
            HTML
          </button>
        </div>
      )}
      {preview && <div className="live-example-preview">{preview}</div>}
      <div
        className={`code-block-source${hasHtmlVersion ? " is-expandable" : ""}${expanded ? " is-expanded" : ""}`}
      >
        <div className="code-block-toolbar">
          <span className="code-language">{displayedLanguage || "tsx"}</span>
          <button className="copy-code-button" onClick={copyCode} type="button">
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
        <div
          aria-label={`${displayedLanguage} source code`}
          className="code-block-content"
          id={codeId}
          role={hasHtmlVersion ? "tabpanel" : undefined}
        >
          <SyntaxHighlighter
            codeTagProps={{ style: { fontFamily: "inherit" } }}
            language={displayedLanguage || "tsx"}
            lineNumberStyle={{ color: "#71717a", minWidth: "2.5em" }}
            showLineNumbers
            style={vscDarkPlus}
            customStyle={{
              background: "transparent",
              fontFamily: '"DM Mono", "SFMono-Regular", Consolas, monospace',
              fontSize: "12px",
              lineHeight: 1.8,
              margin: 0,
              overflowX: "auto",
              padding: "18px 20px 22px",
              tabSize: 2,
            }}
          >
            {displayedCode.trimEnd()}
          </SyntaxHighlighter>
        </div>
        {hasHtmlVersion && (
          <button
            aria-controls={codeId}
            aria-expanded={expanded}
            className="code-block-toggle"
            onClick={() => setExpanded((current) => !current)}
            type="button"
          >
            {expanded ? "Show less" : "View code"}
            <span aria-hidden="true">{expanded ? "⌃" : "⌄"}</span>
          </button>
        )}
      </div>
    </div>
  )
}
