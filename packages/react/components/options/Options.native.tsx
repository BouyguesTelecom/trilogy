import * as React from "react"
import { StyleSheet, View } from "react-native"
import { OptionsProps } from "./OptionsProps"
import { ComponentName } from "../enumsComponentsName"

/**
 * Options Component
 * @param children {React.ReactNode} Children for Options
 */
const Options = ({ children }: OptionsProps): JSX.Element => {
  const styles = StyleSheet.create({
    options: {
      flexDirection: "row",
      width: "100%",
    },
  })

  return <View style={styles.options}>{children}</View>
}

Options.displayName = ComponentName.Options

export default Options
