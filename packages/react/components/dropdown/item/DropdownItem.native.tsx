import * as React from "react"
import { TouchableOpacity, Text } from "react-native"
import { DropdownItemProps } from "./DropdownItemProps"
import { ComponentName } from "@/components/enumsComponentsName"

const DropdownItem = ({ label }: DropdownItemProps) => {
  return (
    <TouchableOpacity>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

DropdownItem.displayName = ComponentName.DropdownItem

export default DropdownItem
