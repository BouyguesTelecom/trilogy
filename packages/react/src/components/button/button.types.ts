import { ElementType } from "react"
import { AccessibilityProps } from "@/interfaces/accessibilityProps"
import { CommonProps } from "@/interfaces/commonProps"
import { OnClickProps } from "@/interfaces/onClickProps"

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  ghost = "ghost",
  conversion = "conversion",
}

export interface ButtonUiProps {
  /** Selects the visual variant. Values: `primary`, `secondary`, `ghost`, `conversion`. Default: `primary`. */
  variant?: ButtonVariant
  /** Prevents activation and applies disabled styling. Default: `false`. */
  disabled?: boolean
  /** Adds the `fullwidth` class on Web; no built-in full-width style is defined. Default: `false`; ignored on Native. */
  fullwidth?: boolean
}

export enum ButtonMarkup {
  button = "button",
  input = "input",
  a = "a",
  div = "div",
}

export enum ButtonType {
  button = "button",
  reset = "reset",
  submit = "submit",
}

export interface ButtonProps
  extends ButtonUiProps, AccessibilityProps, CommonProps, OnClickProps {
  /** Selects the rendered HTML element on Web. Values: `button`, `input`, `a`, `div`. Default: `button`, or `a` when `href`/`to` is set; ignored on Native. */
  markup?: ButtonMarkup | `${ButtonMarkup}`
  /** Adds the `loading` class on Web; it does not disable activation. Default: `false`; ignored on Native. */
  loading?: boolean
  /** Sets the link destination on Web. Ignored on Native. */
  href?: string
  /** Sets the router destination on Web. Ignored on Native. */
  to?: string
  /** Sets the element name on Web. Ignored on Native. */
  name?: string
  /** Supplies the router link component used with `to` on Web. Ignored on Native. */
  routerLink?: ElementType
  /** Sets the HTML button type on Web. Values: `button`, `reset`, `submit`. Defaults to `button` for buttons and `submit` for inputs; ignored on Native. */
  type?: ButtonType | `${ButtonType}`
}
