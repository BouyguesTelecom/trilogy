import { ButtonVariant, type ButtonVariantValues } from '@/interfaces/button'

enum ButtonMarkup {
  BUTTON = 'button',
  INPUT = 'input',
  A = 'a',
}

enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export type ButtonMarkupValues = `${ButtonMarkup}`
export type ButtonTypeValues = `${ButtonType}`
export { ButtonMarkup, ButtonType, ButtonVariant, ButtonVariantValues }
