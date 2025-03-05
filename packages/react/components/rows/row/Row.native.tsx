import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { RowNativeRef, RowProps } from './RowProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 */
const Row = React.forwardRef<RowNativeRef, RowProps>(({ children, narrow, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    row: {
      flexGrow: (narrow && 0) || 1,
      flexShrink: 1,
    },
  })

  return (
    <View ref={ref} style={styles.row} {...others}>
      {children}
    </View>
  )
})

Row.displayName = ComponentName.Row

export default Row
