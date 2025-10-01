import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/index.native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { TableBorderEnum, TableNativeRef, TableProps } from './TableProps'

/**
 * Table Component
 * @param children {ReactNode}
 * @param bordered {boolean} bordered table
 */
const Table = React.forwardRef<TableNativeRef, TableProps>(({ children, border, ...others }, ref): JSX.Element => {
  const borderColor = getColorStyle(TrilogyColor.MAIN_FADE)

  const styles = StyleSheet.create({
    table: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    bordered: {
      borderWidth: 1,
      borderColor: borderColor,
    },
    noBorder: {
      borderWidth: 0,
      borderColor: 'transparent',
    },
  })

  return (
    <View
      ref={ref}
      style={[border === TableBorderEnum.ALL && styles.bordered, !border && styles.noBorder, styles.table]}
      {...others}
    >
      {children}
    </View>
  )
})

Table.displayName = ComponentName.Table

export default Table
