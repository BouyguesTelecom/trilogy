import { notFound, permanentRedirect } from "next/navigation"

import { getFamilyDoc, getFamilyDocs } from "@/lib/components"

export function generateStaticParams() {
  return getFamilyDocs().map(({ slug }) => ({ slug }))
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const family = getFamilyDoc(slug)
  if (!family) notFound()
  permanentRedirect(`/components/${family.slug}`)
}
