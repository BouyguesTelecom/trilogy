import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FabProps } from './FabProps'
import { Alignable, getColorStyle, TrilogyColor } from '../../objects'
import { Icon, IconColor, IconName, IconSize } from '../icon'
import { ComponentName } from '../enumsComponentsName'

/**
 * Fab Native Component
 * @param children {string} label fab button
 * @param extended {boolean} extend fab button
 * @param iconName {IconName | IconNameValues} name of icon
 * @param accessibilityLabel {string} Accessibility label
 * @param onClick {ClickEvent} onClick Event
 * @param top {number} position top
 * @param left {number} position left
 * @param bottom {number} position bottom
 * @param right {number} position right
 */
const Fab = ({
  children,
  accessibilityLabel,
  iconName,
  extended,
  onClick,
  top,
  bottom,
  left,
  right,
}: FabProps): JSX.Element => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: getColorStyle(TrilogyColor.SECONDARY),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      minHeight: 56,
      height: 'auto',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 3,
      position: top || bottom || left || right ? 'absolute' : 'relative',
      top: top ? top : 'auto',
      right: right ? right : 'auto',
      left: left ? left : 'auto',
      bottom: bottom ? bottom : 'auto',
      width: extended ? 'auto' : 60,
      flexDirection: 'row',
      zIndex: 999,
    },
    label: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
      marginLeft: 10,
      marginRight: 16,
    },
    icon: {
      marginLeft: extended ? 16 : 0,
      marginRight: extended ? 8 : 0,
    },
    extended: {
      height: 56,
    },
  })

  return (
    <TouchableOpacity
      style={[styles.button, extended && styles.extended]}
      accessibilityLabel={accessibilityLabel}
      onPress={(e?: unknown) => onClick?.(e)}
    >
      {extended ? (
        <>
          <Icon
            style={styles.icon}
            name={iconName as IconName}
            color={IconColor.WHITE}
            size={IconSize.MEDIUM}
            align={Alignable.ALIGNED_CENTER}
          />
          <Text style={styles.label}>{children}</Text>
        </>
      ) : (
        <Icon
          style={styles.icon}
          name={iconName as IconName}
          color={IconColor.WHITE}
          size={IconSize.MEDIUM}
          align={Alignable.ALIGNED_CENTER}
        />
      )}
    </TouchableOpacity>
  )
}

Fab.displayName = ComponentName.Fab

export default Fab
