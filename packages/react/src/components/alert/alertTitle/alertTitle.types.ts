import { CommonProps } from "../../../interfaces/commonProps"
import { AlertTitleGeneratedProps } from "./alertTitle.generated"

export enum AlertTitleMarkup {
  p = "p",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}
export interface AlertTitleProps extends AlertTitleGeneratedProps, CommonProps {
  markup?: AlertTitleMarkup
}
