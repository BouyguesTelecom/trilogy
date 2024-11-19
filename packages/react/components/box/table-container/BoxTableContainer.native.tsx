import React from 'react'
import { StyleSheet, View } from 'react-native'

import { BoxTableContainerProps } from '@/components/box/table-container/BoxTableContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Box Table Component
 * @param children {React.ReactNode} Childrens
 */
const boxTableContainer = ({ children, ...others }: BoxTableContainerProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    boxTableContainer: {},
  })

  return (
    <View style={[styles.boxTableContainer]} ref={ref} {...others}>
      {children}
    </View>
  )
}

boxTableContainer.displayName = ComponentName.BoxFooter

export default React.forwardRef(boxTableContainer)
