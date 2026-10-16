import { IconName, IconNameValues } from '@/components/icon'
import { StatusSubtleVariant, StatusVariant } from '@/interfaces/status'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

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

/**
 * Returns alert's classname depending on alert type
 * @param statusType {string} - Alert type
 * @returns {string} - Alert value
 */
export const getStatusClassName = (statusType?: string): string => {
  switch (statusType) {
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
 * Returns status style depending on alert type
 * @param statusType {string} - Alert type
 * @returns { color: string, backgroundColor: string} - color and background color value
 */
const STATUS_COLORS = {
  success: { color: StatusVariant.SUCCESS, backgroundColor: StatusSubtleVariant.SUCCESS_SUBTLE },
  information: { color: StatusVariant.INFORMATION, backgroundColor: StatusSubtleVariant.INFORMATION_SUBTLE },
  warning: { color: StatusVariant.WARNING, backgroundColor: StatusSubtleVariant.WARNING_SUBTLE },
  error: { color: StatusVariant.ERROR, backgroundColor: StatusSubtleVariant.ERROR_SUBTLE },
  default: { color: StatusVariant.INFORMATION, backgroundColor: StatusSubtleVariant.INFORMATION_SUBTLE },
}

export const getStatusStyle = (statusType?: keyof typeof STATUS_COLORS): { color: string; backgroundColor: string } => {
  const colors = STATUS_COLORS[statusType || 'default']
  return {
    color: getColorStyle(colors.color),
    backgroundColor: getColorStyle(colors.backgroundColor),
  }
}

/**
 * Returns status icon name depending on alert type
 * @param statusType {string} - Alert type
 * @returns {string} - Alert value
 */
export const getStatusIconName = (statusType?: string): IconName | IconNameValues => {
  switch (statusType) {
    case 'SUCCESS':
      return IconName.CHECK_CIRCLE
    case 'INFORMATION':
      return IconName.INFOS_CIRCLE
    case 'WARNING':
      return IconName.ALERT
    case 'ERROR':
      return IconName.EXCLAMATION_CIRCLE
    default:
      return IconName.INFOS_CIRCLE
  }
}
