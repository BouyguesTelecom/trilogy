import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SpacerProps } from "./SpacerProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Spacer Component
 * @deprecated
 * @param size {SpacerSize} SMALL | MEDIUM | LARGE | HUGE
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = ({ size, horizontal }: SpacerProps): JSX.Element => {
  const styles = StyleSheet.create({
    spacer: {
      marginLeft: (horizontal && parseInt(size.toString())) || 0,
      marginTop: (!horizontal && parseInt(size.toString())) || 0,
    },
  })
  return <View style={styles.spacer} />
}

Spacer.displayName = ComponentName.Spacer

export default Spacer
