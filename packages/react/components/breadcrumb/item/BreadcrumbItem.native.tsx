import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text/index.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color/index.native'
import { TypographyBold } from '@/objects/Typography/TypographyBold/index.native'
import * as React from 'react'
import { Linking, StyleSheet, TouchableOpacity } from 'react-native'
import { BreadcrumbItemNativeRef, BreadcrumbItemProps } from './BreadcrumbItemProps'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param to {string} Url. Use  Router Link
 * @param onClick {Function} Click Event
 * @param testId {string} Test Id for Test Integration
 */
const BreadcrumbItem = React.forwardRef<BreadcrumbItemNativeRef, BreadcrumbItemProps>(
  ({ children, active, to, testId, onClick, ...others }, ref): JSX.Element => {
    const { textStyle } = StyleSheet.create({
      textStyle: {
        color: getColorStyle(TrilogyColor.FONT),
        textDecorationLine: !active ? 'underline' : 'none',
        textDecorationStyle: 'solid',
      },
    })

    return (
      <TouchableOpacity
        ref={ref}
        testID={testId}
        onPress={(e) => {
          if (to) Linking.openURL(to)
          if (onClick) onClick(e)
        }}
        {...others}
      >
        <Text typo={TypographyBold.TEXT_WEIGHT_MEDIUM} style={{ ...textStyle }}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  },
)

BreadcrumbItem.displayName = ComponentName.BreadcrumbItem

export default BreadcrumbItem
