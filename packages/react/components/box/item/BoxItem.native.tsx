import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { BoxItemNativeRef, BoxItemProps } from './BoxItemProps'

/**
 * Box item Component
 * @param children {React.ReactNode} BoxItem Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 */
const BoxItem = React.forwardRef<BoxItemNativeRef, BoxItemProps>(({ children, size, ...others }, ref): JSX.Element => {
  const height = Number(size) || 48
  const styles = StyleSheet.create({
    boxItem: {
      height: height,
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      flex: 1,
    },
  })

  return (
    <View ref={ref} style={[styles.boxItem]} {...others}>
      {children}
    </View>
  )
})

BoxItem.displayName = ComponentName.BoxItem

export default BoxItem
