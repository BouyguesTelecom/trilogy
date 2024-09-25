/**
 * New Title Levels
 */
export enum TitleLevels {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
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
