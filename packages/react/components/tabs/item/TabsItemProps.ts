import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps extends Clickable, Accessibility, Dev {
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
