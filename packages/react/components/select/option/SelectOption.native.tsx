import * as React from "react"
import { Picker } from "@react-native-picker/picker"
import { SelectOptionProps } from "./SelectOptionProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param label {string} Label value
 * @param children {React.ReactNode}
 */
const SelectOption = ({
  value,
  label,
  children,
  ...others
}: SelectOptionProps): JSX.Element => {
  return (
    <Picker.Item label={children || label} value={value || ""} {...others} />
  )
}

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
