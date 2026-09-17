import { useCallback, useMemo } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import AutoCompleteItemNative from '@/components/autocomplete/item/AutoCompleteIem.native'
import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'
import { useTheme } from '@/hooks/useTheme'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenuNative = ({ suggestions, handleSelectItem }: AutoCompleteMenuProps): JSX.Element => {
  const { mode, theme } = useTheme()
  const colorStyle = mode === 'dark' ? darkStyles : lightStyles

  const contextStyles = useMemo(() => {
    if (!theme) return
    return {
      borderRadius: theme.radius.radiusXs,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.bgPrimary,
    }
  }, [theme])

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

  const keyExtractor = useCallback((item: string, index: number) => String(index), [])

  return (
    <FlatList
      keyboardShouldPersistTaps='handled'
      nestedScrollEnabled
      scrollEnabled={true}
      style={[styles.list, colorStyle.list, shapeStyles.list, contextStyles]}
      data={suggestions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export default AutoCompleteMenuNative

const styles = StyleSheet.create({
  list: {
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    width: '100%',
    maxHeight: 165,
    flexGrow: 1,
  },
})

const lightStyles = StyleSheet.create({
  list: {
    backgroundColor: THEME_TRILOGY.colors.light.bgPrimary,
    borderColor: THEME_TRILOGY.colors.light.border,
  },
})

const darkStyles = StyleSheet.create({
  list: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgPrimary,
    borderColor: THEME_TRILOGY.colors.dark.border,
  },
})

const shapeStyles = StyleSheet.create({
  list: {
    borderRadius: THEME_TRILOGY.radius.radiusXs,
  },
})
