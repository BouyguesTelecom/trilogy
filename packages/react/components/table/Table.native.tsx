import * as React from "react"
import { StyleSheet, View } from "react-native"
import { getColorStyle, TrilogyColor } from "@/objects"
import { TableProps } from "./TableProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Table Component
 * @param children {ReactNode}
 * @param bordered {boolean} bordered table
 */
const Table = ({ children, bordered, ...others }: TableProps): JSX.Element => {
  const borderColor = getColorStyle(TrilogyColor.FONT, 1)

  const styles = StyleSheet.create({
    table: {
      width: "100%",
      backgroundColor: "transparent",
    },
    bordered: {
      borderWidth: 1,
      borderColor: borderColor,
    },
    noBorder: {
      borderWidth: 0,
      borderColor: "transparent",
    },
  })

  return (
    <View
      style={[
        bordered && styles.bordered,
        !bordered && styles.noBorder,
        styles.table,
      ]}
      {...others}
    >
      {children}
    </View>
  )
}

Table.displayName = ComponentName.Table

export default Table
