import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { forwardRef, Children, cloneElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { BreadcrumbNativeRef, BreadcrumbProps } from '@/components/breadcrumb/BreadcrumbProps'

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * @param id {string} Custom id attribute
 */
const Breadcrumb = forwardRef<BreadcrumbNativeRef, BreadcrumbProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    return (
      <View testID={testId} style={[styles.containerStyle]} ref={ref} {...others}>
        {Array.isArray(children)
          ? Children.map(children, (child, index) => (
              <>
                {cloneElement(child)}
                {index != children.length - 1 && <Icon size='smaller' name='tri-arrow-right' align='ALIGNED_CENTER' />}
              </>
            ))
          : children}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

Breadcrumb.displayName = ComponentName.Breadcrumb
export default Breadcrumb
