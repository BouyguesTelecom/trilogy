/**
 * New Title Levels
 */
export enum TitleLevels {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
  SIX = 'SIX',
}

/**
 * Titles size values
 */
export type TitleLevelValues = `${TitleLevels}`

export enum TitleMarkup {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
  DIV = 'div',
}

export type TitleMarkupValues = `${TitleMarkup}`
