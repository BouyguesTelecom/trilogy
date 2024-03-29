import { Clickable } from './../../objects/facets/Clickable'
import { Accessibility, AlertProps as PropsAlert } from '../../objects/facets'
import { IconName, IconNameValues } from '../icon/IconNameEnum'
/**
 * Notification Interface
 */
export interface AlertProps extends PropsAlert, Clickable, Accessibility {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  iconClassname?: string
  display?: boolean
}
