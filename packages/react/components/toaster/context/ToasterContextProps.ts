import { Accessibility } from '../../../objects/facets/Accessibility'
import { AlertProps } from '../../../objects/facets/Alert'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'
import { ToasterPosition } from '../ToasterProps'

/**
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param iconName {IconName} Custom icon
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all notification
 * @param closable {Function} onClick Event on cross icon
 * @param onHide {Function} onClick Event on hide
 */
export interface ToastProps extends AlertProps, Accessibility {
  title: string
  description?: string
  iconName?: IconName | IconNameValues
  onClick?: () => void
  closable?: () => void
  onHide?: () => void
}

interface ToastConfig {
  position?: ToasterPosition
  duration?: number
  offset?: number
}

export type ToasterShowContext = (params: ToastConfig & ToastProps) => void
