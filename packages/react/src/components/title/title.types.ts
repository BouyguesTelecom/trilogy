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
  /** Selects the typography size. Values: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`. Default: `xxxxl`. */
  size?: TitleSize
  /** Selects the text color. Values: `primary`, `secondary`, `information`, `accent`, `success`, `warning`, `error`, `brand`, `inverse`. Default: `primary`. */
  color?: TitleColor
  /** Overrides the size-based weight. Values: `regular`, `medium`, `semibold`, `bold`. Default: `medium` for `xxxl`/`xxxxl`, otherwise `semibold`. */
  fontWeight?: TitleFontWeight
}

export interface TitleProps
  extends TitleUiProps, AccessibilityProps, CommonProps {
  /** Selects the heading element on Web. Values: `h1`–`h6`, `p`, `span`, `div`. Default: `h1`; ignored on Native. */
  markup?: TitleMarkup
}
