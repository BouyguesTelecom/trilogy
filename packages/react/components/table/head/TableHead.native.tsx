import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableHeadProps } from '@/components/table/head/TableHeadProps'

/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 */
const TableHead = ({ children, ...others }: TableHeadProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    head: {
      width: '100%',
      flexDirection: 'row',
    },
  })

  return (
    <View style={styles.head} ref={ref} {...others}>
      {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
    </View>
  )
}

TableHead.displayName = ComponentName.TableHead

export default React.forwardRef(TableHead)
