import { IconColor, IconColorValues } from '@/interfaces/colors'

export enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
  SMALLER = 'smaller',
}

export type IconSizeValues = `${IconSize}`

export enum IconPosition {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export type IconPositionValues = `${IconPosition}`

export enum TextIconMarkup {
  DIV = 'div',
  A = 'a',
  P = 'p',
  SPAN = 'span',
}

export type TextIconMarkupValues = `${TextIconMarkup}`

export enum IconStatusPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type IconStatusPositionValues = `${IconStatusPosition}`
export { IconColor, type IconColorValues }
