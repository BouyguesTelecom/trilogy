import { ToasterAlertPosition } from '@/components/alert/AlertProps'
import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Dev, StatusProps } from '@/objects'

/**
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param iconName {IconName} Custom icon
 * @param alert {StatusState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all notification
 * @param closable {Function} onClick Event on cross icon
 * @param onHide {Function} onClick Event on hide
 */
export interface ToastProps extends StatusProps, Accessibility, Dev {
  title: string
  description?: string
  iconName?: IconName | IconNameValues
  onClick?: () => void
  closable?: () => void
  onHide?: () => void
}

interface ToastConfig {
  position?: ToasterAlertPosition
  duration?: number
  offset?: number
}

export type ToasterShowContext = (params: ToastConfig & ToastProps) => void
