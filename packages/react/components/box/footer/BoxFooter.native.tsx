import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { getColorStyle } from "../../../objects"
import { BoxFooterProps } from "./BoxFooterProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Box Content Component
 * @param children {React.ReactNode} Childrens
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 */
const BoxFooter = ({
  children,
  backgroundColor,
  ...others
}: BoxFooterProps): JSX.Element => {
  const boxRadius = 6

  const styles = StyleSheet.create({
    boxFooter: {
      padding: 12,
      justifyContent: "center",
      backgroundColor: backgroundColor
        ? getColorStyle(backgroundColor)
        : "transparent",
      borderBottomLeftRadius: boxRadius,
      borderBottomRightRadius: boxRadius,
    },
  })

  return (
    <View style={[styles.boxFooter]} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <Text>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
}

BoxFooter.displayName = ComponentName.BoxFooter

export default BoxFooter
