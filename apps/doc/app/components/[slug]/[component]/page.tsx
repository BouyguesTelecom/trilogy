import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getComponentGuidance } from "@/lib/component-guidance"
import {
  getComponentDocInFamily,
  getComponentDocs,
  getFamilyDoc,
  getFamilyDocs,
} from "@/lib/components"
import { ComponentArticle } from "@/components/component-article"

type PageParams = { slug: string; component: string }

export function generateStaticParams() {
  const families = new Map(
    getFamilyDocs().map((family) => [family.name, family.slug])
  )
  return getComponentDocs().map((doc) => {
    const slug = families.get(doc.family)
    if (!slug) throw new Error(`Missing family documentation for ${doc.name}`)
    return { slug, component: doc.slug }
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug, component } = await params
  const doc = getComponentDocInFamily(slug, component)
  if (!doc) return { title: "Component not found" }
  return { title: doc.name, description: doc.description }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug, component } = await params
  const doc = getComponentDocInFamily(slug, component)
  const family = getFamilyDoc(slug)
  if (!doc || !family) notFound()
  const guidance = await getComponentGuidance(doc.name)
  return <ComponentArticle doc={doc} family={family} guidance={guidance} />
}
