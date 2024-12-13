import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {BadgeProps} from '@/components/badge/BadgeProps'
import {ComponentName} from '@/components/enumsComponentsName'
import {getColorStyle, TrilogyColor} from '@/objects/facets/Color'
import {Icon, IconColor, IconName, IconSize} from "@/components/icon"
import {StatusState} from "@/objects"

/**
 * Badge Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param id
 * @param label {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param onClick {Function} onClick Event for Badge
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 * @param variant
 * @param position
 * @param others
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
    iconPosition: {
      position: "absolute",
      bottom: 10,
      left: 10,
      right: 0,
      top: 0
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
      <View style={styles.badge} {...others}>
        {iconName && iconColor && (
          <View style={styles.iconPosition}>
            <Icon name={iconName} size={IconSize.SMALLER} color={iconColor} />
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
