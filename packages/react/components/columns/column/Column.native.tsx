import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { View } from 'react-native'
import { ColumnsContext } from '../context'
import { ColumnProps } from './ColumnProps'

/**
 * Columns Item Component - Columns Child
 * @param children {React.ReactNode}
 */
const Column = ({ children, narrow, size, ...others }: ColumnProps): JSX.Element => {
  const { width, realGap, scrollable, childrensLength } = React.useContext(ColumnsContext)

  return (
    <View
      {...others}
      style={{
        height: scrollable ? '100%' : undefined,
        flex: narrow ? 0 : 1,
        flexGrow: size || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: size ? (size / 12) * width - realGap * ((childrensLength - 1) / childrensLength) : 'auto',
      }}
    >
      {children}
    </View>
  )
}

Column.displayName = ComponentName.Column

export default Column
