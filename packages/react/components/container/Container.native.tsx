import * as React from "react"
import { StyleSheet, View } from "react-native"
import { ContainerProps } from "./ContainerProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Container Native Component
 * @param autolayout {boolean} Apply auto-layout rules
 * @param children {React.ReactNode
 */

const Container = ({
  children,
  ...others
}: ContainerProps): JSX.Element => {

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "stretch",
      justifyContent: "flex-start",
      flex: 0,
    },
  })

  return (
    <View
      style={
        styles.container
      }
      {...others}
    >
      {children}
    </View>
  )
}

Container.displayName = ComponentName.Container

export default Container
