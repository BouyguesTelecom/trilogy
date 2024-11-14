import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableProps } from '@/components/table/TableProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * Table Component
 * @param children {ReactNode}
 * @param bordered {boolean} bordered table
 */
const Table = ({ children, bordered, ...others }: TableProps, ref: React.Ref<View>): JSX.Element => {
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
    <View style={[bordered && styles.bordered, !bordered && styles.noBorder, styles.table]} ref={ref} {...others}>
      {children}
    </View>
  )
}

Table.displayName = ComponentName.Table

export default React.forwardRef(Table)
