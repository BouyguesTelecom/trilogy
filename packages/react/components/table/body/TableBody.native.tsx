import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableBodyProps } from '@/components/table/body/TableBodyProps'

/**
 * TableBody Component
 * @param children {ReactNode} Children of Table Body
 */
const TableBody = ({ children, ...others }: TableBodyProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    body: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  })

  return (
    <View style={styles.body} ref={ref} {...others}>
      {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
    </View>
  )
}

TableBody.displayName = ComponentName.TableBody

export default React.forwardRef(TableBody)
