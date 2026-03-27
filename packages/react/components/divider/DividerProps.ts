import { IconName, IconNameValues } from '@/components/icon'
import { Dev, Marginless } from '@/objects'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless, CommonProps, Dev {
  content?: string
  unboxed?: boolean
  iconName?: IconNameValues | IconName
  inverted?: boolean
  variant?: 'solid' | 'dashed'
}

export type DividerRef = HTMLDivElement
export type DividerNativeRef = View
