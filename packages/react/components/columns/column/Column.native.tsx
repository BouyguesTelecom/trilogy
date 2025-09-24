import { ColumnNativeRef, ColumnProps } from '@/components/columns/column/ColumnProps'
import { ColumnsContext } from '@/components/columns/context'
import { ComponentName } from '@/components/enumsComponentsName'
import { getAlignStyle } from '@/objects/index'
import React from 'react'
import { View, ViewStyle } from 'react-native'

/**
 * Columns Item Component - Columns Child
 * @param children {React.ReactNode}
 */

const Column = React.forwardRef<ColumnNativeRef, ColumnProps>(
  ({ children, narrow, size, verticalAlign, ...others }, ref): JSX.Element => {
    const { width, realGap, scrollable, childrensLength } = React.useContext(ColumnsContext)

    const scrollableStyle: ViewStyle = React.useMemo(
      () => ({
        width: size
          ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength)
          : narrow
          ? 'auto'
          : width - 2 * realGap,
      }),
      [size, narrow, width, realGap, childrensLength],
    )

    const noScrollableStyle: ViewStyle = React.useMemo(
      () => ({
        flex: narrow ? 0 : 1,
        flexGrow: size || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : 'auto',
      }),
      [size, narrow, width, realGap, childrensLength],
    )

    return (
      <View
        ref={ref}
        style={[
          scrollable && scrollableStyle,
          !scrollable && noScrollableStyle,
          { justifyContent: getAlignStyle(verticalAlign) },
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
