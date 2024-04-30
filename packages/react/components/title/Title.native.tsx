import * as React from "react"
import { Platform, StyleSheet, Text, TouchableOpacity, View, } from "react-native"
import ContentLoader, { Rect } from "react-content-loader/native"
import { setTypographyAlign, setTypographyColor } from "../../objects"
import { TitleProps } from "./TitleProps"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { ComponentName } from "../enumsComponentsName"

/**
 * Title Native Component
 * @param children {ReactNode} Text child
 * @param level {TextLevels|number} Title size : 1-4
 * @param inverted {Boolean} Title white color
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param style {Object} Additional styles
 * @param skeleton {Boolean} Title Skeleton
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */

const Title = ({
  children,
  level,
  style,
  inverted,
  typo,
  onClick,
  skeleton,
  testId,
  accessibilityLabel,
  subtitle,
  overline,
  ...others
}: TitleProps): JSX.Element => {
  const titlesLevels = () => {
    switch (level) {
      case "ONE":
        return 32
      case "TWO":
        return 28
      case "THREE":
        return 22
      case "FOUR":
        return 20
      case "FIVE":
        return 18
      case "SIX":
        return 16
      default:
        return 16
    }
  }

  const getAlignSelf = () => {
    switch (true) {
      case setTypographyAlign(typo) === "left":
        return "flex-start"
      case setTypographyAlign(typo) === "center":
        return "center"
      case setTypographyAlign(typo) === "right":
        return "flex-end"
      default:
        return "flex-start"
    }
  }
  const getFontFamily = () => {
    if (level && ["ONE", "TWO"].includes(level)) return "poppins-bold"
    return "poppins-semibold"
  }

  const styles = StyleSheet.create({
    text: {
      fontFamily: getFontFamily(),
      fontSize: titlesLevels(),
      color:
        ((overline || subtitle) &&
          !level &&
          getColorStyle(TrilogyColor.MAIN, 0)) ||
        (!skeleton && setTypographyColor(typo, inverted)) ||
        "transparent",
      textAlign: setTypographyAlign(typo),
      textTransform: overline && !level ? "uppercase" : undefined,
      alignSelf: getAlignSelf(),
    },
    skeleton: {
      minWidth: 10,
      alignSelf: getAlignSelf(),
      borderRadius: 5,
      borderWidth: 0.1,
      borderColor: getColorStyle(TrilogyColor.NEUTRAL_LIGHT, 0),
      overflow: "hidden",
      height: titlesLevels(),
    },
  })
  const titleTestId = testId
    ? testId
    : typeof children === "string"
    ? children
    : "NotSpecified"
  const titleAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : typeof children === "string"
    ? children
    : undefined

  let titleView = (
    <Text
      maxFontSizeMultiplier={1.3}
      accessible={!!titleAccessibilityLabel}
      accessibilityLabel={titleAccessibilityLabel}
      testID={titleTestId}
      style={[styles.text, style]}
      {...others}
    >
      {children}
    </Text>
  )

  if (skeleton) {
    titleView = (
      <ContentLoader style={styles.skeleton}>
        {titleView}
        {Platform.OS === "android" && (
          <View>
            <Rect rx='15' ry='15' width='100%' height='100%' />
          </View>
        )}
      </ContentLoader>
    )
  }

  return onClick ? (
    <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
      {titleView}
    </TouchableOpacity>
  ) : (
    titleView
  )
}

Title.displayName = ComponentName.Title

export default Title
