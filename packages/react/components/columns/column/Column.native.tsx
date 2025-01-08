import React from 'react'
import { View } from 'react-native'
import { ColumnProps } from './ColumnProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * @param mobileSize {ColumnsSize} if size is missing.
 * @param children {React.ReactNode}
 * @param verticalCentered {boolean} Vertical center Column item
 */
const Column = ({ children, ...others }: ColumnProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

Column.displayName = ComponentName.Column

export default Column
