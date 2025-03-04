import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Clickable, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { TouchableOpacity } from 'react-native'

/**
 * Tabs Item Interface
 */
export interface TabProps extends Clickable, Accessibility, Dev, CommonProps {
  active?: boolean
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconNameValues | IconName
  label?: string
  disabled?: boolean
  ariaControls?: string
}

export type TabRef = HTMLElement | HTMLButtonElement | HTMLLinkElement
export type TabNativeRef = TouchableOpacity
