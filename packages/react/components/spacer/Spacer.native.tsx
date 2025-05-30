import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SpacerNativeRef, SpacerProps } from "./SpacerProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Spacer Component
 * @param size {SpacerSize} Size of the spacer
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = React.forwardRef<SpacerNativeRef, SpacerProps>(({ size, horizontal }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    spacer: {
      marginLeft: (horizontal && parseInt(size.toString())) || 0,
      marginTop: (!horizontal && parseInt(size.toString())) || 0,
    },
  })
  return <View ref={ref} style={styles.spacer} />
})

Spacer.displayName = ComponentName.Spacer

export default Spacer
