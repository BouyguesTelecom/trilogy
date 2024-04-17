import * as React from "react"
import { SliceBodyProps } from "./SliceBodyProps"
import { View } from "react-native"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice
 */
const SliceBody = ({ children }: SliceBodyProps): JSX.Element => {
  return <View>{children}</View>
}

SliceBody.displayName = ComponentName.SliceBody

export default SliceBody
