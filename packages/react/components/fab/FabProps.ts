import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { DimensionValue, TouchableOpacity } from 'react-native'

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Dev, CommonProps {
  children: string | React.ReactNode
  extended?: boolean
  iconName: IconName | IconNameValues
  fixed?: boolean
  top?: DimensionValue | number | undefined
  bottom?: DimensionValue | number | undefined
  left?: DimensionValue | number | undefined
  right?: DimensionValue | number | undefined
  disabled?: boolean
}

export type FabRef = HTMLButtonElement
export type FabNativeRef = TouchableOpacity
