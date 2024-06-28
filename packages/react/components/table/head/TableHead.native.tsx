import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TableHeadProps } from "./TableHeadProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 */
const TableHead = ({ children, ...others }: TableHeadProps): JSX.Element => {
  const styles = StyleSheet.create({
    head: {
      width: "100%",
      flexDirection: "row",
    },
  })

  return (
    <View style={styles.head} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <Text>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
}

TableHead.displayName = ComponentName.TableHead

export default TableHead
