import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon/index.native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { BreadcrumbNativeRef, BreadcrumbProps } from './BreadcrumbProps'

/**
 * Breadcrumb Native Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 */
const Breadcrumb = React.forwardRef<BreadcrumbNativeRef, BreadcrumbProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    const { containerStyle } = React.useMemo(
      () =>
        StyleSheet.create({
          containerStyle: {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        }),
      [],
    )

    return (
      <View testID={testId} style={[containerStyle]} ref={ref} {...others}>
        {Array.isArray(children)
          ? React.Children.map(children, (child, index) => (
              <>
                {React.cloneElement(child)}
                {index != children.length - 1 && <Icon size='smaller' name='tri-arrow-right' align='ALIGNED_CENTER' />}
              </>
            ))
          : children}
      </View>
    )
  },
)

Breadcrumb.displayName = ComponentName.Breadcrumb

export default Breadcrumb
