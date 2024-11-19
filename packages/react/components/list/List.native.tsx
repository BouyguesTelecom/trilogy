import React from 'react'
import type { View as ViewType } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { ListProps } from '@/components/list/ListProps'
import { View } from '@/components/view'

/**
 * List Component
 * @param children {React.ReactNode}
 */
const List = ({ children, ...others }: ListProps, ref: React.Ref<ViewType>): JSX.Element => {
  return (
    <View ref={ref} {...others}>
      {children}
    </View>
  )
}

List.displayName = ComponentName.List

export default React.forwardRef(List)
