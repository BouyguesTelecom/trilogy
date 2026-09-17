/**
 * Typo transform
 */
export enum TypographyTransform {
  TEXT_CAPITALIZED = 'is-capitalized',
  TEXT_LOWERCASE = 'is-lowercase',
  TEXT_UPPERCASE = 'is-uppercase',
  TEXT_ITALIC = 'is-italic',
}

/**
 * Typo transform values
 */
export type TypographyTransformValues = `${TypographyTransform}`
