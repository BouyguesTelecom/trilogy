import { Clickable } from '@/objects/facets/Clickable'
import { Accessibility, StatusProps } from '@/objects/facets'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { ClickEvent } from "@/events/OnClickEvent"

export enum ToasterAlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface ToasterStatusProps extends StatusProps, Clickable, Accessibility {
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
export interface AlertProps extends StatusProps, Clickable, Accessibility {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  iconClassname?: string
  display?: boolean
  toaster?: boolean
}
