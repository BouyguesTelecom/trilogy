import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { View } from 'react-native'
import type { ButtonListNativeRef, ButtonListProps } from './ButtonListProps'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const ButtonList = React.forwardRef<ButtonListNativeRef, ButtonListProps>(({ children, testId }, ref): JSX.Element => {
  return <View ref={ref} testID={testId} {...{ children }} />
})

ButtonList.displayName = ComponentName.ButtonList

export default ButtonList
