import React from 'react'
import { MenuProps } from './MenuProps'
import { StyleSheet, View } from 'react-native'
import { getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { ComponentName } from '../enumsComponentsName'

/**
 * Menu Component
 *  @param children {ReactNode} Menu Children
 */
const Menu = ({ children, shadowLess, ...others }: MenuProps): JSX.Element => {
  const menuWidth = '100%'
  const styles = StyleSheet.create({
    menu: {
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      width: menuWidth,
      minHeight: 100,
      padding: 24,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      shadowColor: shadowLess ? undefined : '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: shadowLess ? 0 : 0.3,
      shadowRadius: shadowLess ? 0 : 3,
      elevation: shadowLess ? 0 : 10,
    },
  })
  return (
    <View style={styles.menu} {...others}>
      {children}
    </View>
  )
}

Menu.displayName = ComponentName.Menu

export default Menu
