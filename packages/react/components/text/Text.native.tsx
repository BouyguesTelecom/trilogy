import React, { useContext } from "react"
import { Platform, StyleSheet, Text as TextNative, View } from "react-native"
import { TextProps } from "./TextProps"
import { getTypographyBoldStyle, setTypographyAlign, setTypographyColor, } from "@/objects/Typography"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { TextLevels, TextLevelValues } from "./TextEnum"
import ContentLoader, { Rect } from "react-content-loader/native"
import { ComponentName } from "@/components/enumsComponentsName"
import { StatesContext } from "@/context/providerStates"

/**
 * Text Native Component
 * @param children {string} Text child
 * @param level {TextLevels|number} Title size : 1-4
 * @param inverted {Boolean} Text white color
 * @param onClick {Function} onClick Event
 * @param style {Object} Additional style
 * @param typo {string} Text typo
 * @param skeleton {Boolean} Text Skeleton
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param link {boolean} Add link variant for inline link into Text
 * @param numberOfLines {number} Ellipsis after limit number of lines
 * @param others
 */
const Text = ({
  children,
  level,
  style,
  inverted,
  typo,
  onClick,
  skeleton,
  testId,
  accessibilityLabel,
  link,
  numberOfLines = 0,
  ...others
}: TextProps): JSX.Element => {
  const statesContext = useContext(StatesContext)
  const textLevels = (level: TextLevels | TextLevelValues) => {
    return (
      (level && level == "ONE" && 16) ||
      (level && level == "TWO" && 14) ||
      (level && level == "THREE" && 12) ||
      (level && level == "FOUR" && 10) ||
      14
    )
  }

  const styles = StyleSheet.create({
    text: {
      fontFamily: getTypographyBoldStyle(typo, level),
      fontSize: textLevels(level as TextLevels | TextLevelValues),
      color:
        (!skeleton &&
          setTypographyColor(typo, inverted || statesContext.inverted)) ||
        (link && getColorStyle(TrilogyColor.FONT)) ||
        "transparent",
      textAlign: setTypographyAlign(typo),
      lineHeight: textLevels(level as TextLevels | TextLevelValues) * 1.2,
      textDecorationLine: link ? "underline" : "none",
      alignSelf:
        (setTypographyAlign(typo) === "left" && "flex-start") ||
        (setTypographyAlign(typo) === "center" && "center") ||
        (setTypographyAlign(typo) === "right" && "flex-end") ||
        "flex-start",
    },
    skeleton: {
      minWidth: 10,
      alignSelf:
        (setTypographyAlign(typo) === "left" && "flex-start") ||
        (setTypographyAlign(typo) === "center" && "center") ||
        (setTypographyAlign(typo) === "right" && "flex-end") ||
        "flex-start",

      borderRadius:
        (level && level == "ONE" && 7) ||
        (level && level == "TWO" && 7) ||
        (level && level == "THREE" && 5) ||
        3,
      borderWidth: 0.1,
      borderColor: getColorStyle(TrilogyColor.NEUTRAL_LIGHT),
      overflow: "hidden",
      height: textLevels(level as TextLevels | TextLevelValues),
    },
  })

  const textTestId = testId
    ? testId
    : typeof children === "string"
    ? children
    : "NotSpecified"
  const textAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : typeof children === "string"
    ? children
    : undefined

  let textView: JSX.Element = (
    <TextNative
      numberOfLines={numberOfLines}
      ellipsizeMode='tail'
      maxFontSizeMultiplier={1.3}
      accessible={!!textAccessibilityLabel}
      accessibilityLabel={textAccessibilityLabel}
      testID={textTestId}
      style={[styles.text, style]}
      {...others}
    >
      {children}
    </TextNative>
  )

  if (skeleton) {
    textView = (
      <ContentLoader style={styles.skeleton}>
        {textView}
        {Platform.OS === "android" && (
          <View>
            <Rect rx='7' ry='7' width='100%' height='100%' />
          </View>
        )}
      </ContentLoader>
    )
  }
  return onClick ? (
    <TextNative onPress={onClick} style={styles.text}>
      {textView}
    </TextNative>
  ) : (
    textView
  )
}

Text.displayName = ComponentName.Text

export default Text
