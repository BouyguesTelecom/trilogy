import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TableBodyProps } from './TableBodyProps'
import { ComponentName } from '../../enumsComponentsName'

/**
 * TableBody Component
 * @param children {ReactNode} Children of Table Body
 */
const TableBody = ({ children, ...others }: TableBodyProps): JSX.Element => {
  const styles = StyleSheet.create({
    body: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  })

  return (
    <View style={styles.body} {...others}>
      {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
    </View>
  )
}

TableBody.displayName = ComponentName.TableBody

export default TableBody
