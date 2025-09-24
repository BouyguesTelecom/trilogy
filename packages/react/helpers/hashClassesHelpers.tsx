import { useTrilogyContext } from '@/context/index'

/**
 * Used to hash classes if styled components
 * @param styled Apply only if styled props
 * @param classes String classes
 */
export const hashClass = (addHash = false, classes: string): string => {
  const { hash, styled } = useTrilogyContext()

  if (classes.trim().length < 1) return ''
  if (styled) {
    return classes
      .split(' ')
      .map((classe: string) => (classe = `${classe}_${hash}`))
      .join(' ')
  }
  return classes
}
