/**
 * Icon Size
 */
export enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
  SMALLER = 'smaller',
}

/**
 * Icon Size values
 */
export type IconSizeValues = `${IconSize}`

/**
 * Icon Status
 */
export enum IconStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  TERTIARY = 'tertiary',
  PRIMARY = 'primary',
  INFO = 'info',
  WHITE = 'white',
  GREY = 'grey',
}

/**
 * Icon Status values
 */
export type IconStatusValues = `${IconStatus}`

/**
 * Icon Color
 */
export enum IconColor {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
  TERTIARY = 'TERTIARY',
  WHITE = 'WHITE',
  GREY = 'GREY',
  PRIMARY = 'PRIMARY',
}

/**
 * Icon Color values
 */
export type IconColorValues = `${IconColor}`

/**
 * Text Icon Direction
 */

export enum IconPosition {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * Text Icon Direction values
 */
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
