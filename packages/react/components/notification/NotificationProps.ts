import { Clickable } from './../../objects/facets/Clickable'
import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, AlertProps } from '../../objects/facets'
import { ButtonMarkup, ButtonMarkupValues } from '../button'
import { IconName, IconNameValues } from '../icon/IconNameEnum'

/**
 * Notification Interface
 */
export interface NotificationProps extends AlertProps, Clickable, Accessibility {
  children?: React.ReactNode
  hasIcon?: boolean
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  info?: boolean
  deletable?: ClickEvent | boolean
  read?: boolean
  buttonContent?: string
  buttonClick?: ClickEvent
  arrow?: boolean
  banner?: boolean
  className?: string
  iconClassname?: string
  buttonMarkup?: ButtonMarkup | ButtonMarkupValues
  closable?: ClickEvent
}
