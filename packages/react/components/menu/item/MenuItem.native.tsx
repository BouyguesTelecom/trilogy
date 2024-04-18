import React, { ReactNode } from 'react'
import { MenuItemNativeProps } from './MenuItemProps'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ComponentName } from '../../enumsComponentsName'
import { Text } from '../../text'
import { Icon } from '../../icon'
import { TrilogyColor, TypographyColor, getColorStyle } from '../../../objects'
import { Badge } from '../../badge'

/**
 * Menu Item Component
 *  @param children {ReactNode} Menu Item Children
 */
const MenuItem = ({
                    active,
                    children,
                    arrow,
                    badge,
                    icon,
                    onClick,
                    testId,
                    ...others
                  }: MenuItemNativeProps): JSX.Element => {
  const menuWidth = '100%'

  const styles = StyleSheet.create({
    menuItem: {
      width: menuWidth,
      paddingVertical: 8,
      borderBottomColor: '#fbfbfb',
      borderBottomWidth: 1,
      backgroundColor: getColorStyle(active ? TrilogyColor.GREY_LIGHT : TrilogyColor.WHITE),
      borderLeftWidth: active ? 4 : 0,
      borderLeftColor: active ? getColorStyle(TrilogyColor.MAIN) : undefined,
      paddingLeft: active ? 8 : 0,
      color: active ? getColorStyle(TrilogyColor.MAIN) : undefined,
    },
    wrapper: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
  })

  const Tag = ({ children }: { children: ReactNode }) => {
    if (onClick) {
      return (
        <TouchableOpacity
          testID={testId}
          onPress={(e?: unknown) => onClick?.(e)}
          activeOpacity={0.85}
          style={styles.menuItem}
          {...others}
        >
          {children}
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.menuItem} {...others} testID={testId}>
          {children}
        </View>
      )
    }
  }

  return (
    <Tag>
      {icon && <Icon name={icon} size='smaller'/>}
      <View style={styles.wrapper}>
        {children && typeof children.valueOf() === 'string' ? (
          <Text typo={active ? [TypographyColor.TEXT_SECONDARY] : undefined}>{String(children)}</Text>
        ) : (
          <View>{children}</View>
        )}
        {arrow && <Icon name='tri-arrow-right'/>}
      </View>
      {badge && <Badge content={badge}/>}
    </Tag>
  )
}

MenuItem.displayName = ComponentName.MenuItem

export default MenuItem
