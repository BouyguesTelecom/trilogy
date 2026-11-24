import type { AccessibilityProps } from "@/interfaces/accessibilityProps"
import type { CommonProps } from "@/interfaces/commonProps"

export enum TextSize {
  xs = "xs",
  sm = "sm",
  base = "base",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  xxxl = "xxxl",
  xxxxl = "xxxxl",
}

export enum TextColor {
  primary = "primary",
  secondary = "secondary",
  information = "information",
  accent = "accent",
  success = "success",
  warning = "warning",
  error = "error",
  brand = "brand",
  inverse = "inverse",
}

export enum TextFontWeight {
  regular = "regular",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
}

export enum TextMarkup {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span",
  div = "div",
}

export interface TextUiProps {
  size?: TextSize
  color?: TextColor
  fontWeight?: TextFontWeight
}

export interface TextProps
  extends TextUiProps, AccessibilityProps, CommonProps {
  markup?: TextMarkup
  /** Surcharge explicite de la taille de police, indépendante de la variante. */
  fontSize?: TextSize
}
