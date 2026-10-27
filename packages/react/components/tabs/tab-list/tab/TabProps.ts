import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { TouchableOpacity } from 'react-native'
import { ElementType } from 'react'

/**
 * Tabs Item Interface
 */
export interface TabProps extends Clickable, Accessibility, Dev, CommonProps {
  active?: boolean
  to?: string
  href?: string
  routerLink?: ElementType
  iconName?: IconNameValues | IconName
  label?: string
  disabled?: boolean
  ariaControls?: string
}

export type TabRef = HTMLElement | HTMLButtonElement | HTMLLinkElement
export type TabNativeRef = TouchableOpacity
