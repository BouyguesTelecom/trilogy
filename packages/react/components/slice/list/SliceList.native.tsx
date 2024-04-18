import * as React from "react"
import { SliceListProps } from "./SliceListProps"
import { View } from "react-native"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice List Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for SliceList (Slice)
 */
const SliceList = ({ children }: SliceListProps): JSX.Element => {
  return <View>{children}</View>
}

SliceList.displayName = ComponentName.SliceList

export default SliceList
