/**
 * New Text Levels
 */
export enum TextLevels {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

/**
 * Text size values
 */
export type TextLevelValues = TextLevels

/**
 * List of available Markup for Text
 */
export enum TextMarkup {
  P = 'p',
  SPAN = 'span',
}

/**
 * List of available Markup values for Text
 */
export type TextMarkupValues = `${TextMarkup}`
