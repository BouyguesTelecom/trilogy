export enum TitleLevel {
  one = "one",
  two = "two",
  three = "three",
  four = "four",
  five = "five",
  six = "six",
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
