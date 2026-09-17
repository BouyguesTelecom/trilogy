import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { BoxItemNativeRef, BoxItemProps } from '@/components/box/item/BoxItemProps'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxItem = forwardRef<BoxItemNativeRef, BoxItemProps>(
  ({ children, size, testId, ...others }, ref): JSX.Element => {
    const heightStyle = { height: Number(size) || 48 }
    return (
      <View ref={ref} style={[styles.boxItem, heightStyle]} testID={testId} {...others}>
        {children}
      </View>
    )
  },
)

BoxItem.displayName = ComponentName.BoxItem
export default BoxItem

const styles = StyleSheet.create({
  boxItem: {
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
})
