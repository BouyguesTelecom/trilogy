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
  variant?: ButtonVariant
  disabled?: boolean
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
  markup?: ButtonMarkup | `${ButtonMarkup}`
  loading?: boolean
  href?: string
  to?: string
  name?: string
  routerLink?: ElementType
  type?: ButtonType | `${ButtonType}`
}
