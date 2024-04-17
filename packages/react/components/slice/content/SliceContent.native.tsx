import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SliceContentProps } from "./SliceContentProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice Content Component
 * @param children {ReactNode} Children for Slice Content
 */
const SliceContent = ({
  children,
  ...others
}: SliceContentProps): JSX.Element => {
  const styles = StyleSheet.create({
    sliceContent: {
      marginLeft: 10,
      marginRight: 30,
    },
  })

  return (
    <View style={styles.sliceContent} {...others}>
      {children}
    </View>
  )
}

SliceContent.displayName = ComponentName.SliceContent

export default SliceContent
