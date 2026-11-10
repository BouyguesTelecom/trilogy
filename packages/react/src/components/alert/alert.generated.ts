export enum AlertStatus {
  information = "information",
  warning = "warning",
  success = "success",
  error = "error",
}

export interface AlertGeneratedProps {
  toaster?: boolean
  status?: AlertStatus
}
