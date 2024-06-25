import * as React from "react"
import { View } from "react-native"
import { ComponentName } from "@/components/enumsComponentsName"

const DropdownDivider = () => {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }} />
}

DropdownDivider.displayName = ComponentName.DropdownDivider

export default DropdownDivider
