import { CommonProps } from "@/interfaces/commonProps"

export enum AlertDescriptionMarkup {
  p = "p",
  span = "span",
  div = "div",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}
export interface AlertDescriptionProps extends CommonProps {
  /** Selects the HTML element on Web. Values: `p`, `span`, `div`, `h2`–`h6`. Default: `p`; ignored on Native. */
  markup?: AlertDescriptionMarkup
}
