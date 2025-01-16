import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { View } from 'react-native'
import { ColumnProps } from './ColumnProps'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * @param mobileSize {ColumnsSize} if size is missing.
 * @param children {React.ReactNode}
 * @param verticalCentered {boolean} Vertical center Column item
 */
const Column = ({ children, size, mobileSize, verticalAlign, style, ...others }: ColumnProps): JSX.Element => {
  return <View style={[style]}>{children}</View>
}

Column.displayName = ComponentName.Column

export default Column
