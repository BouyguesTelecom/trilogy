import hash from '../hash.json'

/**
 * Used to hash classes if styled components
 * @param styled Apply only if styled props
 * @param classes String classes
 */
export const hashClass = (styled = false, classes: string): string => {
  if (classes.trim().length < 1) return ''
  if (styled) {
    return classes
      .split(' ')
      .map((classe: string) => (classe = `${classe}__${hash.HASH}`))
      .join(' ')
  }
  return classes
}
