import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text/index.native'
import { View } from '@/components/view/index.native'
import * as React from 'react'
import { ListItemDescriptionNativeRef, ListItemDescriptionProps } from './ListItemDescriptionProps'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 */
const ListItemDescription = React.forwardRef<ListItemDescriptionNativeRef, ListItemDescriptionProps>(
  ({ children }, ref): JSX.Element => {
    if (['string', 'number'].includes(typeof children)) {
      return <Text>{children}</Text>
    }

    return <View ref={ref}>{children}</View>
  },
)

ListItemDescription.displayName = ComponentName.ListItemDescription

export default ListItemDescription
