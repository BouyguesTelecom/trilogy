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
 * Button Variant
 */

export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  GHOST = 'GHOST',
  ACCENT = 'ACCENT',
}

/**
 * List of available Markup values for Button
 */
export type ButtonMarkupValues = `${ButtonMarkup}`

export type ButtonTypeValues = `${ButtonType}`

export type ButtonVariantValues = `${ButtonVariant}`

export { ButtonMarkup, ButtonType }
