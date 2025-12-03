/**
 * Typo align
 */
export enum TypographyAlign {
  TEXT_CENTERED = 'has-text-centered',
  TEXT_JUSTIFIED = 'has-text-justified',
  TEXT_LEFT = 'has-text-left',
  TEXT_RIGHT = 'has-text-right',
}

/**
 * Typo align values
 */
export type TypographyAlignValues = `${TypographyAlign}`

/**
 * Typography Alignment Method (TYPO)
 * @param typo {String} TypographyColor
 */
export const setTypographyAlign = (typo: Array<string> | string = 'left'): "left" | "auto" | "right" | "center" | "justify" | undefined => {
  return (
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_CENTERED && 'center') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_CENTERED) && 'center') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_LEFT && 'left') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_LEFT) && 'left') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_RIGHT && 'right') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_RIGHT) && 'right') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_JUSTIFIED && 'justify') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_JUSTIFIED) && 'justify') ||
    'left'
  )
}
