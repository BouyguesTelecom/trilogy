import { Clickable } from './../../objects/facets/Clickable'
import { Accessibility, AlertProps as PropsAlert } from '../../objects/facets'
import { IconName, IconNameValues } from '../icon/IconNameEnum'
import { ClickEvent } from "../../events/OnClickEvent"

export enum ToasterAlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface ToasterAlertProps extends AlertProps, Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
  toasterChildren?: React.ReactNode
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  deletable?: ClickEvent | boolean
  closable?: ClickEvent
  position?: ToasterAlertPosition
  duration?: number
  offset?: number
  display?: boolean
  onShow?: () => void
  onHide?: () => void
}

/**
 * Alert Interface
 */
export interface AlertProps extends PropsAlert, Clickable, Accessibility {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  iconClassname?: string
  display?: boolean
  toaster?: boolean
}
