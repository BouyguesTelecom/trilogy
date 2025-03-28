import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { BoxTableContainerNativeRef, BoxTableContainerProps } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param children {React.ReactNode} Childrens
 */
const boxTableContainer = React.forwardRef<BoxTableContainerNativeRef, BoxTableContainerProps>(
  ({ children, ...others }, ref): JSX.Element => {
    const styles = StyleSheet.create({
      boxTableContainer: {},
    })

    return (
      <View ref={ref} style={[styles.boxTableContainer]} {...others}>
        {children}
      </View>
    )
  },
)

boxTableContainer.displayName = ComponentName.BoxTableContainer

export default boxTableContainer
