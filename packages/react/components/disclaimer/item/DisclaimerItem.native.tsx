import * as React from "react"
import { DisclaimerItemProps } from "./DisclaimerItemProps"
import { ComponentName } from "../../enumsComponentsName"
import { Text } from "../../text"
import { View } from "../../view"

/**
 * Disclaimer component
 * @param children {React.ReactNode|string} Disclaimer Item Children
 * @param className {string} Additionnal css classes
 * @param title {string} Disclaimer Title
 * @param active {boolean} Active Disclaimer Bar
 */
const DisclaimerItem = ({ children }: DisclaimerItemProps): JSX.Element => {
  if (children && typeof children.valueOf() === "string")
    return <Text>{children}</Text>
  return <View>{children}</View>
}

DisclaimerItem.displayName = ComponentName.DisclaimerItem

export default DisclaimerItem
