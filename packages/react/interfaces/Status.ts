/**
 * Alert State
 */
export enum StatusState {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
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
