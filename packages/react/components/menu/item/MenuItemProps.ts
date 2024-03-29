import { Accessibility, Clickable } from '../../../objects'
import { IconName, IconNameValues } from './../../icon/IconNameEnum'

/**
 * Menu Item Interface
 */
export interface MenuItemProps extends Clickable {
  children?: React.ReactNode
  disabled?: boolean
  active?: boolean
}

/**
 * Menu Item Web Interface
 */
export interface MenuItemWebProps extends MenuItemProps, Accessibility {
  to?: string
  className?: string
  arrow?: boolean
  badge?: string | number
  icon?: IconName | IconNameValues
}

export interface MenuItemNativeProps extends MenuItemProps, Accessibility {
  to?: string
  arrow?: boolean
  badge?: string | number
  icon?: IconName | IconNameValues
}
