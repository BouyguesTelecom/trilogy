export enum StickyPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export const getStickyClassName = (stickyType?: string): string => {
  switch (stickyType) {
    case StickyPosition.BOTTOM:
      return 'sticky-bottom'
    case StickyPosition.TOP:
    default:
      return 'sticky-top'
  }
}

export type StickyPositionValues = `${StickyPosition}`
