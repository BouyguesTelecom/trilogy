import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { BoxTableContainerNativeRef, BoxTableContainerProps } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * @param testId {string} Test Id for Test Integration
 */
const boxTableContainer = React.forwardRef<BoxTableContainerNativeRef, BoxTableContainerProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    const styles = memoStyles({
      boxTableContainer: {},
    })

    return (
      <View ref={ref} style={[styles.boxTableContainer]} {...others} testID={testId}>
        {children}
      </View>
    )
  },
)

boxTableContainer.displayName = ComponentName.BoxTableContainer

export default boxTableContainer
