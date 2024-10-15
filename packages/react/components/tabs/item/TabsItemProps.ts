import { Accessibility, Clickable } from '@/objects'
import { IconName, IconNameValues } from '@/components/icon'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps extends Accessibility, Clickable {
  children: React.ReactNode | string
  label?: string
  active?: boolean
  groupName?: string
  className?: string
  id?: string
  tabIndex?: number
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconNameValues | IconName
  disabled?: boolean
  inverted?: boolean
}
