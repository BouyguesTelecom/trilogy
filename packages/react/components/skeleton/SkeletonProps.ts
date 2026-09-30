import { ViewStyle, DimensionValue } from 'react-native'
import { ReactNode } from 'react'

export interface SkeletonProps {
  style?: ViewStyle
  width?: DimensionValue
  height?: DimensionValue
  backgroundColor?: string
  shimmerColor?: string
  duration?: number
  borderRadius?: number
  children?: ReactNode
  testID?: string
}
