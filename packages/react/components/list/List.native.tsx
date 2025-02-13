import { ComponentName } from '@/components/enumsComponentsName'
import { ListProps } from '@/components/list/ListProps'
import { ListContext } from '@/components/list/context'
import * as React from 'react'
import { View } from 'react-native'

/**
 * List Component
 * @param children {React.ReactNode}
 * @param ordered {boolean} Display ordered list
 */
const List = ({ children, ordered = false, divider = false, testId, id, ...others }: ListProps): JSX.Element => {
  const [chilIndexes, setChildIndexes] = React.useState<string[]>([])

  return (
    <ListContext.Provider value={{ ordered, divider, chilIndexes, setChildIndexes }}>
      <View testID={testId} {...others}>
        {children}
      </View>
    </ListContext.Provider>
  )
}

List.displayName = ComponentName.List

export default List
