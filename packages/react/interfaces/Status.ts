/**
 * Alert State
 */
export enum StatusState {
  SUCCESS = 'SUCCESS',
  INFORMATION = 'INFORMATION',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export type StatusStateValues = `${StatusState}`

/**
 * Alert props
 */
export interface StatusProps {
  status?: StatusState | StatusStateValues
  id?: string
}
