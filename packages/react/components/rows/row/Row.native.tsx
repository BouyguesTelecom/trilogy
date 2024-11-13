import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { RowProps } from './RowProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 */
const Row = ({ children, narrow, ...others }: RowProps): JSX.Element => {
  const styles = StyleSheet.create({
    row: {
      flexGrow: (narrow && 0) || 1,
      flexShrink: 1,
    },
  })

  return (
    <View style={styles.row} {...others}>
      {children}
    </View>
  )
}

Row.displayName = ComponentName.Rows

export default Row
