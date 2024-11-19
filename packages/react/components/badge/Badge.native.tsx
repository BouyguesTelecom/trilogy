import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { BadgeProps } from './BadgeProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Badge Native Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param onClick {Function} onClick Event for Badge
 * @param testId {string} Test Id for Test Integration
 */
const Badge = ({ label, onClick, testId, variant, ...others }: BadgeProps): JSX.Element => {
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
      backgroundColor: badgeColor,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: textColor,
      fontSize: 10,
    },
    textContent: {
      fontSize: 15,
      marginRight: 5,
      marginLeft: 5,
      color: getColorStyle(TrilogyColor.MAIN),
    },
  })

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85} testID={testId}>
        <View style={styles.badge} {...others}>
          {label}
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.badge} {...others}>
      {label}
    </View>
  )
}

Badge.displayName = ComponentName.Badge

export default Badge
