import type { Metadata } from "next"

import "../../../packages/styles/dist/default/trilogy.css"
import "./globals.css"

import { getComponentFamilies } from "@/lib/components"
import { DocsShell } from "@/components/docs-shell"

export const metadata: Metadata = {
  title: {
    default: "Trilogy Components",
    template: "%s · Trilogy",
  },
  description: "Component documentation for the Trilogy design system.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="docs-root" lang="en" data-scroll-behavior="smooth">
      <body className="docs-body-root">
        <DocsShell families={getComponentFamilies()}>{children}</DocsShell>
      </body>
    </html>
  )
}
