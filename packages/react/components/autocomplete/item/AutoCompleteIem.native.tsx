import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { getLabel } from '@/components/autocomplete/Autocomplete.helpers'
import { AutoCompleteItemProps } from '@/components/autocomplete/item/AutoCompleteItemProps'
import { Text } from '@/components/text'

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
