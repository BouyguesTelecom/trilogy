const size = (factor: number): number => 8 * factor

/**
 * Spacer Size
 */
export enum SpacerSize {
  NONE = 0,
  SMALLER = size(0.5),
  SMALL = size(1),
  MEDIUM = size(2),
  LARGE = size(3),
  HUGE = size(4),
}

export type SpacerSizeValues = `${SpacerSize}`
