import { DirectionEnum, DirectionEnumValues } from '@/objects/facets/Direction'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../columns'

export interface StackSize {
  mobile?: GapSize
  tablet?: GapSize
  desktop?: GapSize
}

export interface StackProps extends CommonProps {
  children?: React.ReactNode
  gap?: StackSize | GapSize
  direction?: DirectionEnum | DirectionEnumValues
}

export type StackRef = HTMLDivElement
export type DividerNativeRef = View
