/**
 * Component Alignement
 */
export enum Alignable {
  ALIGNED_CENTER = 'ALIGNED_CENTER',
  ALIGNED_START = 'ALIGNED_START',
  ALIGNED_END = 'ALIGNED_END',
  ALIGNED_STRETCH = 'ALIGNED_STRETCH',
}

export enum Align {
  CENTER = 'CENTER',
  START = 'START',
  END = 'END',
  STRETCH = 'STRETCH'
}

export type AlignableValues = `${Alignable}`

export interface AlignableProps {
  align?: Alignable | AlignableValues
  verticalAlign?: Alignable | AlignableValues
}

/**
 * Returns alignement classname depending on align type
 * @param alignType {Alignable|string} - Alert type
 * @returns {string} - Align value
 */
export const getAlignClassName = (alignType?: string): string => {
  switch (alignType) {
    case 'ALIGNED_CENTER':
      return 'aligned-center'
    case 'CENTER':
      return 'aligned-center'
    case 'ALIGNED_START':
      return 'aligned-start'
    case 'START':
      return 'aligned-start'
    case 'ALIGNED_END':
      return 'aligned-end'
    case 'END':
      return 'aligned-end'
    case 'STRETCH':
      return 'aligned-stretch'
    default:
      return 'aligned-start'
  }
}

/**
 * Returns alignement classname depending on align type
 * @param alignType {Alignable|string} - Align type
 * @returns {string} - Align value
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAlignStyle = (alignType?: string) => {
  switch (alignType) {
    case 'ALIGNED_CENTER':
      return 'center'
    case 'ALIGNED_START':
      return 'flex-start'
    case 'ALIGNED_END':
      return 'flex-end'
    default:
      return 'flex-start'
  }
}
