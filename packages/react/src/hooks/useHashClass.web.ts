import { useTrilogyContext } from "../contexts/trilogyContext.web"

/**
 * Used to hash classes if styled components
 * @param mangled Apply only if mangled props
 * @param classes String classes
 */
export const useHashClass = (classes: string): string => {
  const { hash, mangled } = useTrilogyContext()

  if (classes.trim().length < 1) return ""
  if (mangled) {
    return classes
      .split(" ")
      .map((classe: string) => (classe = `${classe}_${hash}`))
      .join(" ")
  }
  return classes
}
