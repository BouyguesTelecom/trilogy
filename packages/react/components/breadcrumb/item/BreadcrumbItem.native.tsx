import React from 'react'
import { Linking, StyleSheet, TouchableOpacity } from 'react-native'

import { BreadcrumbItemProps } from '@/components/breadcrumb/item/BreadcrumbItemProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyBold } from '@/objects/Typography/TypographyBold'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param to {string} Url. Use  Router Link
 * @param onClick {Function} Click Event
 * @param testId {string} Test Id for Test Integration
 */
const BreadcrumbItem = (
  { children, active, to, testId, onClick, ...others }: BreadcrumbItemProps,
  ref: React.Ref<TouchableOpacity>,
): JSX.Element => {
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
}

BreadcrumbItem.displayName = ComponentName.BreadcrumbItem

export default React.forwardRef(BreadcrumbItem)
