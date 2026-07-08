import { getLabel } from '@/components/autocomplete/Autocomplete.helpers'
import { Text } from '@/components/text'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'

/**
 * AutoCompleteItem Component
 * @param item {string | Item} item value
 * @param testId {string} Test Id for Test Integration
 * @param onSelect {Function} Callback when selecting an item
 */
const AutoCompleteItemNative = ({ item, testId, onSelect }: AutoCompleteItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.itemList} onPress={onSelect} testID={testId}>
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
