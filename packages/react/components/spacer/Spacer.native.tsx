import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerProps } from '@/components/spacer/SpacerProps'

/**
 * Spacer Component
 * @param size {SpacerSize} Size of the spacer
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = React.forwardRef(({ size, horizontal }: SpacerProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    spacer: {
      marginLeft: (horizontal && parseInt(size.toString())) || 0,
      marginTop: (!horizontal && parseInt(size.toString())) || 0,
    },
  })
  return <View style={styles.spacer} ref={ref} />
})

Spacer.displayName = ComponentName.Spacer
export default Spacer
