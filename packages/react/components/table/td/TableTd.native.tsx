import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TableTdProps } from "./TableTdProps"
import { getColorStyle, TrilogyColor } from "../../../objects"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 */
const TableTd = ({ children, ...others }: TableTdProps): JSX.Element => {
  const styles = StyleSheet.create({
    table: {
      flexDirection: "column",
      flex: 1,
      padding: 10,
      borderBottomWidth: 0.2,
      borderRightWidth: 0.2,
      borderBottomColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
      borderRightColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
    },
    text: {
      color: getColorStyle(TrilogyColor.MAIN),
    },
  })

  return (
    <View style={styles.table} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <Text style={styles.text}>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
}

TableTd.displayName = ComponentName.TableTd

export default TableTd
