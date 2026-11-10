import { CommonProps } from "../../interfaces/commonProps"
import { AlertGeneratedProps } from "./alert.generated"

export enum AlertMarkup {
  p = "p",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export interface AlertProps extends AlertGeneratedProps, CommonProps {
  markup?: AlertMarkup
}
