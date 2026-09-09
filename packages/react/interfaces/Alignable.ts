/**
 * Component Alignement
 */
/**
 * @deprecated
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
  STRETCH = 'STRETCH',
}

/**
 * @deprecated
 */
export type AlignableValues = `${Alignable}`

export type AlignValues = `${Align}`

export interface AlignableProps {
  align?: Alignable | AlignableValues | Align | AlignValues
  verticalAlign?: Alignable | AlignableValues | Align | AlignValues
}
