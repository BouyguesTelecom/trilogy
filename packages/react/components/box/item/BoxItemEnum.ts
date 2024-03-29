const size = (factor: number): number => 8 * factor

/**
 * Spacer Size
 */
export enum BoxItemSize {
  NONE = 0,
  SMALL = size(2),
  MEDIUM = size(4),
  LARGE = size(8),
  HUGE = size(12),
}

export type BoxItemSizeValues = `${BoxItemSize}`
