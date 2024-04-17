import React from 'react'
import {ComponentName} from '../../enumsComponentsName'
import {BreadcrumbItemProps} from './BreadcrumbItemProps'
import {Text} from '../../text'
import {Linking, StyleSheet, TouchableOpacity} from 'react-native'
import {getColorStyle, TrilogyColor} from '../../../objects'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param to {string} Url. Use  Router Link
 * @param onClick {Function} Click Event
 */
const BreadcrumbItem = ({children, active, to, testId, onClick, ...others}: BreadcrumbItemProps): JSX.Element => {
  const {textStyle} = StyleSheet.create({
    textStyle: {
      color: getColorStyle(TrilogyColor.FONT),
      textDecorationLine: !active ? 'underline' : 'none',
      textDecorationStyle: 'solid',
    },
  })

  return (
    <TouchableOpacity
      testID={testId}
      onPress={(e) => {
        if (to) Linking.openURL(to)
        if (onClick) onClick(e)
      }}
      {...others}
    >
      <Text style={{...textStyle}}>{children}</Text>
    </TouchableOpacity>
  )
}

BreadcrumbItem.displayName = ComponentName.BreadcrumbItem

export default BreadcrumbItem
