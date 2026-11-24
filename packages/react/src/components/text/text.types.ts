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
  /** Selects the typography size. Values: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`. Default: `xxxxl`. */
  size?: TextSize
  /** Selects the text color. Values: `primary`, `secondary`, `information`, `accent`, `success`, `warning`, `error`, `brand`, `inverse`. Default: `primary`. */
  color?: TextColor
  /** Selects the font weight. Values: `regular`, `medium`, `semibold`, `bold`. Default: `regular`. */
  fontWeight?: TextFontWeight
}

export interface TextProps
  extends TextUiProps, AccessibilityProps, CommonProps {
  /** Selects the HTML element on Web. Values: `h1`–`h6`, `p`, `span`, `div`. Default: `p`; ignored on Native. */
  markup?: TextMarkup
}
