import { ElementType } from "react"

import { AccessibilityProps } from "../../interfaces/accessibilityProps"
import { CommonProps } from "../../interfaces/commonProps"
import { OnClickProps } from "../../interfaces/onClickProps"
import { ButtonGeneratedProps } from "./button.generated"

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
  extends ButtonGeneratedProps, AccessibilityProps, CommonProps, OnClickProps {
  markup?: ButtonMarkup | `${ButtonMarkup}`
  loading?: boolean
  disabled?: boolean
  href?: string
  to?: string
  name?: string
  routerLink?: ElementType
  type?: ButtonType | `${ButtonType}`
  fullwidth?: boolean
}
