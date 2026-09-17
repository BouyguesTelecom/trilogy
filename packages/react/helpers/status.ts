import { getColorStyle } from '@/helpers/color'
import { IconName, IconNameValues } from '@/components/icon'
import { TrilogyColor } from '@/interfaces/Color'

const STATUS_COLORS = {
  SUCCESS: { color: TrilogyColor.SUCCESS, backgroundColor: TrilogyColor.SUCCESS_FADE },
  INFO: { color: TrilogyColor.INFO, backgroundColor: TrilogyColor.INFO_FADE },
  WARNING: { color: TrilogyColor.WARNING, backgroundColor: TrilogyColor.WARNING_FADE },
  ERROR: { color: TrilogyColor.ERROR, backgroundColor: TrilogyColor.ERROR_FADE },
  DEFAULT: { color: TrilogyColor.MAIN, backgroundColor: TrilogyColor.MAIN_FADE },
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

export const getStatusStyle = (statusType?: keyof typeof STATUS_COLORS): { color: string; backgroundColor: string } => {
  const colors = STATUS_COLORS[statusType || 'DEFAULT']
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
