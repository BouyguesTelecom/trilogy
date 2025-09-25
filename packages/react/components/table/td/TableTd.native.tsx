import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/index'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TableTdNativeRef, TableTdProps } from './TableTdProps'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 */
const TableTd = React.forwardRef<TableTdNativeRef, TableTdProps>(({ children, ...others }, ref): JSX.Element => {
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
    <View ref={ref} style={styles.table} {...others}>
      {children && typeof children.valueOf() === 'string' ? (
        <Text style={styles.text}>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
})

TableTd.displayName = ComponentName.TableTd

export default TableTd
