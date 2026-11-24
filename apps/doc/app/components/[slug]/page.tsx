import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getComponentDoc, getComponentDocs } from "@/lib/components"
import { ComponentArticle } from "@/components/component-article"

export function generateStaticParams() {
  return getComponentDocs().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getComponentDoc(slug)
  if (!doc) return { title: "Component not found" }
  return { title: doc.name, description: doc.description }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getComponentDoc(slug)
  if (!doc) notFound()
  return <ComponentArticle doc={doc} />
}
