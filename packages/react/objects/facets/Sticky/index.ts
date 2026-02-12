export interface Sticky {
  top?: boolean
  bottom?: boolean
}

export enum StickyPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export type StickyPositionValues = `${StickyPosition}`
