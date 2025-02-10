import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { getTypographyBoldStyle, setTypographyAlign, setTypographyColor } from '@/objects/Typography'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useContext } from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { Platform, StyleSheet, Text as TextNative, View } from 'react-native'
import { TextLevels, TextLevelValues } from './TextEnum'
import { TextProps } from './TextProps'

/**
 * Text Native Component
 * @param children {string} Text child
 * @param level {TextLevels|number} Title size : 1-4
 * @param inverted {Boolean} Text white color
 * @param style {Object} Additional style
 * @param typo {string} Text typo
 * @param skeleton {Boolean} Text Skeleton
 * @param accessibilityLabel {string}
 * @param numberOfLines {number} Ellipsis after limit number of lines
 * @param others
 */
const Text = ({
  children,
  level,
  style,
  inverted,
  typo,
  skeleton,
  accessibilityLabel,
  numberOfLines = 0,
  ...others
}: TextProps): JSX.Element => {
  const statesContext = useContext(StatesContext)
  const textLevels = (level: TextLevels | TextLevelValues) => {
    return (
      (level && level == TextLevels.ONE && 16) ||
      (level && level == TextLevels.TWO && 14) ||
      (level && level == TextLevels.THREE && 12) ||
      (level && level == TextLevels.FOUR && 10) ||
      14
    )
  }

  const styles = StyleSheet.create({
    text: {
      fontFamily: getTypographyBoldStyle(typo),
      fontSize: textLevels(level as TextLevels | TextLevelValues),
      color: setTypographyColor(typo, inverted || statesContext.inverted, skeleton),
      textAlign: setTypographyAlign(typo),
      lineHeight: textLevels(level as TextLevels | TextLevelValues) * 1.2,
      textDecorationLine: 'none',
      alignSelf:
        (setTypographyAlign(typo) === 'left' && 'flex-start') ||
        (setTypographyAlign(typo) === 'center' && 'center') ||
        (setTypographyAlign(typo) === 'right' && 'flex-end') ||
        'flex-start',
    },
    skeleton: {
      minWidth: 10,
      alignSelf:
        (setTypographyAlign(typo) === 'left' && 'flex-start') ||
        (setTypographyAlign(typo) === 'center' && 'center') ||
        (setTypographyAlign(typo) === 'right' && 'flex-end') ||
        'flex-start',

      borderRadius:
        (level && level == TextLevels.ONE && 7) ||
        (level && level == TextLevels.TWO && 7) ||
        (level && level == TextLevels.THREE && 5) ||
        3,
      borderWidth: 0.1,
      borderColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      overflow: 'hidden',
      height: textLevels(level as TextLevels | TextLevelValues),
    },
  })
  const textAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : typeof children === 'string'
    ? children
    : undefined

  let textView: JSX.Element = (
    <TextNative
      numberOfLines={numberOfLines}
      ellipsizeMode='tail'
      maxFontSizeMultiplier={1.3}
      accessible={!!textAccessibilityLabel}
      accessibilityLabel={textAccessibilityLabel}
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
        {Platform.OS === 'android' && (
          <View>
            <Rect rx='7' ry='7' width='100%' height='100%' />
          </View>
        )}
      </ContentLoader>
    )
  }
  return textView
}

Text.displayName = ComponentName.Text

export default Text
