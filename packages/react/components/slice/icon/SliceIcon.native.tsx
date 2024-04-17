import * as React from "react"
import { StyleSheet, View } from "react-native"
import { SliceIconProps } from "./SliceIconProps"
import { Icon } from "../../icon"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice Icon Component
 * @param iconSize {IconSize} Size for icon
 * @param iconName {IconName} Name for icon
 * @param iconColor {IconColor} Custom color for icon
 * @param children {ReactNode}
 */
const SliceIcon = ({
  iconSize,
  iconName,
  iconColor,
  ...others
}: SliceIconProps): JSX.Element => {
  const styles = StyleSheet.create({
    sliceIcon: {
      margin: 15,
    },
  })

  return (
    <View style={styles.sliceIcon} {...others}>
      <Icon
        name={iconName}
        {...(iconColor && { color: iconColor })}
        {...(iconSize && { size: iconSize })}
      />
    </View>
  )
}

SliceIcon.displayName = ComponentName.SliceIcon

export default SliceIcon
