import type React from "react"

export enum AlertStatus {
  information = "information",
  warning = "warning",
  success = "success",
  error = "error",
}

export interface AlertGeneratedProps {
  toaster?: boolean
  description?: React.ReactNode
  title?: React.ReactNode
  status?: AlertStatus
}
