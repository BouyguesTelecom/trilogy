import { CommonProps } from "@/interfaces/commonProps"

export enum AlertStatus {
  information = "information",
  warning = "warning",
  success = "success",
  error = "error",
}

export interface AlertUidProps {
  status?: AlertStatus
}

export enum AlertMarkup {
  p = "p",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export interface AlertProps extends AlertUidProps, CommonProps {
  markup?: AlertMarkup
}
