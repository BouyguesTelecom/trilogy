import { getLabel } from '@/components/autocomplete/Autocomplete.helpers'
import { Text } from '@/components/text/index.native'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
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
