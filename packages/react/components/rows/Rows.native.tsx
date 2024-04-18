import * as React from "react"
import { StyleSheet, View } from "react-native"
import { RowsProps } from "./RowsProps"
import { ComponentName } from "../enumsComponentsName"

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 */
const Rows = ({ children, ...others }: RowsProps): JSX.Element => {
  const styles = StyleSheet.create({
    rows: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  })

  return (
    <View style={styles.rows} {...others}>
      {children}
    </View>
  )
}

Rows.displayName = ComponentName.Rows

export default Rows
