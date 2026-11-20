import { useTrilogyContext } from "./useTrilogyContext.web"

export function useHashClass(classes: string): string {
  const { mangled, hash } = useTrilogyContext()
  if (classes.trim().length < 1) return ""
  if (!mangled) return classes

  return classes
    .split(" ")
    .map((name) => `${name}_${hash}`)
    .join(" ")
}
