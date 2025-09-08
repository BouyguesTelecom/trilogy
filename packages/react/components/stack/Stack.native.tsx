import { ComponentName } from '@/components/enumsComponentsName'
import { DirectionEnum } from '@/objects/facets/Direction'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { ColumnsGapValue, GapSize } from '../columns'
import { StackNativeRef, StackProps } from './StackProps'

/**
 * Stack Component
 * @param gap {StackSize} Gap between elements in Stack
 * @param direction {DirectionEnum} flex direction
 */
const Stack = React.forwardRef<StackNativeRef, StackProps>(
  ({ children, gap, direction = DirectionEnum.COLUMN, ...others }, ref) => {
    const getGapValue = (gapSize: GapSize): number => {
      return ColumnsGapValue[gapSize] || 0
    }

    let gapValue = 0
    if (typeof gap === 'number') {
      gapValue = getGapValue(gap)
    } else if (gap && typeof gap === 'object') {
      gapValue = getGapValue(gap.mobile || GapSize.ZERO)
    }

    const stackStyles: ViewStyle = {
      flexDirection: direction === DirectionEnum.ROW ? 'row' : 'column',
      gap: gapValue,
    }

    return (
      <View ref={ref} style={stackStyles} {...others}>
        {children}
      </View>
    )
  },
)

Stack.displayName = ComponentName.Stack
export default Stack
