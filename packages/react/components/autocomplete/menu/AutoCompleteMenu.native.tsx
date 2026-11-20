import { FlatList } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'
import AutoCompleteItemNative from '@/components/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'
import { Theme } from '@/constants/theme'
import { useCallback } from 'react'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
  const borderColor = getColorStyle(TrilogyColor.STROKE)

  const renderItem = useCallback(
    ({ item }: { item: string }) => {
      return (
        <AutoCompleteItemNative
          item={item}
          onSelect={() => {
            handleSelectItem && handleSelectItem(item)
          }}
        />
      )
    },
    [handleSelectItem],
  )

  const keyExtractor = useCallback((item: string, index: number) => String(index), [])

  const styles = memoStyles({
    list: {
      marginTop: 6,
      marginBottom: 6,
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderRadius: Theme.radius.md,
      borderColor: borderColor,
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
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export default AutoCompleteMenuNative
