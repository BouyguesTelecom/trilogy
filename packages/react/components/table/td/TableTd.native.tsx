import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableTdProps } from '@/components/Table/td/TableTdProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 */
const TableTd = ({ children, ...others }: TableTdProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    table: {
      flexDirection: 'column',
      flex: 1,
      padding: 10,
      borderBottomWidth: 0.2,
      borderRightWidth: 0.2,
      borderBottomColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      borderRightColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
    },
    text: {
      color: getColorStyle(TrilogyColor.MAIN),
    },
  })

  return (
    <View style={styles.table} ref={ref} {...others}>
      {children && typeof children.valueOf() === 'string' ? (
        <Text style={styles.text}>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
}

TableTd.displayName = ComponentName.TableTd

export default React.forwardRef(TableTd)
