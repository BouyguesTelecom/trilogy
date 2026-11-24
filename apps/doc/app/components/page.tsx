import { getComponentFamilies } from "@/lib/components"
import { ComponentsIndex } from "@/components/component-article"

export const metadata = {
  title: "Components",
  description: "Browse the Trilogy React component library by family.",
}

export default function ComponentsPage() {
  return <ComponentsIndex families={getComponentFamilies()} />
}
