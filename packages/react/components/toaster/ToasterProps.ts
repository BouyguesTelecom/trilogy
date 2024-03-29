import { Clickable, AlertProps, Accessibility } from '../../objects'
import { ClickEvent } from '../../events/OnClickEvent'
import { IconName, IconNameValues } from '../icon'

export enum ToasterPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

/**
 * Notification Interface
 */
export interface ToasterProps extends AlertProps, Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
  toasterChildren?: React.ReactNode
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  deletable?: ClickEvent | boolean
  closable?: ClickEvent
  position?: ToasterPosition
  duration?: number
  offset?: number
  display?: boolean
  onShow?: () => void
  onHide?: () => void
}
