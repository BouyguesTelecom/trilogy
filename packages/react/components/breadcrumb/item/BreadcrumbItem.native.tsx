import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text'
import { forwardRef, useCallback, useMemo } from 'react'
import { GestureResponderEvent, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import { BreadcrumbItemNativeRef, BreadcrumbItemProps } from '@/components/breadcrumb/item/BreadcrumbItemProps'
import { TypographyBold } from '@/interfaces/TypographyBold'
import { useThemeTextColor } from '@/hooks/useThemeTextColor'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param id {string} Custom id attribute
 * @param to {string} Url. Use React Router Link instead of a native-old <a> tag.
 * @param onClick {Function} Click Event
 * @param testId {string} Test Id for Test Integration
 */
const BreadcrumbItem = forwardRef<BreadcrumbItemNativeRef, BreadcrumbItemProps>(
  ({ children, active, to, testId, onClick, ...others }, ref): JSX.Element => {
    const textColor = useThemeTextColor()

    const { textStyle } = useMemo(
      () =>
        StyleSheet.create({
          textStyle: {
            color: textColor,
            textDecorationLine: !active ? 'underline' : 'none',
            textDecorationStyle: 'solid',
          },
        }),
      [textColor, active],
    )

    const onPress = useCallback(
      (e: GestureResponderEvent) => {
        if (to) Linking.openURL(to)
        if (onClick) onClick(e)
      },
      [to, onClick],
    )

    return (
      <TouchableOpacity ref={ref} testID={testId} onPress={onPress} {...others}>
        <Text typo={TypographyBold.TEXT_WEIGHT_MEDIUM} style={{ ...textStyle }}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  },
)

BreadcrumbItem.displayName = ComponentName.BreadcrumbItem

export default BreadcrumbItem
