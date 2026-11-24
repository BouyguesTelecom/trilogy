"use client"

import { createElement, useContext, useMemo, type ReactNode } from "react"
import * as Trilogy from "@trilogy-ds/react"
import { CheckCircle2 } from "lucide-react"
import { renderToStaticMarkup } from "react-dom/server"
import { LiveContext, LiveError, LivePreview, LiveProvider } from "react-live"

import { CodeBlock } from "@/components/code-block"

const trilogyScope = { ...Trilogy, CheckCircle2 }

function LiveExampleContent({
  code,
  language,
  children,
}: {
  code: string
  language: string
  children: ReactNode
}) {
  const { element } = useContext(LiveContext)
  const htmlCode = useMemo(
    () => (element ? renderToStaticMarkup(createElement(element)) : ""),
    [element]
  )

  return (
    <CodeBlock
      code={code}
      htmlCode={htmlCode}
      language={language}
      preview={children}
    />
  )
}

export function LiveExample({
  code,
  language,
}: {
  code: string
  language: string
}) {
  return (
    <LiveProvider code={code} scope={trilogyScope}>
      <LiveExampleContent code={code} language={language}>
        <LivePreview />
        <LiveError className="live-example-error" />
      </LiveExampleContent>
    </LiveProvider>
  )
}
