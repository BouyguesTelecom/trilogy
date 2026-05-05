import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { BoxItemNativeRef, BoxItemProps } from './BoxItemProps'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxItem = React.forwardRef<BoxItemNativeRef, BoxItemProps>(({ children, size, testId, ...others }, ref): JSX.Element => {
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
    <View ref={ref} style={[styles.boxItem]} testID={testId} {...others}>
      {children}
    </View>
  )
})

BoxItem.displayName = ComponentName.BoxItem

export default BoxItem
