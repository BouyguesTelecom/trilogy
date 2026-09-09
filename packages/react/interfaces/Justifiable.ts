/**
 * Typo align
 */
/**
 * @deprecated
 */
export enum Justifiable {
  JUSTIFIED_CENTER = 'JUSTIFIED_CENTER',
  JUSTIFIED_START = 'JUSTIFIED_START',
  JUSTIFIED_END = 'JUSTIFIED_END',
  SPACE_BETWEEN = 'SPACE_BETWEEN',
}

export enum Justify {
  CENTER = 'CENTER',
  START = 'START',
  END = 'END',
  SPACE_BETWEEN = 'SPACE_BETWEEN',
  SPACE_AROUND = 'SPACE_AROUND',
  SPACE_EVENLY = 'SPACE_EVENLY',
}

/**
 * @deprecated
 */
export type JustifiableValues = keyof typeof Justifiable

export type JustifyValues = keyof typeof Justify

export interface JustifiableProps {
  justify?: Justifiable | JustifiableValues | Justify | JustifyValues
}
