import { IconName, IconNameValues } from '@/components/icon'
import { TouchableOpacity } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

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
