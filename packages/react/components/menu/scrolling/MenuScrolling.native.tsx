import React from 'react'
import { View } from 'react-native'
import { ComponentName } from '../../enumsComponentsName'
import { MenuScrollingProps } from './MenuScrollingProps'

/**
 * Menu Component
 *  @param children {ReactNode} Menu Children
 */
const MenuScrolling = ({ children, ...others }: MenuScrollingProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

MenuScrolling.displayName = ComponentName.MenuScrolling

export default MenuScrolling
