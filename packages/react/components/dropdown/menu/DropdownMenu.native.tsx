import * as React from "react"
import { View } from "react-native"
import { DropdownMenuProps } from "./DropdownMenuProps"
import { ComponentName } from "../../enumsComponentsName"

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return <View>{children}</View>
}

DropdownMenu.displayName = ComponentName.DropdownMenu

export default DropdownMenu
