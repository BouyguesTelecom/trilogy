import { IconName, IconNameValues } from '../../components/icon'
import { getColorStyle } from './Color'

/**
 * Alert State
 */
export enum AlertState {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export type AlertStateValues = `${AlertState}`

/**
 * Alert props
 */
export interface AlertProps {
  alert?: AlertState | AlertStateValues
  id?: string
}

/**
 * Returns alert's classname depending on alert type
 * @param alertType {string} - Alert type
 * @returns {string} - Alert value
 */
export const getAlertClassName = (alertType?: string): string => {
  switch (alertType) {
    case 'SUCCESS':
      return 'success'
    case 'INFO':
      return 'info'
    case 'WARNING':
      return 'warning'
    case 'ERROR':
      return 'error'
    default:
      return ''
  }
}

/**
 * Returns alert's style depending on alert type
 * @param alertType {string} - Alert type
 * @returns {string} - Alert value
 */
export const getAlertStyle = (alertType?: string): string => {
  switch (alertType) {
    case 'SUCCESS':
      return getColorStyle('SUCCESS')
    case 'INFO':
      return getColorStyle('INFO')
    case 'WARNING':
      return getColorStyle('WARNING')
    case 'ERROR':
      return getColorStyle('ERROR')
    default:
      return ''
  }
}

/**
 * Returns alert's icon name depending on alert type
 * @param alertType {string} - Alert type
 * @returns {string} - Alert value
 */
export const getAlertIconName = (alertType?: string): IconName | IconNameValues => {
  switch (alertType) {
    case 'SUCCESS':
      return IconName.CHECK_CIRCLE
    case 'INFO':
      return IconName.INFOS_CIRCLE
    case 'WARNING':
      return IconName.ALERT
    case 'ERROR':
      return IconName.EXCLAMATION_CIRCLE
    default:
      return IconName.INFOS_CIRCLE
  }
}
