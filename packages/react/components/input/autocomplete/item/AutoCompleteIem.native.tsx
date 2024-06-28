import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '@/components/text'
import { getLabel } from '@/components/input/autocomplete/Autocomplete.helpers'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'

const AutoCompleteItemNative = ({ item, onSelect }: AutoCompleteItemProps): JSX.Element => {
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

export default AutoCompleteItemNative
