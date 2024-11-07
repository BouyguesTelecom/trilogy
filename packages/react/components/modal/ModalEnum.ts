/**
 * Custom modal trigger element
 */
export enum ModalMarkup {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
  DIV = 'div',
  BUTTON = 'button',
  A = 'a',
}

export type ModalMarkupValues = `${ModalMarkup}`

export enum ModalCtaMarkup {
  BUTTON = 'button',
  DIV = 'div',
  A = 'a',
}

export type ModalCtaMarkupValues = `${ModalCtaMarkup}`

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
