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
const Column = React.memo(React.forwardRef<ColumnNativeRef, ColumnProps>(
  ({ children, narrow, size, verticalAlign, ...others }, ref): JSX.Element => {
    const { width, realGap, scrollable, childrensLength } = React.useContext(ColumnsContext)

    const calculatedWidth = React.useMemo(() =>
      size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : null,
      [size, width, realGap, childrensLength]
    )

    const scrollableStyle: ViewStyle = React.useMemo(
      () => ({
        width: calculatedWidth || (narrow ? 'auto' : width - 2 * realGap),
      }),
      [calculatedWidth, narrow, width, realGap],
    )

    const noScrollableStyle: ViewStyle = React.useMemo(
      () => ({
        flex: narrow ? 0 : 1,
        flexGrow: size || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: calculatedWidth || 'auto',
      }),
      [narrow, size, calculatedWidth],
    )

    const justifyContentStyle = React.useMemo(
      () => ({ justifyContent: getAlignStyle(verticalAlign) as 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' }),
      [verticalAlign]
    )

    return (
      <View
        ref={ref}
        style={[
          scrollable && scrollableStyle,
          !scrollable && noScrollableStyle,
          justifyContentStyle,
        ]}
        {...others}
      >
        {children}
      </View>
    )
  },
))

Column.displayName = ComponentName.Column

export default Column
