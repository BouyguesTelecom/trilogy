import { IconName, IconNameValues } from '@/components/icon'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Marginless } from '@/objects/index'
import { View } from 'react-native'

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless, CommonProps {
  content?: string
  unboxed?: boolean
  iconName?: IconNameValues | IconName
  inverted?: boolean
}

export type DividerRef = HTMLDivElement
export type DividerNativeRef = View
