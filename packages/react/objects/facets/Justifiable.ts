/**
 * Typo align
 */
export enum Justifiable {
  JUSTIFIED_CENTER = 'justified-center',
  JUSTIFIED_START = 'justified-start',
  JUSTIFIED_END = 'justified-end',
  SPACE_BETWEEN = 'space-between',
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
    case 'justified-center':
      return 'center'
    case 'justified-start':
      return 'flex-start'
    case 'justified-end':
      return 'flex-end'
    case 'space-between':
      return 'space-between'
    default:
      return 'flex-start'
  }
}

export const getJustifyClassName = (justifyContent?: string) => {
  switch (justifyContent) {
    case 'justified-center':
      return 'centered'
    case 'justified-start':
      return 'justified-start'
    case 'justified-end':
      return 'justified-end'
    case 'space-between':
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
