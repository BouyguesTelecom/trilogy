import { DirectionEnum, DirectionEnumValues } from '@/objects/facets/Direction'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { ColumnsGapValue } from '../columns'

export enum StackSize {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
}

export interface StackProps extends CommonProps {
  children?: React.ReactNode
  gap?: StackSize
  direction?: DirectionEnum | DirectionEnumValues
}

export type StackRef = HTMLDivElement
export type DividerNativeRef = View

export const StackSizeGapValue = ColumnsGapValue.slice(1, 6)
