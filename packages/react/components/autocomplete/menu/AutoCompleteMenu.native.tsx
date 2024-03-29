import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { getColorStyle, TrilogyColor } from '../../../objects'
import AutoCompleteItemNative from '../item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'
import { ComponentName } from '../../enumsComponentsName'

const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const styles = StyleSheet.create({
    list: {
      marginTop: 6,
      marginBottom: 6,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      borderWidth: 1,
      borderRadius: 3,
      borderColor: getColorStyle(TrilogyColor.GREY),
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

AutoCompleteMenuNative.displayName = ComponentName.AutoCompleteMenuNative

export default AutoCompleteMenuNative
