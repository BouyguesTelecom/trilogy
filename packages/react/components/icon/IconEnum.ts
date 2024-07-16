/**
 * Icon Size
 */
export enum IconSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  HUGE = "huge",
  SMALLER = "smaller",
}

/**
 * Icon Size values
 */
export type IconSizeValues = `${IconSize}`;

/**
 * Icon Status
 */
export enum IconStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
  INFO = "INFO",
  WHITE = "WHITE",
}

/**
 * Icon Status values
 */
export type IconStatusValues = `${IconStatus}`;

/**
 * Icon Color
 */
export enum IconColor {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
  MAIN = "MAIN",
  BACKGROUND = "BACKGROUND",
  ACCENT = "ACCENT",
  NEUTRAL = "NEUTRAL",
  WHITE = "WHITE",
  GREY = "NEUTRAL",
}

/**
 * Icon Color values
 */
export type IconColorValues = `${IconColor}`;

/**
 * Text Icon Direction
 */

export enum IconPosition {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

/**
 * Text Icon Direction values
 */
export type IconPositionValues = `${IconPosition}`;

export enum TextIconMarkup {
  DIV = "div",
  A = "a",
  P = "p",
  SPAN = "span",
}

export type TextIconMarkupValues = `${TextIconMarkup}`;

export enum IconStatusPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export type IconStatusPositionValues = `${IconStatusPosition}`;
