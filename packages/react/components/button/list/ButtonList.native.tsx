import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { View } from 'react-native'
import type { ButtonListNativeRef, ButtonListProps } from './ButtonListProps'

/**
 * ButtonList Native Component
 * @param children {ReactNode} ButtonList children
 */
const ButtonList = React.forwardRef<ButtonListNativeRef, ButtonListProps>(({ children }, ref): JSX.Element => {
  return <View ref={ref} {...{ children }} />
})

ButtonList.displayName = ComponentName.ButtonList

export default ButtonList
