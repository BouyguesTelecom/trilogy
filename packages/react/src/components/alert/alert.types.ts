import { CommonProps } from "@/interfaces/commonProps"

export enum AlertStatus {
  information = "information",
  warning = "warning",
  success = "success",
  error = "error",
}

export interface AlertUiProps {
  /** Selects the alert status. Values: `information`, `warning`, `success`, `error`. Default: unset on Web; `information` on Native. */
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

export interface AlertProps extends AlertUiProps, CommonProps {
  /** Selects the HTML element on Web. Values: `p`, `h2`–`h6`. Default: `div`; ignored on Native. */
  markup?: AlertMarkup
}
