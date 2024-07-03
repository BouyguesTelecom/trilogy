import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { BadgeProps } from "./BadgeProps"
import { BadgeColor, BadgeTextDirection } from "./BadgeEnum"
import { getColorStyle, TrilogyColor, TrilogyColorValues, } from "@/objects/facets/Color"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Badge Native Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param textContent {string} Content text for badge with text, if textContent props, it will display badge with text
 * @param content content {string|number} Badge content text
 * @param direction {BadgeTextDirection} Text direction for Badge (LEFT|RIGHT)
 * @param onClick {Function} onClick Event for Badge
 * @param color {BadgeColor} Change color for Badge
 */
const Badge = ({
  children,
  textContent,
  content,
  direction,
  color,
  onClick,
  ...others
}: BadgeProps): JSX.Element => {
  const badgeColor = color
    ? getColorStyle(color as TrilogyColor | TrilogyColorValues)
    : getColorStyle(BadgeColor.MAIN)
  const textColor = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    badge: {
      alignSelf: "baseline",
      minWidth: 20,
      height: 20,
      backgroundColor: badgeColor,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
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

  let badgeView: JSX.Element

  if (textContent) {
    badgeView = (
      <View style={styles.container}>
        {!direction && <Text style={styles.textContent}>{textContent}</Text>}
        {direction && direction === BadgeTextDirection.LEFT && (
          <Text style={styles.textContent}>{textContent}</Text>
        )}
        <View style={styles.badge}>
          <Text style={styles.text}>{content}</Text>
        </View>
        {direction && direction === BadgeTextDirection.RIGHT && (
          <Text style={styles.textContent}>{textContent}</Text>
        )}
      </View>
    )
  } else {
    badgeView = (
      <View>
        {content ? (
          <View style={styles.badge} {...others}>
            <Text style={styles.text}>{content}</Text>
          </View>
        ) : (
          <View style={styles.badge} {...others}>
            {children}
          </View>
        )}
      </View>
    )
  }

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {badgeView}
      </TouchableOpacity>
    </View>
  ) : (
    badgeView
  )
}

Badge.displayName = ComponentName.Badge

export default Badge
