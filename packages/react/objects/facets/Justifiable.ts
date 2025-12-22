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

export type JustifiableValues = keyof typeof Justifiable
export type JustifyValues = keyof typeof Justify

export interface JustifiableProps {
  justify?: Justifiable | JustifiableValues | Justify | JustifyValues
}

/**
 * Returns justifyContent style depending on justify type
 * @param justifyContent {Justifiable|string} - justify type
 * @returns {string} - Justify value
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getJustifyStyle = (justifyContent?: string) => {
  if (!justifyContent) return 'flex-start'
  switch (true) {
    case ['CENTER', 'JUSTIFIED_CENTER'].includes(justifyContent):
      return 'center'
    case ['START', 'JUSTIFIED_START'].includes(justifyContent):
      return 'flex-start'
    case ['END', 'JUSTIFIED_END'].includes(justifyContent):
      return 'flex-end'
    case ['SPACE_BETWEEN', 'SPACE_BETWEEN'].includes(justifyContent):
      return 'space-between'
    default:
      return 'flex-start'
  }
}

export const getJustifyClassName = (justifyContent?: string) => {
  if (!justifyContent) return 'flex-start'
  switch (true) {
    case ['CENTER', 'JUSTIFIED_CENTER'].includes(justifyContent):
      return 'centered'
    case ['START', 'JUSTIFIED_START'].includes(justifyContent):
      return 'justified-start'
    case ['END', 'JUSTIFIED_END'].includes(justifyContent):
      return 'justified-end'
    case ['SPACE_BETWEEN', 'SPACE_BETWEEN'].includes(justifyContent):
      return 'spaced-between'
    case justifyContent === 'SPACE_EVENLY':
      return 'spaced-evenly'
    default:
      return 'justified-start'
  }
}

export const getJustifiedClassName = (justifyContent?: string) => {
  if (!justifyContent) return 'justified-start'
  switch (true) {
    case ['ALIGNED_CENTER', 'CENTER'].includes(justifyContent):
      return 'justified-center'
    case ['START', 'ALIGNED_START'].includes(justifyContent):
      return 'justified-start'
    case ['ALIGNED_END', 'END'].includes(justifyContent):
      return 'justified-end'
    default:
      return 'justified-start'
  }
}

export const getJustifySelfClassName = (justifyContent?: string): string => {
  if (!justifyContent) return 'justified-selfstart'

  switch (true) {
    case ['ALIGNED_CENTER', 'CENTER'].includes(justifyContent):
      return 'justified-self-center'
    case ['START', 'ALIGNED_START'].includes(justifyContent):
      return 'justified-self-start'
    case ['ALIGNED_END', 'END'].includes(justifyContent):
      return 'justified-selfend'
    default:
      return 'justified-selfstart'
  }
}
