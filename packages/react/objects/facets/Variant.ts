import {getColorStyle} from "./Color";

/**
 * Variant State
 */
export enum VariantState {
  MAIN = "MAIN",
  ACCENT = "ACCENT",
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
  if (!variantType) return "";
  switch (variantType) {
    case "MAIN":
      return "main";
    case "ACCENT":
      return "accent";
    case "PRIMARY":
      return "primary";
    case "SECONDARY":
      return "secondary";
    case "TERTIARY":
      return "tertiary";
    case "GHOST":
      return "ghost";
    default:
      return "";
  }
};

/**
 * Returns variant's style depending on variant type
 * @param variantType {string} - VariantType
 * @returns {string} - Variant value
 */
export const getVariantStyle = (variantType?: string): string => {
  switch (variantType) {
    case "PRIMARY":
      return getColorStyle("PRIMARY");
    case "ACCENT":
      return getColorStyle("ACCENT");
    case "MAIN":
      return getColorStyle("MAIN");
    case "SECONDARY":
      return getColorStyle("SECONDARY");
    case "TERTIARY":
      return getColorStyle("WHITE");
    default:
      return "";
  }
};
