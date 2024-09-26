import { IconName, IconNameValues } from '@/components/icon'
import { getColorStyle, TrilogyColor } from './Color'

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
export const getStatusStyle = (statusType?: string): { color: string, backgroundColor: string} => {
  switch (statusType) {
    case 'SUCCESS':
      return { color: getColorStyle(TrilogyColor.SUCCESS), backgroundColor: getColorStyle(TrilogyColor.SUCCESS_FADE) }
    case 'INFO':
      return { color: getColorStyle(TrilogyColor.INFO), backgroundColor: getColorStyle(TrilogyColor.INFO_FADE) }
    case 'WARNING':
      return { color: getColorStyle(TrilogyColor.WARNING), backgroundColor: getColorStyle(TrilogyColor.WARNING_FADE) }
    case 'ERROR':
      return { color: getColorStyle(TrilogyColor.ERROR), backgroundColor: getColorStyle(TrilogyColor.ERROR_FADE) }
    default: // MAIN
      return { color: getColorStyle(TrilogyColor.MAIN), backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE) }
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
