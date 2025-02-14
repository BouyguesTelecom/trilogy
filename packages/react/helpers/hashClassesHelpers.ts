import { useTrilogyContext } from '@/context'

/**
 * Used to hash classes if styled components
 * @param styled Apply only if styled props
 * @param classes String classes
 */
export const hashClass = (styled = false, classes: string): string => {
  const { hash } = useTrilogyContext()

  if (classes.trim().length < 1) return ''
  if (styled) {
    return classes
      .split(' ')
      .map((classe: string) => (classe = `${classe}__${hash}`))
      .join(' ')
  }
  return classes
}
