import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { RowsItemProps } from './RowItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 */
const RowItem = ({ children, narrow, ...others }: RowsItemProps): JSX.Element => {
  const styles = StyleSheet.create({
    rowItem: {
      flexGrow: (narrow && 0) || 1,
      flexShrink: 1,
    },
  })

  return (
    <View style={styles.rowItem} {...others}>
      {children}
    </View>
  )
}

RowItem.displayName = ComponentName.RowsItem

export default RowItem
