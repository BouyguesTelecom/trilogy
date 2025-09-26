import { ColumnNativeRef, ColumnProps } from '@/components/columns/column/ColumnProps'
import { ColumnsContext } from '@/components/columns/context'
import { ComponentName } from '@/components/enumsComponentsName'
import { getAlignStyle } from '@/objects'
import React from 'react'
import { View, ViewStyle } from 'react-native'

/**
 * Columns Item Component - Columns Child
 * @param children {React.ReactNode}
 */

const Column = React.forwardRef<ColumnNativeRef, ColumnProps>(
  ({ children, narrow, size, verticalAlign, ...others }, ref): JSX.Element => {
    const { width, realGap, scrollable, childrensLength } = React.useContext(ColumnsContext)

    // Optimization: Separate width calculations to avoid unnecessary re-calculations
    const calculatedWidth = React.useMemo(
      () => size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : width - 2 * realGap,
      [size, width, realGap, childrensLength],
    )

    // Universal optimization: Specific styles for scrollable containers
    const scrollableStyle: ViewStyle = React.useMemo(
      () => {
        if (size) {
          return { width: calculatedWidth }
        }

        if (narrow) {
          // Universal optimization: minWidth and flexShrink for better performance
          return { minWidth: 0, flexShrink: 1 }
        }

        return { width: calculatedWidth }
      },
      [size, narrow, calculatedWidth],
    )

    // Universal optimization: Specific styles for non-scrollable containers
    const noScrollableStyle: ViewStyle = React.useMemo(
      () => {
        const baseStyle: ViewStyle = {
          flex: narrow ? 0 : 1,
          flexGrow: size || narrow ? 0 : 1,
          flexShrink: narrow ? 1 : 0,
        }

        // Universal optimization: Use minWidth for better performance
        if (size) {
          return {
            ...baseStyle,
            flexBasis: calculatedWidth,
          }
        }

        if (narrow) {
          return {
            ...baseStyle,
            flexBasis: 0,
            minWidth: 0,
          }
        }

        // For flexible columns, use minWidth instead of 'auto'
        return {
          ...baseStyle,
          flexBasis: 0,
          minWidth: 0,
        }
      },
      [size, narrow, calculatedWidth],
    )

    // Optimization: Memoize vertical alignment style with correct typing
    const alignmentStyle: ViewStyle = React.useMemo(
      () => ({ justifyContent: getAlignStyle(verticalAlign) as 'flex-start' | 'flex-end' | 'center' }),
      [verticalAlign],
    )

    return (
      <View
        ref={ref}
        style={[
          scrollable && scrollableStyle,
          !scrollable && noScrollableStyle,
          alignmentStyle,
        ]}
        {...others}
      >
        {children}
      </View>
    )
  },
)

Column.displayName = ComponentName.Column

export default Column
