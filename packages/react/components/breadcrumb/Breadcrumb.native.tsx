import React from 'react'
import { BreadcrumbProps } from './BreadcrumbProps'
import { ComponentName } from '../enumsComponentsName'
import { StyleSheet, View } from 'react-native'
import { Icon } from '../icon'

/**
 * Breadcrumb Native Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 */
const Breadcrumb = ({ children, testId, ...others }: BreadcrumbProps): JSX.Element => {
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
    <View testID={testId} style={[containerStyle]} {...others}>
      {Array.isArray(children)
        ? React.Children.map(children, (child, index) => (
            <>
              {React.cloneElement(child)}
              {index != children.length - 1 && (
                <Icon size='smaller' name='tri-arrow-right' align='ALIGNED_CENTER' style={{ marginHorizontal: 5 }} />
              )}
            </>
          ))
        : children}
    </View>
  )
}

Breadcrumb.displayName = ComponentName.Breadcrumb

export default Breadcrumb
