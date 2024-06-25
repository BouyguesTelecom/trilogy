import * as React from "react"
import { StyleSheet, View } from "react-native"
import { BoxItemProps } from "./BoxItemProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Box Content Component
 * @param children {React.ReactNode} BoxItem Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 */
const BoxItem = ({ children, size, ...others }: BoxItemProps): JSX.Element => {
  const height = Number(size) || 48
  const styles = StyleSheet.create({
    boxItem: {
      height: height,
      alignItems: "center",
      alignContent: "center",
      flexWrap: "wrap",
      flex: 1,
    },
  })

  return (
    <View style={[styles.boxItem]} {...others}>
      {children}
    </View>
  )
}

BoxItem.displayName = ComponentName.BoxItem

export default BoxItem
