import { StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "../../text"
import * as React from "react"
import { AutoCompleteItemProps } from "./AutoCompleteItemProps"
import { getLabel } from "../Autocomplete.helpers"
import { ComponentName } from "../../enumsComponentsName"

const AutoCompleteItemNative = ({
  item,
  onSelect,
}: AutoCompleteItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.itemList} onPress={onSelect}>
      <Text>{getLabel(item)}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  itemList: {
    padding: 10,
  },
})

AutoCompleteItemNative.dispayName = ComponentName.AutoCompleteItemNative

export default AutoCompleteItemNative
