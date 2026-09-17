import { ViewStyle, DimensionValue, StyleProp } from 'react-native'

export interface SkeletonProps {
  style?: StyleProp<ViewStyle>
  width?: DimensionValue
  height?: DimensionValue
  backgroundColor?: string
  shimmerColor?: string
  duration?: number
  borderRadius?: number
  children?: React.ReactNode
  testID?: string
}
