/**
 * Typo align
 */
export enum Justifiable {
  JUSTIFIED_CENTER = 'JUSTIFIED_CENTER',
  JUSTIFIED_START = 'JUSTIFIED_START',
  JUSTIFIED_END = 'JUSTIFIED_END',
  SPACE_BETWEEN = 'SPACE_BETWEEN',
}

export type JustifiableValues = keyof typeof Justifiable

export interface JustifiableProps {
  justify?: Justifiable | JustifiableValues
}

/**
 * Returns justifyContent style depending on justify type
 * @param justifyContent {Justifiable|string} - justify type
 * @returns {string} - Justify value
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getJustifyStyle = (justifyContent?: string) => {
  switch (justifyContent) {
    case 'JUSTIFIED_CENTER':
      return 'center'
    case 'JUSTIFIED_START':
      return 'flex-start'
    case 'JUSTIFIED_END':
      return 'flex-end'
    case 'SPACE_BETWEEN':
      return 'space-between'
    default:
      return 'flex-start'
  }
}

export const getJustifyClassName = (justifyContent?: string) => {
  switch (justifyContent) {
    case 'JUSTIFIED_CENTER':
      return 'centered'
    case 'JUSTIFIED_START':
      return 'justified-start'
    case 'JUSTIFIED_END':
      return 'justified-end'
    case 'SPACE_BETWEEN':
      return 'spaced-between'
    default:
      return 'justified-start'
  }
}

export const getJustifiedClassName = (justifyContent?: string) => {
  switch (justifyContent) {
    case 'ALIGNED_CENTER':
      return 'justified-center'
    case 'ALIGNED_START':
      return 'justified-start'
    case 'ALIGNED_END':
      return 'justified-end'
    default:
      return 'justified-start'
  }
}

export const getJustifySelfClassName = (justifyContent?: string): string => {
  switch (justifyContent) {
    case 'ALIGNED_CENTER':
      return 'justified-self-center'
    case 'ALIGNED_START':
      return 'justified-self-start'
    case 'ALIGNED_END':
      return 'justified-selfend'
    default:
      return 'justified-selfstart'
  }
}
