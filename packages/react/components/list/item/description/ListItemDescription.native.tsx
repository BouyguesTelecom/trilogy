import React from 'react'
import { Text } from '../../../text'
import { View } from '../../../view'
import { ListItemDescriptionProps } from './ListItemDescriptionProps'
import { ComponentName } from '../../../enumsComponentsName'

const ListItemDescription = ({ children }: ListItemDescriptionProps): JSX.Element => {
  if (['string', 'number'].includes(typeof children)) {
    return <Text>{children}</Text>
  }

  return <View>{children}</View>
}

ListItemDescription.displayName = ComponentName.ListItemDescription

export default ListItemDescription
