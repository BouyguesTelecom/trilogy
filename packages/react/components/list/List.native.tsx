import React from 'react'
import { View } from '../view'
import { ListProps } from './ListProps'
import { ComponentName } from '../enumsComponentsName'

const List = ({ children, ...others }: ListProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

List.displayName = ComponentName.List

export default List
