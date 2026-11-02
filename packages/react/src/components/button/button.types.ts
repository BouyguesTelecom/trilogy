import { AccessibilityProps } from "@/interfaces/accessibilityProps"

import {
  ButtonGeneratedProps,
  ButtonVariant,
} from "@/components/button/button.generated"

export enum ButtonMarkup {
  button = "button",
  input = "input",
  div = "div",
}

export enum ButtonType {
  button = "button",
  reset = "reset",
  submit = "submit",
}

export interface ButtonProps extends ButtonGeneratedProps, AccessibilityProps {
  variant?: ButtonVariant
  markup?: ButtonMarkup
}
