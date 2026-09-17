import { IconName, IconNameValues } from '@/components/icon'
import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { Marginless } from "@/interfaces/Marginless";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless, CommonProps, Dev {
  content?: string
  unboxed?: boolean
  iconName?: IconNameValues | IconName
  inverted?: boolean
}

export type DividerRef = HTMLDivElement
export type DividerNativeRef = View
