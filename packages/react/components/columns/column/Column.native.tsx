import { ColumnProps } from '@/components/columns/column/ColumnProps'
import { ColumnsContext } from '@/components/columns/context'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { View, ViewStyle } from 'react-native'

/**
 * Columns Item Component - Columns Child
 * @param children {React.ReactNode}
 */

const Column = React.forwardRef(
  ({ children, narrow, size, ...others }: ColumnProps, ref: React.Ref<View>): JSX.Element => {
    const { width, realGap, scrollable, childrensLength } = React.useContext(ColumnsContext)

    const scrollableStyle: ViewStyle = {
      width: size
        ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength)
        : narrow
        ? 'auto'
        : width - 2 * realGap,
    }

    const noScrollableStyle: ViewStyle = {
      flex: narrow ? 0 : 1,
      flexGrow: size || narrow ? 0 : 1,
      flexShrink: narrow ? 1 : 0,
      flexBasis: size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : 'auto',
    }

    return (
      <View ref={ref} style={[scrollable && scrollableStyle, !scrollable && noScrollableStyle]} {...others}>
        {children}
      </View>
    )
  },
)

Column.displayName = ComponentName.Column

export default Column
