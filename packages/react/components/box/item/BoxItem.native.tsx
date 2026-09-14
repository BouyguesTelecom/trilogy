import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef, useMemo } from 'react'
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
    const height = useMemo(() => Number(size) || 48, [size])
    const styles = useMemo(
      () =>
        StyleSheet.create({
          boxItem: {
            height: height,
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            flex: 1,
          },
        }),
      [height],
    )

    return (
      <View ref={ref} style={[styles.boxItem]} testID={testId} {...others}>
        {children}
      </View>
    )
  },
)

BoxItem.displayName = ComponentName.BoxItem

export default BoxItem
