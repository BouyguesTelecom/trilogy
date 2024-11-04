import { getColorStyle, TrilogyColor } from "./Color"

/**
 * Variant State
 */
export enum VariantState {
  MAIN = "MAIN",
  ACCENT = "ACCENT",
  INFO = "INFO",
}

export type VariantStateValues = `${VariantState}`;

/**
 * Variant props
 */
export interface VariantProps {
  variant?: VariantState | VariantStateValues;
}

/**
 * Returns variant's classname depending on variant type
 * @param variantType {string} - VariantType
 * @returns {string} - Variant value
 */
export const getVariantClassName = (variantType?: string): string => {
  if (!variantType) return ""
  switch (variantType) {
    case "MAIN":
      return "main"
    case "ACCENT":
      return "accent"
    case "PRIMARY":
      return "primary"
    case "SECONDARY":
      return "secondary"
    case "GHOST":
      return "ghost"
    case "INFO":
      return "info"
    default:
      return ""
  }
}

/**
 * Returns variant's style depending on variant type
 * @param variantType {string} - VariantType
 * @returns {string} - Variant value
 */
export const getVariantStyle = (variantType?: string): string => {
  switch (variantType) {
    case "PRIMARY":
      return getColorStyle(TrilogyColor.MAIN)
    case "ACCENT":
      return getColorStyle(TrilogyColor.ACCENT)
    case "MAIN":
      return getColorStyle(TrilogyColor.MAIN)
    case "SECONDARY":
      return getColorStyle(TrilogyColor.MAIN_FADE)
    case "INFO":
      return getColorStyle(TrilogyColor.INFO)
    default:
      return ""
  }
}
