import { ComponentName } from '@/components/enumsComponentsName'
import { ListNativeRef, ListProps } from '@/components/list/ListProps'
import { ListContext } from '@/components/list/context'
import { forwardRef, useState } from 'react'
import { memoStyles } from '@/helpers/memoStyles'
import { getSpacingStyle } from '@/objects/facets/Spacing'
import { View } from 'react-native'

/**
 * List Component
 * @param children {ReactNode} List items (ListItem components)
 * @param divider {boolean} Add a divider between list items
 * @param ordered {boolean} Display as an ordered list (ol) instead of unordered (ul)
 * @param gap {Spacing} Space between items
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const List = forwardRef<ListNativeRef, ListProps>(
  ({ children, ordered = false, divider = false, gap, testId, ...others }, ref): JSX.Element => {
    const [chilIndexes, setChildIndexes] = useState<string[]>([])

    const styles = memoStyles({
      list: {
        gap: gap ? getSpacingStyle(gap) : undefined,
      },
    })

    return (
      <ListContext.Provider value={{ ordered, divider, chilIndexes, setChildIndexes }}>
        <View ref={ref} testID={testId} style={styles.list} {...others}>
          {children}
        </View>
      </ListContext.Provider>
    )
  },
)

List.displayName = ComponentName.List

export default List
