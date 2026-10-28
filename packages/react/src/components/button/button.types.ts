export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Ghost = "ghost",
  Conversion = "conversion",
}

export interface ButtonProps {
  variant?: ButtonVariant
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
}
