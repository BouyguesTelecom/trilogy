import React from 'react'
import type { View as ViewType } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { ListItemDescriptionProps } from '@/components/list/item/description/ListItemDescriptionProps'
import { Text } from '@/components/text'
import { View } from '@/components/view'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 */
const ListItemDescription = ({ children }: ListItemDescriptionProps, ref: React.Ref<ViewType>): JSX.Element => {
  if (['string', 'number'].includes(typeof children)) {
    return <Text ref={ref}>{children}</Text>
  }

  return <View ref={ref}>{children}</View>
}

ListItemDescription.displayName = ComponentName.ListItemDescription

export default ListItemDescription
