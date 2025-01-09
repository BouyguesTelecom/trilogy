import React from 'react'
import { View } from 'react-native'
import { ColumnProps } from './ColumnProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Columns Item Component - Columns Child
 * @param children {React.ReactNode}
 */
const Column = ({ children, ...others }: ColumnProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

Column.displayName = ComponentName.Column

export default Column
