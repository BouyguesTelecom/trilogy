const styleCache = new Map<string, unknown>()

type CreateStyles = typeof import('react-native').StyleSheet.create

/**
 * Memoize a styles object to avoid recreating identical StyleSheet definitions
 * on every render. Acts as a drop-in replacement for `StyleSheet.create`.
 * @param styles Styles definition object
 * @returns The memoized styles object
 */
export const memoStyles: CreateStyles = (styles) => {
  const key = JSON.stringify(styles)
  const cached = styleCache.get(key)
  if (cached !== undefined) return cached as typeof styles
  if (styleCache.size > 200) styleCache.clear()
  styleCache.set(key, styles)
  return styles
}
