/**
 * New Text Levels
 */
export enum TextLevels {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
}

/**
 * Text size values
 */
export type TextLevelValues = `${TextLevels}`

/**
 * List of available Markup for Text
 */
export enum TextMarkup {
  P = 'p',
  SPAN = 'span',
  DIV = 'div',
  A = 'a',
}

/**
 * List of available Markup values for Text
 */
export type TextMarkupValues = `${TextMarkup}`
