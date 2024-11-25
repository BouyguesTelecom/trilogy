import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { Platform, StyleSheet, Text as TextNative, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TextLevels, TextLevelValues } from '@/components/text/TextEnum'
import { TextProps } from '@/components/text/TextProps'
import { StatesContext } from '@/context/providerStates'
import { setTypographyAlign } from '@/objects/Typography/TypographyAlign'
import { getTypographyBoldStyle } from '@/objects/Typography/TypographyBold'
import { setTypographyColor } from '@/objects/Typography/TypographyColor'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

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
const Text = React.forwardRef(
  (
    {
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
    }: TextProps,
    ref: React.Ref<TextNative>,
  ): JSX.Element => {
    const statesContext = React.useContext(StatesContext)
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
        color:
          (!skeleton && setTypographyColor(typo, inverted || statesContext.inverted)) ||
          (link && getColorStyle(TrilogyColor.FONT)) ||
          'transparent',
        textAlign: setTypographyAlign(typo),
        lineHeight: textLevels(level as TextLevels | TextLevelValues) * 1.2,
        textDecorationLine: link ? 'underline' : 'none',
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

    const textTestId = testId ? testId : typeof children === 'string' ? children : 'NotSpecified'
    const textAccessibilityLabel = accessibilityLabel
      ? accessibilityLabel
      : typeof children === 'string'
      ? children
      : undefined

    let textView: JSX.Element = (
      <TextNative
        ref={ref}
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
          {Platform.OS === 'android' && (
            <View>
              <Rect rx='7' ry='7' width='100%' height='100%' />
            </View>
          )}
        </ContentLoader>
      )
    }
    return onClick ? (
      <TextNative onPress={onClick} style={styles.text} ref={ref}>
        {textView}
      </TextNative>
    ) : (
      textView
    )
  },
)

Text.displayName = ComponentName.Text
export default Text
