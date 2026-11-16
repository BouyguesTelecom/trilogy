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
}

export interface TitleGeneratedProps {
  level?: TitleLevel
  textAlign?: TitleTextAlign
  color?: TitleColor
}
