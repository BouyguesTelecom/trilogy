import { Clickable } from '../../objects/facets/Clickable'
import { Accessibility, Dev, StatusProps } from '../../objects/facets'
import { IconName, IconNameValues } from '../../components/icon/IconNameEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { CommonProps } from '../../objects/facets/CommonProps'

export enum ToasterAlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}
export enum ToasterAlertFloat {
  RIGHT = 'right',
  LEFT = 'left'
}

export interface ToasterStatusProps extends StatusProps, Clickable, Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  toasterChildren?: React.ReactNode
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  deletable?: ClickEvent | boolean
  closable?: ClickEvent
  position?: ToasterAlertPosition
  float?: ToasterAlertFloat
  duration?: number
  offset?: number
  display?: boolean
  onShow?: () => void
  onHide?: () => void
}

/**
 * Alert Interface
 */
export interface AlertProps extends StatusProps, Clickable, Accessibility, Dev, CommonProps {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  display?: boolean
  toaster?: boolean
  banner?: boolean
}
