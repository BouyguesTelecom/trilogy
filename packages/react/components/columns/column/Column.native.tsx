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

    const calculatedWidth = React.useMemo(
      () => size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : 0,
      [size, width, realGap, childrensLength],
    )

    const scrollableStyle: ViewStyle = React.useMemo(
      () => ({
        width: size
          ? calculatedWidth
          : narrow
          ? 'auto'
          : width - 2 * realGap,
      }),
      [size, narrow, calculatedWidth, width, realGap],
    )

    const noScrollableStyle: ViewStyle = React.useMemo(
      () => ({
        flexGrow: size || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: size ? calculatedWidth : 'auto',
      }),
      [size, narrow, calculatedWidth],
    )

    // Performance optimization: Memoize alignment style separately
    const alignmentStyle = React.useMemo(
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
