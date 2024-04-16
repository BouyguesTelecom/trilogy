import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps extends Clickable, Accessibility {
  children: React.ReactChild
  active?: boolean
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
