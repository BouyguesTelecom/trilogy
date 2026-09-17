import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import {
  BoxTableContainerNativeRef,
  BoxTableContainerProps,
} from '@/components/box/table-container/BoxTableContainerProps'
import { View } from 'react-native'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * @param testId {string} Test Id for Test Integration
 */
const boxTableContainer = React.forwardRef<BoxTableContainerNativeRef, BoxTableContainerProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    return (
      <View ref={ref} {...others} testID={testId}>
        {children}
      </View>
    )
  },
)

boxTableContainer.displayName = ComponentName.BoxTableContainer

export default boxTableContainer
