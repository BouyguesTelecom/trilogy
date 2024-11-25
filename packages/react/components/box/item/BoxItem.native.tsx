import React from 'react'
import { StyleSheet, View } from 'react-native'

import { BoxItemProps } from '@/components/box/item/BoxItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Box item Component
 * @param children {React.ReactNode} BoxItem Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 */
const BoxItem = React.forwardRef(({ children, size, ...others }: BoxItemProps, ref: React.Ref<View>): JSX.Element => {
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
