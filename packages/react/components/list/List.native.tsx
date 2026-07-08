import { ComponentName } from '@/components/enumsComponentsName'
import { ListNativeRef, ListProps } from '@/components/list/ListProps'
import { ListContext } from '@/components/list/context'
import * as React from 'react'
import { View } from 'react-native'

/**
 * List Component
 * @param children {React.ReactNode} List items (ListItem components)
 * @param divider {boolean} Add a divider between list items
 * @param ordered {boolean} Display as an ordered list (ol) instead of unordered (ul)
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const List = React.forwardRef<ListNativeRef, ListProps>(({ children, ordered = false, divider = false, testId, ...others }, ref): JSX.Element => {
  const [chilIndexes, setChildIndexes] = React.useState<string[]>([])

  return (
    <ListContext.Provider value={{ ordered, divider, chilIndexes, setChildIndexes }}>
      <View ref={ref} testID={testId} {...others}>
        {children}
      </View>
    </ListContext.Provider>
  )
})

List.displayName = ComponentName.List

export default List

