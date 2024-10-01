import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { BoxContentProps } from "./BoxContentProps"
import { ComponentName } from "@/components/enumsComponentsName"
import { getColorStyle } from "@/objects"

/**
 * Box Content Component
 * @param children {React.ReactNode} Childrens
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 */
const BoxContent = ({
  children,
  backgroundColor,
  ...others
}: BoxContentProps): JSX.Element => {
  const styles = StyleSheet.create({
    boxContent: {
      padding: 16,
      justifyContent: "center",
      backgroundColor: backgroundColor && getColorStyle(backgroundColor) || "transparent",
      borderRadius: 6,
    },
  })

  return (
    <View style={[styles.boxContent]} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <Text>{children}</Text>
      ) : (
        children
      )}
    </View>
  )
}

BoxContent.displayName = ComponentName.BoxContent

export default BoxContent
