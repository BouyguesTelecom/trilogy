import { CommonProps } from "@/interfaces/commonProps"

export enum AlertDescriptionMarkup {
  p = "p",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}
export interface AlertDescriptionProps extends CommonProps {
  markup?: AlertDescriptionMarkup
}
