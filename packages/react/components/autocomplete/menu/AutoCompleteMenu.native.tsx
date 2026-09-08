import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import AutoCompleteItemNative from '@/components/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'
import { TrilogyColor } from '@/interfaces/Color'
import { getColorStyle } from '@/helpers/color'
import { getRadiusStyle } from '@/helpers/radius'
import { Radius } from '@/interfaces/Radius'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const radiusStyle = getRadiusStyle(Radius.SMALLER)
  const colorStyle = getColorStyle(TrilogyColor.STROKE)
  const backgroundColorStyle = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        list: {
          marginTop: 6,
          marginBottom: 6,
          backgroundColor: backgroundColorStyle,
          borderWidth: 1,
          borderRadius: radiusStyle,
          borderColor: colorStyle,
          width: '100%',
          maxHeight: 165,
          flexGrow: 1,
        },
      }),
    [radiusStyle, colorStyle, backgroundColorStyle],
  )

  const renderItem = React.useCallback(
    ({ item }: { item: string }) =>
      AutoCompleteItemNative({
        item: item,
        onSelect: () => {
          handleSelectItem && handleSelectItem(item)
        },
      }),
    [handleSelectItem],
  )

  return (
    <FlatList
      keyboardShouldPersistTaps='handled'
      nestedScrollEnabled
      scrollEnabled={true}
      style={styles.list}
      data={suggestions}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default AutoCompleteMenuNative
