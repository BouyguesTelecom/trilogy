import * as React from "react"
import { StyleSheet, View } from "react-native"
import { BoxTableContainerProps } from "./BoxTableContainerProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Box Header Component
 * @param children {React.ReactNode} Childrens
 */
const boxTableContainer = ({
  children,
  ...others
}: BoxTableContainerProps): JSX.Element => {
  const styles = StyleSheet.create({
    boxTableContainer: {},
  })

  return (
    <View style={[styles.boxTableContainer]} {...others}>
      {children}
    </View>
  )
}

boxTableContainer.displayName = ComponentName.BoxFooter

export default boxTableContainer
