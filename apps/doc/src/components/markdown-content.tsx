import { Children, isValidElement, type ReactNode } from "react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"

import { CodeBlock } from "@/components/code-block"

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function getText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(getText).join("")
  if (isValidElement<{ children?: ReactNode }>(node))
    return getText(node.props.children)
  return ""
}

const components: Components = {
  pre: ({ children }) => {
    const child = Children.toArray(children)[0]
    const code = isValidElement<{ children?: ReactNode; className?: string }>(
      child
    )
      ? child
      : undefined
    const language = code?.props.className?.replace("language-", "") ?? "tsx"
    return (
      <CodeBlock
        code={getText(code?.props.children ?? children)}
        language={language}
      />
    )
  },
  h3: ({ children }) => (
    <h3 id={slugifyHeading(getText(children))}>{children}</h3>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  ),
}

export function MarkdownContent({
  source,
  excludeImages = false,
}: {
  source: string
  excludeImages?: boolean
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={
        excludeImages ? { ...components, img: () => null } : components
      }
    >
      {source}
    </ReactMarkdown>
  )
}
