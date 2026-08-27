import { IconName, IconNameValues } from '@/components/icon'
import { TouchableOpacity } from 'react-native'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility, Dev, CommonProps {
  children?: string
  label?: string
  value?: T
  disabled?: boolean
  onClick?: ClickEvent
  iconName?: IconName | IconNameValues
}

export type SelectOptionRef = HTMLOptionElement | HTMLLIElement
export type SelectOptionNativeRef = TouchableOpacity
