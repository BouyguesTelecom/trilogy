import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { TrilogyColor, getColorStyle } from '@/objects'
import AutoCompleteItemNative from '@/components/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const styles = StyleSheet.create({
    list: {
      marginTop: 6,
      marginBottom: 6,
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      borderWidth: 1,
      borderRadius: 3,
      borderColor: getColorStyle(TrilogyColor.STROKE),
      width: '100%',
      maxHeight: 165,
      flexGrow: 1,
    },
  })

  return (
    <FlatList
      keyboardShouldPersistTaps='handled'
      nestedScrollEnabled
      scrollEnabled={true}
      style={styles.list}
      data={suggestions}
      renderItem={({ item }) =>
        AutoCompleteItemNative({
          item: item,
          onSelect: () => {
            handleSelectItem && handleSelectItem(item)
          },
        })
      }
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default AutoCompleteMenuNative
