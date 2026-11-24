import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"

import { getComponentDoc, getFamilyDoc, getFamilyDocs } from "@/lib/components"
import { FamilyArticle } from "@/components/component-article"

export function generateStaticParams() {
  return getFamilyDocs().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const family = getFamilyDoc(slug)
  if (!family) return { title: "Component family not found" }
  return { title: family.name, description: family.description }
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const family = getFamilyDoc(slug)
  if (family) return <FamilyArticle family={family} />

  const component = getComponentDoc(slug)
  const componentFamily = getFamilyDocs().find(
    (item) => item.name === component?.family
  )
  if (component && componentFamily)
    permanentRedirect(`/components/${componentFamily.slug}/${component.slug}`)
  notFound()
}
