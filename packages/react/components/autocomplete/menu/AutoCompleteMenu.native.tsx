import { useMemo, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import AutoCompleteItemNative from '@/components/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'
import { useTheme } from '@/hooks/useTheme'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const { radius, colors } = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        list: {
          marginTop: 6,
          marginBottom: 6,
          backgroundColor: colors.bgPrimary,
          borderWidth: 1,
          borderRadius: radius.radiusXs,
          borderColor: colors.border,
          width: '100%',
          maxHeight: 165,
          flexGrow: 1,
        },
      }),
    [radius.radiusXs, colors.bgPrimary, colors.border],
  )

  const renderItem = useCallback(
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
