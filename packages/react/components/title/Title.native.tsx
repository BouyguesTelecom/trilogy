import * as React from "react"
import { useContext } from "react"
import { Platform, StyleSheet, Text as TextNative, TouchableOpacity, View, } from "react-native"
import ContentLoader, { Rect } from "react-content-loader/native"
import { getTypographyBoldStyle, setTypographyAlign, setTypographyColor, TypographyBold } from "@/objects"
import { TitleProps } from "./TitleProps"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { ComponentName } from "@/components/enumsComponentsName"
import { StatesContext } from "@/context/providerStates"
import { TitleLevels } from "./TitleEnum"

/**
 * Title component
 * @param children {ReactNode} Title child
 * @param level {TitleLevels | TitleLevel | number} Title size : 1-3
 * @param inverted {Boolean} Title white color
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param skeleton {Boolean} Title Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param style {object} Additional styles
 * @param subtitle {boolean} Subtitle below title
 * @param overline {boolean} Overline above title
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
  const statesContext = useContext(StatesContext)
  const titlesLevels = () => {
    switch (level) {
      case TitleLevels.ONE:
        return 32
      case TitleLevels.TWO:
        return 28
      case TitleLevels.THREE:
        return 22
      case TitleLevels.FOUR:
        return 20
      case TitleLevels.FIVE:
        return 18
      case TitleLevels.SIX:
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
    if (level && [TitleLevels.ONE, TitleLevels.TWO].includes(level)) return getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_BOLD)
      return getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD)
  }

  const styles = StyleSheet.create({
    text: {
      fontFamily: getFontFamily(),
      fontSize: titlesLevels(),
      color:
        ((overline || subtitle) &&
          !level &&
          getColorStyle(TrilogyColor.MAIN)) ||
        (!skeleton &&
          setTypographyColor(typo, inverted || statesContext.inverted)) ||
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
      borderColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
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
    <TextNative
      maxFontSizeMultiplier={1.3}
      accessible={!!titleAccessibilityLabel}
      accessibilityLabel={titleAccessibilityLabel}
      testID={titleTestId}
      style={[styles.text, style]}
      {...others}
    >
      {children}
    </TextNative>
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
