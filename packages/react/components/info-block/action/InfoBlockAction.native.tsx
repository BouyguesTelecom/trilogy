import * as React from "react"
import { StyleSheet, View } from "react-native"
import { InfoBlockActionProps } from "./InfoBlockActionProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Info Block Action
 * @param children {string} Button text content
 */
const InfoBlockAction = ({
  children,
  ...others
}: InfoBlockActionProps): JSX.Element => {
  const styles = StyleSheet.create({
    action: {
      width: "50%",
      alignSelf: "center",
      paddingTop: 5,
    },
  })

  return (
    <View style={styles.action} {...others}>
      {children}
    </View>
  )
}

InfoBlockAction.displayName = ComponentName.InfoBlockAction

export default InfoBlockAction
