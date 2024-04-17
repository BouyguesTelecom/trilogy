import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SliceCtaProps } from "./SliceCtaProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice Cta Component
 * @param children {ReactNode} Children for Slice Cta
 */
const SliceCta = ({ children, ...others }: SliceCtaProps): JSX.Element => {
  const styles = StyleSheet.create({
    sliceCta: {
      position: "absolute",
      right: 10,
    },
  })

  return (
    <View style={styles.sliceCta} {...others}>
      {children}
    </View>
  )
}

SliceCta.displayName = ComponentName.SliceCta

export default SliceCta
