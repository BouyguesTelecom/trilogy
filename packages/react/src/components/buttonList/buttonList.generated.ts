export enum ButtonListAlignItems {
  center = "center",
  flexStart = "flex-start",
  flexEnd = "flex-end",
  stretch = "stretch",
}

export enum ButtonListJustifyContent {
  center = "center",
  flexStart = "flex-start",
  flexEnd = "flex-end",
  spaceBetween = "space-between",
  spaceAround = "space-around",
}

export enum ButtonListDirection {
  column = "column",
  row = "row",
}

export interface ButtonListGeneratedProps {
  alignItems?: ButtonListAlignItems
  justifyContent?: ButtonListJustifyContent
  direction?: ButtonListDirection
}
