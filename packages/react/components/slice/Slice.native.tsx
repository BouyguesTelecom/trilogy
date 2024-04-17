import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { SliceProps } from "./SliceProps"
import { ComponentName } from "../enumsComponentsName"

/**
 * Slice component
 * @param children {React.ReactNode} Slice children
 * @param onClick {Function} OnClick Event
 */
const Slice = ({ children, onClick, ...others }: SliceProps): JSX.Element => {
  const styles = StyleSheet.create({
    slice: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 5,
      width: "100%",
    },
  })

  return (
    <TouchableOpacity
      onPress={(e?: unknown) => onClick?.(e)}
      style={styles.slice}
      {...others}
    >
      {children}
    </TouchableOpacity>
  )
}

Slice.displayName = ComponentName.Slice

export default Slice
