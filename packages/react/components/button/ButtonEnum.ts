/**
 * List of available Markup for Button
 */
enum ButtonMarkup {
  BUTTON = 'button',
  INPUT = 'input',
  A = 'a',
}

/**
 * List of available type of Button
 */
enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

/**
 * Button Color
 */
export enum ButtonColor {
  SECONDARY = 'SECONDARY',
  PRIMARY = 'PRIMARY',
  TERTIARY = 'TERTIARY',
}

/**
 * List of available Markup values for Button
 */
export type ButtonMarkupValues = `${ButtonMarkup}`

export type ButtonTypeValues = `${ButtonType}`

export type ButtonColorValues = `${ButtonColor}`

export { ButtonMarkup, ButtonType }
