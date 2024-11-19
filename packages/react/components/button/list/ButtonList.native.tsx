import React from 'react'
import type { View as ViewType } from 'react-native'

import type { ButtonListProps } from '@/components/button/list/ButtonListProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { View } from '@/components/view'

/**
 * ButtonList Native Component
 * @param children {ReactNode} ButtonList children
 */
const ButtonList = ({ children }: ButtonListProps, ref: React.Ref<ViewType>): JSX.Element => {
  return <View ref={ref} {...{ children }} />
}

ButtonList.displayName = ComponentName.ButtonList

export default React.forwardRef(ButtonList)
