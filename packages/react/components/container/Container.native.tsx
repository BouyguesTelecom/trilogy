import { ContainerNativeRef, ContainerProps } from '@/components/container/ContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer/SpacerEnum'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Container Component
 * @param children {React.ReactNode}
 */
const Container = React.forwardRef<ContainerNativeRef, ContainerProps>(({ children, ...others }, ref): JSX.Element => {
  return (
    <View ref={ref} style={styles.container} {...others}>
      {children}
    </View>
  )
})

Container.displayName = ComponentName.Container
export default Container

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flex: 0,
    padding: SpacerSize.FIVE,
  },
})
