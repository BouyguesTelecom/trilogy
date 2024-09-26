import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { TrilogyColor, getColorStyle } from '@/objects'
import AutoCompleteItemNative from '@/components/input/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'

const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const styles = StyleSheet.create({
    list: {
      marginTop: 6,
      marginBottom: 6,
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      borderWidth: 1,
      borderRadius: 3,
      borderColor: getColorStyle(TrilogyColor.MAIN_FADE),
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
