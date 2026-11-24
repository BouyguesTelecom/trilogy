import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getFamilyDoc, getFamilyDocs } from "@/lib/components"
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
  if (!family) notFound()
  return <FamilyArticle family={family} />
}
