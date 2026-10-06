import { Dev } from '@/objects/facets/Dev'
import { Marginless } from '@/objects/facets/Marginless'
import { IconName, IconNameValues } from '@/components/icon'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

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
