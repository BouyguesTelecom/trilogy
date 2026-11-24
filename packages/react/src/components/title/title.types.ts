import type { AccessibilityProps } from "@/interfaces/accessibilityProps"
import type { CommonProps } from "@/interfaces/commonProps"

export enum TitleSize {
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

export enum TitleColor {
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

export enum TitleFontWeight {
  regular = "regular",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
}

export enum TitleMarkup {
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

export interface TitleUiProps {
  size?: TitleSize
  color?: TitleColor
  fontWeight?: TitleFontWeight
}

export interface TitleProps
  extends TitleUiProps, AccessibilityProps, CommonProps {
  markup?: TitleMarkup
  /** Surcharge explicite de la taille de police, indépendante de la variante. */
  fontSize?: TitleSize
}
