import { useTrilogyContext } from '@/context'

/**
 * Used to hash classes if styled components
 * @param styled Apply only if styled props
 * @param classes String classes
 */
export const hashClass = (addHash:boolean, classes: string): string => {
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
