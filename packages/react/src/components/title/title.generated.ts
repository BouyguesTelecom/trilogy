export enum TitleLevel {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
}

export enum TitleTextAlign {
  left = "left",
  right = "right",
  center = "center",
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

export interface TitleGeneratedProps {
  level?: TitleLevel
  textAlign?: TitleTextAlign
  color?: TitleColor
}
