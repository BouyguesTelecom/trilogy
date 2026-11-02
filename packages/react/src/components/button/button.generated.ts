export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  ghost = "ghost",
  conversion = "conversion",
}

export interface ButtonGeneratedProps {
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
}
