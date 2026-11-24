interface DirectusRule {
  title?: string | null
  description?: string | null
}

export interface ComponentGuidance {
  usage: string
  rules: {
    title: string
    description: string
  }[]
}

export async function getComponentGuidance(
  name: string
): Promise<ComponentGuidance | null> {
  try {
    const host = process.env.DIRECTUS_SERVER_HOST?.replace(/\/+$/, "")
    if (!host) throw new Error("DIRECTUS_SERVER_HOST is not configured")
    const url = new URL(`${host}/items/components`)
    url.searchParams.set("filter[name][_eq]", name)
    url.searchParams.set(
      "fields",
      "name,usage,rules.rules_id.title,rules.rules_id.description"
    )
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) throw new Error(`Directus returned ${response.status}`)
    const result: {
      data?: {
        name: string
        usage?: string | null
        rules?: { rules_id?: DirectusRule | null }[] | null
      }[]
    } = await response.json()
    const component = result.data?.find((item) => item.name === name)
    if (!component) return null

    return {
      usage: component.usage?.trim() ?? "",
      rules: (component.rules ?? []).flatMap(({ rules_id: rule }) =>
        rule?.title
          ? [
              {
                title: rule.title,
                description: rule.description?.trim() ?? "",
              },
            ]
          : []
      ),
    }
  } catch (error) {
    console.warn(`Could not load Directus guidance for ${name}:`, error)
    return null
  }
}
