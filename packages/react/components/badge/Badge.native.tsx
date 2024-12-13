import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {BadgeProps} from '@/components/badge/BadgeProps'
import {ComponentName} from '@/components/enumsComponentsName'
import {getColorStyle, TrilogyColor} from '@/objects/facets/Color'
import {Icon, IconColor, IconName, IconSize} from "@/components/icon"
import {StatusState} from "@/objects"
import {BadgePositionEnum} from "@/components/badge/BadgeEnum";

/**
 * Badge Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param id
 * @param label {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param onClick {Function} onClick Event for Badge
 * @param variant
 * @param position
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Badge = ({ children, label, onClick, testId, variant, inverted, position, status, ...others }: BadgeProps): JSX.Element => {
  const badgeColor = getColorStyle(variant || TrilogyColor.MAIN)
  const textColor = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    badge: {
      alignSelf: 'baseline',
      minWidth: 20,
      height: 20,
      backgroundColor: !inverted ? badgeColor : getColorStyle(TrilogyColor.BACKGROUND),
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: !inverted ? textColor : getColorStyle(variant || TrilogyColor.MAIN),
      fontSize: 10,
    },
    textContent: {
      fontSize: 15,
      marginRight: 5,
      marginLeft: 5,
      color: getColorStyle(TrilogyColor.MAIN),
    },
    iconStatus: {
      position: "absolute",
      zIndex: 1000,
      backgroundColor: 'white',
      width: 16,
      minHeight: 16,
      borderRadius: 15
    },
    iconStatusPositionTopLeft: {
      top: -4,
      left: -4
    },
    iconStatusPositionTopRight: {
      top: -4,
      left: 17
    },
    iconStatusPositionBottomLeft: {
      top: 17,
      left: -4
    },
    iconStatusPositionBottomRight: {
      top: 17,
      left: 17
    }
  })

  let iconName: IconName | null = null
  let iconColor: IconColor | null = null

  switch (status) {
    case StatusState.SUCCESS:
      iconName = IconName.CHECK_CIRCLE
      iconColor = IconColor.SUCCESS
      break
    case StatusState.WARNING:
      iconName = IconName.EXCLAMATION_CIRCLE
      iconColor = IconColor.WARNING
      break
    case StatusState.ERROR:
      iconName = IconName.TIMES_CIRCLE
      iconColor = IconColor.ERROR
      break
    case StatusState.INFO:
      iconName = IconName.INFOS_CIRCLE
      iconColor = IconColor.INFO
      break
    default:
      break
  }

  if (status) {
    return (
      <View {...others}>
        {iconName && iconColor && (
          <View>
            <View
              style={
              [
                styles.iconStatus,
                position === BadgePositionEnum.TOP_LEFT && styles.iconStatusPositionTopLeft ||
                position === BadgePositionEnum.TOP_RIGHT && styles.iconStatusPositionTopRight ||
                position === BadgePositionEnum.BOTTOM_LEFT && styles.iconStatusPositionBottomLeft ||
                position === BadgePositionEnum.BOTTOM_RIGHT && styles.iconStatusPositionBottomRight ||
                {}
              ]
            }>
              <Icon name={iconName} size={IconSize.SMALLER} color={iconColor} />
            </View>
            <View>
              {children}
            </View>
          </View>
        )}
      </View>
    )
  }

  return onClick ? (
    <View {...others}>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85} testID={testId}>
        <View style={styles.badge} {...others}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.badge} {...others}>
      <Text style={styles.text}>{label}</Text>
      {!label && children && (
        children
      )}
    </View>
  )
}

Badge.displayName = ComponentName.Badge

export default Badge
